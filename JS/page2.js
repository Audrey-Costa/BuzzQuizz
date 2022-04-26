function answerChoose(element) {
    //Cria uma array com os elementos das 4 opções de resposta.
    let row = element.parentNode.parentNode.querySelectorAll(".nonChoiced")

    //Variável da div de clareamento.
    let div = element.parentNode.querySelector(".nonChoiced")
    div.classList.add("choice")
    //Variável do texto.
    let p = div.nextElementSibling
    row.forEach(function (element) {
        c(element)
        if (element.parentNode.classList.contains("true")){
            element.parentNode.querySelector("p").classList.add("green")
        }else{
            element.parentNode.querySelector("p").classList.add("red")
        }
        element.classList.remove("hide");
        //Se a resposta escolhida for a resposta certa fica verde, se não vermelho. (Não tenho certeza se tá funcionando).
        //element.nextElementSibling.classList.add("red")
        c(element.parentNode.classList)
    })
    if (element.parentNode.classList.contains("true")) {
        p.classList.add("green")
    }




}


