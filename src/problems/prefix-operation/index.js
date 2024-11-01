import { subarraySumEqualsK } from "./subarray-sum-equals-k";
import { trappedRainWater } from "./trapping-rain-water";

// console.log(trappedRainWater([4,2,0,3,2,5]));
console.log(subarraySumEqualsK([1,2,3], 3));

/*
    let's generalize the characteristics of the problems that can be solved by two pinters and sliding window:

    1. If a wider scope of the sliding window is valid, the narrower scope of that wider scope is valid mush hold.
    2. If a narrower scope of the sliding window is invalid, the wider scope of that narrower scope is invalid mush hold.

    for other problems related to subarray, use prefix sums


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

*/
