function isPalindrome(string) {
  // Write your code here.
	let newword = string.split("").reverse().join("");
	
	if(newword === string) return true;
	
	return false;
}
