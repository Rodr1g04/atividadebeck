Prática 8

1. Preparação do VSCode para a realização da prática.

a) Abra o Visual Studio Code (VSCode) no seu computador.

b) No canto superior esquerdo, clique em "File" (Arquivo) e selecione "Open Folder…" (Abrir Pasta…).

c) Escolha a pasta onde foi clonado o repositório do Github. Clique em "Select Folder" (Selecionar Pasta).

d) Abra o terminal no VSCode clicando em "Terminal" e selecionando "New Terminal" (Novo Terminal).

e) Execute o comando "git" para listar a ramificação atual. Certifique que esteja na ramificação "develop".

f) Caso não esteja na ramificação "develop", execute o comando "git" para mudar para a ramificação correta.


2. Criação de um projeto Express para uma API REST.

a) No terminal do VSCode, execute o comando "cd" para acessar a pasta "praticas" ou clique com o botão direito do mouse sobre a pasta e selecione "Open in Integrated Terminal" (Abrir no Terminal Integrado).

b) Execute o comando "npx" para executar o pacote "express-generator" e criar um projeto "pratica08" sem o componente de visão.

c) Execute o comando "cd" para acessar a pasta "pratica08".

d) Execute o comando "npm" para instalar as dependências do projeto.

e) Execute o comando "npm" para instalar os pacotes "dotenv" e "jsonwebtoken" no projeto.

f) Execute o comando "npm" para instalar os pacotes "nodemon", "jest" e "supertest" como dependência de desenvolvimento.

g) Abra o arquivo "package.json" no VSCode e inclua o script "dev" para executar o comando "nodemon ./bin/www" e o script "test" para executar o comando "jest --watchAll"

h) Remova a pasta "public" do projeto e os arquivos da pasta "routes".

i) Crie as pastas "middlewares” e "tests" dentro da pasta "pratica08".

j) Crie um arquivo ".env" na pasta "pratica08" e adicione a variável de ambiente para conter a senha de autenticação do JWT.

JWT_SECRET=

k) Abra o arquivo "app.js" e adicione a importação do pacote "dotenv" para carregar as variáveis de ambiente definidas no arquivo ".env".

l) Remova do arquivo "app.js" as linhas de código desnecessárias para o desenvolvimento da API.

m) No terminal do VS Code, execute o comando "npm" para executar o script "test".


3. Criação de um teste unitário para uma API REST.

a) Adicione um arquivo "app.test.js" dentro da pasta "tests".

b) Abra o arquivo "app.test.js" e importe o pacote do "supertest".

c) Importe a instância da aplicação Express a partir do arquivo "app.js".

d) Declare uma constante "request" atribuindo uma instância de requisição chamando a função "supertest()" passando como parâmetros a instância da aplicação Express.

e) Crie um teste para verificar se uma chamada "GET /produtos" retornar o status "401" e um conteúdo do tipo JSON contendo a propriedade "msg" igual "Não autorizado".

f) Crie um teste para verificar se uma chamada "GET /produtos" passando um parâmetro de cabeçalho "authorization" com um token "Bearer 123456789" e retornar o status "401" e um conteúdo do tipo JSON contendo a propriedade "msg" igual "Token inválido".

g) Crie um teste para verificar se uma chamada "POST /usuarios/login" com um JSON { "usuario": "email@exemplo.com", "senha": "abcd1234" } retorna o status "200" e um conteúdo do tipo JSON. Verifique se no corpo da resposta contém uma propriedade "token". 

h) Salve o valor da propriedade "token" retornado no corpo da resposta em uma variável para ser utilizado nos próximos testes.

i) Crie um teste para verificar se uma chamada "GET /produtos" passando um parâmetro de cabeçalho "authorization" com o token salvo e retornar o status "200" e um conteúdo do tipo JSON.

j) Crie um teste para verificar se uma chamada "POST /usuarios/renovar" passando um parâmetro de cabeçalho "authorization" com o token salvo retorna o status "200" e um conteúdo do tipo JSON. Verifique se no corpo da resposta contém uma propriedade "token".

k) Salve o valor da propriedade "token" retornado no corpo da resposta em uma variável para ser utilizado nos próximos testes.

l) Crie um teste para verificar se uma chamada "GET /produtos" passando um parâmetro de cabeçalho "authorization" com o novo token e retornar o status "200" e um conteúdo do tipo JSON.


4. Criação de um middleware de autenticação para uma API REST.

