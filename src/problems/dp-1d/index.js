import { climbingStairs } from "./climbing-stairs";
import { coinChangeBottomUp, coinChangeTopDown } from "./coin-change";
import { countPalindromicSubstrings } from "./count-palindromic-substrings";
import { decodeWays } from "./decode-ways";
import { houseRobberDP } from "./house-robber";
import { houseRobberCircular } from "./house-robber-circular";
import { longestPalindromicSubstring } from "./longest-palindromic-substrings";
import { nthFibonacci } from "./nth-fibonacci-dp";

// console.log(nthFibonacci(8));
// console.log(climbingStairs(3));
// console.log(houseRobberDP([1,2,3,1]));
// console.log(houseRobberCircular([2,3,2]));
// console.log(longestPalindromicSubstring('cbbd'));
// console.log(countPalindromicSubstrings('aaa'));
// console.log(decodeWays("226"));
// console.log(coinChangeBottomUp([1,2,5], 11));
console.log(coinChangeTopDown([1,2,5], 11))