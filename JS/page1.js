let c = console.log.bind(document);

const quizzes = document.querySelector(".otherQuizz .quizzes")
function gerarOtherQuizzes(response){
    c(response.data)
    for (let i = 0; i < response.data.length; i++){
        quizzes.innerHTML += `<div class="quizz" onclick="goToAnswerQuizz(this)"><img src="${response.data[i].image}" alt="Não foi possível carregar esta imagem."><p>${response.data[i].title}</p><div class="degrade"></div></div>`
        c(document.querySelector(".otherQuizz .quizzes").innerHTML)
    }
}

let promiseQuizzes = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes")
c(promiseQuizzes)
promiseQuizzes.then(gerarOtherQuizzes)

function goToAnswerQuizz(element){
    document.querySelector(".home").classList.add("hide")
    document.querySelector(".quizzPlay").classList.remove("hide")
}

