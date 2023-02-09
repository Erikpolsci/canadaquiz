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
prevQuestion.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})



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

    {   //id: 3,
        text: 'How much is the fine for jumping over Niagara Falls?',
        options:
         [
            {txt:'$10,000', answer:false},
            {txt:'$25,000', answer:true},
            {txt:'$5,000', answer:false},
            {txt:'$30,000', answer:false}
          ],
        

    },

    {   //id: 3,
        text: 'What is the name of the Canadian Prime Minister?',
        options:
         [
            {txt:'Joe Biden', answer:false},
            {txt:'Justin Bieber', answer:false},
            {txt:'Justin Trudeau', answer:true},
            {txt:'Tim Hortons', answer:false}
          ],
        

    },

    {   //id: 3,
        text: 'In which Canadian city was Cirque du Soleil created?',
        options:
         [
            {txt:'London', answer:false},
            {txt:'Guelph', answer:false},
            {txt:'Toronto', answer:false},
            {txt:'Quebec', answer:true}
          ],
        

    },

    {   //id: 3,
        text: 'How many liters of beer, on average, does a Canadian drink per year?',
        options:
         [
            {txt:'53 litres of beer per year', answer:true},
            {txt:'40 litres of beer per year', answer:false},
            {txt:'35 litres of beer per year', answer:false},
            {txt:'60 litres of beer per year', answer:false}
          ],
        

    },

]

function startGame () {
    
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
    const selectedBtn = e.target
    const correct = selectedBtn.dataset.answer
    setStatusClass(document.body, correct)
    Array.from(optionsContainer.children).forEach(button =>{
        setStatusClass(button, button.dataset.answer)
    })
    if(randomQuestion.length > currentQuestionIndex + 1){
        prevQuestion.classList.remove('hide')

    }else{
        start.innerText = 'Do it Again';
        start.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')

    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')


}