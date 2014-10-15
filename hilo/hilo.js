var num;
var guesses = 0;

function newGame(min, max) {
    num = getRandomInt(min, max);
    guesses = 0;
}

function guess(myGuess){
    guesses++;
    if(myGuess == num){
        console.log("it took you " + guesses + " guesses");
    } else if( myGuess > num ) {
        console.log("lower");
    } else {
        console.log("higher");
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}