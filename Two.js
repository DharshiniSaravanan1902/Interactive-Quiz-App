const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "Python", "CSS", "Java"],
        answer: "CSS"
    },
    {
        question: "Which language is used for web page interactivity?",
        options: ["Java", "C++", "JavaScript", "Python"],
        answer: "JavaScript"
    },
    {
        question: "Which company developed Java?",
        options: ["Google", "Microsoft", "Sun Microsystems", "Apple"],
        answer: "Sun Microsystems"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Creative Style System",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

loadQuestion();

function loadQuestion() {
    feedbackElement.textContent = "";
    optionsElement.innerHTML = "";

    const q = quizData[currentQuestion];

    questionElement.textContent = q.question;

    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");

        button.addEventListener("click", () => checkAnswer(option));

        optionsElement.appendChild(button);
    });
}

function checkAnswer(selected) {
    const correctAnswer = quizData[currentQuestion].answer;

    if (selected === correctAnswer) {
        feedbackElement.textContent = "✅ Correct!";
        feedbackElement.style.color = "green";
        score++;
    } else {
        feedbackElement.textContent =
            "❌ Wrong! Correct Answer: " + correctAnswer;
        feedbackElement.style.color = "red";
    }

    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(btn => btn.disabled = true);
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById("quiz-box").innerHTML = `
        <h2>Quiz Completed!</h2>
        <h3>Your Score: ${score} / ${quizData.length}</h3>
        <button onclick="location.reload()">Restart Quiz</button>
    `;
}