let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let timer;

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

startTimer();

}

function startTimer() {

    clearInterval(timer);

    timeLeft = 10;

    document.getElementById("timer").innerText =
    "Time Left: " + timeLeft;

    timer = setInterval(() => {

        timeLeft--;

        document.getElementById("timer").innerText =
        "Time Left: " + timeLeft;

        if(timeLeft <= 0){

            clearInterval(timer);

            nextQuestion();
        }

    },1000);
}

function checkAnswer(option) {
  clearInterval(timer);


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
    loadQuestion();
}

function nextQuestion() {

  currentQuestion++;

  if(currentQuestion < questions.length) {
    loadQuestion();
  }
  else {

    let percentage = (score / questions.length) * 100;

    let message = "";

    if (percentage === 100) {
        message = "🏆 Excellent!";
    }

    else if (percentage >= 70) {
        message = "🔥 Very Good!";
    }

    else if (percentage >= 40) {
        message = "👍 Good Try!";
    }

    else {
        message = "📚 Keep Practicing!";
    }

    document.body.innerHTML = `
    <div class="result-box">

        <h1>${message}</h1>

        <h2>Your Score: ${score}/${questions.length}</h2>

        <h3>${percentage}%</h3>

        <button onclick="location.reload()">
            Restart Quiz
        </button>

    </div>
    `;
}

  }

