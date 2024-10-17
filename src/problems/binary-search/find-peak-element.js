/*
    Find Peak element in the array

    https://leetcode.com/problems/find-peak-element/description/
    
    there could be multiple peaks

    the idea is to first check if arr[m] is a peak, that is, greater than its neighbours
    if (m == 0 || m > 0 && arr[m-1] < arr[m]) && (m === arr.length - 1 || m < arr.length - 1 && arr[m+1] < arr[m])

    else, go to that half with bigger neighbour;
    if arr[m+1] > arr[m], go to the right half (l = m + 1);
    else go to the left half;
*/


export function findPeakElement(arr) {
    let l = 0;
    let r = arr.length - 1;
    let m = 0;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        if((m === 0 || (arr[m - 1] < arr[m])) && (m === arr.length - 1 || (arr[m + 1] < arr[m]))) {
            // if its a peak
            console.log(arr[m], m);
            return m;
        }
        if(m > 0 && arr[m - 1] > arr[m]) r = m-1;
        else l = m+1;
    }
    return -1;
}