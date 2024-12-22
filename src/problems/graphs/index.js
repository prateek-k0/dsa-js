import { openTheLock } from "../binary-search/open-the-lock";
import { alienDict } from "./alien-dictionary";
import { cheapestFlightWithAtmostKStops } from "./cheapest-flights-with-atmost-k-stops";
import { checkIfPathExists } from "./check-if-path-exists";
import { courseScheduleTopo } from "./course-schedule";
import { disconnectPathByFlipppingOnce } from "./disconnect-path";
import { evaluateDivision } from "./evaluate-division";
import { islandsAndTreasure } from "./islands-and-tresure";
import { jumpGame4 } from "./jump-game-4";
import { longestIncreasingPathMatrix } from "./longest-increasing-path-in-matrix";
import { maxIslandArea } from "./max-island-area";
import { minCostToConnectPrims } from "./min-cost-to-connect-all-points";
import { minCostToMakeValidPath } from "./min-cost-to-make-valid-path";
import { minObstaclesToReachEnd } from "./min-obstacles-to-reach-end";
import { networkDelayTime } from "./network-delay-time";
import { findIslands } from "./number-of-islands";
import { pacificAtlanticWaterFlow } from "./pacific-atlantic-water-flow";
import { findItinerary } from "./reconstruct-itinerary";
import { rottenOranges } from "./rotten-oranges";
import { shortestBridge } from "./shortest-bridge";
import { snakesAndLadders } from "./snakes-and-ladders";
import { surroundedRegions } from "./surrounded-regions";
import { swimInRisingWater, swimInRisingWater2 } from "./swim-in-rising-water";
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
// console.log(minCostToConnectPrims([[3,12],[-2,5],[-4,1]]));
// console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2));
// console.log(cheapestFlightWithAtmostKStops(4, [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], 0, 3, 1))
// console.log(swimInRisingWater2([[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]))
// console.log(alienDict(["wrt","wrf","er","ett","rftt","te"]));
// console.log(longestIncreasingPathMatrix([[9,9,4],[6,6,8],[2,1,1]]));
// console.log(evaluateDivision([["x1","x2"],["x2","x3"],["x3","x4"],["x4","x5"]], 
//     [3.0,4.0,5.0,6.0],
//     [["x1","x5"],["x5","x2"],["x2","x4"],["x2","x2"],["x2","x9"],["x9","x9"]]
// ))
// console.log(snakesAndLadders([[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]))