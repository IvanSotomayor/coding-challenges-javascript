function sortedSquaredArray(array) {
  // Write your code here
	let head = 0;
	let tail = array.length - 1;
	
	let result = [];
	
	let start = 0;
	let final = 0;
	
	for(let i = 0; i < array.length; i++){
		start = Math.abs(array[head]);
		final = Math.abs(array[tail]);
		
		if(final > start){
			result.unshift(Math.pow(final,2));
			tail--;
		}
		else{
			result.unshift(Math.pow(start,2));
			head++;
		}
	
	}
	return result;
}
