const Tarefa = require('./modelo');

async function adicionarTarefa(nome) {
const tarefa = new Tarefa(nome)
try{
    await tarefa.init();
    await tarefa.inserir();
    return tarefa;
}catch(error) {
    console.error(
        "Erro ao adicionar a tarefa:", error
    );
    throw error;
}
}

async function buscarTarefa() {
    try {

    
    await tarefa.init();
    await tarefa.buscar()

    const tarefa = new Tarefa();
    return tarefa;
    }catch(error){
        console.error(
            "Erro ao buscar tarefa:", error
        );
        throw error;
    }
}

async function atualizarTarefa(nome, concluida) {
  const tarefa = new Tarefa(nome);
  try {
    await tarefa.init();
    const encontrada = await tarefa.buscar();

    if (encontrada) {
      tarefa.nome = nome;
      tarefa.concluida = concluida;
      await tarefa.alterar();
    } else {
      console.log(`Tarefa "${nome}" não encontrada.`);
    }
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    throw error;
  }
}

 async function removerTarefa() {
    try{
        const tarefa = new Tarefa()
        await tarefa.init();
        const encontrada = await tarefa.buscar();
        if(encontrada){
            await tarefa.deletar();
        }
        else{
            console.log(
                `Tarefa "${nome}" não encontrada.`
            );
        }

    }catch(error){
        console.error(
            "Error ao Deletar:", error
        )
        throw error;
    }
    
};

module.exports = { adicionarTarefa, buscarTarefa, atualizarTarefa, removerTarefa }