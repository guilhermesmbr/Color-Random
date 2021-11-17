const lista_cores = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
const botao = document.querySelector("#botao_cor")

const span = document.querySelector("#texto_cor")

function numeroRandom() {
    return Math.floor(Math.random() * lista_cores.length)
}

function quandoClicar() {
    let contador = lista_cores.length - 1
    let cor = ["#"]
    while (contador >= 0) {
       let num = lista_cores[numeroRandom()]
       if (cor.length <= 6) {
           cor.push(num)
       }
        contador--
    }
    
    document.body.style.backgroundColor = cor.join("")
    span.textContent = cor.join("")
}

botao.addEventListener("click", quandoClicar)