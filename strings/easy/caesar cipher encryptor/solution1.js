function caesarCipherEncryptor(string, key) {
	let encrypted_string = "";
	
	for(let i = 0; i < string.length; i++){
		let newKey = key % 26;
		let char_unicode = string[i].charCodeAt();
		let newUnicode = newKey + char_unicode;
		let newLetter = "";
		
		if(newUnicode <= 122){
			newLetter = String.fromCharCode(newUnicode);
			encrypted_string += newLetter;
		}else{
			let reducedUnicode = 96 + (newUnicode % 122);
			newLetter = String.fromCharCode(reducedUnicode);
			encrypted_string += newLetter;
		}
	}
	
	return encrypted_string;

}
