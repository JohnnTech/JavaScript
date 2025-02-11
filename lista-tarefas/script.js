const FORMULARIO_ENTRADA = document.getElementById('formulario-entrada');
const FORMULARIO_BOTAO = document.getElementById('formulario-botao');
const BD = [];
const LISTA_TAREFAS = document.getElementById('lista-tarefas');

function adicionarTarefa() {
    BD.push(FORMULARIO_ENTRADA.value);
    atualizarLista();
}

function atualizarLista() {
    LISTA_TAREFAS.innerHTML = '';
    BD.forEach((item)=> {
        let li = document.createElement('li');
        li.textContent = item;    
        LISTA_TAREFAS.appendChild(li)
    })
    console.log('Atualizei');
}
FORMULARIO_BOTAO.addEventListener('click', adicionarTarefa);
document.addEventListener('DOMContentLoaded', atualizarLista);