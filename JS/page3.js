//let c = console.log.bind(document);

//Carrega a página do tema do quizz.
function goToQuizzCreator() {
    document.querySelector(".home").classList.add("hide")
    document.querySelector(".quizzCreator").classList.remove("hide")
}

let qTit;  //qTit armazena o valor do input do título do tema do quiz.
let qTiu;  //qTiu armazena o valor do input da url do tema do quiz.
let qTinQ; //qTinQ armazena o valor do input para escolha do número de perguntas.
let qTinL; //qTinL armazena o valor do input para escolha do número de níveis.
let qLit;  //qLit armazena o valor do input do título do nível.
let qLinA; //qLina armazena o valor do input para a porcentagem de acertos.
let qLiu;  //qLiu armazena o valor do input da url do nível.
let qLid;  //qLid armazena o valor do input que descreve o nível.

//Verifica se os inputs estão preenchidos corretamente, apresenta um alert em caso negativo e chama a função goToQuizzQuestion.
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
    if (qTitErr || qTiuErr || qTinQErr || qTinLErr) {
        alert(`O quiz deve ter: ${qTitErr}${qTiuErr}${qTinQErr}${qTinLErr}`);
    } else {
        goToQuizzQuestions();
    }
}

//Carrega a página com a quantidade de questões pedidas pelo usuário e o botão de ir para os níveis.
//Ao clicar para abrir uma pŕoxima pergunta chama-se a função openInputQuestions(this) passando o elemento como variável.
function goToQuizzQuestions() {
    for (let i = 1; i < Number(qTinQ); i++) {
        document.querySelector(".quizzQuestions").innerHTML +=
            `<div class="inputs">
        <div class="option">
            <p>Pergunta ${i + 1}</p>
            <img src="Img/Vector.svg" onclick="openInputQuestions(this)" class="">
        </div>
        <div class="question hide">
            <div>
            <input class="inputTextQuestion" type="text" placeholder="Texto da pergunta">
            <input class="inputBackgroundColorQuestion" type="text" placeholder="Cor de fundo da pergunta">
            </div>
        </div>
        <div class="answerCorrect hide">
            <p>Resposta correta</p>
            <input class="inputAnswerCorrect" type="text" placeholder="Resposta correta">
            <input class="inputUrlImageAnswerCorrect" type="text" placeholder="URL da imagem">
        </div>
        <div class="answersIncorrect hide">
            <p>Respostas incorretas</p>
            <div>
                <input  class="inputAnswersIncorrect" type="text" placeholder="Resposta incorreta 1">
                <input class="inputImgAnswersIncorrect" type="text" placeholder="URL da imagem 1">
            </div>
            <div>
                <input  class="inputAnswersIncorrect" type="text" placeholder="Resposta incorreta 2">
                <input class="inputImgAnswersIncorrect" type="text" placeholder="URL da imagem 2">
            </div>
            <div>
                <input  class="inputAnswersIncorrect" type="text" placeholder="Resposta incorreta 3">
                <input class="inputImgAnswersIncorrect" type="text" placeholder="URL da imagem 3">
            </div>
        </div>
    </div>`
    }
    //Ao clicar no botão chama a função validationQuizzQuestions.
    document.querySelector(".quizzQuestions").innerHTML += `<button onclick="validationQuizQuestions(this)" class="button">Prosseguir para Criar Níveis</button>`
    document.querySelector(".quizzTheme").classList.add("hide");
    document.querySelector(".quizzQuestions").classList.remove("hide");
}

let qQit;         // qQit armazena o valor título do tema quiz.
let qQibc;        // qQibcErr armazena o valor do input para escolha da cor de fundo. 
let qQiac;        // qQiac armazena o valor do input da resposta correta.   
let qQiuimgc;     // armazena o vaalor do input da url imagem correta.
let arrqQiai;     // armazena o valor dos inputs das respostas INCORRETAS.
let arrqQiuimgci; // armazena o valor dos inputs das imagens INCORRETAS.