a) Adicione o arquivo "authMiddleware.js" na pasta "middlewares".

b) Abra o arquivo "authMiddleware.js" e importe o pacote "jsonwebtoken".

c) Declare uma função "verificarToken" contendo os parâmetros "req", "res" e "next".

d) Faça a função "verificarToken" extrair o token do cabeçalho da requisição.

e) Se existe um token, trate o método "verify()" do JWT passando como parâmetros "token" e "process.env.JWT_SECRET". Adicione o resultado no método na propriedade "usuario" da requisição, e retorne a chamada da função "next()".

f) Caso gere uma exceção, faça a função "verificarToken" retornar o status "401" e um JSON { msg: "‘Token invalido"}.

g) Declare uma função "gerarToken" contendo o parâmetro "payload". 

h) Dentro da função, declare a constante "expiresIn" com o valor 120 e tente retornar a chamada da função "sign()" do JWT passando os parâmetros "payload" e "process.env.JWT_SECRET".

i) Caso gere uma exceção, faça a função "gerarToken" lançar a exceção "Erro ao gerar o token".

j) Exporte as funções para os outros módulos do projeto.


5. Criação de um endpoint de autenticação para uma API REST.

a) Adicione o arquivo "usuariosRouter.js" na pasta "routes".

b) Abra o arquivo "usuariosRouter.js" e importe o pacote do Express.

c) Importe um middleware "authMiddlware" do arquivo "../middlewares/authMiddleware.js".

d) Declare uma constante "router" inicializando-a com uma instância de "express.Router()".

e) Declare middleware de rota para responder ao método "POST" na rota "/login".

f) Faça o middleware de rota chamar a função anônima recebendo os parâmetros "req" e "res".

g) Faça a função anônima chamar a função "gerarToken" do authMiddlware passando como parâmetro a propriedade "email" do corpo da requisição, e retornar o status "200" e um JSON contendo o token gerado.

h) Declare um middleware de rota para responder ao método "POST" na rota "/nenovar".

i) Faça o middleware de rota chamar a função "verificarToken " do authMiddlware e a função anônima recebendo os parâmetros "req" e "res".

j) Faça a função anônima chamar a função "gerarToken" do authMiddlware passando como parâmetro a propriedade "usuario.email" do requisição, e retornar o status "200" e um JSON contendo o token gerado.

k) Exporte a instância de Router para outros módulos do projeto. 

l) Abra o arquivo "app.js" e importe o middleware de rotas chamado "usuariosRouter" do arquivo "./routes/usuariosRouter.js".

m) Utilize o middleware de rota usuariosRouter na aplicação Express para tratar as chamadas à rota "/usuarios".


6. Criação de um endpoint protegido para uma API REST.

a) Adicione o arquivo "produtosRouter.js" na pasta "routes".

b) Abra o arquivo "produtosRouter.js" e importe o pacote do Express.

c) Importe um middleware "authMiddlware" do arquivo "../middlewares/authMiddleware.js".

d) Declare uma constante "router" inicializando-a com uma instância de "express.Router()".

e) Declare um middleware de rota para responder ao método "GET" na rota "/produtos".

f) Faça o middleware de rota chamar a função "verificarToken" do authMiddlware e depois responder com um JSON de um array vazio.

g) Exporte a instância de Router para outros módulos do projeto. 

h) Abra o arquivo "app.js" e importe o middleware de rotas chamado "produtosRouter" do arquivo "./routes/produtosRouter.js".

i) Utilize o middleware de rota produtosRouter na aplicação Express para tratar as chamadas à rota "/produtos".


7. Envio de alterações locais para um repositório remoto do GitHub.

a) Abra um novo terminal no VSCode.

b) Execute o comando "git" para listar a ramificação atual. Certifique que esteja na ramificação "develop".

c) Caso não esteja na ramificação "develop", execute o comando "git" para mudar para a ramificação.

d) No terminal, execute o comando "git" para verificar a situação do repositório local.

e) Execute o comando "git" para adicionar os arquivos modificados ao repositório local.

f) Execute o comando "git" para efetivar a alteração com uma mensagem descritiva "Adicionando códigos da prática 8".

g) Execute o comando "git" para atualizar a ramificação "develop" com o repositório remoto.

h) Execute o comando "git" para enviar as alterações na ramificação "develop" para o repositório remoto.

i) Atualize a página do repositório do GitHub no navegador para verificar se as alterações foram enviadas.