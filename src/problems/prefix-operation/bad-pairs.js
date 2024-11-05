// https://leetcode.com/problems/count-number-of-bad-pairs/description/

/*
    total number of pairs in array of size n: n * (n - 1) / 2;
    and, we have to find pairs such that j > i && (j - i !== nums[j] - nums[i])

    good pair => j - i = nums[j] - nums[i];
    nums[i] - i = nums[j] - j;
    
    for bad pairs, we have to remove pairs from total pairs that satisfies (nums[i] - i = nums[j] - j)
    for this, we can store (nums[i] - i) in a hashmap, so that for each iteration with another i, if we get (nums[j] - j), then we decrease the pairs from the total pairs
*/

export function countBadPairs(nums) {
    let n = nums.length;
    let ans = Math.floor((n * (n - 1)) / 2);
    const hash = {};
    for(let i = 0; i < n; i++) {
        const diff = nums[i] - i;
        if(hash[diff] !== undefined) {
            ans -= hash[diff];
        }
        hash[diff] = (hash[diff] ?? 0) + 1;
    }
    return ans;
}