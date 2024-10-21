// https://leetcode.com/problems/task-scheduler/description/

// process: 
/*
  1. get the task with most frequency -> maxFreq Tasks
  2. each "section" of tasks set shall be performed with size as n+1, since there must be atleast n units of time
  between 2 tasks of same char (size of sections  = n+1)
  3. there would be a total of maxFreq of these sections, however, the last section will be smaller than the other section
  since there may be tasks with less frequency than max and they would be completed before last section 
  (number of large sections = maxFreq - 1)
  4. for the last section, only the tasks with frequency == maxFrequency would be available, add them to the end
  (add tasks with frequency == maxFreq at the end);
*/

var leastInterval = function(tasks, n) {
    let map = {};
    let maxFreq = -1;
    for(let i of tasks) {
        map[i] = (map[i] || 0) + 1;
        maxFreq = Math.max(maxFreq, map[i]);
    }
    let countWithMaxFreq = 0;
    for (let key in map) {
        if (map[key] === maxFreq) 
            countWithMaxFreq++;
    }
    return Math.max(tasks.length, ((maxFreq - 1) * (n + 1)) + countWithMaxFreq);
  };