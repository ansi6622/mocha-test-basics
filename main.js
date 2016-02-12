module.exports = {

  tug_o_war: function(teams){
  var team1 = teams[0];
  var team2 = teams[1];
  var a1 = team1[0];
  var a2 = team2[4];
  var tug = team1[0] + team1[1] + team1[2] + team1[3] + team1[4];
  var war = team2[0] + team2[1] + team2[2] + team2[3] + team2[4];
  if(isNaN(a1) || isNaN(a2)){
    return "u been a cheatin'";
    }
  else if (tug > war){
    return "Team 1 wins!";
    }
  else if(tug < war){
    return "Team 2 wins!";
    }
  else if(tug === war){
    if(a1 === a2){
      return "It's a tie!";
      }
    else if(a1 > a2){
      return "Team 1 wins!";
      }
    else if(a1 < a2){
      return "Team 2 wins!";
      }
  }
  else {
  return "It's a cluster****!";
  }
}

}
