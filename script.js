const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');

const progressBar = document.getElementById('progress');



audioCapitulo.addEventListener('timeupdate', () => {
    const progress = (audioCapitulo.currentTime / audioCapitulo.duration * 100);
    progressBar.style.width = progress + '%';
});



const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;


function tocarFaixa(){
    audioCapitulo.play(); //play é uma ação que toca o audio, ela é presente no JavaScript
    botaoPlayPause.classList.remove('bi-play-fill');
    botaoPlayPause.classList.add('bi-pause-fill');
}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-fill');
    botaoPlayPause.classList.add('bi-play-fill');
}

function tocarOuPausar(){
    if(taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    } else{
        pausarFaixa();
        taTocando = 0;
    }
}



function trocarNomeFaixa(){
    nomeCapitulo.innerText = 'Capitulo ' + capituloAtual;
}

function proximaFaixa(){
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    } else {
    capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3"; 
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

function voltarFaixa(){
    if(capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    } else {
    capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3"; 
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}




botaoPlayPause.addEventListener('click', tocarOuPausar); //quando acionar a função, nesse caso seria para quando ocorrer o click e nessa ação vai ocorrer a ação da função tocarFaixa
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);


