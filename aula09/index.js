const Tarefa = require("./modelo");

async function main() {



    let tarefa = new Tarefa("Estudar");
    await tarefa.init();

    await tarefa.inserir();

    console.log(
        "tarefa criada com sucesso",
        tarefa.id,
        tarefa.nome,
        tarefa.concluida);

    tarefa = new Tarefa("Estudar REST");
    await tarefa.init();
    console.log(tarefa.id, tarefa.nome, tarefa.concluida);
    await tarefa.buscar();
    if(tarefa.id)
    {

    console.log("Tarefa encontrada com sucesso", tarefa.id, tarefa.nome, tarefa.concluida);}
    else{
        console.log("Tarefa não encontrada");
    }

    tarefa.nome = "trabalhar";
    tarefa.concluida = true;

    await tarefa.alterar();
    console.log("tarefa alterada com sucesso",
        tarefa.id,
        tarefa.nome,
        tarefa.concluida);


    await tarefa.remover();
    console.log(
        "tarefa removida com sucesso",
        tarefa.id,
        tarefa.nome,
        tarefa.concluida);
}

main();