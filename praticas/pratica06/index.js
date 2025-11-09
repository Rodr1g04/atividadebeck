const readline = require('readline-sync');
const controlador = require('./controlador');


function menu() {
  console.log('\n===== MENU DE TAREFAS =====');
  console.log('1 - Adicionar tarefa');
  console.log('2 - Buscar tarefa');
  console.log('3 - Atualizar tarefa');
  console.log('4 - Remover tarefa');
  console.log('5 - Sair');
  console.log('============================');
}


function escolherOpcao(opcao) {
  switch (opcao) {
    case '1':
      const nomeAdd = readline.question('Digite o nome da tarefa: ');
      controlador.adicionarTarefa(nomeAdd);
      break;
    case '2':
      const nomeBusca = readline.question('Digite o nome da tarefa: ');
      controlador.buscarTarefa(nomeBusca);
      break;
    case '3':
      const nomeAtt = readline.question('Digite o nome da tarefa: ');
      const concluida = readline.question('A tarefa foi concluída? (sim/nao): ') === 'sim';
      controlador.atualizarTarefa(nomeAtt, concluida);
      break;
    case '4':
      const nomeDel = readline.question('Digite o nome da tarefa: ');
      controlador.removerTarefa(nomeDel);
      break;
    case '5':
      console.log('Saindo...');
      process.exit();
      break;
    default:
      console.log(' Opção inválida. Tente novamente.');
  }
}


async function main() {
  while (true) {
    menu(); 
    const opcao = readline.question('Escolha uma opcao: ');
    await escolherOpcao(opcao); 
  }
}

main();
