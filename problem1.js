
function matchWinner(teamAGoals, teamBGoals) {
    if(typeof teamAGoals !== "number" || typeof teamBGoals !== "number"){
      return "Invalid"
    }
    if(teamAGoals > teamBGoals){
        return "Team A Won"
    } else if(teamBGoals > teamAGoals){
        return "Team B Won"
    } else {
        return "Draw"
    }
}


console.log('A:',matchWinner(2,1))
console.log('B:',matchWinner(2,3))
console.log('C:',matchWinner(2,2))
console.log('C:',matchWinner(0,0))
console.log('d:',matchWinner("3",2))
console.log('e:',matchWinner(true,"2"))
console.log('f:',matchWinner(null,"2"))
console.log('g:',matchWinner([],"2"))


