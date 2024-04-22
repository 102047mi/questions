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
    },
    {
        question: "Какой язык программирования вы изучаете?",
        options: ["JS", "Python", "Java", "C++"],
        correctAnswer: "JS"
    }
];

let currentQuestion = 0; // Текущий вопрос
let correctAnswers = 0; // Количество правильных ответов
let incorrectAnswers = 0;// Кол-во неправильных ответов

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
    } else {
        incorrectAnswers++;
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
    const incorrectElement = document.getElementById("incorrect");
    const incorrectAnswer = document.getElementById("incorrectAnswers");
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    let userName = prompt(" Введите ваше имя ");
    let score = (correctAnswers / questions.length) * 100
    // resultElement.textContent = `Правильных ответов:${correctAnswers} из ${questions.length}`
    resultElement.textContent = (userName + " вы ответили на " + correctAnswers +
        " правильных ответов " + " из " + questions.length + " (" + score + "%)");
    if (incorrectAnswers > 0) {
        incorrectElement.textContent = `Количество неправильных ответов:${incorrectAnswers}`;
        incorrectAnswer.forEach
    } else {
        incorrectElement.textContent = "Всё решено верно";
    }

}

displayQuestion();