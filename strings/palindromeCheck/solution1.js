function isPalindrome(string) {
  // Write your code here.
	let stack = [];
	let newword = ""
	
	for(let i = 0; i < string.length; i++){
		stack.push(string[i]);
	}
	
	for(let j = 0; j < string.length; j++){
		newword += stack.pop();
	}
	
	console.log(string)
	console.log(newword)
	
	if(string == newword) return true;
	
	return false;
}
