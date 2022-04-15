function isValidSubsequence(array, sequence) {
	let sequencePointer = 0;
	for(let i = 0; i < array.length; i++){
		if(array[i] == sequence[sequencePointer]){
			sequencePointer++;
		}
	}
	return sequencePointer == sequence.length;
}
