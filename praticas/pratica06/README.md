Prática 6

1. Preparação do VSCode para a realização da prática.

a) Abra o Visual Studio Code (VSCode) no seu computador.

b) No canto superior esquerdo, clique em "File" (Arquivo) e selecione "Open Folder…" (Abrir Pasta…).

c) Escolha a pasta onde foi clonado o repositório do Github. Clique em "Select Folder" (Selecionar Pasta).

d) Abra o terminal no VSCode clicando em "Terminal" e selecionando "New Terminal" (Novo Terminal).

e) Execute o comando "git" para listar a ramificação atual. Certifique que esteja na ramificação "develop".

f) Caso não esteja na ramificação "develop", execute o comando "git" para mudar para a ramificação correta.

g) No painel esquerdo do VSCode, clique na pasta "praticas".

h) Acima da lista de arquivos e pastas, clique no ícone "New Folder" (Nova Pasta).

i) Nomeie a nova pasta como "pratica06" e pressione ENTER para confirmar.


2. Criação de um projeto Node.js.

a) No terminal do VSCode, execute o comando "cd" para acessar a pasta "pratica06" ou clique com o botão direito do mouse sobre a pasta e selecione "Open in Integrated Terminal" (Abrir no Terminal Integrado).

b) Execute o comando "npm" para criar um arquivo "package.json".

c) Execute o comando "npm" para instalar o pacote "mongodb".

d) Abra o arquivo "package.json" no VSCode e altere o script "test" para executar o comando "node index.js".


3. Criação de uma conta no MongoDB Atlas. Caso já tenha criado pular para o item 4.

a) Abra seu navegador e vá para o site do MongoDB Atlas (https://mongodb.com).

b) Clique no botão "Start Free" (Comece Grátis) ou "Try Free" (Experimente Grátis) para criar uma conta.

c) Preencha o formulário com seu nome, endereço de e-mail e senha. Clique em "Get Started Free". 

d) Após criar sua conta, você será direcionado para a página de criação de um novo cluster. Escolha a configuração gratuita (Free).

e) Selecione um provedor de nuvem (AWS, Google Cloud ou Azure) e escolha uma região próxima de onde seus aplicativos serão executados. Clique em "Create Deployment".

f) Na guia "Database Access", clique em "Add New Database User" (Adicionar Novo Usuário do Banco de Dados).

g) Preencha o nome de usuário e a senha para o novo usuário. Certifique-se de conceder os privilégios necessários para o usuário (Read and write any database). Clique em "Add User" (Adicionar Usuário).

h) Na guia "Network Access", clique em "Add IP Address" (Adicionar Endereço IP). 

i) Você pode adicionar seu endereço IP atual ou permitir o acesso de qualquer endereço IP (não recomendado para produção). Clique em "Confirm" (Confirmar).

j) Na página inicial do MongoDB Atlas, clique em "Databases". Clique no botão "Connect" (Conectar) do cluster que você acabou de criar.

k) Selecione "MongoDb via VS Code". Copie a string de conexão que inclui seu nome de usuário, senha e o nome do banco de dados.


4. Criação de um modelo Tarefa.

a) Crie um arquivo "database.js" dentro da pasta "pratica06".

b) Abra o arquivo "database.js" e importe a classe MongoClient do pacote "mongodb".

c) Declare uma constante "url" que deve receber a string de conexão gerada pelo MongoDB Atlas.

d) Declare uma constante "client" que deve receber uma instância de MongoClient passando a constante url no construtor.

e) Declare uma função assíncrona "conectarDb()" sem parâmetros que deve chamar o método "client.connect()" e retornar "client.db('agenda')".

f) Exporte a função "conectarDb()" para ser utilizada por outros módulos. 

g) Crie um arquivo "modelo.js" dentro da pasta "pratica06".

h) Abra o arquivo "modelo.js" e importe a função "conectarDb" do arquio "database.js".

i) Declare uma classe Tarefa e adicione uma propriedade "db" inicializando com "null".

j) Adicione uma propriedade "collection" inicializando com "null".

k) Implemente um construtor para a classe Tarefa que deve inicializar as propriedades "nome" e "concluida" com respectivos valores dos parâmetros passados no construtor. Atribua o valor "null" à propriedade "id".

l) Implemente um método assíncrono "init()" que deve inicializar a propriedade "db" com o retorno da função assíncrona "conectarDb()" e inicializar a propriedade "collection" com o retorno da função "db.collection('tarefas')".

m) Implemente uma função assíncrona "inserir()".

n) Dentro da função "inserir()" chame o método assíncrono "collection.insertOne()" passando o parâmetro o objeto { this.nome, this.concluida }. Salve o retorno do método na constante "resultado".

o) Dentro da função "inserir()" atribua o valor de "resultado.insertedId" à propriedade "this.id".

p) Implemente uma função assíncrona "alterar()". 

q) Dentro da função "alterar()" chame o método "collection.updateOne()" passando como parâmetros o objeto { _id: this.id } e objeto { $set: { nome: this.nome, concluida: this.concluida } }.

r) Implemente uma função assíncrona "deletar()". 

