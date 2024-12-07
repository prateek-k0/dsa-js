// // https://leetcode.com/problems/extra-characters-in-a-string/description/

// o(n^3)
export function minExtraChars(str, dict) {
    const dictSet = new Set();
    for(const word of dict) {
        dictSet.add(word);
    }
    const dp = new Array(55).fill(-1);
    const memoize = (index) => {
        if(index === str.length) return 0;
        if(dp[index] !== -1) return dp[index];
        // skip curr char 
        const skip = 1 + memoize(index + 1);
        // then, see if there exists a substring in the dict from rane i...len
        let consider = Infinity;
        for(let j = index; j < str.length; j++) {
            const subStr = str.slice(index, j + 1);
            if(dictSet.has(subStr)) {
                consider = Math.min(consider, memoize(j + 1));  // if a substring is already present in dict, then skip characters to directly after the substring's end
            }
        }
        dp[index] = Math.min(skip, consider);
        return dp[index];
    }
    return memoize(0);
}