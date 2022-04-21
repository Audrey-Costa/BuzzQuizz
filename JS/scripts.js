let c = console.log.bind(document)

let qTit;  //qTit armazena o valor do input do título do tema do quiz.
let qTiu;  //qTiu armazena o valor do input do url do tema do quiz.
let qTinQ; //qTinQ armazena o valor do input para escolha do número de perguntas.
let qTinL; //qTinL armazena o valor do input para escolha do número de níveis.


function validationQuizzTheme(){
    let qTitErr = ""
    let qTiuErr = ""
    let qTinQErr = ""
    let qTinLErr = ""
    qTit = document.querySelector(".quizzTheme .inputs .title").value 
    qTiu = document.querySelector(".quizzTheme .inputs .url").value
    qTinQ = document.querySelector(".quizzTheme .inputs .numberQuestions").value 
    qTinL = document.querySelector(".quizzTheme .inputs .numberLevels").value 

    c(qTiu.startsWith("https://"))
    if (qTit.length < 20 || qTit.length > 65){
        qTitErr = "\n -Um título com no mínimo 20 caracteres e no máximo 65 caracteres."
    }
    if (!qTiu.startsWith("https://")){
        qTiuErr = "\n -Uma URL válida."
    }
    if (qTinQ < 3){
        qTinQErr = "\n -Pelo menos 3 perguntas."
    }
    if (qTinL < 2){
        qTinLErr = "\n -Pelo menos 2 níveis."
    }
    if (qTitErr || qTiuErr || qTinQErr || qTinLErr){
        alert(`O quiz deve ter: ${qTitErr}${qTiuErr}${qTinQErr}${qTinLErr}`)
    }else{
        goToQuizzCreation()
        c("foi")
    }
}

function goToQuizzCreation(){
    document.querySelector(".quizzTheme").classList.add("hide")
    document.querySelector(".quizzQuestions").classList.remove("hide")
}