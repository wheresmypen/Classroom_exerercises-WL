

/*

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
}*/


$( document ).ready(function() {

    var num;
    var guesses = 0;


    var max_el = $('#max'),
        gamebtn = $('#gamebtn'),
        count_el = $('#guess_count'),
        guess_el = $('#aGuess'),
        guessbtn = $("#guessbtn"),
        guesses_el = $("#guesses"),
        footer = $('#footer');

    footer.hide();


    gamebtn.on('click', function () {
        num = getRandomInt(1, parseInt(max_el.val()));
        guesses = 0;
        guesses_el.empty();
        footer.show();
        updateCount();
    });

    guessbtn.on('click', function () {
        var myGuess = parseInt(guess_el.val());
        guesses++;
        updateCount();
        if (myGuess == num) {
            guesses_el.append("<p>it took you " + guesses + " guesses</p>");
            footer.hide();
        } else if (myGuess > num) {
            console.log("lower");
            guesses_el.append("<p>lower (" + myGuess + ")</p>");
        } else {
            console.log("higher");
            guesses_el.append("<p>higher (" + myGuess + ")</p>");
        }

        guess_el.val("");
        guess_el.focus();

    });

    function updateCount() {
        count_el.html(guesses + " guesses");
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    });