function firstNonRepeatingCharacter(string) {
  // Write your code here.
	let charTable = {[""]: 0}
	let nonRepeatedIndex = -1
	
	for(let i = 0; i < string.length; i++){
		let currentChar = string[i];
		if(currentChar in charTable){
			charTable[currentChar] += 1
		}else{
			charTable[currentChar] = 1
		}
	}
	
	for(let i = 0; i < string.length; i++){
		let selectedChar = string[i]
		if(charTable[selectedChar] == 1){
			return i;
		}
	}
	
	console.log(charTable)
  return nonRepeatedIndex;
}
