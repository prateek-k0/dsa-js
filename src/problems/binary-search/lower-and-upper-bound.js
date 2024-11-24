// lower bound (bisectLeft) and upper bound (bisectRight)

export function lowerBound(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let m = 0;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        if(arr[m] < target) l = m + 1;  // only if mid element is smaller than target, move right
        else r = m - 1; // else move left
    }
    return l;
}

export function upperBound(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let m = 0;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        if(arr[m] <= target) l = m + 1; // even if mid is equal to target, move right
        else r = m - 1; // else move left
    }
    return l;
}