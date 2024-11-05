// Count Triplets That Can Form Two Arrays of Equal XOR

/*
    we need to find a subarray, that can be partitioned such that the xor(first half) === xor(second half)

    suppose, the subarray is a, let 0 <= i <= j < k
    we need to partition such that XOR(a[i...j-1]) = XOR(a[j...k]);
    
    BUT
    if(XOR(a[i...j-1]) === XOR(a[j...k])), then XOR(a[i...k]) = 0
    so, we need to count the number of subarrays with count >= 2 and XOR as 0

    in each hash, save 2 things: hash[xor] = [count, indexSum]
    indexSum: is the sum of all "index" whose prefix XOR equals "xor", ie, xor(arr[0...index])
    count: means how many such "index" has prefix XOR being "xor".

    Why "indexSum"? 
    Suppose index "a, b, c" all has the same prefix xor. 
    Current index is "i", then the result is: (i-a-1)+(i-b-1)+(i-c-1) == i*3-(a+b+c)-3. 
    we are subtracting 1 since the array is 0 indexed.
    We can't save "i" into prefix table, we can only save "a+b+c" and "cnt=3", 
    so that when "i" comes, we can find result in O(1) time using: i*3-(a+b+c)-3,
    which can be written as i * count - ((a+1) + (b+1) + (c+1)), 
    and we get i * count - indexSum
*/

export function countTriplets(nums) {
    const xorHash = {};
    // for 0 xor
    xorHash[0] = [1, 0];
    let prefixXor = 0;
    let tripletCount = 0;
    for(let i = 0; i < nums.length; i++) {
        prefixXor = prefixXor ^ nums[i];
        const [count, indexSum] = xorHash[prefixXor] ?? [0, 0];
        tripletCount += (i * count - indexSum); // refer the above idea
        xorHash[prefixXor] = [count+1, indexSum + (i+1)]
    }
    return tripletCount;
} 