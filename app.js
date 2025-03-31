let nomeCompleto = ""
nomeCompleto = prompt("Informe seu nome completo")
console.log(nomeCompleto)

function fnTrocarCorDeFundo() {
    let cor = prompt("Informe uma cor: \n 1 azul \n 2 vermelho \n 3 preto \n 4 branco \n 5 rosa \n 6 laranja")
    let corDeFundo = null

    if (cor == "1") {
        corDeFundo = "blue"
    } else if (cor == "2") {
        corDeFundo = "red"
    } else if (cor == "3") {
        corDeFundo = "black"
    } else if (cor == "4") {
        corDeFundo = "white"
    } else if (cor == "5") {
        corDeFundo = "pink"
    } else if (cor == "6") {
        corDeFundo = "orange"
    }
    else {
        corDeFundo = "Yellow"
    }
    document.body.style.backgroundColor = corDeFundo
}

fnTrocarCorDeFundo()