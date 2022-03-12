function longestPeak(array) {
  // Write your code here.
	let longestPeak = 0
	
	for(let i = 1; i < array.length - 1; i++){
		let current = array[i]
		let past = array[i - 1]
		let future = array[i + 1]
		
		if(current > past && current > future){
			let contLength = 1
			let inPeakCurrent = current
			let inPeakPast = past
			let inPeakFuture = future
			let pointerPast = i
			let pointerFuture = i
			
			while(inPeakCurrent > inPeakPast && pointerPast >= 0){
				contLength++;
				inPeakCurrent = array[pointerPast - 1]
				inPeakPast = array[pointerPast - 2]
				pointerPast--;
			}
			
			inPeakCurrent = current
			inPeakPast = past
			inPeakFuture = future
			pointerPast = i
			pointerFuture = i
			
			while(inPeakCurrent > inPeakFuture && pointerFuture < array.length){
				contLength++;
				inPeakCurrent = array[pointerFuture + 1]
				inPeakFuture = array[pointerFuture + 2]
				pointerFuture++;
			}
			
			if(contLength > longestPeak){
				longestPeak = contLength
			}
		}
	}
	
	return longestPeak
	
}
