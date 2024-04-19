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

// Функция для отображения текущего вопроса и вариантов ответов
function displayQuestion() {
    let questionElement = document.getElementById("question"); //Получим блок куда размещать вопрос
    questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question}`
    // Получим блок кнопок:
    let optionsElement = document.getElementById("options");
    // Очистим блок с кнопками:
    optionsElement.innerHTML = "";

    // Массив ответов
    let optionsArray = questions[currentQuestion].options;

    // Создать кнопки с вариантами ответов и привязать к ним функцию nextQuestion
    optionsArray.forEach((option) => {
        let button = document.createElement('button');
        optionsElement.append(button);
        button.textContent = option;
    })
    // При клике на блок с кнопками:
    optionsElement.addEventListener('click', (e) => {
        // Получаем в переменную кнопку на которую кликнули:
        let target = e.target;
        // Вызовем функцию проверки ответа и перехода к следующему вопросу (в аргумент функции передаем текст ответа):
        nextQuestion(target.textContent);
    }, { once: true });
}

//Функция для перехода к следующему вопросу
function nextQuestion(answer) {
    //Если переданый ответ равен коректному, то
    if (answer === questions[currentQuestion].correctAnswer) {
        //Увеличеваем на единицу кол-во правильных ответов
        correctAnswers++;
    }
    //Переходим к следующему вопросу
    currentQuestion++;
    //Если номер текущ вопросу меньше кол-ва вопросов, то отображаем следующ вопрос
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        ///иначе
        displayResult();
    }
}

//Функция отображения результата текста
function displayResult() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");
    questionElement.style.display = "none";
    optionsElement.style.display = "none"
    let userName = prompt(" Введите ваше имя ")
    // resultElement.textContent = `Правильных ответов:${correctAnswers} из ${questions.length}`
    resultElement.textContent = (userName + " вы ответили на " + correctAnswers + " правильных ответов " + " из " + questions.length)
}



displayQuestion();