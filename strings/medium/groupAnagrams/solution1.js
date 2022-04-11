function sortWord(givenString) {
	return givenString.split('').sort().join('');
}

function hasApeared (string, hashmap){
    if (string in hashmap){
        return true;
    }else{
        hashmap[string] = 1;
        return false;
    }
}

function groupAnagrams(words) {
    let result = [];
    let hashMap = {}
    for(let i = 0; i < words.length; i++){
        let currentAnagrams = []
        let currentWord = words[i];
        let orderedWord = sortWord(currentWord);
        let currentWordRepeated = hasApeared(currentWord, hashMap);

        if (currentWordRepeated == false){
            currentAnagrams.push(currentWord);
        }
			
        for(let j = i + 1; j < words.length; j++){
            let nextWord = words[j];
            let nextOrdered = sortWord(nextWord);
					
            if(orderedWord == nextOrdered){
                let nextWordRepeated = hasApeared(nextWord, hashMap);
                if (nextWordRepeated == false){
                    currentAnagrams.push(nextWord);
                }
            }
        }
        if(currentAnagrams.length >= 1){
            result.push(currentAnagrams);
        }
    }
    return result;
}
