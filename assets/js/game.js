// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less


// var enemy.names = ["Roborto", "Amy Android", "Robo Trumble"];
// var enemy.health = 50;
// var enemy.attack = 12;

var fight = function(enemy){
  console.log(enemy);
  while(enemy.health>0 && playerInfo.health>0){
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
 
      if (promptFight ==="skip"||promptFight==="SKIP"){
        var confirmSkip=window.confirm("are you sure you'd like to quit?");

      //if yes, leave fight
      if(confirmSkip){
       window.alert(playerInfo.name+" has chosen to skip the fight. Goodbye!");
       playerInfo.money=Math.max(0,playerInfo.money - 10);
        console.log("playerMoney", playerInfo.money);
        break;
      }
      }
        if (promptFight === "fight" || promptFight ==="FIGHT"){
        //Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name +" now has " +enemy.health + " health remaining.");

        // check enemy's health
          if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            playerInfo.money=playerInfo.money +20;
            break;
          } 
          else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
          }
        // Subtract the value of `enemy.attack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
          playerInfo.health = Math.max(0, playerInfo.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
      );

      //check players health
      if (playerInfo.health <= 0) {
        window.alert(playerinfo.name + " has died!");
        break;
      } 
      else {
        window.alert(playerinfo.name + " still has " + playerInfo.health + " health left.");
      }
    }
      else {
        window.alert("You need to pick a valid option. Try again!");
      }
    }
  }

  var playerInfo ={
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
      this.health = 100;
      this.money = 10;
      this.attack=10;
    },
    refillHealth: function() {
      if (this.money >=7){
        window.alert("Refilling player's helath by 20 for 7 cash money");
      this.health += 20;
      this.money -= 7;
      }
      else {
        window.alert ("You don't have enough money!");
      }
    },
    upgradeAttack: function() {
      if(this.money>=7){
        window.alert("Upgrading player's attack by 6 for 7 cash money");
      this.attack += 6;
      this.money -= 7;
      }
      else{
        window.alert("You poor, go fight");
      }
    }
  };
  var enemyInfo =[
    {name:"Roborto",
      attack:randomNumber(10,14)},
    {name: "Amy Android",
      attack:randomNumber(10,14)},
    {name:"Robo Trumble",
      attack:randomNumber(10,14)}
  ];

var startGame = function(){  
  playerInfo.reset();
  enemy.health=randomNumber(40,60);

var shop = function(){
  shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
  shopOptionPrompt=shopOptionPrompt.toLowerCase();
  console.log(shopOptionPrompt);
  switch (shopOptionPrompt){
    case"refill":
      playerInfo.refillHealth();
    break;
  
    case "upgrade":
        playerInfo.upgradeAttack();
      break;
    
    case "leave":
      window.alert("Leaving the store.");
      break;
    
    Default:
    window.alert("you did not pick a valid option. try again.");
    shop();
  }
};

  for(var i=0; i < enemyInfo.length; i++) {
    if(playerInfo.health > 0 && i <enemyInfo.length -1){
      var storeConfirm = window.confirm("The fight is over, visit the store before next round?");
      if(storeConfirm) {
        shop();
      }
      window.alert('Welcome to Robot Gladiators! Round '+(i+1));
    var pickedEnemyObj = enemyInfo[i];
    pickedEnemyObj.health = randomNumber(40, 60);
    // debugger;
    fight(pickedEnemyObj);
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
  if (playerInfo.health >0){
    window.alert("Great Job, you've survived the game! You now have a score of " +playerInfo.money +".")
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
// function to generate a random numeric value
var randomNumber = function(min,max) {
  var value = Math.floor(Math.random() * (max-min+1)+min);

  return value;
};