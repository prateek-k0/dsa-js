// closest element to the given number in the array (array is sorted)
// https://www.geeksforgeeks.org/java-program-to-find-closest-number-in-array/

/*
    Inn every iteration, check if target is smaller than mid, if it is, check if its in between mid-1 and mid, if yes, return the closest of mid-1 and mid
    if not, move left
    else move right
*/

export function findClosestElementInArray(arr, x) {
    arr.sort((a, b) => a - b);  // ascending sort
    let l = 0;
    let r = arr.length - 1;
    let m = 0;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        if(arr[m] === x) return arr[m];
        if(arr[m] > x) {    // look in the left segment, since all elements in the right segment will have larger distance
            // check if x lies between arr[m-1] & arr[m]
            if(m > 0 && arr[m-1] <= x) { // if it does, the answer is closest of arr[m-1], arr[m]
                return closest(arr[m-1], arr[m], x);
            }
            // else, move left
            r = m - 1;
        } else {
            // check if x lies between arr[m] & arr[m+1]
            if(m < arr.length - 1 && arr[m+1] >= x) { // if it does, the answer is closest of arr[m], arr[m+1]
                return closest(arr[m], arr[m+1], x);
            }
            // else, move right
            l = m + 1;
        }
    }
    return arr[m];
}

// finds closest of 2 given elements from the target
function closest(a, b, target) {
    const aDiff = Math.abs(a - target);
    const bDiff = Math.abs(b - target);
    return aDiff <= bDiff ? a : b;
}