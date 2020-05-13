// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames);
console.log(enemyNames.length);
var enemyHealth = 50;
var enemyAttack = 12;
var enemy1="Roborto";
var enemy2="amy Android";
var enemy3="Robo Trumble";

var playerMoney = 10;

var fight = function(){
    window.alert("Welcome to Robot Gladiators!")

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
if (promptFight === "fight" || promptFight ==="FIGHT"){
  enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName +" now has " +enemyHealth + " health remaining.");

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } 
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );
  //check players health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
} else if (promptFight ==="skip"||promptFight==="SKIP"){
  var confirmSkip=window.confirm("are you sure you'd like to quit?");

//if yes, leave fight
  if(confirmSkip){
    window.alert(playerName+" has chosen to skip the fight, Goodbye!");
    playerMoney=playerMoney - 2;
  }
  else{
    fight();
  }
} 
else {
  window.alert("You need to pick a valid option. Try again!");
}
};

// fight();