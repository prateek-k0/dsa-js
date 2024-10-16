/*
    Heap Sort
    https://www.geeksforgeeks.org/heap-sort/

    Functions: Heapify: to build a heap, O(log(n))
    Heap Sort: continuously calls heapify to sort the array, o(nlog(n));
*/

function heapify(arr, size, root) {   // max heap, heapify down
    let largest = root; // let largest be initiliazed as the current root 

    let l = 2 * root + 1; // left child
    let r = 2 * root + 2; // right child

    // check if left child is greater
    if(l < size && arr[l] > arr[largest]) {
        largest = l;
    }

    // check if right child is greater so far
    if(r < size && arr[r] > arr[largest]) {
        largest = r;
    }

    // check if the current largest is changed, if so, heapify the subtree
    if(root !== largest) {
        // swap the root with largest element
        [arr[root], arr[largest]] = [arr[largest], arr[root]];
        // heapify the changed subtree, which is rooted at largest
        heapify(arr, largest);
    }
}

export function heapSort(arr) {
    let n = arr.length;

    // build heap, iterate from mid of the elements to the first element and call heapify 
    for(let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // one by one extract the elements from the top and call heapify again
    for(let i = n - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0); // reduce the size passed to heapify
    }

    return arr;
}