//Verifica se as entradas das perguntas estão preenchidas corretamente.
function validationQuizQuestions(element) {
    // errors
    let qQitErr = "";
    let qQibcErr = "";
    let qQiACErr = "";
    let qQiImgErr = "";
    let qQiAIErr = "";
    let qQiImgIErr = "";
    let qQiAIImgErr = "";

    //inputs values 
    qQit = document.querySelector("    .quizzQuestions .show .inputTextQuestion").value
    qQibc = document.querySelector(".quizzQuestions .show .inputBackgroundColorQuestion").value.toLowerCase()
    qQiac = document.querySelector(".quizzQuestions .show .inputAnswerCorrect").value
    qQiuimgc = document.querySelector(".quizzQuestions .show .inputUrlImageAnswerCorrect").value
    arrqQiai = document.querySelectorAll(".quizzQuestions .show .inputAnswersIncorrect")
    arrqQiuimgci = document.querySelectorAll(".quizzQuestions .show .inputImgAnswersIncorrect")



    if (qQit.length < 20 || qQit.length > 65) {
        qQitErr = "\n -Um título com no mínimo 20 caracteres e no máximo 65 caracteres.";
    }



    let qQibcFinal = ""

    const arrBCH = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    if (qQibc[0] === "#") {
        qQibcFinal += "#"
    } else {
        qQibcErr = "\n -O código hexadecimal deve conter o seguinte padrão: '#F2F2F2' (A-F e 0-9) .";
    }
    for (let i = 0; i < arrBCH.length; i++) {
        if (qQibc[0] === arrBCH[i]) {
            qQibcFinal += arrBCH[i]
        }
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
    for (let i = 0; i < arrBCH.length; i++) {
        if (qQibc[7] === arrBCH[i]) {
            qQibcFinal += arrBCH[i]
        }
    }



    if (qQibcFinal.length !== 7) {
        qQibcErr = "\n -O código hexadecimal deve conter o seguinte padrão: '#F2F2F2' (A-F e 0-9) .";
    }
    if (qQiac.length < 1 || qQiac.length > 65) {
        qQiACErr = "\n -Deve haver ao menos uma resposta CERTA";
    }

    if (!qQiuimgc.startsWith("https://")) {
        qQiImgErr = "\n -Uma URL válida para a imagem CERTA.";
    }

    if (!arrqQiai[0].value && !arrqQiai[1].value && !arrqQiai[2].value) {
        qQiAIErr = "\n -Deve haver ao menos uma resposta ERRADA";
    }

    // se o começo do index de array for diferente de https://, ele retorna true e cai no if 
    if (!arrqQiuimgci[0].value.startsWith("https://") && !arrqQiuimgci[1].value.startsWith("https://") && !arrqQiuimgci[2].value.startsWith("https://")) {
        qQiImgIErr = "\n -Uma URL válida para a imagem ERRADA.";
    }

    // se o título for tiver valor e a url não tiver, ele irá entrar no if
    if (!!arrqQiai[0].value && !arrqQiuimgci[0].value || !!arrqQiai[1].value && !arrqQiuimgci[1].value || !!arrqQiai[2].value && !arrqQiuimgci[2].value) {
        qQiAIImgErr = "\n -As respostas devem ter seus respectivos títulos e imagens";
    }

    if (qQitErr || qQibcErr || qQiACErr || qQiImgErr || qQiAIErr || qQiImgIErr || qQiAIImgErr) {
        alert(`O quiz deve ter: ${qQitErr} ${qQibcErr} ${qQiACErr} ${qQiImgErr} ${qQiAIErr} ${qQiImgIErr}  ${qQiAIImgErr}`)
        return false;
    }
    else {
        answers = [{
            text: qQiac,
            image: qQiuimgc,
            isCorrectAnswer: true
        },
        {
            text: arrqQiai[0].value,
            image: arrqQiuimgci[0].value,
            isCorrectAnswer: false
        },
        {
            text: arrqQiai[1].value,
            image: arrqQiuimgci[1].value,
            isCorrectAnswer: false
        },
        {
            text: arrqQiai[2].value,
            image: arrqQiuimgci[2].value,
            isCorrectAnswer: false
        }]
        let count = 1;
        for (let i = 0; i < arrqQiai.length; i++) {

            if (arrqQiai[i].value === "") {
                answers.splice(i + count, 1)
                count--;
            }
        }
        //Verifica se o elemento clicado é o botão de finalizar quizz. Se sim chama a função goToquizzLevel
        if (element.classList.contains("button")) {
            question = {
                title: qQit,
                color: qQibc,
                answers: answers
            }

            questionNumber = document.querySelector(".quizzQuestions .show p").innerText
            questions.splice(questionNumber[questionNumber.length - 1] - 1, 1, question)
            goToQuizzLevel();
        } else {
            question = {
                title: qQit,
                color: qQibc,
                answers: answers

            }

            questionNumber = document.querySelector(".quizzQuestions .show p").innerText
            questions.splice(questionNumber[questionNumber.length - 1] - 1, 1, question)
            return true;
        }


    }
    ////////////////////////////////////////////////////////////////////////////
}

function openInputQuestions(element) {
    let grandfather = element.parentNode.parentNode; //Recebe o elemento "avô" do icone.
    //Se a validação da pergunta passar fecha a pergunta atual e abre a pergunta clicada.
    if (validationQuizQuestions(element)) {
        //Fecha pergunta atual.
        document.querySelector(".quizzQuestions .show .question").classList.add("hide")
        document.querySelector(".quizzQuestions .show .answerCorrect").classList.add("hide")
        document.querySelector(".quizzQuestions .show .answersIncorrect").classList.add("hide")
        document.querySelector(".quizzQuestions .show img").classList.remove("hide")
        document.querySelector(".quizzQuestions .show").classList.remove("show")
        //Abre próxima pergunta.
        grandfather.classList.add("show")
        grandfather.querySelector("img").classList.add("hide")
        grandfather.querySelector(".question").classList.remove("hide")
        grandfather.querySelector(".answerCorrect").classList.remove("hide")
        grandfather.querySelector(".answersIncorrect").classList.remove("hide")


    }
}

//Carrega a página com a quantidade de níveis pedidos pelo usuário e o botão de finalizar quizz.
//Ao clicar para abrir um pŕoximo nível chama-se a função openInputLevel(this) passando o elemento como variável.
function goToQuizzLevel() {
    if (questions.length === Number(qTinQ)) {
        for (let i = 1; i < Number(qTinL); i++) {
            document.querySelector(".quizzLevels").innerHTML +=
                `<div class="inputs">
            <div class="option">
                <p>Nível ${i + 1}</p>
                <img src="Img/Vector.svg" onclick="openInputLevel(this)" class="">
            </div>
            <div class="level hide">
                <input class="text" type="text" placeholder="Título do nível">
                <input class="percent" type="number" placeholder="% de acerto míníma">
                <input class="url" type="url" placeholder="URL da imagem do nível">
                <input class="description" type="text" placeholder="Descrição do nível">
            </div>
        </div>`
        }
        //Ao clicar no botão chama a função validationQuizzQuestions.
        document.querySelector(".quizzLevels").innerHTML += `<button onclick="validationQuizzLevels(this)" class="button">Finalizar Quiz</button>`
        document.querySelector(".quizzQuestions").classList.add("hide");
        document.querySelector(".quizzLevels").classList.remove("hide");
    } else {
        alert("Por favor preencha todas as perguntas.")
    }
}

function openInputLevel(element) {
    let grandfather = element.parentNode.parentNode; //Recebe o elemento "avô" do icone.
    //Se a validação do nível passar fecha o nível atual e abre o nível clicado.
    if (validationQuizzLevels(element)) {
        //Fecha nível atual.
        document.querySelector(".quizzLevels .show .level").classList.add("hide")
        document.querySelector(".quizzLevels .show img").classList.remove("hide")
        document.querySelector(".quizzLevels .show").classList.remove("show")
        //Abre o próximo nível.
        grandfather.classList.add("show")
        grandfather.querySelector("img").classList.add("hide")
        grandfather.querySelector(".level").classList.remove("hide")
    }

}

let percent = 1;

//Verifica se as entradas dos níveis estão preenchidos corretamente.
function validationQuizzLevels(element) {
    let qLitErr = "";
    let qLinAErr = "";
    let qLiuErr = "";
    let qLidErr = "";
    let percentErr = "";
    qLit = document.querySelector(".quizzLevels .show .text").value;
    qLinA = document.querySelector(".quizzLevels .show .percent").value;
    qLiu = document.querySelector(".quizzLevels .show .url").value;
    qLid = document.querySelector(".quizzLevels .show .description").value;
    if (qLit.length < 10) {
        qLitErr = "\n -Um título com no mínimo 10 caracteres.";
    }
    if (qLinA < 0 || qLinA > 100) {
        qLinAErr = "\n -Porcentagens de acerto definidas entre 0% e 100%.";
    }
    if (Number(qLinA) === 0) {
        percent = 0;
    }
    if (!qLiu.startsWith("https://")) {
        qLiuErr = "\n -Uma URL válida para a imagem.";
    }
    if (qLid.length < 30) {
        qLidErr = "\n -No mínimo 30 caracteres na descrição.";
    }
    if (percent !== 0) {
        percentErr = "\n -Pelo menos um nível para 0 acertos."
    }
    if (qLitErr || qLinAErr || qLiuErr || qLidErr || percentErr) {
        alert(`O nível deve ter: ${qLitErr}${qLinAErr}${qLiuErr}${qLidErr}${percentErr}`);
        percent = 1;
        return false;
    } else {
        //Verifica se o elemento clicado é o botão de finalizar quizz. Se sim chama a função goToquizzCreatedSucess
        if (element.classList.contains("button")) {
            //Adiciona os valores do input ao objeto level.
            level = {
                title: qLit,
                image: qLiu,
                text: qLid,
                minValue: Number(qLinA)
            }
            //Adiciona o objeto level à Array Levels
            levelNumber = document.querySelector(".quizzLevels .show p").innerText
            levels.splice(levelNumber[levelNumber.length - 1] - 1, 1, level)
            goToQuizzCreatedSucess()
        } else {
            //Adiciona os valores do input ao objeto level.
            level = {
                title: qLit,
                image: qLiu,
                text: qLid,
                minValue: Number(qLinA)
            }
            //Adiciona o objeto level à Array Levels
            levelNumber = document.querySelector(".quizzLevels .show p").innerText
            levels.splice(levelNumber[levelNumber.length - 1] - 1, 1, level)
            return true;
        }
    }
}

//Carrega a página pós criação do quizz, e cria o objeto final (quizz) que recebe os parâmetros dos inputs do tema e as listas Questions e Levels. 
function goToQuizzCreatedSucess() {
    if (levels.length === Number(qTinL)) {
        for (let i = 0; i < levels.length; i++) {
            if (levels[i].minValue === 0) {
                quizz = {
                    title: qTit,
                    image: qTiu,
                    questions: questions,
                    levels: levels
                }
                sendApiObject()
                document.querySelector(".quizzLevels").classList.add("hide");
                document.querySelector(".quizzCreatedSucess .imgQuizzCreatedSucess").innerHTML = `<img src="${qTiu}" alt="Não foi possível carregar a imagem, use uma url de imagem.">
                <p>
                    ${qTit}
                </p>`
                document.querySelector(".quizzCreatedSucess").classList.remove("hide");
                return
            }
        }
        alert("É obrigatório existir pelo menos 1 nível cuja % de acerto mínima seja 0%")

    } else {
        alert("Por favor preencha todos os níveis")
    }

}



function backToHome() {
    document.querySelector(".quizzCreatedSucess").classList.add("hide");
    document.querySelector(".home").classList.remove("hide");
}




/*
let qTit;  //qTit armazena o valor do input do título do tema do quiz.
let qTiu;  //qTiu armazena o valor do input da url do tema do quiz.
// quizzUserCretedprincipal titulo e image


let qTinQ; //qTinQ armazena o valor do input para escolha do número de perguntas.
// numero de objetos dentro de questions 

let qTinL; //qTinL armazena o valor do input para escolha do número de níveis.
// numero de objetos dentro de levels

let qLit;  //qLit armazena o valor do input do título do nível.
let qLinA; //qLina armazena o valor do input para a porcentagem de acertos.
let qLiu;  //qLiu armazena o valor do input da url do nível.
let qLid;   //qLid armazena o valor do input que descreve o nível
//levels


let qQit;         // qQit armazena o valor título da pergunta
//title question
let qQibc;        // qQibcErr armazena o valor do input para escolha da cor de fundo. 
//background color
let qQiac;        // qQiac armazena o valor do input da resposta CORRETA   
let qQiuimgc;     // armazena o vaalor do input da url imagem CORRETA
// resposta e imagem respostas corretas

let arrqQiai;     // armazena o valor dos inputs das respostas INCORRETAS
let arrqQiuimgci; // armazena o valor dos inputs das imagens INCORRETAS 
// resposta e imagem respostas incorretas
*/





const urlPostAPI = "https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes"
function sendApiObject() {

    const promisse = axios.post(urlPostAPI, quizz);
    promisse.then(c(promisse));
    promisse.catch(error);
}


function error(erro) {

    if (erro === 400) {
        alert("Este quizz ja foi adicionado")
    }

}
/*
const question =

{
    title: qQit, color: qQibc, answers: [ //inputs do quizQuestion

        {
            text: qQiac,
            image: qQiuimgc,
            isCorrectAnswer: true
        },

        {
            text: arrqQiai[0].value,
            image: arrqQiuimgci[0].value,
            isCorrectAnswer: false
        }
    ]
};

const objectLevels = { //inputs de quizLevels
    title: qLit,
    image: qLiu,
    text: qLd,
    minValue: qLinA
};

quizzUserCreated.questions.objectQuestion.answers[0] //dados da resposta certa


quizzUserCreated.questions.objectQuestion.answers[1]// dados da resposta errada
quizzUserCreated.questions.objectQuestion.answers[2]// dados da resposta errada
quizzUserCreated.questions.objectQuestion.answers[3]// dados da resposta errada

quizzUserCreated.questions.splice(0, 1, objectQuestion)
*/

// Questions -> question -> answers -> correct and incorrect data
let questions = []

let question;

let level;

let levels = []

let quizz;

let levelNumber;

