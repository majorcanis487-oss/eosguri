const btnNao = document.getElementById("nao");
const btnSim = document.getElementById("sim");

const gato = document.getElementById("gato");

const mensagem = document.getElementById("mensagem");
const aviso = document.getElementById("aviso");
const printMsg = document.getElementById("printMsg");

let tamanho = 1;
let fugas = 0;
let printDetectado = false;


const hora = new Date().getHours();

if(hora >= 6 && hora < 18){
    mensagem.textContent =
    "☀️ Um sorvete com você seria perfeito agora.";
}else{
    mensagem.textContent =
    "🌙 Um date noturno com você seria perfeito.";
}


setInterval(() => {

    gato.innerHTML =
    "😸<div class='coracao-gato'>❤️</div>";

    setTimeout(() => {

        gato.innerHTML =
        "😺<div class='coracao-gato'>❤️</div>";

    },300);

},3000);

function fugir(){

    if(printDetectado) return;

    fugas++;

    tamanho += 0.1;

    btnSim.style.transform =
    `scale(${tamanho})`;

    const largura =
    window.innerWidth -
    btnNao.offsetWidth;

    const altura =
    window.innerHeight -
    btnNao.offsetHeight;

    const x =
    Math.random() * largura;

    const y =
    Math.random() * altura;

    btnNao.style.position =
    "fixed";

    btnNao.style.left =
    x + "px";

    btnNao.style.top =
    y + "px";

    if(fugas === 3){
        aviso.textContent =
        "🤨 Tem certeza?";
    }

    if(fugas === 6){
        aviso.textContent =
        "😼 Você está insistindo bastante...";
    }

    if(fugas === 10){
        aviso.textContent =
        "😂 Ainda tentando?";
    }

    if(fugas === 15){
        aviso.textContent =
        "💖 O botão SIM continua ali...";
    }

    if(fugas === 20){
        aviso.textContent =
        "🏆 Nível máximo de teimosia desbloqueado.";
    }
}

btnNao.addEventListener("mouseover", fugir);
btnNao.addEventListener("touchstart", fugir);

btnSim.addEventListener("click", () => {

    aviso.textContent =
    "🥰 Sabia que você escolheria essa opção.";

});

document.addEventListener("visibilitychange", () => {

    if(document.hidden && !printDetectado){
        printDetectado = true;
        btnNao.style.display = "none";
        printMsg.style.display =
        "block";

        printMsg.textContent =
        "👀 O botão NÃO perdeu seus privilégios... agora só existe uma escolha.";

        aviso.textContent =
        "😏 Parece que o destino decidiu por você.";
    }

});

console.log("❤️ Boa sorte ❤️");
