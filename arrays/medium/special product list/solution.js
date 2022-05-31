let prefixArray = [];
        let suffixArray = [];
        let result = [];
        let prefix = 1;
        let suffix = 1;

        for(let i = 0; i < nums.length; i++){
            let toInsert = prefix * nums[i];
            prefixArray.push(toInsert);
            prefix = prefixArray[i];
        }

        for(let i = nums.length - 1; i >= 0; i--){
            let cont = 0;
            let toInsert = suffix * nums[i];
            suffixArray.unshift(toInsert);
            suffix = suffixArray[cont];
            cont++;
        }

        for(let i = 0; i < nums.length; i++){
            let current = 0;

            if(i - 1 < 0){
                current = suffixArray[i + 1];
            }
            else if(i + 1 > nums.length - 1){
                current = prefixArray[i - 1];
            }else{
                current = prefixArray[i - 1] * suffixArray[i + 1];
            }
            result.push(current);
        }

        return result;

    }
