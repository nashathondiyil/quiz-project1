let currentQuestion = 0;
let score = 0;

function loadQuestion() {

  const q = questions[currentQuestion];

  document.getElementById("question").innerHTML =
    q.question;

  let optionsHtml = "";

  q.options.forEach(option => {

    optionsHtml += `
      <button onclick="checkAnswer('${option}')">
        ${option}
      </button>
      <br><br>
    `;
  });

  document.getElementById("options").innerHTML =
    optionsHtml;
}
function checkAnswer(option) {


  const buttons = document.querySelectorAll("#options button");

  buttons.forEach(btn => {

    if(btn.innerText === questions[currentQuestion].answer) {
      btn.style.background = "#056d0e";
    }

    if(btn.innerText === option && option !== questions[currentQuestion].answer){
      btn.style.background = "#b11005";
    }

    btn.disabled = true;
  });

  if(option === questions[currentQuestion].answer) {
    score++;
  }
}
function startQuiz() {
    document.querySelector(".start-screen").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
}

function nextQuestion() {

  currentQuestion++;

  if(currentQuestion < questions.length) {
    loadQuestion();
  }
  else {

    if(score === questions.length) {

        document.body.innerHTML =
        `<h1>Congratulations! 🎉</h1>
         <h2>You got full marks: ${score}/${questions.length}</h2>`;

    }

    else {

        document.body.innerHTML =
        `<h1>Your Score: ${score}/${questions.length}</h1>`;

    }

  }
}

loadQuestion();