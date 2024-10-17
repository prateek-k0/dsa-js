/*
    Square root of a number
    bin search on state space (1...n/2), since sqrt(n) <= n/2;
*/

export function sqrt(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    let l = 1;
    let r = Math.floor(n / 2);
    let m = 1;
    let res = 1;
    while(l <= r) {
        m = Math.floor((l + r) / 2);
        if(m * m <= n) {
            res = m;
            l = m+1;
        } else {
            r = m-1;
        }
    }
    return res;
}

