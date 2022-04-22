
let qQit;    // qQit armazena o valor título do tema quiz
let qQibc;   // qQibcErr armazena o valor do input para escolha da cor de fundo. 
let qQiac;   // qQiac armazena o valor do input da resposta correta   
let qQiuimgc;// armazena o vaalor do input da url imagem correta
let qQiai1;  // armazena o valor do input da resposta incorreta 1
let qQiai2;  // armazena o valor do input da resposta incorreta 2
let qQiai3;  // armazena o valor do input da resposta incorreta 3


function ValidaQuizQuestions() {
    // errors
    let qQitErr = "";
    let qQibcErr = "";
    let qQiACErr = "";
    let qQiImgErr = "";
    let qQiAI1Err = "";
    let qQiAI2Err = "";
    let qQiAI3Err = "";

    //inputs values 
    qQit = document.querySelector(".inputTextQuestion").value
    qQibc = document.querySelector(".inputBackgroundColorQuestion").value.toLowerCase()
    qQiac = document.querySelector(".inputAnswerCorrect").value
    qQiuimgc = document.querySelector(".inputUrlImageAnswerCorrect").value
    qQiai1 = document.querySelector(".inputAnswersIncorrect1").value
    qQiai2 = document.querySelector(".inputAnswersIncorrect2").value
    qQiai3 = document.querySelector(".inputAnswersIncorrect3").value



    if (qQit.length < 20 || qQit.length > 65) {
        qQitErr = "\n -Um título com no mínimo 20 caracteres e no máximo 65 caracteres.";
    }



    let qQibcFinal = ""

    const arrBCH = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    if (qQibc[0] === "#") {
        qQibcFinal += "#"
    }
    for (let i = 0; i < arrBCH.length; i++) {

        if (qQibc[1] === arrBCH[i]) {
            qQibcFinal += arrBCH[i]
        }
    }
    for (let i = 0; i < arrBCH.length; i++) {
        if (qQibc[2] === arrBCH[i]) {
            qQibcFinal += arrBCH[i]
        }
    }
    for (let i = 0; i < arrBCH.length; i++) {

        if (qQibc[3] === arrBCH[i]) {
            qQibcFinal += arrBCH[i]
        }
    }
    for (let i = 0; i < arrBCH.length; i++) {

        if (qQibc[4] === arrBCH[i]) {
            qQibcFinal += arrBCH[i]
        }
    } for (let i = 0; i < arrBCH.length; i++) {

        if (qQibc[5] === arrBCH[i]) {
            qQibcFinal += arrBCH[i]
        }
    }
    for (let i = 0; i < arrBCH.length; i++) {
        if (qQibc[6] === arrBCH[i]) {
            qQibcFinal += arrBCH[i]
        }
    }

    console.log(qQibcFinal)
    if (qQibcFinal.length !== 7) {
        qQibcErr = "\n -O código hexadecimal deve conter o seguinte padrão: '#F2F2F2' (A-F e 0-9) .";
    }




    if (qQitErr || qQibcErr) {
        alert(`O quiz deve ter: ${qQitErr} ${qQibcErr} `)
    }
    else {

    }
    ////////////////////////////////////////////////////////////////////////////
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

function validationQuizzTheme() {
    let qTitErr = "";
    let qTiuErr = "";
    let qTinQErr = "";
    let qTinLErr = "";
    qTit = document.querySelector(".quizzTheme .inputs .title").value;
    qTiu = document.querySelector(".quizzTheme .inputs .url").value;
    qTinQ = document.querySelector(".quizzTheme .inputs .numberQuestions").value;
    qTinL = document.querySelector(".quizzTheme .inputs .numberLevels").value;


    if (qTit.length < 20 || qTit.length > 65) {
        qTitErr = "\n -Um título com no mínimo 20 caracteres e no máximo 65 caracteres.";
    }
    if (!qTiu.startsWith("https://")) {
        qTiuErr = "\n -Uma URL válida para a imagem.";
    }
    if (qTinQ < 3) {
        qTinQErr = "\n -Pelo menos 3 perguntas.";
    }
    if (qTinL < 2) {
        qTinLErr = "\n -Pelo menos 2 níveis.";
    }
    //"" tem valor false
    //"asdas" tem valor true
    if (qTitErr || qTiuErr || qTinQErr || qTinLErr) {
        alert(`O quiz deve ter: ${qTitErr}${qTiuErr}${qTinQErr}${qTinLErr}`);
    } else {
        goToQuizzCreation();
    }
}

function goToQuizzCreation() {
    document.querySelector(".quizzTheme").classList.add("hide");
    document.querySelector(".quizzQuestions").classList.remove("hide");
}




function goToQuizzLevel() {
    document.querySelector(".quizzQuestions").classList.add("hide");
    document.querySelector(".quizzLevels").classList.remove("hide");
}

//VALIDAÇÃO LEVELS
function validationQuizzLevels() {
    let qLitErr = "";
    let qLinAErr = "";
    let qLiuErr = "";
    let qLdErr = "";
    let percentErr = 0;
    qLit = document.querySelector(".quizzLevels .text").value;
    qLinA = document.querySelector(".quizzLevels .percent").value;
    qLiu = document.querySelector(".quizzLevels .url").value;
    qLd = document.querySelector(".quizzLevels .description").value;

    if (qLit < 10) {
        qLitErr = "\n -Um título com no mínimo 10 caracteres.";
    }
    if (qLinA < 0 || qLinA > 100) {
        qLinAErr = "\n -Porcentagens de acerto definidas entre 0% e 100%.";
    }
    if (!qLiu.startsWith("https://")) {
        qLiuErr = "\n -Uma URL válida para a imagem.";
    }
    if (qLd < 30) {
        qLdErr = "\n -No mínimo 30 caracteres na descrição.";
    }
    if (!percentErr) {
        percentErr = "\n -Pelo menos um nível para 0 acertos."
    }
    if (qLitErr || qLinAErr || qLiuErr || qLdErr) {
        alert(`O nível deve ter: ${qLitErr}${qLinAErr}${qLiuErr}${qLdErr}${percentErr}`);
    } else {
        goToQuizzCreatedSucess();
    }
}

function goToQuizzCreatedSucess() {
    document.querySelector(".quizzLevels").classList.add("hide");
    document.querySelector(".quizzCreatedSucess").classList.remove("hide");
}




