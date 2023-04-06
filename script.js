const quizData = [
    english = [
        {
            question:
                "In my living room I have _____ sofa, _____ two chairs, and _____ wall unit.\n\n" +
                "Which of the following variants must be used in the blanks in the sentence above?",
            a: "__,a,a",
            b: "__,a,a",
            c: "a,a,__",
            d: " a,__,a",
            correct: "d",
            type: "Английский язык",
        },
        {
            question:
                "Summer is hot," +
                "But winter is cold. Sugar is sweet," +
                "But lemon is _____.\n\n\n" +
                "Which of the following variants must be used in the blank in the sentence above to complete the opposition?"

            ,
            a: "rich",
            b: "yellow",
            c: "sharp",
            d: "sour",
            correct: "d",
        },
        {
            question:
                "Please, sit down and feel yourself _____, while I make some tea." +
                "Which of the following variants best fits the blank in the sentence above?",
            a: "at home",
            b: "at school",
            c: "in a park",
            d: "in an office",
            correct: "a",
        },
        {
            question: "The slogan of a good student is",
            a: "The more you study, the better you learn.",
            b: "The less you study, the better you learn.",
            c: "The better you study, the worse you learn.",
            d: "The worse you study, the better you learn.",
            correct: "a",
        },
        {
            question: "Many _____ come to Kyrgyzstan in summer.\n\n" +
                " Which of the following variants must be used in the blank in the sentence above?",
            a: "visits",
            b: "visit",
            c: "visitors",
            d: "visiting",
            correct: "c",
        },
    ],
    biology = [
        {
            question: "Что из перечисленного ниже можно назвать популяцией?",
            a: "Все растения, растущие в одной оранжерее",
            b: "Всех животных, обитающих в одном озере",
            c: "Белых медведей, живущих на одном острове",
            d: "Стадо копытных животных одного хозяина",
            correct: "c",
            type: "Биология",
        },
        {
            question: "Какое утверждение Ламарка из перечисленных ниже о происхождении длинной шеи у жирафа соответствует современной эволюционной теории?",
            a: "Жирафы стремились вытягивать шею, чтобы достать листья с веток",
            b: "Жирафы как любые другие животные стремились стать лучше",
            c: "От предков к потомкам передавался только признак длинной шеи и не передавался признак короткой шеи",
            d: "Преимущество в добывании пищи имели жирафы с более длинной шеей, они выживали и оставляли потомство",
            correct: "d",
        },
        {
            question: "Какая группа доказательств эволюционного развития мира является наиболее достоверной?",
            a: "Анатомические",
            b: "Эмбриональные",
            c: "Палеонтологические",
            d: "Географические",
            correct: "c",
        },
        {
            question: "Все из нижеперечисленного явилось результатом появления у животных такого ароморфоза как четырёхкамерное сердце, КРОМЕ",
            a: "теплокровности",
            b: "выхода в новую среду обитания",
            c: "увеличения количества новых видов",
            d: "ослабления борьбы за существование",
            correct: "d",
        },
        {
            question: "Что из перечисленного одинаково у представителей разных рас человека?",
            a: "Белки тела",
            b: "Количество хромосом",
            c: "Наследственная изменчивость",
            d: "Мутационная изменчивость",
            correct: "b",
        },

    ]
];


const quiz = document.querySelector(".quiz-header");
const quizHeader = document.getElementsByClassName("quiz-header")[0];
const quizStart = document.getElementsByClassName("quiz-start-container")[0];
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.getElementById("submit");
const submitBtnMob = document.getElementById("submit-mob");

const startBtn = document.getElementsByClassName("startBtn")[0];
// const finishBtn = document.getElementsByClassName("finish-btn")[0];
const quizCount = document.getElementsByClassName("quiz-count")[0];
const quizCountMob = document.getElementsByClassName("quiz-count-mob")[0];
const finishText = document.getElementsByClassName("finish-text")[0];
const finishBlock = document.getElementsByClassName("finish-block")[0];
const questionAnswer = document.getElementsByClassName("question-answer")[0];
const questionCount = document.getElementsByClassName("question-count")[0];
const finishCorrect = document.getElementsByClassName("correct-finish-text")[0];
const finishCount = document.getElementsByClassName("count-finish-text")[0];
const choiceSubjectContainer = document.getElementsByClassName("choice-subject-container")[0];
const startEnd = document.getElementsByClassName("start-end")[0];
const choiceEnglish = document.getElementById("choice-english-btn")
const choiceBiology = document.getElementById("choice-biology-btn")
const resultSubject = document.getElementsByClassName("result-subject-title")[0]

const questionNumber = document.getElementById("question-number")

let currentQuiz = 0;
let score = 0;
let subject = 0;


// loadQuiz();

function loadQuiz() {
    if (currentQuiz < quizData[subject].length) {
        questionEl.innerText = quizData[subject][currentQuiz].question;
        a_text.innerText = quizData[subject][currentQuiz].a;
        b_text.innerText = quizData[subject][currentQuiz].b;
        c_text.innerText = quizData[subject][currentQuiz].c;
        d_text.innerText = quizData[subject][currentQuiz].d;
        quizCount.innerHTML = (currentQuiz+1) + "/" + quizData[subject].length
        quizCountMob.innerHTML = (currentQuiz+1) + "/" + quizData[subject].length
        questionNumber.innerHTML = "Вопрос №" + (currentQuiz+1)
        // questionCount.innerHTML = "Вопрос №" + currentQuiz
    } else {
        startEnd.style.display = "flex"
        questionNumber.style.display = "none"
        quizHeader.style.display = "none"
        finishBlock.style.display = "flex"
        finishCorrect.innerText = score
        finishCount.innerText = quizData[subject].length;
        resultSubject.innerHTML = quizData[subject][0].type

    }
}

function deselectAnswers() {
    answerEls.forEach((e) => {
        e.checked = false;
    });
    loadQuiz();
}

function getSelected() {
    answerEls.forEach((e) => {
        if (e.checked) {
            if (e.id == quizData[subject][currentQuiz].correct) {
                score++;
            }
        }
    });

    currentQuiz++;
    deselectAnswers();
}

submitBtn.addEventListener("click", () => {
    let active = false
    answerEls.forEach((e) => {
        if (e.checked) {
            active = true
        }
    });


    if (currentQuiz < quizData[subject].length && active) {
        getSelected();
    }
    else if (!active) {
    }
    else {
        location.reload();
    }
});
submitBtnMob.addEventListener("click", () => {
    let active = false
    answerEls.forEach((e) => {
        if (e.checked) {
            active = true
        }
    });


    if (currentQuiz < quizData[subject].length && active) {
        getSelected();
    }
    else if (!active) {
    }
    else {
        location.reload();
    }
});

startBtn.addEventListener("click", () => {
    quizStart.style.display = "none"
    // quiz.style.display = "flex"
    // questionCount.style.display = "block"
    // questionAnswer.style.display = "block"
    choiceSubjectContainer.style.display = "flex"
});

// finishBtn.addEventListener("click", () => {
//     location.reload();
// });

choiceEnglish.addEventListener("click", () => {
    subject = 0
    quiz.style.display = "flex"
    questionAnswer.style.display = "block"
    choiceSubjectContainer.style.display = "none"
    loadQuiz()
})
choiceBiology.addEventListener("click", () => {
    subject = 1
    quiz.style.display = "flex"
    questionAnswer.style.display = "block"
    choiceSubjectContainer.style.display = "none"
    startEnd.style.display = "none"
    loadQuiz()
})