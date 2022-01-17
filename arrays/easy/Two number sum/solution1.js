function mergeSort(array){
	if(array.length <= 1) return array
	
	const half = Math.floor(array.length / 2);
	const left = array.slice(0, half);
	const right = array.slice(half);
	
	return merge(mergeSort(left),mergeSort(right))
	
}

function merge(left, right){
	const temporalArray = [];
	
	while(left.length && right.length){
		if(left[0] < right[0]){
			temporalArray.push(left.shift());
		}else{
			temporalArray.push(right.shift());
		}
	}
	return temporalArray.concat(left.slice()).concat(right.slice());
}


function twoNumberSum(array, targetSum) {
  // Write your code here.
	let array2 = mergeSort(array)
	let i = 0; 
	let j = array2.length - 1;
	let sum = 0;
	let result = [];
	
	while(i < j){
		sum = array2[i] + array2[j]
		
		if(sum < targetSum) i++
		if(sum > targetSum) j--
		if(sum == targetSum){
			result.push(array2[i])
			result.push(array2[j])
			break
		}
	}
	return result
}
