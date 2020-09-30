console.log("hello");
let beatTheGame = document.getElementById("Winmodal_container");
let currentModalImage = document.getElementById("holder");
const open = document.getElementById("open");
const endingConatiner = document.getElementById("ending-container");
const modal_container = document.getElementById("modal_container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answerbtn");
let shuffledQuestions, currentQuestionIndex;
const goAway = document.getElementById("Red1");
const beatIt = document.getElementById("Red2");

const questions = [
  {
    img: "./img/Coins.gif",

    question: "How many coins Yoshi manage to get on his jumb?",
    answers: [
      { text: "6", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "3", correct: false }
    ]
  },
  {
    img: "./img/Cave.gif",

    question: "What is the name of this stage?",
    answers: [
      { text: "The Cave Of Chomp Rock", correct: true },
      { text: "Poochy Ain't Stupid", correct: false },
      { text: "The Deep, Underground Maze", correct: false },
      { text: "Chomp Rock Zone", correct: false }
    ]
  },
  {
    img: "./img/Enemies.gif",

    question: "How many enemies Yoshi go with one shot?",
    answers: [
      { text: "9", correct: false },
      { text: "8", correct: true },
      { text: "5", correct: false },
      { text: "12", correct: false }
    ]
  },
  {
    img: "./img/Ovelix.png",

    question: "Which famous comic characther reminds this boss?",
    answers: [
      { text: "Tintin", correct: false },
      { text: "Lucky Luke", correct: false },
      { text: "Hulk", correct: false },
      { text: "Ovelix", correct: true }
    ]
  },
  {
    img: "./img/poisonfluf.gif",

    question: "What happen to Yoshi?",
    answers: [
      { text: "Did Yoshi drunk a beer to much?", correct: false },
      {
        text: "Is Yoshi under the infuence of Magic Mushrooms?",
        correct: false
      },
      { text: "Did Yoshi got stank by a poisonus fluf?", correct: true },
      { text: "Did Yoshi ate a poisonus flower?", correct: false }
    ]
  }
];

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});


goAway.addEventListener("click", () => {
  endingConatiner.classList.remove("show");
});

beatIt.addEventListener("click", () => {
  Winmodal_container.classList.remove("show");
});

answerButtonsElement.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  console.log("started");
  resetState();
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  randomQuizContent(shuffledQuestions[currentQuestionIndex]);
}

// Change content in Modal Show Question, Image and answer basically
function randomQuizContent(questions) {
  console.log("WE ARE INSIDE");
  currentModalImage.src = questions.img;
  questionElement.innerText = questions.question;
  questions.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    setNextQuestion();
    //Winners Modal Appear after the if it is more questions tthan 5!
  } else {
    modal_container.classList.remove("show");
    beatTheGame.classList.add("show");
  }
}
//if is correct= true show next question if undefined show finishGame
function setStatusClass(element, correct) {
  console.log("Correct: " + correct);
  if (correct) {
    element.classList.add("correct");
  } else {
    finishGame(endingConatiner.classList.add("show"));
  }
}



// Loosers Modal appears
function finishGame() {
  console.log("ended");
  modal_container.classList.remove("show");
  endingConatiner.classList.add("show");
}
