const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "04 apr 2023"

function countDown() {
    const dataLancamento = new Date(lancamento);
    const hoje = new Date();

    const segundosTotal = (dataLancamento - hoje) / 1000;

    const finalDias = Math.floor (segundosTotal / 60 / 60 / 24);
    const finalHoras = Math.floor (segundosTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor (segundosTotal / 60) % 60;
    const finalSegundos = Math.floor (segundosTotal) % 60;

    dia.innerHTML = formatoTempo(finalDias)+'D';
    hora.innerHTML = formatoTempo(finalHoras)+'H';
    minuto.innerHTML = formatoTempo(finalMinutos)+'M';
    segundo.innerHTML = formatoTempo(finalSegundos)+'S';
}

function formatoTempo (tempo){
    return tempo < 10? '0'+tempo : tempo; // ? = if   : = senão 
}


countDown();
setInterval(countDown, 1000)