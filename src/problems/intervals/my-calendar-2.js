// https://leetcode.com/problems/my-calendar-ii/description/

class MyCalendarTwo {
    lines = {};
    book(start, end) {  // 0(n)
        this.lines[start] = (this.lines[start] ?? 0) + 1;
        this.lines[end] = (this.lines[end] ?? 0) - 1;
        // for every booking, see if there is a triple booking (linecount >= 3)
        let lineCount = 0;
        let res = true;
        for(const val of Object.values(this.lines)) {
            lineCount += val;
            if(lineCount >= 3) {
                res = false;
                // revert booking
                this.lines[start] = (this.lines[start] ?? 0) - 1;
                this.lines[end] = (this.lines[end] ?? 0) + 1;
                break;
            }
        }
        return res;
    }
}