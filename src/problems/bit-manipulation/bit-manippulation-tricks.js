// get rightmost bit  (for ex, n = 10, bin(n) = 10011, right-most-bit = 1)
// n = 24, rightmost set bit = 8, bin(24) = 11000;
// (lowest set bit from right)
n & ~(n-1);

//unset rightmost bit:
n & (n-1);

//multiply n by 2:
n << 1; //leftshift by 1 bit

//divide n by 2 (floor division)
n >>> 1; //rightshift by 1 bit (>>> is zer-fill right shift)

//multiply n by kth power of 2: 2^k * n
n << k; //leftshift by k bits

//divide n by kth power of 2: n / 2^k
n >>> k; //rightshift by k bits

//nth power:
1 << n;

//to check if a number is a power of 2: 
// for n > 0: 
!(n & (n-1)); //if n & (n-1) is 0, then power of 2
//for n >= 0:
n > 0 ? (!(n & (n-1))) : 0; 

//position of leftmost setbit, most significant set bit
function getLeftmostBit(n)
{
    let m = 0;
    //for 0 indexed
    while (n > 1)      //for index starting from 1, use n >= 1
    {
        n = n >>> 1;
        m++;
    }
    return m;
}
// for value, use
1 << m; // or 1 << (m+1) for 1 indexed

// log2 for integers
function log2(n)
{
    let m = 0;
    //for 0 indexed
    while (n > 1)      //for index starting from 1, use n >= 1
    {
        n = n >>> 1;
        m++;
    }
    // ceil pow of 2 = 1 << m
    return m;
}

//if n = 2^k - 1, for any k, then
let total_set_bits_from_1_to_n = k * (1 << (k-1)); // k * 2^(k-1)

//set a bit at a particular position: 
function setBit(num, pos) {
  num |= (1 << pos);    // equivalent to num + (1 << pos)
  return num;
}

//unset a bit at a particular position:
function unsetBit(num, pos) {
  num &= ~(1 << pos);   // equivalent to num - (1 << pos)
  return num;
}

//toggle a bit at a particular position:
function toggleBit(num, pos) {
  num ^= (1 << pos);
  return num;
}

//checking if a bit is set at a particular pos:
function checkSetBit(num, pos) {
  return num & (1 << pos);
}

//inverting every bit / 1's complement: 
~num;

//2's complement: 1's complement + 1
~num + 1;

//clear all bits from LSB to ith bit
let mask = ~((1 << (i+1)) - 1);
num &= mask;

//clear all bits from MSB to ith bit
mask = (1 << i) - 1;
num &= mask;

// addition of numbers in binary representation:
while(bBit !== 0) {
    const binSum = aBit ^ bBit;   // sum of 2 numbers for binary
    const binCarry = aBit & bBit; // carry after sum
    aBit = binSum;
    bBit = binCarry << 1;   // shift the carry to left for later use
}
console.log(aBit);

//length of longest consecutive 1s in binary preresentation:
//multiply by 2 and see when it gets to 0 with & operation to the original.
let count = 0;
while(x != 0) {
  x = (x & (x << 1));
  count ++;
}





