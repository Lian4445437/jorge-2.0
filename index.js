var botão = document.querySelector('#botão');
var resultado = document.querySelector('#resultado')

botão.addEventListener('click',apertar);

function apertar(){
    resultado.innerHTML = 'OBRIGADO POR LER ATÉ AQUI'
}

var link = document.querySelector('#cursoemvideo');

link.addEventListener('mouseover',passar);
link.addEventListener('mouseout',sair)

function passar(){
    link.style.color = "black";
}
function sair(){
    link.style.color = 'white'
}
