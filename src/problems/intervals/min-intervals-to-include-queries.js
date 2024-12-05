// https://leetcode.com/problems/minimum-interval-to-include-each-queries/description/

import { MinPriorityQueue } from "datastructures-js";

/*
    Plot entry, exit and queries on the lines

    TODO: make faster
*/

function getSize([start, end]) {
    return end - start + 1;
} 

export function minIntervalToIncludeQuery(intervals, queries) {
    let res = new Array(queries.length).fill(-1);
    const lines = {};
    // plot lines with attribute that is able to differentiate if a line starts or ends
    for(const [start, end] of intervals) {
        lines[start] = (lines[start] ?? []).concat({ key: 'add', val: [start, end] }); // line starts
        lines[end] = (lines[end] ?? []).concat({ key: 'remove', val: [start, end] });    // line ends
    }
    // plot queries
    for(let i = 0; i < queries.length; i++) {
        lines[queries[i]] = (lines[queries[i]] ?? []).concat({ key: 'queries', val: i }); // store index so that we can store the results accordingly
    }
    console.log(lines);
    const sizes = [];   // to store the sizes
    // traverse all the lines
    for(const valueList of Object.values(lines)) {
        // all values stored in lines must be sorted as follows: add (entry of line), queries, remove (exit the line)
        valueList.sort((a, b) => a.key.localeCompare(b.key));
        for(const value of valueList) {
            if(value.key === 'add') {
                sizes.push(getSize(value.val));
            } else if(value.key === 'remove') {
                sizes.splice(sizes.indexOf(getSize(value.val)), 1);
            } else {
                if(sizes.length > 0) res[value.val] = Math.min(...sizes);
            }
        }
    }
    return res;
}



// faster version
var minInterval = function(intervals, queries) {
	//sort intervals and queries so we can process them in order
    intervals = intervals.sort((a,b) => a[0]-b[0])
	// careful here when sorting queries we must make a shallow copy so we dont sort the original array
    let sortedQueries = [...queries].sort((a,b) => a-b)
    let minInterval = {}
	// use min heap to keep track of the smallest interval
    let heap = new MinPriorityQueue({priority: (a) => a[1] - a[0] + 1})
	// pointer tracks our position in intervals,
  // since queries are sorted, we dont need to backtrack to previous intervals for each query, 
  // a single pointer is enougn
    let pointer = 0
	
    for (const query of sortedQueries) {
		// if we have already seen the query value before we know the minimum interval
		if (minInterval[query]) continue
		// advancing our pointer until we find a new interval that contains our query
        while (pointer < intervals.length && intervals[pointer][1] < query) {
            pointer++
        }
		// adding new intervals that arent in our heap that our query fits inside
        while (pointer < intervals.length && intervals[pointer][0] <= query) {
            heap.enqueue(intervals[pointer])
            pointer++
        }
		// removing the top interval until we run out of elements or we find an interval that our query fits inside
        while (heap.size() && heap.front().element[1] < query) {
            heap.dequeue()
        }
		// keep track of each query value 
        minInterval[query] = (heap.size())? heap.front().priority: -1   
    }
    let ans = []
	// since we sorted the queries earlier to get the proper order 
	//we must go back through our queries and look up their value in the stored hash
    for (let i = 0; i < queries.length; i++) {
        ans[i] = minInterval[queries[i]]
    }
    return ans
};