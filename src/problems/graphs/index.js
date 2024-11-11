import { openTheLock } from "../binary-search/open-the-lock";
import { checkIfPathExists } from "./check-if-path-exists";
import { courseScheduleTopo } from "./course-schedule";
import { disconnectPathByFlipppingOnce } from "./disconnect-path";
import { islandsAndTreasure } from "./islands-and-tresure";
import { jumpGame4 } from "./jump-game-4";
import { maxIslandArea } from "./max-island-area";
import { minCostToConnectPrims } from "./min-cost-to-connect-all-points";
import { minCostToMakeValidPath } from "./min-cost-to-make-valid-path";
import { minObstaclesToReachEnd } from "./min-obstacles-to-reach-end";
import { findIslands } from "./number-of-islands";
import { pacificAtlanticWaterFlow } from "./pacific-atlantic-water-flow";
import { findItinerary } from "./reconstruct-itinerary";
import { rottenOranges } from "./rotten-oranges";
import { shortestBridge } from "./shortest-bridge";
import { surroundedRegions } from "./surrounded-regions";
import { wordLadder } from "./word-ladder";
import { wordLadderBiBFS } from "./word-ladder-bi-bfs";

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
// console.log(wordLadder('hit', 'cog', ["hot","dot","dog","lot","log","cog"]));
// console.log(checkIfPathExists(3, [[0,1],[1,2],[2,0]], 0, 2))
// console.log(shortestBridge([[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]))
// console.log(minCostToMakeValidPath([[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]));
// console.log(disconnectPathByFlipppingOnce([[1,1,1],[1,0,1],[1,1,1]]));
// console.log(wordLadderBiBFS('hit', 'cog', ["hot","dot","dog","lot","log","cog"]));
// console.log(minObstaclesToReachEnd([[0,1,1],[1,1,0],[1,1,0]]));
// console.log(jumpGame4([7,6,9,6,9,6,9,7]));
// console.log(openTheLock(["8887","8889","8878","8898","8788","8988","7888","9888"], '8888'));
console.log(minCostToConnectPrims([[3,12],[-2,5],[-4,1]]));