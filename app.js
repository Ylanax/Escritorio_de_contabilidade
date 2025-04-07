function fnSaudacao() {
    let nomeCompleto = ""
    nomeCompleto = prompt("Informe seu nome completo")
    alert("Seja bem vindo(a) " + nomeCompleto + " ao meu site!")
}
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

function fnMostrarHoraAtual() {

    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();
    const HoraAtual = `${horas}:${minutos}:${segundos}`;
    console.log("Hora atual:", HoraAtual);
    alert("Hora atual: " + HoraAtual )
}

function fnTrocarTitulo(){
    document.getElementById("logo-texto1").innerText = "Título novo do meu site"
}

function fnIdiomaPortugues(){
    document.getElementById("menu1").innerText = "INICIAL"
    document.getElementById("menu2").innerText = "SERVIÇOS"
    document.getElementById("menu3").innerText = "CONTATO"
}

function fnIdiomaIngles(){
    document.getElementById("menu1").innerText = "HOME"
    document.getElementById("menu2").innerText = "SERVICES"
    document.getElementById("menu3").innerText = "CONTACT"
}

function fnIdiomaItaliano(){
    document.getElementById("menu1").innerText = "INIZIALE"
    document.getElementById("menu2").innerText = "SERVIZI"
    document.getElementById("menu3").innerText = "CONTATTO"
}

function fnIdiomaAlemao(){
    document.getElementById("menu1").innerText = "STARTSEITE"
    document.getElementById("menu2").innerText = "DIENSTLEISTUNGEN"
    document.getElementById("menu3").innerText = "KONTAKT"
}

function fnBanner1(){
    document.getElementById("banner").src="imagens/banner1.jpg"
}

function fnBanner2(){
    document.getElementById("banner").src="imagens/banner2.jpg"
}

function fnBanner3(){
    document.getElementById("banner").src="imagens/banner3.jpg"
}

function fnDestaque1Trocar(){
    document.getElementById("destaque1").src="imagens/destaque1.png"
}