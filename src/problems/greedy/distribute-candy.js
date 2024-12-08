// https://leetcode.com/problems/candy

// slope method - 1 pass
// https://leetcode.com/problems/candy/solutions/2234434/c-o-n-time-o-1-space-full-explanation/
/*
    For each element, we have 3 conditions:
    1. its a plateau: ratings[i] === ratings[i-1]
    2. its a peak (ascending slope): ratings[i] > ratings[i-1] 
    3. its a valley (descending slope): ratings[i] < ratings[i-1]
    
    initialize number-of-peaks and number-of-valleys to 1
    if its a peak, then:
        - add 1 to number-of-peaks (it denotes the continuous chain of peaks, like [1,2,3...], strictly increasing)
        - add number-of-peaks to totalCandies,
        - move forward
    if its a valley, then:
        - add number-of-valleys to totalCandies
        - add 1 to number-of-valleys (denotes the continuous chain of valleys)
        - move forward
    if(number-of-valleys > number-of-peaks), add the difference to totalCandies, to ensure that the peak child gets 
    enough candies to satisfy the conditions.
*/
export function distributeCandy(ratings) {
    let totalCandies = ratings.length;   // min number of candy - 1 to each child
    let up = 0;  // Keeps track of the number of consecutive increasing ratings
    let down = 0;    // Keeps track of the number of consecutive decreasing ratings
    let i = 1;
    while(i < ratings.length) {
        if(ratings[i] === ratings[i-1]) {
            i++;
            continue;
        }
        // For increasing slope
        up = 0;
        while(i < ratings.length && ratings[i] > ratings[i-1]) {
            up++;
            totalCandies += up;
            i++;
        }
        //For decreasing slope
        down = 0;
        while(i < ratings.length && ratings[i] < ratings[i-1]){
            down++;
            totalCandies += down;
            i++;
        }

        totalCandies -= Math.min(up, down); //Keep only the higher peak
    }
    return totalCandies;
}

// 2 pass solution - if the ratings are strictly increasing, like [1,2,3,4,5,6], it becomes only 1 pass
// in this, for the first pass, we compare an element with its left neighbour
// for second pass, we compare element with its right element.
export function distributeCandy2Pass(ratings) {
    // base candies are 1
    const candies = new Array(ratings.length).fill(1);
    // we traverse 2 times - 1 from the left and 1 from the right
    // for left, if the current child has more rating than the left neighbour, we add 1 more candy to it
    for(let i = 1; i < ratings.length; i++) {
        if(ratings[i] > ratings[i-1]) {
            candies[i] = candies[i-1] + 1;
        }
    }
    // for right, if the current child has more candies than right neighbours, add 1 more to it
    for(let i = ratings.length - 2; i > -1; i--) {
        if(ratings[i] > ratings[i+1] && candies[i] <= candies[i+1]) {
            candies[i] = candies[i+1] + 1;
        }
    }
    return candies.reduce((a, c) => a + c);
}