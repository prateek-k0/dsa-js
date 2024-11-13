/*
    find frequency of an element in a sorted array
    we can use bisectLeft (lowerBound) and bisectRight (upperBound) functions
    Freq of an element = upperbound - lowerbound
*/

export function countFreq(nums, target) {
    function lowerBound(arr, x) {
        let l = 0;
        let r = arr.length - 1;
        let m = 0;
        while (l <= r) {
            m = Math.floor((l + r) / 2);
            if (arr[m] < x) l = m + 1;
            else r = m - 1;
        }
        return l;
    }

    function upperBound(arr, x) {
        let l = 0;
        let r = arr.length - 1;
        let m = 0;
        while (l <= r) {
            m = Math.floor((l + r) / 2);
            if (arr[m] <= x) l = m + 1;
            else r = m - 1;
        }
        return l;
    }
    return (upperBound(nums, target) - lowerBound(nums, target));
}


