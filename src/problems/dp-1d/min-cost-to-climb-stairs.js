// https://leetcode.com/problems/min-cost-climbing-stairs/description/

/*
    We need to reach beyond end (n+1), so we need to initialize the array at size n+1
    cost to reach 0th and 1st steps is 0
    cost to reach ith step = Min(cost to reach i-1 th step + cost(i-1), cost to reach i-2 th step + cost(i-2))
*/

export function minCostToClimb(cost) {
    const minCostArr = new Array(cost.length + 1).fill(0);
    minCostArr[0] = 0;
    minCostArr[1] = 0;
    for(let i = 2; i < cost.length + 1; i++) {
        minCostArr[i] = Math.min(cost[i-2] + minCostArr[i-2], cost[i-1] + minCostArr[i-1]);
    }
    return minCostArr[cost.length];
}