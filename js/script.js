// Массив с вопросами, вариантами ответов и правильными ответами
let questions = [
    {
        question: "Какой язык программирования вы изучаете?",
        options: ["JS", "Python", "Java", "C++"],
        correctAnswer: "JS"
    },
    {
        question: "Какой язык программирования вы изучаете?",
        options: ["JS", "Python", "Java", "C++"],
        correctAnswer: "JS"
    },
    {
        question: "Какой язык программирования вы изучаете?",
        options: ["JS", "Python", "Java", "C++"],
        correctAnswer: "JS"
    }
];

let currentQuestion = 0; // Текущий вопрос
let correctAnswers = 0; // Количество правильных ответов

//функция для отображения текущего вопросв и вариантов ответа
function displayQuestion() {
    let questionElement = document.getElementById("quetion"); //Получим блок куда размещать вопросы
    questionElement.textContent = ` ${currentQuestion + 1}: ${questions[currentQuestion].question}`

    let optionsElement = document.getElementById("options");
    //Очистим блок с кнопками
    optionsElement.innerHTML = "";

    //Массив ответов
    let optionArray = questions[currentQuestion].options;

    //Создаём кнопки с вариантами ответов и привязать к ним функцию nextQuestion
    optionArray.forEach((option) => {
        let button = document.createElement('button');
        optionsElement.append(button);
        button.textContent = option;
    })
    optionsElement.addEventListener('click', (e) => {
        let target = e.target;
        // проверка ответов на кореткность и переход к след вопросу
        nextQuestion(target.textContent)
    })
}

displayQuestion();