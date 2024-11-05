// https://leetcode.com/discuss/study-guide/5119937/Prefix-Sum-Problems

import { countBadPairs } from "./bad-pairs";
import { continuousSubarraySum } from "./contiguous-subarray-sum-divisible-by-k";
import { countInterestingSubarrays } from "./count-interesting-subarrays";
import { countTriplets } from "./count-triplets";
import { countVowelStrings } from "./count-vowel-strings";
import { divisibilityArray } from "./divisibility-array";
import { longestSubarraySumK } from "./longest-subarray-having-sum-k";
import { matrixBlockSum } from "./matrix-block-sum";
import { minOperationsToReduceXToZero } from "./minimum-operations-to-reduce-to-0";
import { countNiceSubarrays } from "./nice-subarrays";
import { RangeSumQuery2D } from "./range-sum-query-2d";
import { subarraySumEqualsK } from "./subarray-sum-equals-k";
import { subarraySumsDivisibleByK } from "./subarray-sums-divisible-by-k";
import { trappedRainWater } from "./trapping-rain-water";

// console.log(trappedRainWater([4,2,0,3,2,5]));
// console.log(subarraySumEqualsK([1,2,3], 3));
// console.log(countVowelStrings(["aba","bcb","ece","aa","e"], [[0,2],[1,4],[1,1]]));
// console.log(longestSubarraySumK([10, 5, 2, 7, 1, 9], 15));
// console.log(minOperationsToReduceXToZero([1,1,4,2,3], 5));
// console.log(countNiceSubarrays([2,2,2,1,2,2,1,2,2,2], 2));
// console.log(countBadPairs([1,2,3,4,5]));
// console.log(subarraySumsDivisibleByK([4,5,0,-2,-3,1], 5));
// console.log(continuousSubarraySum([23,2,6,4,7, 6], 13));
// console.log(divisibilityArray('998244353', 3));
// console.log(countInterestingSubarrays([3,2,4], 2, 1));
// console.log(countTriplets([1,1,1,1,1]));
// const rsq2D = new RangeSumQuery2D([[3,0,1,4,2], [5,6,3,2,1], [1,2,0,1,5], [4,1,0,1,7], [1,0,3,0,5]]);
console.log(matrixBlockSum([[1,2,3],[4,5,6],[7,8,9]], 2));

/*
    let's generalize the characteristics of the problems that can be solved by two pinters and sliding window:

    1. If a wider scope of the sliding window is valid, the narrower scope of that wider scope is valid mush hold.
    2. If a narrower scope of the sliding window is invalid, the wider scope of that narrower scope is invalid mush hold.

    for other problems related to subarray, use prefix sums (or other operations)


    General template:
    1. Maintain a prefix_sum = 0
    2. Setup a unordered_map or sometime vector is also help if you know the range.
    3. A varaible to store answer = 0.
    4. Initialize this map[0] element.
        a) if the question is asking for count then m[0] = 1, why is this ? suppose in above example if prefix_sum - K = 0, that means entire subarray is an answer , so add m[0] to answer.
        b) if we need to find length then m[0] = -1 , if at ith index prefix_sum - K = 0, that means the i - j , here j is m[0] is -1, length is i + 1 (0 based indexing).
    5. Iterate the array and accumulate prefix_sum.
    6. Check if prefix_sum -K exists in map ? , if Yes add to answer.
    7. increment(count) or store index(length) of current prefix_sum like we do countMap[prefix_sum]++ or lenMap[prefix_sum] = i.

    for subarray sum modulo, ((prefix[j] - prefix[i]) = q.k),
    taking modulo on both sides, prefix[j] % k - prefix[i] % k = 0; prefix[j] % k === prefix[i] % k
    so, on each iteration, we look for prefix[i] % k in the map 


    For problems that ask even/odd occurence of something in subarray

    We utilize the property of XOR, that if we count by setting even some bit as the occurence 
    is even , that finaly result of the bit position is 0 otherwise 1.

    for matrixes, prefix sum can be caluclated as:
    prefix[r][c] = prefix[r-1][c] + prefix[r][c-1] - prefix[r-1][c-1] + mat[r-1][c-1];
    we subtract prefix[r-1][c-1], since its repeated in both prefix[r-1][c] and prefic[r][c-1]


*/
