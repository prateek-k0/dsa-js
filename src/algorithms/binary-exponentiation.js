// https://cp-algorithms.com/algebra/binary-exp.html

/*
    Binary exponentiation
    Binary exponentiation (also known as exponentiation by squaring) is a trick which allows to calculate  a^n  using only  O(log n) multiplications (instead of  O(n) multiplications required by the naive approach).

    Algorithm
    Raising  a  to the power of  n is expressed naively as multiplication by  a  done  n - 1  times:  a^n = a . a . ... . a . However, this approach is not practical for large  a  or  n .

    For example, it is really expensive to calculate a^(b+c) => (a^b).(a^c), or a^(2b) => (a^b)^2;

    The idea of binary exponentiation is, that we split the work using the binary representation of the exponent.

    Let's write  n  in base 2, for example:
    3^13 => 3^(1+4+8) => (3^1).(3^4).(3^8);

    since n has exactly Math.ceil(log2(n)) digits in base 2, we need o(log2(n)) multiplications, if we know the powers a^1, a^2, a^4, a^8 .... So, we only need to find a fast way to compute 2^n powers of a.

    Luckily this is very easy, since an element in the sequence is just the square of the previous element.

    3^1 = 3;
    3^2 = (3^1)^2;
    3^4 = (3^2)^2;
    3^8 = (3^4)^2;
    
    The final time complexity is o(logn), we have to compute logn powers of a, and we have to do atmost logn multiplications to get the final answers.

    General Formula for binary exponentiation
    a^n = 1, if n === 0
    a^n = (a^(n/2))^2, if n is even.
    a^n = ((a^((n - 1) / 2))^2) * a, if n is odd
*/

// implementaion: recursive
function binPowRecursive(a, n) {
    if (n === 0) {   // 0 exponent, answer is 1
        return 1;
    }
    let res = binPowRecursive(a, Math.floor(n / 2));
    if (n % 2 === 1) {   // odd
        return res * res * a;
    } else {
        return res * res;
    }
}

// implementation - iterative
function binPowIterative(a, n) {
    if(n < 0) {
        a = 1/a;    // reciprocal
        n = -n; // convert to positive
    };
    let res = 1;
    if (n === 0) return 1;
    while (n > 0) {
        if (n % 2 === 1) {   // odd
            res = res * a;
        }
        a = a * a;  // square base
        n = Math.floor(n / 2);  // halve the exponent
    }
    return res;
}

// Applications

/*
    Effective computation of large exponents modulo a number
    Compute (x^n) % m, were x, n <= 10^9

    We can use the property of modulo: (a*b) % m = ((a % m) * (b % m)) % m;
*/

function binPowMod(a, n, m) {
    a = a % m;
    let res = 1;
    while (n > 0) {
        if (n % 2 === 1) {
            res = (res * a) % m;
        }
        a = (a * a) % m;
        n = Math.floor(n / 2);
    }
    return res;
}

/*
    Effective computation of fibonacci numbers
    With the help of matrix form: 
    https://cp-algorithms.com/algebra/fibonacci-numbers.html#matrix-form
*/

/*
    Applying an operation k times.
    For and operation that needs to be applied k times, we can use binary exponentiation
    so instead of o(n.k) complexity, we get o(n.logk)
*/

function applyPermutation(seq, perm) {
    const res = new Array(seq.length);
    for (let i = 0; i < seq.length; i++) {
        res[i] = seq[perm[i]]   // random permutation operation
    }
    return res;
}

function applyOperationKTimes(seq, perm, k) {
    let res = [...seq];
    while (k > 0) {
        if (k % 2 === 1) {
            res = applyPermutation(res, perm);
        }
        perm = applyPermutation(perm, perm);
        k = Math.floor(k / 2);
    }
    return res;
}

/*
    Variation of binary exponentiation: multiplying 2 numbers modulo m

    Problem: multiply 2 numbers (a and b) modulo m. a and b can fit as 32 bit integers, but their product cannot. The idea is to compute (a*b) % m, effeciently, without overflowing or using bigInt

    we can generalize multiplication as following:
    a * b = 0, if a === 0
    a * b = (a / 2) * 2 * b, if a is even
    a * b = 2 * ((a - 1) / 2) * b + b, if a is odd
*/

function mulBinExpo(a, b) {
    let res = 0;
    if (a === 0) return 0;
    while (a > 0) {
        if (a % 2 === 1) {
            res = res + b;  // for multiplication, add to result, for power, multiply
        }
        // double b, halve a
        b = b * 2;
        a = Math.floor(a / 2);
    }
    return res;
}