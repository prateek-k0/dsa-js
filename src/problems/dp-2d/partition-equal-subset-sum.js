// https://leetcode.com/problems/partition-equal-subset-sum/description/

// similar to choosing elements with target sum

export function partitionEqualSubsetSums(nums) {
    const totalSum = nums.reduce((a, c) => a + c, 0);
    // if the total sum is odd, we can partition it
    if (totalSum % 2 !== 0) return false;
    // target sum for each subset is totalSum / 2
    const target = Math.floor(totalSum / 2);
    // dp[i][j] stores whether or not it is possible to reach the target Sum, 
    // at i index and j current Sum
    const dp = new Array(nums.length).fill(0).map((r) => new Array(target + 1).fill(-1));

    // choose elements and check if they can form valid sum
    const chooseElements = (currentSum = 0, currentIndex = 0) => {
        if (currentSum > target) return false;   // sum exceeded, false
        if (currentSum === target) return true;  // sum reached, true
        if (dp[currentIndex][currentSum] !== -1) return dp[currentIndex][currentSum];    // already memoized
        // iterate over the res of the elements
        for (let i = currentIndex + 1; i < nums.length; i++) {
            // try including and excluding each element, and see if its possible in either element
            // and if any one is found true, exit
            const includedSum = chooseElements(currentSum + nums[i], i);
            if(includedSum === true) {
                dp[currentIndex][currentSum] = true;
                return true;
            }
            // OPTIMIZATION:  only check excluded sum if includedSum is false
            const excludedSum = chooseElements(currentSum, i);
            if (excludedSum) {
                dp[currentIndex][currentSum] = true;
                return true;
            }
        }
        // else, return false
        dp[currentIndex][currentSum] = false;
        return false;
    }
    // since an element can only be in one of the 2 subsets, we can choose not to include the first element
    return chooseElements(0, 0);   // we dont include the first element, 
    // chooseElements(0, nums[0]); // if we choose to include first element;

}