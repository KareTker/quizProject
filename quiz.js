

// object section
    const question = {
        "question": "How many elements are in the periodic table?",
        "answer": "118",
        "secondAnswer": "117",
        "thirdAnswer": "116",
        "fourthAnswer": "115"
    }
    const secondQuestion = {
        "question": "How many bones do we have in an ear?",
        "answer": "3",
        "secondAnswer": "1",
        "thirdAnswer": "2",
        "fourthAnswer": "5"
    }
    const thirdQuestion = {
        "question": "What is the world's fastest bird? ",
        "answer": "The Peregrine Falcon",
        "secondAnswer": "The 7 winged Turkey",
        "thirdAnswer": "Ostrich",
        "fourthAnswer": "Chicken"
    }
    const fourthQuestion = {
        "question": "What country has the highest life expectancy?",
        "answer": "Hong Kong",
        "secondAnswer": "France",
        "thirdAnswer": "Russia",
        "fourthAnswer": "Mexico"
    }


// Answer varibles
    var questionDisplay = document.getElementById('question').innerHTML = question.question;
    var answerOne = document.getElementById('answerOne').innerHTML = question.answer;
    var secondAnswer = document.getElementById('secondAnswer').innerHTML = question.secondAnswer;
    var thirdAnswer = document.getElementById('thirdAnswer').innerHTML = question.thirdAnswer;
    var fourthAnswer = document.getElementById('fourthAnswer').innerHTML = question.fourthAnswer;

// toast variables
    const toastTrigger = document.getElementById('ToastBtn');
    const popUp = document.getElementById('toast');
    const otherToastTrigger = document.getElementById('wrongAnswerToastBtn');
    const wrongAnswerPopUp = document.getElementById('wrongAnswerToast');
    const otherToastTrigger1 = document.getElementById('wrongAnswerToastBtn1');
    const wrongAnswerPopUp1 = document.getElementById('wrongAnswerToast1');
    const otherToastTrigger2 = document.getElementById('wrongAnswerToastBtn2');
    const nextBtn = document.getElementById('nextBtn');
//logic section
        function correctAnswer() {
            if (toastTrigger) {
                toastTrigger.addEventListener('click', () => {
                    const toast = new bootstrap.Toast(popUp)
        
                    toast.show()
                })
            }
        }  

        correctAnswer();

        function wrongAnswer() {
            if (otherToastTrigger) {
                otherToastTrigger.addEventListener('click', () => {
                    const toast = new bootstrap.Toast(wrongAnswerPopUp)
        
                    toast.show()
                })
        
            }
            if (otherToastTrigger1) {
                otherToastTrigger1.addEventListener('click', () => {
                    const toast = new bootstrap.Toast(wrongAnswerPopUp)
        
                    toast.show()
                })
        
            }
            if (otherToastTrigger2) {
                otherToastTrigger2.addEventListener('click', () => {
                    const toast = new bootstrap.Toast(wrongAnswerPopUp)
        
                    toast.show()
                })
        
            }
        } 
    
        wrongAnswer();

        function changeInData() {
            if(nextBtn) {
                nextBtn.addEventListener('click', () => {
                     questionDisplay = document.getElementById('question').innerHTML = secondQuestion.question;
                     answerOne = document.getElementById('answerOne').innerHTML = secondQuestion.answer;
                     secondAnswer = document.getElementById('secondAnswer').innerHTML = secondQuestion.secondAnswer;
                     thirdAnswer = document.getElementById('thirdAnswer').innerHTML = secondQuestion.thirdAnswer;
                     fourthAnswer = document.getElementById('fourthAnswer').innerHTML = secondQuestion.fourthAnswer;
                }) 
            }
        }
        changeInData();
        
        if(changeInData()) {
            nextBtn.addEventListener('click', () => {
                questionDisplay = document.getElementById('question').innerHTML = thirdQuestion.question;
                answerOne = document.getElementById('answerOne').innerHTML = thirdQuestion.answer;
                secondAnswer = document.getElementById('secondAnswer').innerHTML = thirdQuestion.secondAnswer;
                thirdAnswer = document.getElementById('thirdAnswer').innerHTML = thirdQuestion.thirdAnswer;
                fourthAnswer = document.getElementById('fourthAnswer').innerHTML = thirdQuestion.fourthAnswer;
           })
        }
            
        
        
        if(nextBtn) {
            nextBtn.addEventListener('click', () => {
                questionDisplay = document.getElementById('question').innerHTML = thirdQuestion.question;
                answerOne = document.getElementById('answerOne').innerHTML = thirdQuestion.answer;
                secondAnswer = document.getElementById('secondAnswer').innerHTML = thirdQuestion.secondAnswer;
                thirdAnswer = document.getElementById('thirdAnswer').innerHTML = thirdQuestion.thirdAnswer;
                fourthAnswer = document.getElementById('fourthAnswer').innerHTML = thirdQuestion.fourthAnswer;
           })
        }
        
        /*if(nextBtn) {
            nextBtn.addEventListener('click', () => {
                questionDisplay = document.getElementById('question').innerHTML = fourthQuestion.question;
                answerOne = document.getElementById('answerOne').innerHTML = fourthQuestion.answer;
                secondAnswer = document.getElementById('secondAnswer').innerHTML = fourthQuestion.secondAnswer;
                thirdAnswer = document.getElementById('thirdAnswer').innerHTML = fourthQuestion.thirdAnswer;
                fourthAnswer = document.getElementById('fourthAnswer').innerHTML = fourthQuestion.fourthAnswer;
           })
        }*/