function smallestDifference(arrayOne, arrayTwo) {
	//Sorting input arrays
	arrayOne.sort((a,b) => a - b)
	arrayTwo.sort((a,b) => a - b)
	//initial pointers
	let i = 0
	let j = 0
	//variables to used
	let currentMin = Infinity
	let smallestMin = Infinity
	let smallestPair = [];
	
	while(i < arrayOne.length && j < arrayTwo.length){
		let num1 = arrayOne[i]
		let num2 = arrayTwo[j]
		
		if(num1 < num2){
			currentMin = num2 - num1
			i++
		}
		else if(num2 < num1){
			currentMin = num1 - num2
			j++
		}else{
			return [num1, num2]
		}
		
		if(smallestMin > currentMin){
			smallestMin = currentMin;
			smallestPair = [num1, num2];
		}
	}
	return smallestPair
}
