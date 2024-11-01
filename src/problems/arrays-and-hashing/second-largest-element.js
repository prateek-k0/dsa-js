// second largest element in array

// https://www.geeksforgeeks.org/find-second-largest-element-array/

export function secondLargestElement(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

