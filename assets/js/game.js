// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

var enemyHealth = 50;
var enemyAttack = 12;

var playerMoney = 10;

// console.log(enemyNames);
// console.log(enemyNames.length);

// for(var i = 0; i < enemyNames.length; i++) {
//   console.log(enemyNames[i]);
//   console.log(i);
//   console.log(enemyNames[i] + " is at " + i + " index");
// }

var fight = function(enemyName){
  while(enemyHealth>0 && playerHealth>0){
    

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
 
      if (promptFight ==="skip"||promptFight==="SKIP"){
        var confirmSkip=window.confirm("are you sure you'd like to quit?");

      //if yes, leave fight
      if(confirmSkip){
       window.alert(playerName+" has chosen to skip the fight. Goodbye!");
        playerMoney=playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
      }
        if (promptFight === "fight" || promptFight ==="FIGHT"){
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName +" now has " +enemyHealth + " health remaining.");

        // check enemy's health
          if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney=playerMoney +20;
            break;
          } 
          else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
          }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

      //check players health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      } 
      else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
    }
      else {
        window.alert("You need to pick a valid option. Try again!");
      }
    }
  }
var startGame = function(){  
  playerHealth=100;
  playerAttack=10;
  playerMoney=10;

  for(var i=0; i < enemyNames.length; i++) {
    if(playerHealth > 0){
      window.alert('Welcome to Robot Gladiators! Round '+(i+1));
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    // debugger;
    fight(pickedEnemyName);
    }
    else{
      window.alert("you have lost your robot in Combat! Game Over!");
      break;
    }
  }
  endGame();
}
// function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");
  if (playerHealth >0){
    window.alert("Great Job, you've survived the game! You now have a score of " +playerMoney +".")
  }
  else{
    window.alert("You've lost your robot in battle.")
  }
};
var playAgainConfirm = window.confirm("Would you like to play again?");
if(playAgainConfirm){
  startGame();
}
else{
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}