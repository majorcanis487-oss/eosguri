const btnNao = document.getElementById("nao");
const btnSim = document.getElementById("sim");

const gato = document.getElementById("gato");

const mensagem = document.getElementById("mensagem");
const aviso = document.getElementById("aviso");

const printMsg = document.getElementById("printMsg");

let tamanho = 1;
let fugas = 0;

/* MENSAGEM DIA/NOITE */

const hora = new Date().getHours();

if(hora >= 6 && hora < 18){

    mensagem.textContent =
    "☀️ Um sorvete com você seria perfeito agora.";

}else{

    mensagem.textContent =
    "🌙 Um date noturno com você seria perfeito.";
}

/* GATO PISCANDO */

setInterval(() => {

    gato.innerHTML =
    "😸<div class='coracao-gato'>❤️</div>";

    setTimeout(() => {

        gato.innerHTML =
        "😺<div class='coracao-gato'>❤️</div>";

    },300);

},3000);

/* BOTÃO NÃO FUGINDO */

function fugir(){

    fugas++;

    tamanho += 0.15;

    btnSim.style.transform =
    `scale(${tamanho})`;

    btnSim.style.animation =
    "piscar .3s 2";

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
    "absolute";

    btnNao.style.left =
    x + "px";

    btnNao.style.top =
    y + "px";

    if(fugas === 5){

        aviso.textContent =
        "😼 Tá, você venceu... mas o SIM é mais bonito.";
    }
}

btnNao.addEventListener(
    "mouseenter",
    fugir
);

/* BOTÃO SIM */

btnSim.addEventListener(
    "click",
    () => {

        window.location.href =
        "https://www.instagram.com/caleb_joorg/";

    }
);

/* BRINCADEIRA DO PRINT */

document.addEventListener(
    "visibilitychange",
    () => {

        if(document.hidden){

            printMsg.style.display =
            "block";

            printMsg.textContent =
            "📸 Hmmm... parece que alguém gostou e foi tirar print 😏";
        }
    }
);

/* CONSOLE */

console.log(`
╔══════════════════════════════╗
║      Oi Maria Luisa ❤️       ║
║                              ║
║  Se abriu o console, já      ║
║  está curiosa 😏             ║
║                              ║
║      Clique no SIM 💖        ║
╚══════════════════════════════╝
`);