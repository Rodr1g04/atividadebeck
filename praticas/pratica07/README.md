Prática 7

1. Preparação do VSCode para a realização da prática.

a) Abra o Visual Studio Code (VSCode) no seu computador.

b) No canto superior esquerdo, clique em "File" (Arquivo) e selecione "Open Folder…" (Abrir Pasta…).

c) Escolha a pasta onde foi clonado o repositório do Github. Clique em "Select Folder" (Selecionar Pasta).

d) Abra o terminal no VSCode clicando em "Terminal" e selecionando "New Terminal" (Novo Terminal).

e) Execute o comando "git" para listar a ramificação atual. Certifique que esteja na ramificação "develop".

f) Caso não esteja na ramificação "develop", execute o comando "git" para mudar para a ramificação correta.


2. Criação de um projeto Express para uma API REST.

a) No terminal do VSCode, execute o comando "cd" para acessar a pasta "praticas" ou clique com o botão direito do mouse sobre a pasta e selecione "Open in Integrated Terminal" (Abrir no Terminal Integrado).

b) Execute o comando "npx" para executar o pacote "express-generator" e criar um projeto "pratica07" sem o componente de visão.

c) Execute o comando "cd" para acessar a pasta "pratica07".

d) Execute o comando "npm" para instalar as dependências do projeto.

e) Execute o comando "npm" para instalar os pacotes "dotenv" e "mongoose" no projeto.

f) Execute o comando "npm" para instalar os pacotes "nodemon", "jest" e "supertest" como dependência de desenvolvimento.

g) Abra o arquivo "package.json" no VSCode e inclua o script "dev" para executar o comando "nodemon ./bin/www" e o script "test" para executar o comando "jest --watchAll"

h) Remova a pasta "public" do projeto e os arquivos da pasta "routes".

i) Crie as pastas "controllers”, "models" e "tests" dentro da pasta "pratica07".

j) Crie um arquivo ".env" na pasta "pratica07" e adicione as variáveis de ambiente atribuindo os valores para acessar o banco "pratica07" no MongoDB Atlas.

MONGODB_USER=
MONGODB_PASSWORD=
MONGODB_HOST=
MONGODB_DATABASE=pratica07

k) Abra o arquivo "app.js" e adicione a importação do pacote "dotenv" para carregar as variáveis de ambiente definidas no arquivo ".env".

l) Importe o pacote "mongoose" para conectar com o banco de dados MongoDB Atlas.

m) Chame o método "connect()" do mongoose passando como parâmetro a string de conexão composta pelas variáveis de ambiente MONGODB_USER:MONGODB_PASSWORD@MONGODB_HOST/MONGODB_DATABASE.

n) Remova do arquivo "app.js" as linhas de código desnecessárias para o desenvolvimento da API.

o) No terminal do VS Code, execute o comando "npm" para executar o script "dev".


3. Criação de um teste unitário para uma API REST.

a) Adicione um arquivo "produtosRouter.test.js" dentro da pasta "tests".

b) Abra o arquivo "produtosRouter.test.js" e importe o pacote do "supertest".

c) Importe a instância da aplicação Express a partir do arquivo "app.js".

d) Declare uma constante "request" atribuindo uma instância de requisição chamando a função "supertest()" passando como parâmetros a instância da aplicação Express.

e) Crie um suite de testes para o recurso /produtos através da função "describe()".

f) Crie um teste para verificar se uma chamada "POST /produtos" com um JSON { "nome": "Laranja", "preco": 10.0 } retorna o status "201" e um conteúdo do tipo JSON. Verifique se no corpo da resposta contém uma propriedade "_id", uma propriedade "nome" igual a "Laranja" e uma propriedade "preco" igual a "10.0". 

g) Salve o valor da propriedade "_id" retornado no corpo da resposta em uma variável para ser utilizado nos próximos testes (GET, PUT e DELETE).

h) Crie um teste para verificar se uma chamada "POST /produtos" sem um JSON e retorna o status "422" e um conteúdo do tipo JSON contendo a propriedade "msg" igual "Nome e preço do produto são obrigatórios".

