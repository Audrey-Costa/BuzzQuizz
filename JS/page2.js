function answerChoose(element) {
    //Cria uma array com os elementos das 4 opções de resposta.
    let row = element.parentNode.querySelectorAll(".nonChoiced")

    //Variável da div de clareamento.
    let div = element.querySelector(".nonChoiced")
    div.classList.add("choice")
    //Variável do texto.
    let p = div.nextElementSibling
    row.forEach(function (element) {
        element.classList.remove("hide");
        //Se a resposta escolhida for a resposta certa fica verde, se não vermelho. (Não tenho certeza se tá funcionando).
        if (element.parentNode.classList.contains("true")) {
            p.classList.add("green")
        } else {
            p.classList.add("red")
        }
    })




}


