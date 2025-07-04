let guess;

let cnt = 0;
let score = 0;
let random = (Math.random() * 100);
random = Number.parseInt(random)

while (cnt <= 100) {
    if (cnt == 0) {
        guess = prompt("Enter your guess"); guess = Number.parseInt(guess);
    }

    if (random == guess) {
        score = 100 - cnt;
        cnt = 101;
        console.log(`Congrajulations your score is ${score} and number was ${guess}`)
    }
    else {
        console.log(`Your guess is ${guess > random ? "Greater than" : "Less than"} the number`)
        guess = prompt("Wrong guess try again")
        guess = Number.parseInt(guess)
        cnt++;
    }

    if (cnt === 100) {
    console.log(`😞 You lost! The correct number was ${random}`);
}
}