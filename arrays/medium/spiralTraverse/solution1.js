function spiralTraverse(array) {
  // Write your code here.
	//Have the result array where everything is gonna be stored
	let result = [];
	let startingColumn = 0
	let startingRow = 0
	let endingColumn = array[startingRow].length - 1;
	let endingRow = array.length - 1;
	
	while(startingColumn <= endingColumn && startingRow <= endingRow){
		
		//first movement: going from left ro right:
		for(let i = startingColumn; i <= endingColumn; i++){
			result.push(array[startingRow][i]);
		}

		//second movement: going down:
		for(let i = startingRow + 1; i <= endingRow; i++){
			result.push(array[i][endingColumn]);
		}

		//third movement: going from right to left:
		for(let i = endingColumn - 1; i >= startingColumn; i--){
			if (startingRow == endingRow) break;
			result.push(array[endingRow][i]);
		}

		// fourth movement: going up
		for(let i = endingRow - 1; i > startingRow; i--){
			if(startingColumn == endingColumn) break;
			result.push(array[i][startingColumn]);
		}
		
		//move inwards
		startingColumn++;
		endingColumn--;
		startingRow++;
		endingRow--;
	}
	
	return result
	
}
