import { Keys } from "from-anywhere";
import { O } from "from-anywhere";
import qs, { IParseOptions, IStringifyOptions } from "qs";
import { useEffect, useState } from "react";

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
export const makeComplexUrlStore = <T extends O>(): (<K extends Keys<T>>(
  queryKey: K,
) => [T[K], (newValue: T[K] | undefined) => Promise<boolean>, boolean]) => {
  const hookFactory = <K extends Keys<T>>(
    queryKey: K,
  ): [T[K], (newValue: T[K] | undefined) => Promise<boolean>, boolean] => {
    // const router = useRouter();

    const initialQueryString =
      typeof window === "undefined" ? "" : window.location.search.slice(1);

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
    const qsParseOptions: IParseOptions & IStringifyOptions = {
      allowDots: true,
    };

    const setter = async (newValue: T[K] | undefined) => {
      const newState = { ...parsedQuery, [queryKey]: newValue };
      const newQueryString = qs.stringify(newState, qsParseOptions);
      const pathname =
        typeof window === "undefined" ? "/" : window.location.pathname;

      setQueryString(newQueryString);

      window.history.replaceState(
        {},
        document.title,
        `${pathname}?${newQueryString}`,
      );

      return true;
    };

    const parsedQuery = qs.parse(queryString, qsParseOptions) as T;
    const value = parsedQuery[queryKey];

    return [value, setter, typeof window !== "undefined"];
  };

  return hookFactory;
};
