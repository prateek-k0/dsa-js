/*
    Daily Temperatures - Next Greater Element
    https://leetcode.com/problems/daily-temperatures/description/
*/

export function dailyTemperatures(temperatures) {
    const nextGreater = new Array(temperatures.length).fill(0);
    const st = [];
    // to calculate next greater, traverse from the end
    for(let i = temperatures.length - 1; i >= 0; i--) {
        // pop until temperature at top of stack is greater then current one
        while(st.length > 0 && temperatures[st[st.length - 1]] <= temperatures[i]) {
            st.pop();
        }
        // temp at top of stack is greater than current
        nextGreater[i] = st[st.length - 1] ?? -1;
        // push current temp for other elements
        st.push(i);
    }
    // days to greater temperature
    const results = [];
    for(let i = 0; i < temperatures.length; i++) {
        if(nextGreater[i] === -1) results.push(0);
        else results.push(nextGreater[i] - i);
    }
    return results;
}