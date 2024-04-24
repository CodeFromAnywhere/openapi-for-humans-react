import qs from "qs";
import { useState } from "react";
/**
 * Variant to the original use url store that has an easier setup and allows for more complex datastructures
 *
 * Uses https://www.npmjs.com/package/qs
 *
 * Usage:
 *
 * ```ts
 * import { makeComplexUrlStore } from "use-url-store";
 * const useCustomUrlStore = makeComplexUrlStore<{a:string,b:{c:number}}>();
 * ```
 *
 * NB: the base type needs to be an object!
 */
export const makeComplexUrlStore = () => {
    const hookFactory = (queryKey) => {
        // const router = useRouter();
        const initialQueryString = typeof window === "undefined" ? "" : window.location.search.slice(1);
        const [queryString, setQueryString] = useState(initialQueryString);
        // // let queryString =
        // //   typeof window === "undefined" ? "" : window.location.search.slice(1);
        // useEffect(() => {
        //   const intervalId = setInterval(() => {
        //     setQueryString(
        //       typeof window === "undefined" ? "" : window.location.search.slice(1),
        //     );
        //   }, 500);
        //   return () => clearInterval(intervalId);
        // }, []);
        /**
         * NB: These options have quite some overlap but may not be 100%. Careful
         */
        const qsParseOptions = {
            allowDots: true,
        };
        const setter = async (newValue) => {
            const newState = { ...parsedQuery, [queryKey]: newValue };
            const newQueryString = qs.stringify(newState, qsParseOptions);
            if (typeof window === "undefined") {
                return false;
            }
            const pathname = window.location.pathname;
            setQueryString(newQueryString);
            window.history.replaceState({}, document.title, `${pathname}?${newQueryString}`);
            return true;
        };
        const parsedQuery = qs.parse(queryString, qsParseOptions);
        const value = parsedQuery[queryKey];
        return [value, setter, typeof window !== "undefined"];
    };
    return hookFactory;
};
//# sourceMappingURL=makeComplexUrlStore.js.map