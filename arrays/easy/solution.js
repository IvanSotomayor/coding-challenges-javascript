function isValidSubsequence(array, sequence) {
	let i = 0;
	let j = 0;
	
	while(j < array.length && i < sequence.length){
		if(sequence[i] == array[j]){
			i++;
		}
		j++;
	}
	
	if(i == sequence.length) return true;
	
	return false;
}
