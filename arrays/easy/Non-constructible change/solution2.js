function nonConstructibleChange(coins) {
	coins.sort((a,b) => a - b)
  // Write your code here.
	let currentChange = 0;
	let nonConstructibleChange = 1;
	
	for(let i = 0; i < coins.length; i++){
		if(coins[i] > currentChange + 1){
			return currentChange + 1;
			break;
		}else{
			currentChange += coins[i];
		}
	}
	
	return currentChange + 1;
	
}
