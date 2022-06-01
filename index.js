
//prompt users for their username
const userName = prompt("Please enter your name:");
 //range limit value
var rangeLimit=2;
//begins at stage 1 ..
var stage=1;
//points to be awarded to the player
var awardedPoints=0;

function guessNumber(){
// random value generated
var randomValue =Math.floor(Math.random() * rangeLimit+1);

  //indicates current stage
console.log(`Stage ${stage}`)
  
//prompt the player to predict the generated number

const guessedNumber=prompt(`Pick a number between 1 and ${rangeLimit}`)
console.log(randomValue)
  

//checks whether the guessed number is equal to the random value generated
if(guessedNumber==randomValue){
// at a correct guess:
//increase the range limit value by 1
  rangeLimit++;
//player is awarded a point
  awardedPoints++; 
//player is moved to the next stage
  stage++;
  console.log(`Congratulations,${userName}! You guessed it right.You now have ${awardedPoints} points`)
  //rerun the function
  guessNumber();

}

else{
console.log(`Game Over!!\nTotal points earned: ${awardedPoints}`)
}
}
 guessNumber();


