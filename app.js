console.log("Ylana")
console.log(20)
console.warn("atenção")
console.error("um erro")

/*
3 formas de criar variáveis 
var
let = vamos aprender essa
const
*/

let nome = "Ylana"
let idade = 20
let telefone = null
console.log(nome, idade)
nome = "Ylana Pereira"
console.log(nome)

let nomeCompleto = ""
nomeCompleto = prompt("Informe seu nome completo")
console.log(nomeCompleto)
//alert("Seja bem vindo(a) " + nomeCompleto)
//document.write("Seja bem vindo(a) " + nomeCompleto)
let cor = prompt("Informe uma cor: \n 1 azul \n 2 vermelho \n 3 preto \n 4 branco \n 5 rosa \n 6 laranja")
let corDeFundo = null

if(cor == "1"){
    corDeFundo = "blue"
}else if(cor == "2"){
    corDeFundo = "red"
}else if(cor == "3"){
    corDeFundo = "black"
}else if(cor == "4"){
    corDeFundo = "white"
}else if(cor == "5"){
    corDeFundo = "pink"
}else if(cor == "6"){
    corDeFundo = "orange"
}
else{
    corDeFundo = "Yellow"
}
document.body.style.backgroundColor = corDeFundo