const questions = [
  {
    question: "What was the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Donald Trump",
    b: "Joe Biden",
    c: "Hillary Clinton",
    d: "Bernie Sanders",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "none of the above",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1993",
    b: "1994",
    c: "1995",
    d: "1996",
    correct: "c",
  },
];

const quiz = document.querySelector(".quiz-container");
const variants = document.querySelectorAll(".answer");
const question = document.querySelector(".question");
const a = document.getElementById("a-label");
const b = document.getElementById("b-label");
const c = document.getElementById("c-label");
const d = document.getElementById("d-label");
const button = document.querySelector("button");
let currentPage = 0;
let score = 0;

function startQuiz() {
  currentPage = 0;
  score = 0;

  question.innerHTML = "Would You Like to Start the Quiz?";
  for (let i = 0; i < variants.length; i++) {
    variants[i].classList.add("hidden");
  }
  button.textContent = "Start";
  button.addEventListener("click", showQuestion);
}
function showQuestion() {
  deselectAnswers();

  const currentQuizData = questions[currentPage];
  question.innerText = currentQuizData.question;
  a.innerText = currentQuizData.a;
  b.innerText = currentQuizData.b;
  c.innerText = currentQuizData.c;
  d.innerText = currentQuizData.d;
  button.textContent = "Next";

  for (let i = 0; i < variants.length; i++) {
    variants[i].classList.remove("hidden");
  }
}

function deselectAnswers() {
  variants.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  variants.forEach((e) => {
    if (e.checked) {
      answer = e.id;
    }
  });
  return answer;
}

function anyChecked() {
  for (let i = 0; i < variants.length; i++) {
    if (variants[i].checked) {
      return true;
    }
  }
  return false;
}
button.addEventListener("click", () => {
  if (button.textContent === "Next" && anyChecked()) {
    console.log("test");

    const answer = getSelected();
    if (answer === questions[currentPage].correct) {
      score++;
    }
    currentPage++;
    if (currentPage < questions.length) {
      showQuestion();
    } else {
      quiz.innerHTML = `
        <h2>You answered ${score}/${questions.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
        `;
    }
  }
});

startQuiz();
