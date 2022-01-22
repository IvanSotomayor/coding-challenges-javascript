function sortedSquaredArray(array) {
  // Write your code here.
	let i = 0;
	let j = array.length - 1;
	let result = []
	
	for(let z = 0; z < array.length; z++){
		if(Math.abs(array[i]) > Math.abs(array[j])){
			result.unshift(Math.pow(Math.abs(array[i]),2));
			i++;
		}else{
			result.unshift(Math.pow(Math.abs(array[j]),2));
			j--;
		}
	}
  return result;
}
