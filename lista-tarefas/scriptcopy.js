const FORMULARIO_ENTRADA = document.getElementById('formulario-entrada'); //guarda o elemento na variavel, para ser utilizado posteriormente.
const FORMULARIO_BOTAO = document.getElementById('formulario-botao'); //guarda o elemento na variavel, para ser utilizado posteriormente.
const LISTA_TAREFAS = document.getElementById('lista-tarefas'); //guarda o elemento na variavel, para ser utilizado posteriormente.

function carregaBD() { // carrega o banco de dados
    const BD = localStorage.getItem("bd") || `{"listaDeTarefas":[]}`; //faz a requisição para o armazenamento local. se não existir, retorna um modelo padrão
    bdJson = JSON.parse(BD); // transforma a string BD em um objeto JSON.
    return bdJson; // retorna o resultado para a função que chamou o carregaBD
}

function salvaBD(bd) { // função responsavel por salvar os dados no banco de dados
    bdJson = JSON.stringify(bd); // transforma o JSON em uma string
    localStorage.setItem("bd", bdJson); // salva o bdJson no armazenamento local    
}


function adicionarTarefa() { // função para adicionar uma nova tarefa
    const BD = carregaBD(); // requisita o banco de dados atual
    
    const mensagem = { //cria um objeto JSON com a mensagem do INPUT
        mensagem: FORMULARIO_ENTRADA.value
    };
    
    BD.listaDeTarefas.push(mensagem); // adiciona o objeto mensagem para o banco de dados listaDeTarefas, que definimos na linha 6
    salvaBD(BD); // salva as modificações
    atualizarLista(); // atualiza o front para mostrar a nova lista;
}

function atualizarLista() { // função responsavel por atualizar o front com a lista vinda do banco de dados
    const BD = carregaBD(); // requisita o banco de dados
    LISTA_TAREFAS.innerHTML = ''; // limpa a lista no front para evitar duplicação de dados

    if (BD.listaDeTarefas.length <= 0) { // verifica se o banco de dados tem alguma mensagem salva, caso não tenha, retorna uma mensagem no front.
        LISTA_TAREFAS.innerHTML = "nenhuma tarefa encontrada.";
        return; // termina a execução da função atualizaLista(), isso evita da função tentar fazer alguma ação que não exista ou que não seja permitida.
    }
      BD.listaDeTarefas.forEach((item) => { // o BD.listaDeTarefas retorna um array com as mensagens salvas, o forEach faz um loop passando por cada uma destas mensagens, e armazenando seus valores na variavel item.
        let li = document.createElement("li"); // cria um elemento LI
        li.textContent = item.mensagem; // adiciona o valor da mensagem neste elemento LI.
        LISTA_TAREFAS.appendChild(li); // inclui o elemento LI dentro da tag UL com ID LISTA_TAREFAS, que definimos na linha 3
      });
}
FORMULARIO_BOTAO.addEventListener('click', adicionarTarefa); //adiciona um evento no FORMULARIO_BOTAO para quando seja clicado, ele deve chamar a função adicionarTarefa
document.addEventListener('DOMContentLoaded', atualizarLista); // adiciona um evento no DOM da pagina, para que quando a pagina seja carregada, ela atualize a lista de tarefas no front.