i) Crie um teste para verificar se uma chamada "GET /produtos" retorna o status "200", um conteúdo do tipo JSON e um array de objetos no corpo da resposta.

j) Crie um teste para verificar se uma chamada "GET /produtos/${id}" retorna o status "200" e um conteúdo do tipo JSON contendo as propriedades "_id", "nome" e "preco" com os valores inseridos.

k) Crie um teste para verificar se uma chamada "GET /produtos/0" retorna o status "400" e um conteúdo do tipo JSON contendo a propriedade "msg" igual "Parâmetro inválido".

l) Crie um teste para verificar se uma chamada "GET /produtos/000000000000000000000000" retorna o status "404" e um conteúdo do tipo JSON contendo a propriedade "msg" igual "Produto não encontrado".

m) Crie um teste para verificar se uma chamada "PUT /produtos/${id}" com um JSON {"nome": "Laranja Pera", "preco": 18.00} retorna o status "200" e um conteúdo do tipo JSON contendo as propriedades "_id", "nome" e "preco" com os valores atualizados.

n) Crie um teste para verificar se uma chamada "PUT /produtos/${id}" sem um JSON e retorna o status "422" e um conteúdo do tipo JSON contendo a propriedade "msg" igual "Nome e preço do produto são obrigatórios".

o) Crie um teste para verificar se uma chamada "PUT /produtos/0" retorna o status "400" e um conteúdo do tipo JSON contendo a propriedade "msg" igual "Parâmetro inválido".

p) Crie um teste para verificar se uma chamada "PUT /produtos/000000000000000000000000" retorna o status "404" e um conteúdo do tipo JSON contendo a propriedade "msg" igual "Produto não encontrado".

q) Crie um teste para verificar se uma chamada "DELETE /produtos/${id}" retorna o status "204" e sem conteúdo.

r) Crie um teste para verificar se uma chamada "DELETE /produtos/0" retorna o status "400" e um conteúdo do tipo JSON contendo a propriedade "msg" igual "Parâmetro inválido".

s) Crie um teste para verificar se uma chamada "DELETE /produtos/${id}" retorna o status "404" e um conteúdo do tipo JSON contendo a propriedade "msg" igual "Produto não encontrado".

t) No terminal do VS Code, execute o comando "npm" para executar o script "test".


4. Criação de um roteador para uma API REST.

a) Adicione o arquivo "produtosRouter.js" na pasta "routes".

b) Abra o arquivo "produtosRouter.js" e importe o pacote do Express.

c) Importe um controlador "produtosController" do arquivo "../controllers/produtosController.js".

d) Declare uma constante "router" inicializando-a com uma instância de "express.Router()".

e) Declare middleware de rota para responder ao método "POST" na rota "/produtos".

f) Faça o middleware de rota chamar a função "criar" do produtosController.

g) Declare um middleware de rota para responder ao método "GET" na rota "/produtos".

h) Faça o middleware de rota chamar a função "listar" do produtosController.

i) Declare um middleware de rota para responder ao método "GET" na rota "/produtos/:id".

j) Faça o middleware de rota chamar as funções "buscar" e "exibir" do produtosController.

k) Declare middleware de rota para responder ao método "PUT" na rota "/produtos/:id".

l) Faça o middleware de rota chamar as funções "buscar" e "atualizar" do produtosController.

m) Declare middleware de rota para responder ao método "DELETE" na rota "/produtos/:id".

n) Faça o middleware de rota chamar as funções "buscar" e "remover" do produtosController.

o) Exporte a instância de Router para outros módulos do projeto. 

p) Abra o arquivo "app.js" e importe o middleware de rotas chamado "produtosRouter" do arquivo "./routes/produtosRouter.js".

q) Utilize o middleware de rota produtosRouter na aplicação Express para tratar as chamadas à rota "/produtos".


5. Criação de um controlador para uma API REST.

a) Crie um arquivo "produtosController.js" dentro da pasta "controllers".

b) Abra o arquivo "produtosController.js" e importe o pacote "mongoose".

c) Importe um modelo chamado "Produto" do arquivo "../models/produtosModel.js".

