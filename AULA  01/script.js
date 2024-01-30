const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoAvancar = document.getElementById('avancar');
const botaoVoltar = document.getElementById('voltar');
const nomeCapitulo = document.getElementById('capitulo');

const  numeroCapitulos = 10;
let taTocando = 0;
let capitulo = 1;

function  tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}
function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');
}
function tocarOuPausar() {
    if(taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}
function trocarNomeCapitulo(){
    nomeCapitulo.innerHTML = 'Capítulo ' + capitulo;
}

function proximoCapitulo(){
    if(capitulo < numeroCapitulos){
        capitulo += 1;
    } else {
        capitulo  = 1;
    }
    audioCapitulo.src = "./books/dom-casmurro/"+capitulo+".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeCapitulo();
}
function voltarCapitulo(){
    if(capitulo === 1){
        capitulo = numeroCapitulos;
    } else {
        capitulo -= 1;
    }
    audioCapitulo.src = "./books/dom-casmurro/"+capitulo+".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeCapitulo();
}
botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximoCapitulo);
botaoVoltar.addEventListener('click', voltarCapitulo);
