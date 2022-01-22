function mergeSort(array){
	if(array.length == 0) return [];
	
	if(array.length == 1) return array;
	
	const middle = Math.floor(array.length/2);
	const left = array.slice(0, middle);
	const right = array.slice(middle);
	
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
	const array = [];
	while(left.length && right.length){
		if(left[0] < right[0]){
			array.push(left.shift());
		}else{
			array.push(right.shift());
		}
	}
	return array.concat(left.slice()).concat(right.slice());
}

function nonConstructibleChange(coins) {
	let min_amount = 0;
	let result = []
	result = mergeSort(coins);
	
	for(let i = 0; i < result.length; i++){
		if(result[i] <= min_amount + 1){
			min_amount += result[i];
		}else{
			return min_amount + 1;
			break;
		}
	}
	
	return min_amount + 1;
	
}
