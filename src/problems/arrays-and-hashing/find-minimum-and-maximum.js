//  Find the mimimum and maximum in an array, with the leats number of comparisons

/*
    For this, we use the tournament method.

    In tournament method, the total number of comparisons required for an operation is (n-1), with n being the number of elements.
    So, for finding both min and max, we need 2 * (n-1) = 2n - 2 total comparisons.

    However, for the first pair, we need to only make 1 comparison, 
    ie, if we have the max, the min is automatically the other number, 
    for the first pair, the number of comparisons is (n / 2);

    hence actual number of comparisons = (2n - 2) - (n / 2) = (3n / 2) - 2.
*/

export function findMinMax(arr) {
    return divideTournament(arr, 0, arr.length - 1);
}

function divideTournament(arr, l, r) {  // divide and conquer
    if(r > l) {    
        if((r - l) === 1) {    // for first pair
            // since at this point, both pairs are [arr[r], arr[r]] and [arr[l], arr[l]], we can make only one comparison
            if(arr[l] < arr[r]) { // just one comparison
                return [arr[l], arr[r]];
            } else {
                return [arr[r], arr[l]];
            }
        } else {    // for other pairs
            let m = Math.floor((r + l) / 2)
            const [leftMin, leftMax] = divideTournament(arr, l, m);
            const [rightMin, rightMax] = divideTournament(arr, m + 1, r);
            return [Math.min(leftMin, rightMin), Math.max(leftMax, rightMax)];
        }
        
    } else {    // l === r
        return [arr[l], arr[l]];
    }
}