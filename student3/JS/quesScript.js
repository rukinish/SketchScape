//  important variables
const beginButton = document.querySelector(".strt-btn");
const rulesBox = document.querySelector(".rules-box");
const questionScreen = document.querySelector("#question-screen");
const resultScreen = document.querySelector("#result-screen");
const restartBtn = document.querySelector("#restart-butn");
const timerElement = document.querySelector(".timer");
let index = 0;
let correct = 0;
let wrong = 0;
let scoreCal =0;
let timerInterval;
let totTime = 60;
let counter = 0;
let startTime = Date.now();
let endTime;

// Events
beginButton.addEventListener("click", function () {
  // prepare variables first then show elements after that
  index = 0;
  correct = 0;
  wrong = 0;
  scoreCal =0;
  totTime = 60;
  counter = 0;
  endTime = null;
  timerInterval = setInterval(updateTimer, 1000);
  startTime = Date.now(); // start timer wen user clicks begin button
  rulesBox.style.display = "none"; // Hide the "rules-box"
  questionScreen.style.display = "block"; // Show the "question-screen"
  printQuestions();
});

restartBtn.addEventListener("click", function () {
  resultScreen.style.display = "none"; // Show the info screen and hide the result screen
  rulesBox.style.display = "block";
  resetQuiz();
});

// Function that resets the quiz to its initial state
function resetQuiz() {
  index = 0; // Resets the variables
  correct = 0;
  wrong = 0;
  scoreCal =0;

  // Reset all the options to be clickable again
  document.querySelectorAll(".option-box span").forEach(function (span) {
    span.setAttribute("onclick", "checkAnswer(this)");
    span.classList.remove("right", "wrong", "correct");
  });

  // Reset the counter text with the first question number
  const counter = document.getElementById("counter");
  counter.querySelector("p:first-child").textContent = "1";

  // Shuffle the questions
  questions = quiz.sort(function () {
    return 0.5 - Math.random();
  });

  // Print the first question
  printQuestions();
}

//to make sure that the code inside the function is executed only after the DOM has been loaded.
document.addEventListener("DOMContentLoaded", function () {
  totTime = 60;
  counter = 0;
});

function updateTimer() {
  const min = Math.floor((totTime - counter) / 60);
  const sec = totTime - min * 60 - counter;
  // time is displayed in the format mm:ss
  timerElement.textContent = `Time Left : ${min
    .toString()
    .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;

  if (counter == totTime && index !== questions.length) {
    alert("Time's up. Press OK to show the result.");
    showResult();
    clearInterval(timerInterval);
  }
  counter++;
}

// shuffle the questions
let questions = quiz.sort(function () {
  return 0.5 - Math.random();
});

//print the start of the quiz
function printQuestions() {
  const questionBox = document.querySelector(".question-box");
  const optionBoxSpans = document.querySelectorAll(".option-box span");
  const questionImage = document.getElementById("question-image");

  questionBox.textContent = questions[index].question;
  questionImage.src = questions[index].image;

  optionBoxSpans[0].textContent = questions[index].option[0];
  optionBoxSpans[1].textContent = questions[index].option[1];
  optionBoxSpans[2].textContent = questions[index].option[2];
  optionBoxSpans[3].textContent = questions[index].option[3];
}

//function to check answer
function checkAnswer(option) {
  let optionClicked = option.getAttribute("data-opt");

  if (optionClicked == questions[index].answer) {
    option.classList.add("right"); //makes it green
    correct++;
  } else {
    option.classList.add("wrong"); //makes it red
    //shows the correct option
    const correctOption = document.querySelector(
      `[data-opt="${questions[index].answer}"]`
    );
    correctOption.classList.add("right");
    wrong++;
  }

  //to remove the ability to select multiple answers
  document.querySelectorAll(".option-box span").forEach(function (span) {
    span.removeAttribute("onclick");
  });
}

//function for the next question
function showNext() {
  // When the quiz is over
  if (index >= questions.length - 1) {
    showResult();
    return;
  }
  index++;

  // Update the counter text with the current question number
  const counter = document.getElementById("counter");
  const currentQuestionNumber = index + 1;
  counter.querySelector("p:first-child").textContent = currentQuestionNumber;

  // Remove any previously selected options
  const options = document.querySelectorAll(".option-box span");
  options.forEach((option) => {
    option.classList.remove("right", "wrong", "correct");
    option.setAttribute("onclick", "checkAnswer(this)");
  });
  printQuestions(index);
}

//function for the result screen
function showResult() {
  endTime = Date.now(); //ending time 
  clearInterval(timerInterval); 

  questionScreen.style.display = "none"; //hides question screen
  resultScreen.style.display = "block"; //shows result screen

  const correctAnswers = document.getElementById("correctAnswers");
  const questionsdone = document.getElementById("ansQuestions");
  const wrongAnswers = document.getElementById("wrongAnswers");
  const marks = document.getElementById("score");
  const timeTaken = document.getElementById("timeTaken");
  const comments = document.getElementById("userComment");

  //scoreCal = (correct / (correct + wrong)) * 100; //calculation score
  scoreCal = (correct / 10) * 100; //calculation score

  questionsdone.textContent= correct+wrong; //no. of questions user answered
  correctAnswers.textContent = correct; 
  wrongAnswers.textContent = wrong;
  marks.textContent= `${scoreCal.toFixed(2)}%`
  const timeTakenaAns = (endTime - startTime) / 1000;
  timeTaken.textContent = `${timeTakenaAns.toFixed(2)} s`;

  // set the text and color of the comment based on the score
  if (scoreCal > 70) {
    comments.textContent = "Excellent Score! Keep up the good work! 🥳";
    comments.style.color = "green";
  } else if(scoreCal>35) {
    comments.textContent = "Good job. You can do better next time. 🙃";
    comments.style.color = "#EFB216";
  } else {
    comments.textContent = "Better luck next time. 😕";
    comments.style.color = "red";
  }
}
  

