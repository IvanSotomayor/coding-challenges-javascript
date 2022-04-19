function generateDocument(characters, document) {
  // Write your code here.
	let charMap = {};
	
	for(let i = 0; i < characters.length; i++){
		if (characters[i] in charMap){
			charMap[characters[i]] += 1;
		}else{
			charMap[characters[i]] = 1;
		}
	}
	
	for(let i = 0; i < document.length; i++){
		if (document[i] in charMap){
			charMap[document[i]] -= 1;
		}else{
			return false;
			break;
		}
		if (charMap[document[i]] < 0){
			return false;
			break;
		}
	}
  return true;
}
