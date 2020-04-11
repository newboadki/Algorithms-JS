


/* 
Shortest path betwween two positions in a matrix, where each position has a weight.
Allowed moves from a given position: {RIGHT, DOWN, DIAGONAL}
Dynamic programming.
 */
function shortestPath(m, oRow, oCol, gRow, gCol, memo) {
    const len = m.length;
    const width = m[0].length;    

    const key = "" + oRow + "-" + oCol;
    if (memo[key] != null) {
        return memo[key];
    }

    if (!((oRow < len) && (oCol < width))) {        
        return 9999;
    }

    const currentCost = m[oRow][oCol];

    // BASE CASE:    
    if ((oRow == gRow) && (oCol == gCol)) {
        return currentCost;
    }

    // RECURSIVE STEP    
    const result = currentCost + Math.min(shortestPath(m, oRow, oCol + 1, gRow, gCol, memo),
                                          shortestPath(m, oRow + 1, oCol, gRow, gCol, memo),
                                          shortestPath(m, oRow + 1, oCol + 1, gRow, gCol, memo));
    memo[key] = result;
    return result;
}


// Tests 
var memory = {};
var matrix = [[1,2,3],
              [4,8,2],
              [1,5,3]];
const r = shortestPath(matrix, 0, 0, 2, 2, memory);
const msj = (r == 8) ? "PASSED" : "FAILED";
console.log("Test 1: " + msj);


memory2 = {};
matrix = [[1,2],
          [4,8]];
const r2 = shortestPath(matrix, 0, 0, 1, 1, memory2);
const msj2 = (r2 == 9) ? "PASSED" : "FAILED";
console.log("Test 12 " + msj2);
