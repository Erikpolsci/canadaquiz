const optionOne = document.getElementById('op1');
const optionTwo = document.getElementById('op2');
const optionThree = document.getElementById('op3');
const optionFour = document.getElementById('op4');
const previous = document.getElementById('prevBtn');
const next = document.getElementById('nextBtn');
const question = document.getElementById('questionText')
const select = (element) => document.querySelector(element);





const questions = [
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


function beginQuiz(id){
    //id=0;
    question.innerText = questions[id].text;


    optionOne.innerText = questions[id].options[0].txt;
    optionTwo.innerText = questions[id].options[1].txt;
    optionThree.innerText = questions[id].options[2].txt
    optionFour.innerText = questions[id].options[3].txt

    optionOne.value = questions[id].options[0].answer;
    optionTwo.value = questions[id].options[1].answer;
    optionThree.value = questions[id].options[2].answer;
    optionFour.value = questions[id].options[3].answer;




}

const options = document.querySelectorAll('.btn');
    options.forEach((btn) =>{
        btn.addEventListener("click",(e) => {
            const options = e.currentTarget.dataset.btn;
            const answersOptions = questions.filter((questionOptions) => {
                //console.log(menuOption.foodType)
                if(questionOptions.answer === false){
                    select('btn').style.background = 'red'; 
                } else{
                    select('btn').style.background = 'green'; 

                }       
            });
            // //console.log(menuFoodType);
            // if(options.answer === true){
            //     select('btn').style.background = 'green'; 
            // } else {
            //     showOptionItems(menuFoodType)
            // }
        
        })
    })


//     select('.bagInfo--qttminus').addEventListener('click', () =>{
//         if(bagQtt > 1) {
//             bagQtt--
//             select('.bagInfo--qt').innerHTML = bagQtt
//         }
//     })

//     console.log('.bagInfo--qttadd')
// }
// }

beginQuiz(0);



