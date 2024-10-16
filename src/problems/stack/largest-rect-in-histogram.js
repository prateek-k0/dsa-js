/*
    Largest rectangle in histogram

    https://leetcode.com/problems/largest-rectangle-in-histogram/description/

    we can store next smaller and previous smaller for each histogram.
    for edge cases, we store n (for next smaller) and -1 (for previous smaller);
    so, rect width = (nextSmaller[i] - previosSmaller[i] + 1) - 2;
    we use -2 to make sure the next and previous smaller rects are not used.
    rect height = height of current hist,
    keep track of max rectHeight * rectWidth;
*/

export function largestRectInHistogram(heights) {
    const nextSmaller = new Array(heights.length).fill(heights.length);
    const prevSmaller = new Array(heights.length).fill(-1);
    let st = [];
    // fill previous smaller 
    for(let i = 0; i < heights.length; i++) {
        while(st.length > 0 && heights[st[st.length - 1]] >= heights[i]) {
            st.pop();
        }
        if(st.length > 0) prevSmaller[i] = st[st.length - 1];
        st.push(i);
    }
    // fill next smaller
    st = [];
    for(let i = heights.length - 1; i >= 0; i--) {
        while(st.length > 0 && heights[st[st.length - 1]] >= heights[i]) {
            st.pop();
        }
        if(st.length > 0) nextSmaller[i] = st[st.length - 1];
        st.push(i);
    }
    let maxRect = 0;
    for(let i = 0; i < heights.length; i++) {
        const rectWidth = (nextSmaller[i] - prevSmaller[i] + 1) - 2;
        const rectArea = rectWidth * heights[i];
        maxRect = Math.max(maxRect, rectArea);
    }
    return maxRect;
}