// closest element to the given number in the array (array is sorted)
// array only contains unique elements in sorted order.

export function findClosestElementInArray(arr, x) {
    let l = 0;
    let r = arr.length - 1;
    let m = 0;
    let res = 0;
    // find closest element x
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        if(arr[m] === x) {  // if equal to x, break
            res = m;
            break;
        } else if(arr[m] < x) { // if arr[m] < x, check if its next element is closer, if yes, then move right, else save res and move left
            if((m < arr.length - 1) && (Math.abs(arr[m] - x) > Math.abs(arr[m+1] - x))) {
                l = m + 1;
            } else {
                res = m;
                r = m - 1;
            }
        } else {  // if arr[m] > x, check if its previous element is closer, if yes, then move left, else save res and moce right
            if((m > 0) && (Math.abs(arr[m] - x) > Math.abs(arr[m-1] - x))) {
                r = m - 1;
            } else {
                res = m;
                l = m + 1;
            }
        }
    }
    return arr[res];
}

// for repeating elements, use linear search