
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
let c = console.log.bind(document);

let qTit;  //qTit armazena o valor do input do título do tema do quiz.
let qTiu;  //qTiu armazena o valor do input da url do tema do quiz.
let qTinQ; //qTinQ armazena o valor do input para escolha do número de perguntas.
let qTinL; //qTinL armazena o valor do input para escolha do número de níveis.
let qLit;  //qLit armazena o valor do input do título do nível.
let qLinA; //qLina armazena o valor do input para a porcentagem de acertos.
let qLiu;  //qLiu armazena o valor do input da url do nível.
let qLd;   //qLd armazena o valor do input que descreve o nível

function validationQuizzTheme(){
    let qTitErr = "";
    let qTiuErr = "";
    let qTinQErr = "";
    let qTinLErr = "";
    qTit = document.querySelector(".quizzTheme .inputs .title").value;
    qTiu = document.querySelector(".quizzTheme .inputs .url").value;
    qTinQ = document.querySelector(".quizzTheme .inputs .numberQuestions").value; 
    qTinL = document.querySelector(".quizzTheme .inputs .numberLevels").value;

    if (qTit.length < 20 || qTit.length > 65){
        qTitErr = "\n -Um título com no mínimo 20 caracteres e no máximo 65 caracteres.";
    }
    if (!qTiu.startsWith("https://")){
        qTiuErr = "\n -Uma URL válida para a imagem.";
    }
    if (qTinQ < 3){
        qTinQErr = "\n -Pelo menos 3 perguntas.";
    }
    if (qTinL < 2){
        qTinLErr = "\n -Pelo menos 2 níveis.";
    }
    if (qTitErr || qTiuErr || qTinQErr || qTinLErr){
        alert(`O quiz deve ter: ${qTitErr}${qTiuErr}${qTinQErr}${qTinLErr}`);
    }else{
        goToQuizzCreation();
    }
}

function goToQuizzCreation(){
    document.querySelector(".quizzTheme").classList.add("hide");
    document.querySelector(".quizzQuestions").classList.remove("hide");
}

function goToQuizzLevel(){
    document.querySelector(".quizzQuestions").classList.add("hide");
    document.querySelector(".quizzLevels").classList.remove("hide");
}

function validationQuizzLevels(){
    let qLitErr = "";
    let qLinAErr = "";
    let qLiuErr = "";
    let qLdErr = "";
    let percentErr = 0;
    qLit = document.querySelector(".quizzLevels .text").value;
    qLinA = document.querySelector(".quizzLevels .percent").value; 
    qLiu = document.querySelector(".quizzLevels .url").value;
    qLd = document.querySelector(".quizzLevels .description").value;

    if (qLit < 10){
        qLitErr = "\n -Um título com no mínimo 10 caracteres.";
    }
    if (qLinA < 0 || qLinA > 100){
        qLinAErr = "\n -Porcentagens de acerto definidas entre 0% e 100%.";
    }
    if (!qLiu.startsWith("https://")){
        qLiuErr = "\n -Uma URL válida para a imagem.";
    }
    if (qLd < 30){
        qLdErr = "\n -No mínimo 30 caracteres na descrição.";
    }
    if (!percentErr){
        percentErr = "\n -Pelo menos um nível para 0 acertos."
    }
    if (qLitErr || qLinAErr || qLiuErr || qLdErr){
        alert(`O nível deve ter: ${qLitErr}${qLinAErr}${qLiuErr}${qLdErr}${percentErr}`);
    }else{
        goToQuizzCreatedSucess();
    }
}

function goToQuizzCreatedSucess(){
    document.querySelector(".quizzLevels").classList.add("hide");
    document.querySelector(".quizzCreatedSucess").classList.remove("hide");
}
