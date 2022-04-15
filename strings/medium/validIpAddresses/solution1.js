function validIPAddresses(string) {
	
	let resultantIps = [];
	
	//get all the combinations possible in the first octet
	for(let i = 0; i < Math.min(string.length, 4); i++){
		let currentIpAddress = ["","","",""];
		let firstOctet = string.slice(0,i);
		currentIpAddress[0] = firstOctet;
		//validate if the first octet accomplish the IpV4 restrictions
		if(!isValidOctet(currentIpAddress[0])) continue;
		
		//first octet is valid so we move forward the second octet
		for(let j = i + 1; j < i + Math.min(string.length - i, 4); j++){
			let secondOctet = string.slice(i,j);
			currentIpAddress[1] = secondOctet;
			//validate if the second octet accomplish the IpV4 restrictions
			if(!isValidOctet(currentIpAddress[1])) continue;
			
			//first octet is also valid so we move forward the third and fourth octets
			for(let k = j + 1; k < j + Math.min(string.length - j, 4); k++){
				let thirdOctet = string.slice(j,k);
				let fourthOctet = string.slice(k);
				currentIpAddress[2] = thirdOctet;
				currentIpAddress[3] = fourthOctet;
				
				if(isValidOctet(currentIpAddress[2]) && isValidOctet(currentIpAddress[3])){
					resultantIps.push(currentIpAddress.join('.'));
				}
			}
		}	
	}
	return resultantIps;
}

function isValidOctet(string){
	let stringAsInt = parseInt(string);
	if(stringAsInt > 255) return false;
	return string.length === stringAsInt.toString().length;
}
