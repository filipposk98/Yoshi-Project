console.log("hello");

const startButton = document.getElementById("Blue");
let endGame = document.getElementById("Red");
let gameEnd = document.getElementById("Yellow");
let gamEnd = document.getElementById("Green");

const open = document.getElementById("open");
const endingConatiner = document.getElementById("ending-container");
const modal_container = document.getElementById("modal_container");

const Red = document.getElementById("Red");
const Blue = document.getElementById("Blue");
const Green = document.getElementById("Green");
const Yellow = document.getElementById("Yellow");

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answerbtn");

let shuffledQuestions, currentQuestionIndex;


//var question1 = {
  
  //question: "How many coins Yoshi manage to get on his jumb?",
   // answers: [
    //  { text: "6", correct: false },
    //  { text: "4", correct: true  },
    //  { text: "5", correct: false },
    //  { text: "3", correct: false }
   // ]

//const questions = question1, question2

const questions = [
  {
    img: "/Users/filipposkargiotidis/Desktop/Visoual Studio Code/background image/tumblr_m9y2ziN48I1qj6jppo1_500.gif",

    question:  ["How many coins Yoshi manage to get on his jumb?"],
    answers: [
      { text: "6", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "3", correct: false }
    ]
  },
  {
    img: "/Users/filipposkargiotidis/Desktop/Visoual Studio Code/background image/tumblr_mhiht0GV2T1r621gdo1_500.gif",

    question: ['What is the name of this stage?'],
    answers: [
      { text: 'The Cave Of Chomp Rock', correct: true },
      { text: "Poochy Ain't Stupid", correct: false },
      { text: 'The Deep, Underground Maze', correct: false },
      { text: 'Chomp Rock Zone', correct: false }
    ]
  },
  {
    img: "/Users/filipposkargiotidis/Desktop/Visoual Studio Code/background image/dxvjpabmlidele94n0g9.gif",

    question: ['How many enemies Yoshi go with one shot?'],
    answers: [
      { text: '9', correct: false },
      { text: '8', correct: true },
      { text: '5', correct: false },
      { text: '12', correct: false }
    ]
  },
  {
    img: "/Users/filipposkargiotidis/Desktop/Visoual Studio Code/background image/SMW2_Burt_the_Bashful.png",

    question: ['Which famous comic characther reminds this boss?'],
    answers: [
      { text: 'Tintin', correct: false },
      { text: 'Lucky Luke', correct: false },
      { text: 'Hulk', correct: false },
      { text: 'Ovelix', correct: true }
    ]
  },
  { 
    img: "/Users/filipposkargiotidis/Desktop/Visoual Studio Code/background image/341fuzzy.gif",

   question: ['What happen to Yoshi?'],
   answers: [
    { text: 'Did Yoshi drunk a beer to much?', correct: false },
    { text: 'Is Yoshi under the infuence of Magic Mushrooms?', correct: false },
    { text: 'Did Yoshi got stank by a poisonus fluf?', correct: true },
    { text: 'Did Yoshi ate a poisonus flower?', correct: false }
  ]
}
]


open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

startButton.addEventListener("click", startGame);
answerButtonsElement.addEventListener('click', () => {
currentQuestionIndex++
setNextQuestion()
})

//endGame.addEventListener("click", finishGame);
//gameEnd.addEventListener("click", finishGame);
//gamEnd.addEventListener("click", finishGame);


function startGame() {
  console.log("started");
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  setNextQuestion(shuffledQuestions.map(q => q.question));
  
}

function setNextQuestion() {
  resetState()
  randomQuizContent(shuffledQuestions[currentQuestionIndex]);
  
}

// Change content in Modal ShowQuestion basically
function randomQuizContent(question,) {
  console.log("WE ARE INSIDE");
  questionElement.innerText = question. question;
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
   button.classList.add('btn')
   //item.setAttribute("src", arrayName[itemIndex]);
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
    while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
   // nextButton.classList.remove('hide')
  } else {
    //startButton.innerText = 'Restart'
    //startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  console.log("correct")
  if (correct) {
    element.classList.add('correct')
  } else {
    finishGame(endingConatiner.classList.add("show"))
   // element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
  

// Loosers Modal appears
function finishGame() {
  console.log("ended");
  modal_container.classList.remove("show");
  endingConatiner.classList.add("show");
}



//function showQuestion(question) {
// questionElement.innerText = question.question
//question.answers.forEach(answer => {
//const button = document.createElement('button')
// button.innerText = answer.text
//  button.classList.add('btn')
// if (answer.correct) {
//   button.dataset.correct = answer.correct
// }
//  button.addEventListener('click', selectAnswer)
//answerButtonsElement.appendChild(button)
// })
//}

// const questionArray = [];
// const shuffledQuestions = questions.map(quest => quest.question);

// questionArray.push(shuffledQuestions);

// console.log(questionArray);

// console.log(
//   "shuffle",
//   questionArray[Math.floor(Math.random() * questionArray.length)]
// );

//Start Game
// function startGame() {
//   console.log("startGame");
//   return quizContent();
// }

// //End Game
// function endGame() {
//   console.log("EndGame");
// }



//question.answers.forEach(answer => {
   //let answers1 = document.getElementById('Red') 
  //let answers2 = document.getElementById('Blue') 
    //let answers3 = document.getElementById('Yellow') 
   // let answers4 = document.getElementById('Green') 
    //answers1.innerText = answer.text
    //answers2.innerText = answer.text
   // answers3.innerText = answer.text
  //answers4.innerText = answer.text
   


   // button.classList.add('btn')
    
    //if (answer.correct) {
      //button.dataset.correct = answer.correct
    //}
    //button.addEventListener('click', selectAnswer)
    //answerButtonsElement.appendChild(button)
  //
//})
//}