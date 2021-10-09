let guess = document.getElementById("guess");
let submit = document.getElementById("submit");
let answer = Math.floor(Math.random() * 100)
let response = document.getElementById("response");

submit.addEventListener("click", function() {
    console.log("guess: ", guess.value);
    if(guess.value > answer) {
        response.innerText = "The number is less than your guess";
    }
    if (guess.value < answer) {
        response.innerText = "The number is greater than your guess";
    }
    if (guess.value == answer) {
        response.innerText = "You guessed correctly";
    }
});