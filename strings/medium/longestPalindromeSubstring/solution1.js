function longestPalindromicSubstring(string) {
	let longestPalindrome = "";
	let oddPalindrome = "";
	let evenPalindrome = "";
	
	if(string.length > 1){
		for(let i = 0; i < string.length; i++){
			oddPalindrome = string[i];
			evenPalindrome = string[i];

			//in case the palindrome is odd
			if(string[i - 1] == string[i + 1]){
				oddPalindrome = ""
				let firstPtr = i - 1;
				let secondPtr = i + 1;
				while(string[firstPtr] == string[secondPtr] && firstPtr >= 0 && secondPtr < string.length){
					firstPtr--;
					secondPtr++;
				}
				for(let i = firstPtr + 1; i < secondPtr; i++){
					oddPalindrome += string[i];
				}
			}

			//in case the palindrome is even
			if(string[i] == string[i - 1]){
				evenPalindrome = ""
				let firstPtr = i - 1;
				let secondPtr = i;
				while(string[firstPtr] == string[secondPtr] &&
							firstPtr >= 0 && secondPtr < string.length){
					firstPtr--;
					secondPtr++;
				}
				for(let i = firstPtr + 1; i < secondPtr; i++){
					evenPalindrome += string[i];
				}
			}
			if(evenPalindrome.length > longestPalindrome.length &&
				 evenPalindrome.length > oddPalindrome.length){
				longestPalindrome = evenPalindrome;
			}
			else if(oddPalindrome.length > longestPalindrome.length &&
							oddPalindrome.length > evenPalindrome.length){
				longestPalindrome = oddPalindrome;
			}
		}
		return longestPalindrome;
	}else{
		return string
	}
}
