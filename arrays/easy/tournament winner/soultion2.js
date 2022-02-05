
function competitionWinner(competitions, results){
    let winner = ""
    let scoreTable = {[""] : 0}

    for(let i = 0; i < results.length; i++){
        let currentWinner = "";
        
        if(results[i] == 0){
            currentWinner = competitions[i][1];
            insertWinner(currentWinner,scoreTable);
        }
        else if(results[i] == 1){
            currentWinner = competitions[i][0];
            insertWinner(currentWinner,scoreTable);
        }
        if(scoreTable[currentWinner] > scoreTable[winner]){
            winner = currentWinner;
        }
    }
    return winner;
}

function insertWinner(winner,scoretable){
    if(winner in scoretable){
        scoretable[winner] += 3;
    }else{
        scoretable[winner] = 0;
    }
}