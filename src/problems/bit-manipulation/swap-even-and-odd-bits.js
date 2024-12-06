// to swap odd and even bits in an integer


/*  we can make 2 masks, shift even masked result to left and 
    odd masked result to right, and or (|) both results
    even mask : 0x55555555
    odd mask : 0xaaaaaaaa
*/

export function swapEvenOddBits(num) {
    const evenMask = 0x55555555;    // 0x denotes hex format
    const oddMask = 0xaaaaaaaa;
    const result = ((num & evenMask) << 1) | ((num & oddMask) >>> 1)
    return result;
}