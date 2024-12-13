// https://leetcode.com/problems/simplify-path/

export function simplifyUnixPath(path) {
    const st = [];
    const pathArr = path.split('/');
    for (const dir of pathArr) {
        if (dir === '' || dir === '.') continue;
        else if (dir === '..') st.pop();
        else st.push(dir);
    }
    return '/' + st.join('/');
}