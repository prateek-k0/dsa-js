/*
    Power set

    Given a string s, find all possible subsequences of the string (lexicographic order)
    Input = "abc"
    Output = "a" "ab" "abc" "ac" "b" "bc" "c"

    For this, we can use bit-masking:
    let n = size of the string.
    We know that for any set of size n, the power set has 2^n - 1 elements in it
    so for each i = 1 to 2^n - 1 :  // we start from 1 since we dont want empty string
        let currString = ""
        for(j = 0 to n) 
            create a mask with jth bit set: 1 << j
            if(i & mask), add jth char of s into currString
        add currString to res
*/

export function stringPowerSet(s) {
    const n = s.length;
    const res = [];
    // size of power set = 2^n - 1;
    for(let i = 1; i <= (2 ** n) - 1; i++) {    // start from 1, since we dont want an empty subset
        let currString = "";
        for(let j = 0; j < n; j++) {
            // create mask with jth bit set
            const mask = (1 << j); 
            if(i & mask) {  // if jth bit is set in i, add jth char from s in currString
                currString += s[j];
            } 
        }
        res.push(currString);
    }
    // sort lexicograhpically
    res.sort((a, b) => a.localeCompare(b));
    return res;
}