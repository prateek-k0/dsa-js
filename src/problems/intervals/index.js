import { insertInterval } from "./insert-interval";
import { MeetingRoom2_LS } from "./meeting-rooms-2-line-sweep";
import { canAttendMeetings } from "./meeting-schedule";

// console.log(canAttendMeetings([[0,5],[5,10],[10,15],[15,20],[20,25],[25,30],[30,35],[35,40],[40,45],[45,50]]));
// console.log(insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))
const mls = new MeetingRoom2_LS();
console.log(mls.minMeetingRooms([[0,40],[5,10],[15,20]]))