import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Component that highlights the matching text
 */
export const MatchingText = (props) => {
    const { truncateLength, text, defaultTextClassName, matchTextClassName, search, } = props;
    // 1: find index of search in text
    const matchIndex = search === "" ? -1 : text.toLowerCase().indexOf(search.toLowerCase());
    // 2: find stuff before that and after that
    const beforeText = text.slice(0, matchIndex);
    const afterText = text.slice(matchIndex + search.length);
    const matchText = text.slice(matchIndex, matchIndex + search.length);
    const totalLength = beforeText.length + search.length + afterText.length;
    const reduceCharactersAmount = truncateLength
        ? totalLength - truncateLength
        : 0;
    const beforeTextLengthPercentage = beforeText.length / (beforeText.length + afterText.length);
    const afterTextLengthPercentage = afterText.length / (beforeText.length + afterText.length);
    const reduceBeforeCharacters = Math.round(beforeTextLengthPercentage * reduceCharactersAmount);
    const reduceAfterCharacters = Math.round(afterTextLengthPercentage * reduceCharactersAmount);
    const truncatedBeforeText = truncateLength;
    reduceBeforeCharacters > beforeText.length && truncateLength
        ? beforeText.slice(0, beforeText.length - reduceBeforeCharacters - 2) + ".."
        : beforeText;
    const afterTextMaxLength = truncateLength
        ? truncateLength - beforeText.length - matchText.length
        : undefined;
    const truncatedAfterText = afterTextMaxLength && afterTextMaxLength < afterText.length
        ? afterText.slice(0, afterTextMaxLength - 2) + ".."
        : afterText;
    // 3: render before, match, and after
    return matchIndex === -1 ? (
    // with no match, truncate at truncateLength at the end
    _jsx("p", { title: text, className: defaultTextClassName, children: truncateLength && text.length > truncateLength
            ? text.substring(0, truncateLength - 2) + ".."
            : text })) : (
    /**
     * with a match, the total length needs to be `truncateLength`
     *
     * the `search` result should not be truncated
     *
     * `beforeText` should be truncated at the end to reduce to `truncateLength`
     * `afterText` should be truncated at the beginning to reduce to `truncateLength`
     *
     * it should be truncated as much as needed on both sides, but we must take into account at the length of the sides as well
     */
    _jsxs("p", { title: text, className: defaultTextClassName, children: [beforeText, _jsx("span", { className: matchTextClassName, children: matchText }), truncatedAfterText] }));
};
//# sourceMappingURL=MatchingText.js.map