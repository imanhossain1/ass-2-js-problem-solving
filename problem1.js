// function matchWinner(teamAGoals, teamBGoals) {
//      console.log('team a:', teamAGoals, 'Team b:1', teamBGoals);

//   console.log(typeof teamAGoals, typeof teamBGoals);

//    if(typeof teamAGoals == "number" && teamBGoals == "number"){
//    console.log('jod team a:', teamAGoals, 'Team b:', teamBGoals);

//       if(teamAGoals > teamBGoals){
//         return "Team A Won"
//     }else if(teamBGoals > teamAGoals){
//        return "Team B Won"
//     } else if(teamAGoals === teamBGoals){
//         return "Draw"
//     }
//   }

//    else{
//     return "Invalid"
//    }

// }

//  console.log(matchWinner(1,5));

// function matchWinner(teamAGoals, teamBGoals) {
//      console.log('team a:', teamAGoals, 'Team b:', teamBGoals);

//   console.log(typeof teamAGoals, typeof teamBGoals);

//       console.log("TEAM A",typeof teamAGoals == "number");
//       console.log("TEAM B",typeof teamBGoals == "number");

//    if(typeof teamAGoals !== "number" && typeof teamBGoals !== "number"){
//    console.log('jod team a:', teamAGoals, 'Team b:', teamBGoals);
//      return "Invalid"
//   } else{
//       if(teamAGoals > teamBGoals){
//         return "Team A Won"
//     }else if(teamBGoals > teamAGoals){
//        return "Team B Won"
//     } else if(teamAGoals === teamBGoals){
//         return "Draw"
//     }
//   }
// }

//  console.log('FINAL RESULT: ', matchWinner(3,null));

function matchWinner(teamAGoals, teamBGoals) {
    console.log("team a:", teamAGoals, "Team b:", teamBGoals);
    console.log(typeof teamAGoals, typeof teamBGoals);
    console.log("TEAM A", typeof teamAGoals == "number");
    console.log("TEAM B", typeof teamBGoals == "number");

    if (typeof teamAGoals <= 0 !== "number" && typeof teamBGoals < 0 !== "number") {
        console.log("jod team a:", teamAGoals, "Team b:", teamBGoals);
        return "Invalid";
    }

    if (teamAGoals > teamBGoals) {
        return "Team A Won";
    } else if (teamBGoals > teamAGoals) {
        return "Team B Won";
    } else if (teamAGoals === teamBGoals) {
        return "Draw";
    }
}

console.log("FINAL RESULT: ", matchWinner(3, 0));
