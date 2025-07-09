const questions = [
    {
        question: "Apa kepanjangan CSS",
        answers: [
            {text: "Coi Coding Slurr", correct: false},
            {text: "Cascading Style Sheets", correct: true},
            {text: "Codingding dung", correct: false},
            {text: "Tung tung tung sahur", correct: false},
        ]
    },
       {
        question: "Pancasila ke-3",
        answers: [
            {text : "Ketuhanan yang maha Esa", correct: false},
            {text : "Kemanusiaan yang adil dan beradab", correct: false},
            {text : "Persatuan Indonesia", correct: true},
            {text : "Persatuan dan kesatuan", correct: false},
        ]
    },
    {
        question: "Berikut ini apa yang ada di diri rapa",
        answers: [
            {text : "Pinter, baik, rajin, soleh, ganteng & keren", correct: true},
            {text : "Uang", correct: false},
            {text : "Baju partai", correct: false},
            {text : "Ga keren", correct: false},
        ]
    },
    {
        question: "Siapa absen ke-37 di absen PPLG Tahun angkatan 3",
        answers: [
            {text : "Rafandra Pramudya Alfarisie", correct: false},
            {text : "Siti Aulia Kuswandi", correct: false},
            {text : "Rizky Ramadhan", correct: false},
            {text : "Raihan al khalifi", correct: true},
        ]
    },
     {
        question: "Hari kamis seragam apa?",
        answers: [
            {text : "Pramuka", correct: true},
            {text : "Batik", correct: false},
            {text : "Bebas", correct: false},
            {text : "Baju bola", correct: false},
        ]
    }, 
    {
        question: "Berikut adl siswa kelas X PPLG, kecuali",
        answers: [
            {text : "Gibran", correct: false},
            {text : "Hfidz", correct: false},
            {text : "David", correct: true},
            {text : "Caesar", correct: false},
        ]
    }, 
    {
        question: "Ada berapa mapel produktif X PPLG",
        answers: [
            {text : "1", correct: false},
            {text : "2", correct: false},
            {text : "3", correct: false},
            {text : "4", correct: true},
        ]
    },
     {
        question: "Sepatu warna apa yang boleh di kenakan di nubas",
        answers: [
            {text : "merah", correct: false},
            {text : "hitam", correct: true},
            {text : "putih", correct: false},
            {text : "biru langit", correct: false},
        ]
    },
     {
        question: "Rukun islam ada berapa",
        answers: [
            {text : "6", correct: false},
            {text : "5", correct: true},
            {text : "3", correct: false},
            {text : "4", correct: false},
        ]
    },
     {
        question: "Hari Kiamat bertepatan dengan hari?",
        answers: [
            {text : "Hari senin", correct: false},
            {text : "Hari Jumat", correct: true},
            {text : "Hari sabtu", correct: false},
            {text : "Hari hari ku bersama mu", correct: false},
        ]
    },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button"); 
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

backButton.addEventListener("click", () => {
    window.location.href = "/menu dashboard/index2.html";
});

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){ 
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    backButton.style.display = "none";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text; 
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

    backButton.style.display = "none";
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Jawaban kamu bener ${score} dari ${questions.length} soal!`;
    nextButton.innerHTML = "Ulang ah"
    nextButton.style.display = "block";
      backButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz(); 