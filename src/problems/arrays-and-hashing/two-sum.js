// two sum: 

/*
given an array, find 2 elements that make a target sum, those 2 elements must not be at the same index

for this, we use a hashmap, to first store all the elements and their indices, and then once again traverse the array to see if the complement (target - the current element) exists in the array, and at different index

assume the array does not comtain any duplicates / or has exactly one solution
*/

export function twoSum(arr = [], target = 0) {
    const hashIndex = {};   // obj to store the index of each element
    arr.forEach((element, index) => {
        hashIndex[element] = index; // can only work if there are no duplicates
    });
    // search for the complement:
    let res = -1;
    arr.forEach((element, index) => {
        const complement = target - element;
        if(hashIndex[complement] !== undefined && hashIndex[complement] !== index) {
            res = [element, complement];
        }
    });
    return res;
}

// another solution: two sum with 2 pointers: sort the array and use left and right pointers to see if the target sum exists

export function twoSum2Pointers(arr = [], target = 0) {
    // ascending sort the array
    arr.sort((a, b) => a - b);
    // use 2 pointers to tarverse the array
    let l = 0;
    let r = arr.length - 1;
    let res = -1;
    while(l < r) {  // it has to be l < r, and not l <= r, since only unique indices are allowed
        // equal condition
        if(arr[l] + arr[r] === target) {
            res = [arr[l], arr[r]];
            break;
        } else if(arr[l] + arr[r] < target) {
            // smaller than target condition
            l++;
        } else {
            // larger than target condition
            r--;
        }
    }
    return res;
}