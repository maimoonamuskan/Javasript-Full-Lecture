let winningNumber=19;
let userGuess=prompt("guess a number");
console.log(userGuess);
if(userGuess===winningNumber){
    console.log("your guess is right");
}
  
  else{
    if(userGuess<winningNumber){
        console.log("too low!!!")
    }else{
        console.log("too high!!!")
    }
  }
