var width = 10;
var height = 10;

var board = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			 [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
			 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			 [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
			 [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
			 [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
			 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

function printBoard(board) {
	for (var i = 0; i < height; i++){
		for (var j= 0; j < width; j++)
			document.write(board[i][j] + " ");
		document.write("</br>");
	}
};

function countAliveAdjacentCells(x,y){
	var count = 0;
	for (var i = x-1; i<= x + 1; i++ )
		for (var j = y-1; j<= y + 1; j++)
			if (i< 0 || j<0 || i>= height || j >= width || (i == x && j == y ))
				continue;
			else {
				count = count + board[i][j];
			}
			return count;
};

