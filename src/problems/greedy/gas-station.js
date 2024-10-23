// https://leetcode.com/problems/gas-station/description/

export function gasStation(gas, cost) {
    const totalGas = gas.reduce((a, b) => a + b, 0);
    const totalCost = cost.reduce((a, b) => a + b, 0);
    if(totalGas < totalCost) return -1; // if the gas is less than the total cost, its impossible
  
    // since there exists only 1 solution (unique), we just have to find the first station
    // that has the gas to reach the next station
    let start = 0;
    let netGas = 0;
    for(let i = 0; i < gas.length; i++) {
        netGas += (gas[i] - cost[i]);
        if(netGas < 0) { // cant reach other station
            netGas = 0; // reset
            start = (i + 1) % gas.length; // start from next
        }
    }
    return start;
};