/*
    median of 2 sorted arrays

    https://www.youtube.com/watch?v=q6IEA26hvXc&ab_channel=NeetCode
*/

export function medianOf2SortedArrays(a, b) {
    let arr1 = a;
    let arr2 = b;
    if(arr1.length > arr2.length) {
        [arr1, arr2] = [arr2, arr1];    // arr1 must have a smaller size, since we'll run bin search on it
    }
    const totalLength = arr1.length + arr2.length;
    const halfLength = Math.floor(totalLength / 2);
    let l = 0;
    let r = arr1.length - 1;
    let m1 = 0; let m2 = 0;
    while(true) {   // a soultion is guaranteed, on finding one, we can simply return it
        m1 = Math.floor((l + r) / 2);
        m2 = halfLength - (m1 + 1) - 1; // size of left partition in arr1 = m1+1 (since m1 is 0 indexed), 
        // therefore, m2 = halfLength - size of left partition in arr1 - 1 = halfLength - (m1 + 1) - 1
        // we also handle out of bound cases, -Infinity for <0 and Infinity for >arr.length
        const leftPart1 = m1 >= 0 ? arr1[m1] : -Infinity; // last element of left partition of arr1
        const rightPart1 = m1 < arr1.length - 1 ? arr1[m1 + 1] : Infinity; // first element of right partition of arr1
        const leftPart2 = m2 >= 0 ? arr2[m2] : -Infinity;  // last element of left partition of arr2
        const rightPart2 = m2 < arr2.length - 1 ? arr2[m2 + 1] : Infinity;    // first element of right partition of arr2

        if(leftPart1 <= rightPart2 && leftPart2 <= rightPart1) {    // successful condition
            if(totalLength % 2 !== 0) { // odd total length
                return Math.min(rightPart1, rightPart2);
            } else {    // return 
                return (Math.max(leftPart1, leftPart2) + Math.min(rightPart1, rightPart2)) / 2;
            }
        } else if(leftPart1 > rightPart2) {
            r = m1 - 1; // reduce size of arr1, go to its left partition
        } else {    // increase size of arr2, go to its right partition
            l = m1 + 1;
        }
    }
    return -1;
}