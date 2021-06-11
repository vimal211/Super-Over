let score = [0,1,2,3,4,5,6];
var turn;

//team1 details
var team1 = {
    name:"CSK",
    score:0,
    runs:[]
}

//team2 details
var team2 = {
    name:"MI",
    score:0,
    runs:[]
}

window.onload = () =>{
    //decide whose turn
    selectTurn();
    //update button text
    updateButtonText();
    //update score
    updateScore();
    //update team name
    updateName();
}

let selectTurn = () =>{
     turn = Math.round(Math.random())+1;
}

let updateButtonText = () =>{
    var button =  document.getElementById("button");
   
    var result = document.getElementById('final-result');
    result.style.visibility = "";
    if(team1.runs.length==6 && team2.runs.length==6){
        button.remove();
        result.textContent = team1.score === team2.score ? `Match Draw` : `${team1.score>team2.score ? team1.name : team2.name} Wins`;
    }
    else{
        turn = team1.runs.length===6 ? 2 :team2.runs.length===6 ? 1 : turn;
        button.textContent = `${turn===1 ? team1.name: team2.name} Batting`;
    }
}

let updateScore = () =>{
    document.getElementById("team-1-score").textContent = team1.score;
    document.getElementById("team-2-score").textContent = team2.score;
    updateRuns();
}

let updateName = () =>{
    document.getElementById("team-1-name").textContent = team1.name;
    document.getElementById("team-2-name").textContent = team2.name;
}

var ButtonClick = () =>{
    var runs = score[Math.floor(Math.random()*score.length)];
    runs = runs=== 5? 'W':runs;
    if(turn===1){
        team1.runs.push(runs);
        team1.score=calculateScore(team1.runs);
    }
    else{
        team2.runs.push(runs);
        team2.score=calculateScore(team2.runs); 
    }
    updateButtonText();
    updateScore();
}

var calculateScore = (runs) =>{
    return runs.map(num =>{
        return num == 'W'? 0 : num; 
    }).reduce((total,num)=> total+num);
}

var updateRuns = () =>{
    var teamOne = document.getElementById("team-1-round-score").children;
    var teamTwo = document.getElementById("team-2-round-score").children;
    team1.runs.forEach((runs,index)=>{
        teamOne[index].textContent = runs;
    })
    team2.runs.forEach((runs,index)=>{
        teamTwo[index].textContent = runs;
    })
}

