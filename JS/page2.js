function answerChoose(element) {
    let row = element.parentNode.parentNode.parentNode.querySelectorAll(".nonChoiced")
    row.forEach(function (element) { element.classList.remove("hide") });
    let div = element.nextElementSibling
    div.classList.add("choice")
    let p = div.nextElementSibling
    c(row)

    if (true) {
        p.classList.add("green")
    }
}


function getQuizzChoose() {



}