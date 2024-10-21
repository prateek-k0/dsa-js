export function findKthLargest (nums, k) {
    const res =  quickSelect(nums, k);
    console.log(nums);
    return res;
};

function partition(arr, l, r) {
    const pivot = r;   // last element; // for ascending sort, pick l
    let i = l;
    for(let j = l; j <= r; j++) {
        if(arr[j] > arr[pivot]) { // descending
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
    return i;
}

function quickSelect(arr, k) {
    if(k >= arr.length) return -1;  // base error condition
    let l = 0;
    let r = arr.length - 1;
    while(l < r) {
        const pivot = partition(arr, l, r);
        if(k === pivot) {   // if k === pivot, we've got the kth element
            return arr[pivot];
        } else if(k < pivot) {  // if k < pivot, decrearse r, like bin search
            r = pivot - 1;
        } else {    // if k > pivot, increase l, like bin search
            l = pivot + 1;
        }
    }
    return arr[l];  // encountered when l === r
}