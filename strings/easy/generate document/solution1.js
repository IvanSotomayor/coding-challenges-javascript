function generateDocument(characters, document) {
  // Write your code here.
	let charTable = {[""] : 0};
	
	for(let i = 0; i < characters.length; i++){
		let currentChar = characters[i];
		if(currentChar in charTable){
			charTable[currentChar] += 1;
		}else{
			charTable[currentChar] = 1;
		}
	}
	
	for(let j = 0; j < document.length; j++){
		let docuChar = document[j]
		if(docuChar in charTable && charTable[docuChar] > 0){
			charTable[docuChar] = charTable[docuChar] - 1; 
		}else{
			return false;
		}
	}
  return true;
}
