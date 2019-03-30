const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
   
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor' || userInput === 'bomb') {
		return userInput;
  }
  else {
		console.log('Please enter rock, paper, or scissors.');
  }
};

const getComputerChoice = () => {
  const wholeNumber = Math.floor(Math.random() * 3);
  switch(wholeNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break
    default:
      console.log("Oops, something went wrong!");
  } 
}

function determineWinner(userChoice, computerChoice) {
  
  if (userChoice === 'bomb') {
    return 'You are the greatest who ever lived!'
  }
  
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  }
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer is the winner!';
    }
    else {
      return 'You won!';
    }
  }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Uh oh, you lost!';
		}
    else {
      return 'Victory!';
    }
  }
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Womp womp';
    }
    else {
      return 'You are the champion!';
    }
  }
}

function playGame() {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('Your choice is ' + userChoice);
  console.log('The computer chooses ' + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