s) Dentro da função "deletar()" chame a método "collection.deleteOne()" passando como parâmetro o objeto { nome: this.nome }.

t) Implemente uma função assíncrona "buscar()".

u) Dentro da função "buscar()" chame o método "collection.findOne()" passando como parâmetro o objeto { nome: this.nome }. Salve o retorno do método na constante "resultado".

v) Dentro da função "buscar()" atualize as propriedades de tarefa com o valor de cada propriedade de "resultado".

w) Exporte a classe Tarefa para ser utilizada por outros módulos.


5. Criação de um controlador para operações CRUD.

a) Crie um arquivo "controlador.js" dentro da pasta "pratica06".

b) Abra o arquivo "controlador.js" e importe a classe Tarefa do arquivo "modelo.js".

c) Declare a função "adicionarTarefa()" que deve receber o parâmetro "nome".

d) Dentro da função crie uma instância de Tarefa na constante "tarefa" passando o valor do parâmetro "nome" no construtor da classe.

e) Faça a função "adicionarTarefa()" chamar os métodos assíncronos "init()" e "inserir()" de tarefa.

f) Declare a função "buscarTarefa()" que deve receber o parâmetro "nome".

g) Dentro da função crie uma instância de Tarefa na constante "tarefa" passando o valor do parâmetro "nome" no construtor da classe.

h) Faça a função "buscarTarefa()" chamar os métodos assíncronos "init()" e "buscar()" de tarefa.

i) Faça a função "buscarTarefa()" retornar a constante "tarefa".

j) Declare a função "atualizarTarefa()" que deve receber os parâmetros "nome" e "concluida".

k) Dentro da função crie uma instância de Tarefa na constante "tarefa" passando o valor do parâmetro "nome" no construtor da classe.

l) Faça a função "atualizarTarefa()" chamar os métodos assíncronos "init()" e "buscar()" de tarefa. Se encontrar a tarefa, altere as propriedades de tarefa com os valores dos parâmetros.

m) Faça a função "atualizarTarefa()" chamar o método assíncrono "alterar()" de tarefa.

n) Declare a função "removerTarefa()" que deve receber o parâmetro "nome".

o) Dentro da função crie uma instância de Tarefa na constante "tarefa" passando o valor do parâmetro "nome" no construtor da classe.

p) Faça a função "removerTarefa()" chamar os métodos assíncronos "init()" e  "buscar()" de tarefa. Se encontrar a tarefa, chame o método assíncrono "deletar()" de tarefa.

q) Exporte todas as funções para serem utilizadas por outros módulos. 


6. Criação de um menu principal.

a) Crie um arquivo "index.js" dentro da pasta "pratica06".

b) Abra o arquivo "index.js" e importe o pacote "readline-sync" na constante "readline".

c) Importe o arquivo "controlador.js" na constante "controlador".

d) Declare a função "menu()" sem parâmetro. Faça a função imprimir as opções: 1. Adicionar contato; 2 - Buscar contato; 3 - Atualizar contato; 4 - Remover contato; 5 - Sair.

e) Declare a função "escolherOpcao()" que deve receber o parâmetro "opcao".

f) Faça a função "escolherOpcao()" testar o parâmetro "opcao" com os valores do menu.

g) Caso a opção seja 1, chame a função "readline.question()" para ler o nome da tarefa. Em seguida, chame a função "adicionarTarefa()" do controlador com o valor lido.

h) Caso a opção seja 2, chame a função "readline.question()" para ler o nome da tarefa. Em seguida, chame a função "buscarTarefa()" do controlador com o valor lido. Imprima as propriedades da tarefa.

i) Caso a opção seja 3, chame a função "readline.question()" para ler o nome e concluida da tarefa. Em seguida, chame a função "atualizarTarefa()" do controlador com os valores lidos.

j) Caso a opção seja 4, chame a função "readline.question()" para ler o nome do tarefa. Em seguida, chame a função "removerTarefa()" do controlador com o valor lido.

k) Caso a opção seja 5, chame a função "process.exit()" para encerrar a execução.

l) Declare a função "main()" e crie um laço infinito. 

m) Dentro do laço, chame a função "readline.question()" para ler a opção do menu. Em seguida, chame a função "escolherOpcao()" com o valor lido.

n) Faça a chamada a função "main()".

o) No terminal do VS Code, execute o comando "npm" para executar o script "test".


7. Envio de alterações locais para um repositório remoto do GitHub.

a) Abra um novo terminal no VSCode.

b) Execute o comando "git" para listar a ramificação atual. Certifique que esteja na ramificação "develop".

c) Caso não esteja na ramificação "develop", execute o comando "git" para mudar para a ramificação.

d) No terminal, execute o comando "git" para verificar a situação do repositório local.

e) Execute o comando "git" para adicionar os arquivos modificados ao repositório local.

f) Execute o comando "git" para efetivar a alteração com uma mensagem descritiva "Adicionando códigos da prática 6".

g) Execute o comando "git" para atualizar a ramificação "develop" com o repositório remoto.

h) Execute o comando "git" para enviar as alterações na ramificação "develop" para o repositório remoto.

i) Atualize a página do repositório do GitHub no navegador para verificar se as alterações foram enviadas.

