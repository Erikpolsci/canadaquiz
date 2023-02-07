const btnOptions = document.querySelectorAll('.btn')
const QText = document.querySelector('.question')
const prevQuestion = document.getElementById('prevBtn')
const start = document.getElementById('startBtn')
const container = document.getElementById('container-question')
const answers = document.getElementById('anwers')
const questionTitle = document.getElementById('questionText')
const optionsContainer = document.querySelector('.options')


let randomQuestion, currentQuestionIndex

start.addEventListener('click', startGame)



const questions = [
    {   //id: 0,
        text: 'How many provinces are there in Canada?',
        options:
         [
                {txt:'10 provinces', answer:false},
                {txt:'13 provinces', answer:false},
                {txt:'12 provinces', answer:false},
                {txt:'10 provinces and 3 territories', answer:true}
          ]
    

    },

    {   //id: 1,
        text: 'What is the name of the Capital of Canada?',
        options:
         [
                {txt:'Vancouver', answer:false},
                {txt:'Ottawa', answer:true},
                {txt:'Toronto', answer:false},
                {txt:'Montreal', answer:false}
          ],

    },

    {   //id: 2,
        text: 'What is the most popular sport in Canada?',
        options:
         [
            {txt:'Skiig', answer:false},
            {txt:'Snowboard', answer:false},
            {txt:'Baseball', answer:false},
            {txt:'Hockey', answer:true}
          ],
       

    },

    {   //id: 3,
        text: 'What is the coldest ever recorded temperature in Canada?',
        options:
         [
            {txt:'-63°C', answer:true},
            {txt:'-75°C', answer:false},
            {txt:'-51°C', answer:false},
            {txt:'-45°C', answer:false}
          ],
        

    },

]

function startGame () {
    console.log('started')
    start.classList.add('hide')
    randomQuestion = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    container.classList.remove('hide')
    
    nextQuestion()
}

function nextQuestion() {
    resetState()
    showQuestion(randomQuestion[currentQuestionIndex])

}

function showQuestion(text){
    questionTitle.innerText = text.text;
    text.options.forEach(options => {
        const button = document.createElement('button')
        button.innerText = options.txt
        button.classList.add('btn')
        if (options.answer){
            button.dataset.answer = options.answer
        }
        button.addEventListener('click', selectedAnswer)
        optionsContainer.appendChild(button)
    });
    
}

function resetState(){
    prevQuestion.classList.add('hide')
    while(optionsContainer.firstChild){
        optionsContainer.removeChild
        (optionsContainer.firstChild)
    }
}

function selectedAnswer(e) {

}

