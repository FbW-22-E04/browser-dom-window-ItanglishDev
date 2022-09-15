
const number = Math.floor(Math.random() * 9 + 1)
console.log(number);
let counter = 0

function checkForAnswer() {

  if (counter < 3) {
    let answer = prompt('Guess a number between 1 - 10')
    // console.log(number);
    counter++

    if (number !== answer) {

      prompt('Wrong!!! Try Again!')
      checkForAnswer()

    } else {

      prompt('Success, the number was', number, '!', 'Attempts', counter);

    }
  } prompt('Sorry, you failed to guess the number in three attempts. The number was ' + number)
  return
}


checkForAnswer()
