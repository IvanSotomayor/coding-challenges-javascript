
function insertWinner(team, points, hashmap){
	if(!(team in hashmap)) hashmap[team] = 0;
	hashmap[team] += points;
}

function tournamentWinner(competitions, results) {
	let currentBestTeam = "";
	const scores = { [currentBestTeam] : 0 };
	
	for(let i = 0; i < results.length; i++){
		let roundWinner = "";
		
		if(results[i] == 0){
			roundWinner = competitions[i][1];
			insertWinner(roundWinner, 3, scores);
		}

		else if(results[i] == 1){
			roundWinner = competitions[i][0];
			insertWinner(roundWinner, 3, scores);
		}
		
		if(scores[roundWinner] > scores[currentBestTeam]){
			currentBestTeam = roundWinner;
		}
		
	}
	
  return currentBestTeam;
}