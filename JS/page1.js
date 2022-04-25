let c = console.log.bind(document);

if (localStorage.length === 0){
    localStorage.setItem("idQuizz", "[1719, 1718, 1700, 1699, 1680]")
}

let idList = [];
idList = localStorage.getItem("idQuizz");
c(idList)

const userQuizzes = document.querySelector(".userQuizz .quizzes")
const otherQuizzes = document.querySelector(".otherQuizz .quizzes")
function gerarQuizzes(response){
    for (let i = 0; i < response.data.length; i++){
        for (let j = 0; j < idList.length; j++){
            if (response.data[i].id === JSON.parse(idList)[j]){
                userQuizzes.innerHTML +=`<div class="quizz" onclick="goToAnswerQuizz(this)"><img src="${response.data[i].image}" alt="Não foi possível carregar esta imagem."><p>${response.data[i].title}</p><div class="degrade"></div></div>`
            }
        }
        otherQuizzes.innerHTML += `<div class="quizz" onclick="goToAnswerQuizz(this)"><img src="${response.data[i].image}" alt="Não foi possível carregar esta imagem."><p>${response.data[i].title}</p><div class="degrade"></div></div>`
    }
}

let promiseQuizzes = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes")
promiseQuizzes.then(gerarQuizzes)

function goToAnswerQuizz(element){
    document.querySelector(".quizzPlay").innerHTML = `<div><img src="${element}"> alt="Não foi possível carragar a imagem."</div>`
    document.querySelector(".home").classList.add("hide")
    document.querySelector(".quizzPlay").classList.remove("hide")
}

