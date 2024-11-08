import { courseScheduleTopo } from "./course-schedule";
import { islandsAndTreasure } from "./islands-and-tresure";
import { maxIslandArea } from "./max-island-area";
import { findIslands } from "./number-of-islands";
import { pacificAtlanticWaterFlow } from "./pacific-atlantic-water-flow";
import { findItinerary } from "./reconstruct-itinerary";
import { rottenOranges } from "./rotten-oranges";
import { surroundedRegions } from "./surrounded-regions";
import { wordLadder } from "./word-ladder";

// console.log(findItinerary([["EZE","AXA"],["TIA","ANU"],["ANU","JFK"],["JFK","ANU"],["ANU","EZE"],["TIA","ANU"],["AXA","TIA"],["TIA","JFK"],["ANU","TIA"],["JFK","TIA"]]))
// console.log(findIslands([
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"]
// ]))
// console.log(maxIslandArea([
//     [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], 
//     [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], 
//     [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], 
//     [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], 
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], 
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], 
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
// ]))
// console.log(islandsAndTreasure([
//     [2147483647, -1, 0, 2147483647],
//     [2147483647, 2147483647, 2147483647, -1],
//     [2147483647, -1, 2147483647, -1],
//     [0, -1, 2147483647, 2147483647]
// ]))
// console.log(rottenOranges([[0,2]]));
// console.log(pacificAtlanticWaterFlow([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]));
// console.log(surroundedRegions([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]))
// console.log(courseScheduleTopo(2, [[1,0]]));
console.log(wordLadder('hit', 'cog', ["hot","dot","dog","lot","log","cog"]));