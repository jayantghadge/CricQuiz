const startButton = document.querySelector('#start-btn');
const nextButton = document.querySelector('#next-btn');
const questionContainerElement = document.querySelector('#question-container');
const questionElement = document.querySelector('#question');
const answerButtonsElement = document.querySelector('#answer-buttons');
let shuffledQuestions, currentQuestionIndex;
startButton.addEventListener('click', start);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextQuestion()
});

function start() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    nextQuestion()

}

function nextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button);
    })
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }

}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');

    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');

    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [{
        question: 'Who won the first ever Cricket World Cup in 1975?',
        answers: [{
                text: 'Australia',
                correct: false
            },
            {
                text: 'England',
                correct: false
            },
            {
                text: 'India',
                correct: false
            },
            {
                text: 'West Indies',
                correct: true
            }
        ]
    },
    {
        question: 'How long is the wicket on a cricket pitch?',
        answers: [{
                text: '18 Yards',
                correct: false
            },
            {
                text: '20 Yards',
                correct: false
            },
            {
                text: '22 Yards',
                correct: true
            },
            {
                text: '24 Yards',
                correct: false
            },
        ]
    },
    {
        question: 'Who did England beat in the final of the 2019 Cricket World Cup?',
        answers: [{
                text: 'Australia',
                correct: false
            },
            {
                text: 'India',
                correct: false
            },
            {
                text: 'New Zealand',
                correct: true
            },
            {
                text: 'South Africa',
                correct: false
            },
        ]
    },
    {
        question: 'Who is the only batsman to record 400 runs in an international Test match?',
        answers: [{
                text: 'Steve Smith',
                correct: false
            },
            {
                text: 'Brian Lara',
                correct: true
            },
            {
                text: 'Don Bradman',
                correct: false
            },
            {
                text: 'Virat Kohli',
                correct: false
            },
        ]
    },
    {
        question: 'Who is the first batsman to cross 10,000 runs in tests?',
        answers: [{
                text: 'Sunil Gavaskar',
                correct: true
            },
            {
                text: 'Sachin Tendulkar',
                correct: false
            },
            {
                text: 'Allan Border',
                correct: false
            },
            {
                text: 'Alastair Cook',
                correct: false
            },
        ]
    },
    {
        question: 'Who bowled the fastest delivery ever of 100.2mph?',
        answers: [{
                text: 'Brett Lee',
                correct: false
            },
            {
                text: 'Shoaib Akhtar',
                correct: true
            },
            {
                text: 'Shaun Tait',
                correct: false
            },
            {
                text: 'Jeffrey Thompson',
                correct: false
            }
        ]
    },
]