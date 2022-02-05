function runLengthEncoding(string) {
  
	let charType = string[0];
	let cont = 0;
	let encoded_string = "";
	if(charType) cont = 1;
	
	for(let i = 1; i < string.length; i++){
		let charCurrent = string[i];
		
		if(charCurrent == charType && cont < 9){
			cont += 1;
		}else{
			encoded_string += cont.toString();
			encoded_string += charType;
			charType = charCurrent;
			cont = 1;
		}
	}
	
	encoded_string += cont.toString();
  encoded_string += charType;
	
	console.log(encoded_string)
	return encoded_string;
	
}
