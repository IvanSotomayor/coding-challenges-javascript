function threeNumberSum(array, targetSum) {
	array.sort((a,b) => a - b);
	let result = [];
	
	for(let i = 0; i < array.length - 2; i++){
		let x = i;
		let y = i + 1;
		let z = array.length - 1;
		
		while(y < z){
			if(array[x] + array[y] + array[z] == targetSum){
				result.push([array[x], array[y], array[z]]);
				y++;
				z--;
			}
			else if(array[x] + array[y] + array[z] > targetSum){
				z--;
			}
			else if(array[x] + array[y] + array[z] < targetSum){
				y++;
			}
		}
	}
	
	return result;
	
}
