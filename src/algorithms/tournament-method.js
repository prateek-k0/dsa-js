/*
 Tournament method of comparisons

 In this method, elements are compared pair by pair, and then their results are compared later,

 just like the divide function in merge sort, or the build function in segment tree

 for example, to find the max of an array, with tournament method we first create pairs of comparison, 
 and then their results form a pair, ans so on

 it forms a tree sutructure

        8
    /       \
    4       8
  /   \   /   \
  2   4   6   8
 /\  /\  /\  /\
 1 2 3 4 5 6 7 8

 */