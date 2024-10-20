const startBtn = document.getElementById('start-btn');
const quizSection = document.getElementById('quiz-section');
const usernameInput = document.getElementById('username');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultSection = document.getElementById('result-section');
const resultElement = document.getElementById('result');
const restartBtn = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;
let username = '';

const questions = [
    {
        question: 'Winter Olympics 2026? ',
        options: ['Berlin , Italy', 'Milam , Japan', 'Paris , France', 'Milam , Italy'],
        answer: 'Milam , Italy'
    },
    {
        question: 'fifa worldcup 2026?',
        options: ['USA + Japan', 'USA + Qatar  ', 'US + Canada', 'North + South'],
        answer: 'US + Canada'
    },
    {
        question: 'Winter Olympics 2022? ',
        options: ['Bejing , China', 'Bejing , Tokyo', 'Bejing , USA', 'Bijing , US'],
        answer: 'Bejing , China'
    },
    {
        question: 'Summer Olympics 2020?',
        options: ['Peris , France', 'China , USA', 'Tokyo , Japan', 'Qatar , Australia'],
        answer: 'Tokyo , Japan'
    },
    {
        question: 'Summer Olympics 2028?',
        options: ['Los Japan USA', 'Los US USA', 'Los Australia USA', 'Los Angela USA'],
        answer: 'Los Angela USA'
    },  
    {
        question: 'Summer Olympics 2024?',
        options: ['Paris , France', 'Paris , Canada', 'Paris , USA   ', 'Paris , Nepal'],
        answer: 'Paris , France'
    },  
    {
        question: 'fifa worldcup 2022?',
        options: ['Saudi  Arabia', 'Qatar', 'Japan', 'Canada'],
        answer: 'Qatar'
    },  
    {
        question: 'Common Wealth Games 2026?',
        options: ['Victoria , Nepal', 'Victoria , England', 'Victoria , France', 'Victoria , Australia'],
        answer: 'Victoria , Australia'
    },  
    {
        question: 'Common Wealth Games 2022?',
        options: ['Brimingham , USA', 'Brimingham , Nepal', 'Brimingham , UK', 'Brimingham , Bhutan'],
        answer: 'Brimingham , UK'
    },
    {
        question: 'Destroyed Means Of?',
        options: ['تباہ', 'حوالہ دینا'],
        answer: 'تباہ'
    },
    {
        question: 'Significant Means Of?',
        options: ['بیچ','اہم'],
        answer:  'اہم'
    },
  
    
];

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    username = usernameInput.value;
    if (!username) {
        alert('Please enter your name');
        return;
    }
    usernameInput.classList.add('hidden');
    startBtn.classList.add('hidden');
    quizSection.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', selectOption);
        optionsElement.appendChild(button);
    });
}

function resetState() {
    nextBtn.classList.add('hidden');
    while (optionsElement.firstChild) {
        optionsElement.removeChild(optionsElement.firstChild);
    }
}

function selectOption(e) {
    const selectedOption = e.target.innerText;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    const buttons = optionsElement.querySelectorAll('.option');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.innerText === currentQuestion.answer) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
    });

    nextBtn.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
    resultElement.innerText = `${username}, your score: ${score} out of ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    usernameInput.value = '';
    usernameInput.classList.remove('hidden');
    startBtn.classList.remove('hidden');
    resultSection.classList.add('hidden');
}