d) Declare a função "criar()" que deve receber os parâmetros "req" e "res".

e) Dentro da função trate o método "create()" de Produto passando como parâmetro as propriedades "nome" e "preco" do corpo da requisição, e salvando o resultado na constante "novoProduto".

f) Faça a função "criar()" retornar o staus "201" e um JSON de "novoProduto".

g) Caso o método "create()" lance uma exceção, faça a função "criar()" responder a requisição retornando o status "422" e um JSON {msg: "Nome e preço do produto são obrigatórios"}.

h) Declare a função "listar()" que deve receber os parâmetros "req" e "res".

i) Dentro da função chame o método "find()" de Produto passando como parâmetro um objeto vazio, e salvando o resultado na constante "produtosCadastrados".

j) Faça a função "listar()" retornar o staus "200" e um JSON de "produtosCadastrados".

k) Declare a função "buscar()" que deve receber os parâmetros "req", "res" e "next".

l) Dentro da função chame o método "isValid()" para validar o parâmetro "id" da requisição. Caso não seja válido faça a função "buscar()" retornar o status "400" e um JSON {msg: "Parâmetro inválido"}.

k) Dentro da função chame o método "findOne()" de Produto passando o parâmetro "id" da requisição, e salvando o resultado na constante "produtoEncontrado".

l) Se o "produtoEncontrado" existe, adicione na requisição uma propriedade "produto" guardando o valor de "produtoEncontrado" e retorne a chamada da função "next()". Caso contrário retorne o status "404" e um JSON {msg: "Produto não encontrado"}.

m) Declare a função "exibir()" que deve receber os parâmetros "req", "res".

n) Faça a função "exibir()" retornar o staus "200" e um JSON de "req.produto".

o) Declare a função "atualizar()" que deve receber os parâmetros "req" e "res".

p) Dentro da função trate o método "UpdateOne()" de Produto passando como parâmetros a propriedade "id" da requisição, as propriedades "nome" e "preco" do corpo da requisição. Salve na  constante "produtoAtualizado" as propriedades "id", "nome" e "preco".

q) Faça a função "atualizar()" retornar o staus "200" e um JSON de "produtoAtualizado".

r) Caso o método "findOneAndUpdate()" lance uma exceção, faça a função "atualizar()" responder a requisição retornando o status "422" e um JSON {msg: "Nome e preço do produto são obrigatórios"}.

s) Declare a função "remover()" que deve receber os parâmetros "req" e "res".

t) Dentro da função chame o método "findOneAndDelete()" de Produto passando como parâmetro a propriedade "id" da requisição, e salvando o resultado na constante "produtoRemovido".

u) Faça a função "remover()" retornar o staus "204" e sem conteúdo.

v) Exporte todas as funções para serem utilizadas por outros módulos. 


6. Criação de um modelo para uma API REST.

a) Adicione o arquivo "produtosModel.js" na pasta "models".

b) Abra o arquivo "produtosModel.js" e importe o pacote do Mongoose.

c) Declare uma constante "schema" inicializando-a com uma instância de "mongoose.Schema()" contendo os campos

    nome: String, obrigatório, mínimo 3 caracteres.
    preco: Number, obrigatório.

d) Exporte o modelo Mongoose "Produto" criado com "schema".


7. Envio de alterações locais para um repositório remoto do GitHub.

a) Abra um novo terminal no VSCode.

b) Execute o comando "git" para listar a ramificação atual. Certifique que esteja na ramificação "develop".

c) Caso não esteja na ramificação "develop", execute o comando "git" para mudar para a ramificação.

d) No terminal, execute o comando "git" para verificar a situação do repositório local.

e) Execute o comando "git" para adicionar os arquivos modificados ao repositório local.

f) Execute o comando "git" para efetivar a alteração com uma mensagem descritiva "Adicionando códigos da prática 7".

g) Execute o comando "git" para atualizar a ramificação "develop" com o repositório remoto.

h) Execute o comando "git" para enviar as alterações na ramificação "develop" para o repositório remoto.

i) Atualize a página do repositório do GitHub no navegador para verificar se as alterações foram enviadas.

