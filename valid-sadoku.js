/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(arr) {
    var usedNums = []
    for(var i = 0; i < arr.length; i++) { 
        if (arr[i] !== ".") {
            if (usedNums.includes(arr[i])) { 
                return true

            };
            usedNums.push(arr[i]);
        }
    }
    return false;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var columnAsRows = [[],[],[],[],[],[],[],[],[]]
    var boxAsRows =    [[],[],[],[],[],[],[],[],[]]
    var testArr = [[],[],[],[],[],[],[],[],[]]
    for(var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            columnAsRows[i][j] = (board[j][i])
            console.log(`${i}:${j} - ${j % 3}`)
            testArr[i][j] = board[i][j % 3]
        }
        // [0][0]
        // [0][1]
        // [0][2]
        // [1][0]
        // [1][1]
        // [1][2]
        // [2][0]
        // [2][1]
        // [2][2]
    }
    console.log(testArr)
    for(var i = 0; i < board.length; i++) {
        if (containsDuplicate(board[i])) return false
        if (containsDuplicate(columnAsRows[i])) return false
    }
    return true
};

board = 
[["0","0","0","1","1","1","2","2","2"]
,["0","0","0","1","1","1","2","2","2"]
,["0","0","0","1","1","1","2","2","2"]
,["3","3","3","4","4","4","5","5","5"]
,["3","3","3","4","4","4","5","5","5"]
,["3","3","3","4","4","4","5","5","5"]
,["6","6","6","7","7","7","8","8","8"]
,["6","6","6","7","7","7","8","8","8"]
,["6","6","6","7","7","7","8","8","8"]]


// [["00","01","02","03","04","05","06","07","08"]
// ,["09","10","11","12","13","14","15","16","17"] 
// ,["18","19","20","21","22","23","24","25","26"]
// ,["27","28","29","30","31","32","33","34","35"]
// ,["36","37","38","39","40","41","42","43","44"]
// ,["45","46","47","48","49","50","51","52","53"]
// ,["54","55","56","57","58","59","60","61","62"]
// ,["63","64","65","66","67","68","69","70","71"]
// ,["72","73","74","75","76","77","78","79","80"]]

// [["5","3",".","2","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board))