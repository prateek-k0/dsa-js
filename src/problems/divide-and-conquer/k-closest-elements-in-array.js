// https://leetcode.com/problems/find-k-closest-elements/


export function findClosestElements(arr, k, x) {
    const absDiff = arr.map((d) => ([Math.abs(x - d), d]));
    const kClosest = quickSelect(absDiff, k - 1);
    return kClosest.map((d) => d[1]).sort((a, b) => a - b);
};

function quickSelect(arr, k) {
    let l = 0;
    let r = arr.length - 1;
    while(l < r) {
        const pivot = partition(arr, l, r);
        if(pivot === k) return arr.slice(0, k + 1);
        else if(pivot < k) l = pivot + 1;
        else r = pivot - 1;
    }
    return arr.slice(0, l + 1);
}

function partition(arr, l, r) {
    let pivot = r;
    let i = l;
    for(let j = l; j <= r; j++) {
        if(arr[j][0] < arr[pivot][0] || (arr[j][0] === arr[pivot][0] && arr[j][1] < arr[pivot][1])) {  // ascending
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
    return i;
};