const options = document.querySelectorAll('.btn')
const QText = document.querySelector('.question')
const prevQuestion = document.getElementsById('prevBtn')
const nextQuestion = document.getElementById('nextBtn')
const container = document.querySelector('.container')

const randomQuestion, currentQuestionIndex


let questions = [
    {   id: 0,
        text: 'How many provinces are there in Canada?',
        options:
         [
                {txt:'10 provinces', answer:false},
                {txt:'13 provinces', answer:false},
                {txt:'12 provinces', answer:false},
                {txt:'10 provinces and 3 territories', answer:true}
          ]
    

    },

    {   id: 1,
        text: 'What is the name of the Capital of Canada?',
        options:
         [
                {txt:'Vancouver', answer:false},
                {txt:'Ottawa', answer:true},
                {txt:'Toronto', answer:false},
                {txt:'Montreal', answer:false}
          ],

    },

    {   id: 2,
        text: 'What is the most popular sport in Canada?',
        options:
         [
            {txt:'Skiig', answer:false},
            {txt:'Snowboard', answer:false},
            {txt:'Baseball', answer:false},
            {txt:'Hockey', answer:true}
          ],
       

    },

    {   id: 3,
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



function nextQuestion() {
    randomQuestion = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    showQuestion(randomQuestion[currentQuestionIndex])
}

function selectedAnswer() {

}