import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MatchingText } from "./MatchingText.js";
export const SearchResults = (props) => {
    const { paths, search, onClickItem } = props;
    const results = paths
        .filter((item) => {
        const isPathMatch = item.toLowerCase().includes(search.toLowerCase());
        return isPathMatch;
    })
        .slice(0, 100);
    return (_jsx("div", { children: results.map((item) => {
            const filename = item.path.split("/").pop();
            return (_jsx("a", { onClick: () => {
                    onClickItem?.(item.path);
                }, href: `/${item.path}`, children: _jsxs("div", { className: "px-2 hover:dark:!bg-gray-600", children: [_jsx(MatchingText, { truncateLength: 30, text: filename, search: search, defaultTextClassName: "", matchTextClassName: "text-blue-500" }), _jsx(MatchingText, { truncateLength: 30, text: item.path, search: search, defaultTextClassName: "text-xs", matchTextClassName: "text-blue-500" }), item.augmentedWordsThisPath?.map((augmentedWord) => {
                            return (_jsx(MatchingText, { truncateLength: 30, text: augmentedWord.word, search: search, defaultTextClassName: "text-xs", matchTextClassName: "text-blue-500" }));
                        })] }) }));
        }) }));
};
//# sourceMappingURL=PathSearchResults.js.map