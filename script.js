const btnNao = document.getElementById("nao");
const btnSim = document.getElementById("sim");

const gato = document.getElementById("gato");

const mensagem = document.getElementById("mensagem");
const aviso = document.getElementById("aviso");

let tamanho = 1;
let fugas = 0;

const hora = new Date().getHours();

if(hora >= 6 && hora < 18){
    mensagem.textContent =
    "☀️ Tomar um sorvete com você seria tudo de bom.";
}else{
    mensagem.textContent =
    "🌙 Um filminho com você agora seria tudo de bom.";
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

    fugas++;

    tamanho += 0.15;

    btnSim.style.transform =
    `scale(${tamanho})`;

    const largura =
    window.innerWidth -
    btnNao.offsetWidth - 20;

    const altura =
    window.innerHeight -
    btnNao.offsetHeight - 20;

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

    if(fugas === 1){
        aviso.textContent =
        "😮 Opa... você realmente tentou apertar NÃO.";
    }

 if(fugas === 3){
        aviso.textContent =
       "😔 Isso magoa um pouquinho...";
   
    }

    if(fugas === 4){
        aviso.textContent =
       "💔 Meu pobre coração pixelado.";
    }

    if(fugas === 8){
        aviso.textContent =
        "😵 Acho que estamos perdendo o controle da situação.";
    }

    if(fugas === 10){
        aviso.textContent =
        "😭 O gatinho está decepcionado.";
    }

    if(fugas === 15){
        aviso.textContent =
        "😅 Você é mais persistente do que eu imaginava.";
    }

    if(fugas === 25){
        aviso.textContent =
        "🤨 Ainda procurando o NÃO?";
    }

    if(fugas === 35){
        aviso.textContent =
        "😂 O SIM já está ficando gigante.";
    }

    if(fugas === 45){
        aviso.textContent =
        "😵 Acho que estamos perdendo o controle da situação.";
    }

    if(fugas === 55){
        aviso.textContent =
        "🏳️ Tá bom, eu desisto...";
    }

    if(tamanho >= 4.5){

        aviso.textContent =
        "🫢 O botão NÃO foi esmagado pelo SIM.";

        btnNao.style.display =
        "none";
    }
}

btnNao.addEventListener(
    "mouseenter",
    fugir
);

btnNao.addEventListener(
    "touchstart",
    (e) => {
        e.preventDefault();
        fugir();
    }
);

btnNao.addEventListener(
    "click",
    () => {

        tamanho += 2;

        btnSim.style.transform =
        `scale(${tamanho})`;

        aviso.textContent =
        "😏 Boa tentativa... mas o SIM ficou enorme.";

        fugir();
    }
);

btnSim.addEventListener(
    "click",
    () => {

        aviso.textContent =
        "🥰 Sabia que você escolheria essa opção.";

        setTimeout(() => {

            window.location.href =
            "https://www.instagram.com/caleb_joorg/";

        },1000);

    }
);

console.log("❤️ Boa sorte ❤️");
