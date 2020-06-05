var currentQuestion = 0;
var score = 0;

var questionEl = document.getElementById('question');
var container =  document.getElementById('quiz-container');

var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')
var nextButton = document.getElementById('nextButton');
var resultCount = document.getElementById('result');

// Create questions
var allQuestions = [
    {
    question:'Care este ce-a mai vorbita limba din lume ?', 
    option1: 'Engleza',
    option2: 'Spaniola',
    option3: 'Chineza',
    option4: 'Franceza',
    answer: "3"
    },
    {
    question: 'Cite zile are un an ?',
    option1: '355',
    option2: '365',
    option3: '366',
    option4: '356',
    answer: "2"
    },

    {
    question:'Care este valoarea lui pi ?', 
    option1: '3.12',
    option2: '4.13',
    option3: '3.14',
    option4: '3.31',
    answer: "3"
    },

    {
    question:'Citi centimetri(cm) are un metru(m) ?', 
    option1: '1000',
    option2: '100',
    option3: '200',
    option4: '99',
    answer: "2" 
    },
] 

var totQuestions = allQuestions.length;


// Populate the UI
function loadQuestion(questionIndex){

    var q = allQuestions[questionIndex];

    questionEl.textContent = (questionIndex + 1) + '. ' + q.question; 

    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}



// Loat Next Question
function loadNextQuestion(){

    var selectedOption = document.querySelector('input[type="radio"]:checked');

    // If nothing is selected display call alert();
    if (!selectedOption){
         alert('Alege o varianta de raspuns');
        return;
    }

    // reads the value from the input in html
    var answer = selectedOption.value;

    // Increment score
    if (allQuestions[currentQuestion].answer === answer){
        score += 10;
    }

    selectedOption.checked = false;
    currentQuestion++;

    if (currentQuestion === totQuestions -1) {
        nextButton.textContent = 'Finish'
    }
    if (currentQuestion === totQuestions) {
        container.style.display = 'none';
        resultCount.style.display = 'block';
        resultCount.textContent = 'Your Score: ' + score;
        return;
    }

    loadQuestion(currentQuestion);
};
loadQuestion(currentQuestion);