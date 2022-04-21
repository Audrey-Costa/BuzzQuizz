
 let inputTextQuestion = document.querySelector(".inputTextQuestion")
 let inputBackgroundColorQuestion = document.querySelector(".inputBackgroundColorQuestion")
 let inputAnswerCorrect = document.querySelector(".inputAnswerCorrect")
 let inputUrlImageAnswerCorrect = document.querySelector(".inputUrlImageAnswerCorrect")
 let inputAnswersIncorrect1 = document.querySelector(".inputAnswersIncorrect1")
 let inputAnswersIncorrect2 = document.querySelector(".inputAnswersIncorrect2")
 let inputAnswersIncorrect3 = document.querySelector(".inputAnswersIncorrect3")

ValidaQuizQuestions();


function ValidaQuizQuestions() {
    
  // Se o input de texto da questão for inválido, zera o input
   if (inputTextQuestion.value === undefined || !isNaN(inputTextQuestion.value) || inputTextQuestion.value.length < 20) {
   
    inputTextQuestion.value = "";
   } 

   if (inputBackgroundColorQuestion.value === undefined || inputBackgroundColorQuestion.value.length > 7 || inputBackgroundColorQuestion.value[0] !== "#") { // talvez fazer um for com array de A até F e 0 a 9
    inputBackgroundColorQuestion.value = "";
   }

   if (inputAnswerCorrect.value === undefined || inputAnswerCorrect.value.length === "") {
    inputTextQuestion.value = "";
   }
   if (inputUrlImageAnswerCorrect.value === undefined || !isNaN(inputUrlImageAnswerCorrect.value) || inputUrlImageAnswerCorrect.value.length >= 30) {
    inputUrlImageAnswerCorrect.value = "";
   }

    if((inputAnswersIncorrect1 || inputAnswersIncorrect2 || inputAnswersIncorrect3) !== undefined ){
        if (!isNaN(inputAnswersIncorrect1.value) || inputAnswersIncorrect1.value.length >= 30) {
            inputAnswersIncorrect1.value = "";
           }
        if (!isNaN(inputAnswersIncorrect2.value) || inputAnswersIncorrect2.value.length >= 30) {
            inputAnswersIncorrect2.value = "";
           }
        if (!isNaN(inputAnswersIncorrect3.value) || inputAnswersIncorrect3.value.length >= 30) {
            inputAnswersIncorrect3.value = "";
           }
         }
if((inputTextQuestion.value || inputBackgroundColorQuestion.value || inputAnswerCorrect.value || inputUrlImageAnswerCorrect.value || inputAnswersIncorrect1 || inputAnswersIncorrect2 || inputAnswersIncorrect3) === !undefined || ""){
   alert("tem algo errado") 
 
} else{
    
}

   
}