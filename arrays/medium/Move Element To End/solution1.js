function moveElementToEnd(array, toMove) {
  // Write your code here
	let result = []
	
	for(let i = 0; i < array.length; i++){
		if(array[i] === toMove){
			result.push(array[i]);
		}else{
			result.unshift(array[i]);
		}
	}
  
	return result;
}
