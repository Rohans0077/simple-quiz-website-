const quizData = {
	title: "General Knowledge Quiz",
	questions: [
		{
			id: 1,
			question: "What is the capital of France?",
			options: ["A) Paris", "B) Madrid", "C) Rome", "D) Berlin"],
			answer: "A"
		},
		{
			id: 2,
			question: "Which planet is known as the Red Planet?",
			options: ["A) Earth", "B) Mars", "C) Venus", "D) Jupiter"],
			answer: "B"
		},
		{
			id: 3,
			question: "Who wrote 'Hamlet'?",
			options: ["A) Charles Dickens", "B) William Shakespeare", "C) Mark Twain", "D) Jane Austen"],
			answer: "B"
		},
		{
			id: 4,
			question: "What is the largest mammal in the world?",
			options: ["A) Elephant", "B) Blue Whale", "C) Great White Shark", "D) Giraffe"],
			answer: "B"
		},
		{
			id: 5,
			question: "How many continents are there?",
			options: ["A) 5", "B) 6", "C) 7", "D) 8"],
			answer: "C"
		}
	]
};

let currentQuestion = 0;
let score = 0;

const questionContainer = document.querySelector("#question-container");
const questionText = document.querySelector(".question");
const optionsContainer = document.querySelector(".options");
const scoreContainer = document.querySelector(".score-container");
const scoreText = document.querySelector("#score");

function loadQuestion() {
	const current = quizData.questions[currentQuestion];
	questionText.textContent = current.question;
	optionsContainer.innerHTML = "";
	current.options.forEach((option, index) => {
		const button = document.createElement("button");
		button.textContent = option;
		button.onclick = () => handleAnswer(option[0]);
		optionsContainer.appendChild(button);
	});
}

function handleAnswer(answer) {
	const current = quizData.questions[currentQuestion];
	if (answer === current.answer) {
		score++;
	}
	currentQuestion++;
	if (currentQuestion < quizData.questions.length) {
		loadQuestion();
	} else {
		displayScore();
	}
}

function displayScore() {
	questionContainer.style.display = "none";
	scoreContainer.style.display = "block";
	scoreText.textContent = `You scored ${score} out of ${quizData.questions.length}`;
}

function restartQuiz() {
	currentQuestion = 0;
	score = 0;
	questionContainer.style.display = "block";
	scoreContainer.style.display = "none";
	loadQuestion();
}

loadQuestion();