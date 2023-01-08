const optionOne = document.getElementById('op1');
const optionTwo = document.getElementById('op2');
const optionThree = document.getElementById('op3');
const optionFour = document.getElementById('op4');
const previous = document.getElementById('prevBtn');
const next = document.getElementById('nextBtn');
const question = document.getElementById('questionText')




const questions = [
    {   id: 0,
        text: 'How many provinces are there in Canada?',
        options:
         [
                '10 provinces',
                '13 provinces',
                '12 provinces',
                '10 provinces and 3 territories'
          ],
        answer: 3

    },

    {   id: 1,
        text: 'What is the name of the Capital of Canada?',
        options:
         [
                'Vancouver',
                'Ottawa',
                'Toronto',
                'Montreal'
          ],
        answer: 2

    },

    {   id: 2,
        text: 'What is the most popular sport in Canada?',
        options:
         [
                'Skiig',
                'Snowboard',
                'Baseball',
                'Hockey'
          ],
        answer: 3

    },

    {   id: 3,
        text: 'What is the coldest ever recorded temperature in Canada?',
        options:
         [
                '-63°C',
                '-75°C',
                '-51°C',
                '-45°C'
          ],
        answer: 0

    },

]


function beginQuiz(id){
    //id=0;
    question.innerText = questions[id].text;


    optionOne.innerText = questions[id].options[0];
    optionTwo.innerText = questions[id].options[1]
    optionThree.innerText = questions[id].options[2]
    optionFour.innerText = questions[id].options[3]


}



const options = document.querySelectorAll('.btn');
console.log(options)


beginQuiz(0);

optionOne.addEventListener('click', op1);
optionTwo.addEventListener('click', op2);
optionThree.addEventListener('click', op3);
optionFour.addEventListener('click', op4);
previous.addEventListener('click', prevBtn);
next.addEventListener('click', nextBtn);