var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(team){
  return (team.length >= 7?  true : false);
}
console.log(hasEnoughPlayers(team))