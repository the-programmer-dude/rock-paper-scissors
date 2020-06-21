//div element where all the buttons are located
const choicesDOM = document.getElementById("choices").children;

//box where the results will show
const resultBox = document.querySelector("p");

//false: you lose
//true: you won
//null: tie
const choices = [
  {
    name: "rock",
    paper: false,
    rock: null,
  },
  {
    name: "paper",
    paper: null,
    rock: true,
  },
  {
    name: "scissor",
    paper: true,
    rock: false,
  },
];

//function to return result string
function startStringOfResult(clientChoice, PcChoice, result) {
  return `You choose: ${clientChoice}<br> PC choose: ${PcChoice}<br> ${result}`;
}

//on button click
function onClickEvent(event) {
  //random number to determinate computer choice
  const computerChoiceIndex = Math.floor(Math.random() * 3);
  //get the client's and pc's choice, and store them on a variable
  const clientChoice = event.target.id;
  const PcChoice = choices[computerChoiceIndex].name;

  //check if the computer won
  if (choices[computerChoiceIndex][event.target.id] === true) {
    resultBox.innerHTML = resultBox.innerHTML = startStringOfResult(
      clientChoice,
      PcChoice,
      "You Lose!!!"
    );
  }

  //check if the client won
  if (choices[computerChoiceIndex][event.target.id] === false) {
    resultBox.innerHTML = startStringOfResult(
      clientChoice,
      PcChoice,
      "You Won!!!"
    );
  }

  //check for a tie
  if (PcChoice === clientChoice) {
    resultBox.innerHTML = startStringOfResult(clientChoice, PcChoice, "Tie!!!");
  }
}

//go through all the buttons to add an event listener
for (let option of choicesDOM) {
  option.addEventListener("click", onClickEvent);
}
