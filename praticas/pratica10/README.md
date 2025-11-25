Prática 10

1. Preparação do VSCode para a realização da prática.

a) Abra o Visual Studio Code (VSCode) no seu computador.

b) No canto superior esquerdo, clique em "File" (Arquivo) e selecione "Open Folder…" (Abrir Pasta…).

c) Escolha a pasta onde foi clonado o repositório do Github. Clique em "Select Folder" (Selecionar Pasta).

d) Abra o terminal no VSCode clicando em "Terminal" e selecionando "New Terminal" (Novo Terminal).

e) Execute o comando "git" para listar a ramificação atual. Certifique que esteja na ramificação "develop".

f) Caso não esteja na ramificação "develop", execute o comando "git" para mudar para a ramificação correta.


2. Criação de um projeto Express para uma API REST.

a) No terminal do VSCode, execute o comando "cd" para acessar a pasta "praticas" ou clique com o botão direito do mouse sobre a pasta e selecione "Open in Integrated Terminal" (Abrir no Terminal Integrado).

b) Execute o comando "npx" para executar o pacote "express-generator" e criar um projeto "pratica10" sem o componente de visão.

c) Execute o comando "cd" para acessar a pasta "pratica10".

d) Execute o comando "npm" para instalar as dependências do projeto.

e) Execute o comando "npm" para instalar os pacotes "dotenv", "mongoose", "jsonwebtoken", "bcryptjs", "swagger-ui-express", e "yaml" no projeto.

f) Execute o comando "npm" para instalar os pacotes "nodemon", "jest" e "supertest" como dependência de desenvolvimento.

g) Abra o arquivo "package.json" no VSCode e inclua o script "dev" para executar o comando "nodemon -e yaml,js ./bin/www" e o script "test" para executar o comando "jest --watchAll"

h) Remova a pasta "public" do projeto e os arquivos da pasta "routes".

i) Crie as pastas "controllers", "middlewares", "models" e "tests" dentro da pasta "pratica10".

j) Adicione o arquivo "swagger.yaml" na pasta "pratica10" e crie a estrutura de um Swagger Document.
openapi: 3.0.0
info:
  title: Minha API REST
  version: 0.1
servers:
  - url: http://localhost:3000/
tags:
  - name: usuarios
paths:
components:
  schemas:
  securitySchemes:

k) Crie um arquivo ".env" na pasta "pratica10" e adicione as variáveis de ambiente atribuindo os valores para acessar o banco "pratica10" no MongoDB Atlas.

MONGODB_USER=
MONGODB_PASSWORD=
MONGODB_HOST=
MONGODB_DATABASE=pratica10

l) Adicione também no arquivo ."env" as variáveis de ambiente para configurar a geração de tokens JWT.

JWT_SECRET=
JWT_EXPIRES=60s

m) Abra o arquivo "app.js" e adicione a importação do pacote "dotenv" para carregar as variáveis de ambiente definidas no arquivo ".env".

n) Importe o pacote "mongoose" para conectar com o banco de dados MongoDB Atlas.

o) Chame o método "connect()" do mongoose passando como parâmetro a string de conexão composta pelas variáveis de ambiente MONGODB_USER:MONGODB_PASSWORD@MONGODB_HOST/MONGODB_DATABASE.

p) Remova do arquivo "app.js" as linhas de código desnecessárias para o desenvolvimento da API.

q) No terminal do VS Code, execute o comando "npm" para executar os scripts "dev" e "test".


3. Criação de um teste unitário para uma API REST.

a) Adicione um arquivo "usuariosRouter.test.js" dentro da pasta "tests".

b) Abra o arquivo "usuariosRouter.test.js" e importe o pacote do "supertest".

c) Importe a instância da aplicação Express a partir do arquivo "app.js".

d) Declare uma constante "request" atribuindo uma instância de requisição chamando a função "supertest()" passando como parâmetros a instância da aplicação Express.

e) Crie um suite de testes para o recurso "/usuarios" através da função "describe()".

f) Crie um teste para verificar se uma chamada "POST /usuarios" com um JSON { "email": "usuario@email.com", "senha": "abcd1234" } retorna o status "201" e um conteúdo do tipo JSON. Verifique se no corpo da resposta contém um propriedade "_id" e a propriedade "email" igual a "usuario@email.com". 

g) Salve o valor da propriedade "_id" retornado no corpo da resposta em uma variável para ser utilizado nos próximos testes (GET, PUT e DELETE).

h) Crie um teste para verificar se uma chamada "POST /usuarios" sem um JSON e retorna o status "422" e um conteúdo do tipo JSON contendo a propriedade "msg" igual "Email e Senha são obrigatórios".

i) Crie um teste para verificar se uma chamada "POST /usuarios/login" com um JSON { "usuario": "usuario@email.com", "senha": "abcd1234" } retorna o status "200" e um conteúdo do tipo JSON. 

j) Verifique se no corpo da resposta contém um propriedade "token" e salve o valor dessa propriedade em uma variável para ser utilizado nos próximos testes.

k) Crie um teste para verificar se uma chamada "POST /usuarios/login" sem um JSON e retorna o status "401" e um conteúdo do tipo JSON contendo a propriedade "msg" igual "Credenciais inválidas".

l) Crie um teste para verificar se uma chamada "POST /usuarios/renovar" passando um parâmetro de cabeçalho "authorization" com o token salvo retorna o status "200" e um conteúdo do tipo JSON. Verifique se no corpo da resposta contém uma propriedade "token".

m) Crie um teste para verificar se uma chamada "POST /usuarios/renovar" passando um parâmetro de cabeçalho "authorization" com um token "Bearer 123456789" e retornar o status "401" e um conteúdo do tipo JSON contendo a propriedade "msg" igual "Token inválido".

n) Crie um teste para verificar se uma chamada "DELETE /usuarios/${id}" passando um parâmetro de cabeçalho "authorization" com o token salvo retorna o status "204" e sem conteúdo.


4. Criação de um middleware de autenticação para uma API REST.

a) Adicione o arquivo "authMiddleware.js" na pasta "middlewares".

b) Abra o arquivo "authMiddleware.js" e importe os pacotes "jsonwebtoken" e "bcryptjs".

c) Declare uma função "verificarToken" contendo os parâmetros "req", "res" e "next".

d) Faça a função "verificarToken" extrair o token do cabeçalho da requisição.

e) Se existe um token, trate o método "verify()" do JWT passando como parâmetros "token" e "process.env.JWT_SECRET". Adicione o resultado no método na propriedade "usuario" da requisição, e retorne a chamada da função "next()".

f) Caso gere uma exceção, faça a função "verificarToken" retornar o status "401" e um JSON { msg: "Token invalido" }.

g) Declare uma função "gerarToken" contendo o parâmetro "payload". 

h) Dentro da função, declare a constante "expiresIn" com o valor da variável de ambiente "process.env.JWT_EXPIRES" e tente retornar a chamada da função "sign()" do JWT passando os parâmetros "payload", "process.env.JWT_SECRET" e "expiresIn".

i) Caso gere uma exceção, faça a função "gerarToken" lançar a exceção "Erro ao gerar o token".

j) Declare uma função "cifrarSenha" contendo o parâmetro "senha". 

k) Dentro da função "cifrarSenha", declare a constante "salto" inicializando com a função "bcrypt.genSaltSync()". com o parâmetro "10".

l) Dentro da função "cifrarSenha", declarar a constante "hash" inicializando com a função "bcrypt.hashSync()" com os parâmetros "senha" e "salto".

m) Faça a função "cifrarSenha" retornar a constante "hash".

n) Declare uma função "compararSenha" contendo os parâmetros "senha" e "hash". 

o) Faça a função "compararSenha" retornar uma chamada à função "bcrypt.compareSync()" com os parâmetros "senha" e "hash".

p) Exporte as funções para os outros módulos do projeto.


5. Criação do endpoint GET /apidocs para uma API REST.

a) Adicione o arquivo "apidocsRouter.js" na pasta "routes".

b) Abra o arquivo "apidocsRouter.js" e importe o pacote do Express, o pacote do Swagger UI, o pacote do FileSystem e o pacote do YAML.

c) Crie uma instância de "Router" a partir da função "express()".

d) Crie uma instância de "File" a partir da função "fs.readFileSync()" que recebe como parâmetros o arquivo "swagger.yaml" e a codificação "utf8".

e) Crie uma instância de "SwaggerDocument" a partir da função "YAML.parse()" que recebe como parâmetro a instância de File.

f) Declare um middleware de rota para a instância de "Router" usar a função "swaggerUI.server()" na URL /.

g) Declare um middleware de rota para a instância de "Router" responder ao método GET na URL /, devendo chamar a função "swaggerUI.setup()" que recebe como parâmetro a instância do "SwaggerDocument".

h) Exporte a instância de "Router" para outros módulos do projeto. 

i) Abra o arquivo "app.js" e importe a instância de "Router" do arquivo "./routes/apidocs.js".

j) Declare um middleware de rota para a instância da aplicação Express usar a instância de Router na URL "/api-docs".

k) Abra o navegador e acesse a URL "http://localhost:3000/api-docs".


6. Criação do endpoint POST /usuarios para uma API REST.

a) Adicione o arquivo "usuariosRouter.js" na pasta "routes".

b) Abra o arquivo "usuariosRouter.js" e importe o pacote do Express. 

c) Importe um controlador "usuariosController" do arquivo "../controllers/usuariosController.js".

d) Importe a função "verificarToken" do arquivo "../middlewares/authMiddleware.js".

e) Declare uma constante "router" inicializando-a com uma instância de "express.Router()".

f) Declare middleware de rota para responder ao método "POST" na rota "/" e chamar a função "criar" do "usuariosController".

g) Exporte a instância de Router para outros módulos do projeto.

h) Abra o arquivo "app.js" e importe o middleware de rotas chamado "usuariosRouter" do arquivo "./routes/usuariosRouter.js".

i) Utilize o middleware de rota usuariosRouter na aplicação Express para tratar as chamadas à rota "/usuarios".

j) Adicione o arquivo "usuariosController.js" na pasta "controllers".

k) Abra o arquivo "usuariosController.js" e importe as funções "cifrarSenha" e "gerarToken" do arquivo "../middlewares/authMiddleware.js".

l) Importe o modelo "usuariosModel" do arquivo "../models/usersModel.js".

m) Declare uma função assíncrona "criar()" contendo os parâmetros "req" e "res". 

n) Declare a constante "senhaCifrada" inicializando com a função "cifrarSenha()" com o parâmetro "req.body.senha".

o) Declare a constante "novoUsuario" inicializando com a função assíncrona "create()" de "usuariosModel" com o parâmetro {email: req.body.email, senha: senhaCifrada}. 

p) Faça a função "criar()" retornar a resposta "201" um JSON contendo as propriedades "_id" e "email" de novoUsuario.

q) Caso o método "create()" lance uma exceção, faça a função "criar()" responder a requisição retornando o status "422" e um JSON {msg: "Email e Senha são obrigatórios"}.

r) Exporte a função "criar()" para os outros módulos do projeto.

s) Adicione o arquivo "usuariosModel.js" na pasta "models".

t) Abra o arquivo "usuariosModel.js" e importe o pacote mongoose.

u) Crie um esquema "userSchema" a partir do construtor "mongoose.Schema()" contendo as propriedades obrigatórias "email" e "senha" ambas do tipo "String".

v) Exporte uma instância do modelo Mongoose chamado "Usuario" com o esquema "userSchema" para outros módulos do projeto.

w) Abra o arquivo "swagger.yaml" e adicione o método "post" para a rota "/usuarios".

x) Adicione a tag "usuarios" para o método "post", defina o corpo da requisição contendo um JSON do tipo "object" com as propriedades obrigatórias "email" e "senha", e as respostas "201" contendo um JSON do esquema "Usuario", e "422" contendo um JSON da mensagem "Email e Senha são obrigatórios".

y) Dentro de "schemas", crie o esquema "Usuario" do tipo "object" com as propriedades "email" e "senha" ambas do tipo "string".

z) Recarregue a página da documentação da API no navegador e teste a chamada ao endpoint "POST /usuarios".


7. Criação do endpoint POST /usuarios/login para uma API REST.

a) Abra o arquivo "usuariosRouter.js" e declare middleware de rota para responder ao método "POST" na rota "/login" e chamar a função "entrar" do "usuariosController".

b) Abra o arquivo "usuariosController.js" e importe a função "compararSenha" do arquivo "../middlewares/authMiddleware.js".

c) Declare uma função assíncrona "entrar" contendo os parâmetros "req" e "res".

d) Dentro da função "entrar", declare a constante "usuarioEncontrado" inicializando com a função assíncrona "findOne()" de "usuariosModel" com o parâmetro { email: req.body.usuario }. 

e) Se o usuário é encontrado, compare a propriedade "senha" do corpo da requisição com a propriedade "senha" de "usuarioEncontrado" usando a função "compararSenha()".

f) Se a senha confere, faça a função "entrar" chamar a função "gerarToken" passando como parâmetro "{email: req.body.usuario}", e retornar o status "200" e um JSON contendo o token gerado.

g) Caso o usuário não seja encontrado ou a senha não confere, faça a função "entrar" retornar o status "401" e um JSON contendo a mensagem "Credenciais inválidas".

h) Exporte a função "entrar" para os outros módulos do projeto.

i) Abra o arquivo "swagger.yaml" e adicione o método "post" para a rota "/usuarios/login".

j) Adicione a tag "usuarios" para o método "post", defina o corpo da requisição contendo um JSON do tipo "object" com as propriedades obrigatórias "usuario" e "senha", e as respostas "200" contendo um JSON do tipo "object" contendo a propriedade "token", e "401" contendo um JSON do esquema "Mensagem".

k) Dentro de "schemas", crie o esquema "Mensagem" do tipo "object" com a propriedade "msg" do tipo "string".

l) Recarregue a página da documentação da API no navegador e teste a chamada ao endpoint "POST /usuarios/login".


8. Criação do endpoint POST /usuarios/renovar para uma API REST.

a) Abra o arquivo "usuariosRouter.js" e declare middleware de rota para responder ao método "POST" na rota "/renovar" e chamar as funções "verificarToken" e "usuariosController.renovar".

b) Abra o arquivo "usuariosController.js" declare uma função assíncrona "renovar" contendo os parâmetros "req" e "res".

c) Faça a função "renovar" chamar a função "gerarToken" passando como parâmetro "{email: req.usuario}", e retornar o status "200" e um JSON contendo o token gerado.

d) Exporte a função "renovar" para os outros módulos do projeto.

e) Abra o arquivo swagger.yaml" e adicione o método "post" para a rota "/usuarios/renovar".

f) Adicione a tag "usuarios" para o método "post", adicione a segurança "JWTAuth" e as respostas "200" e "401", ambas contendo um JSON do esquema "Mensagem".

g) Dentro de "securitySchemas", crie o esquema de segurança "JWTAuth" do tipo "apiKey", com parâmetro "authorization" no cabeçalho.

h) Recarregue a página da documentação da API no navegador e teste a chamada ao endpoint "POST /usuarios/renovar".


9. Criação do endpoint DELETE /usuarios para uma API REST.

a) Abra o arquivo "usuariosRouter.js" e declare middleware de rota para responder ao método "DELETE" na rota "/" e chamar as funções "verificarToken" e "usuariosController.remover".

b) Abra o arquivo "usuariosController.js" declare uma função assíncrona "remover" contendo os parâmetros "req" e "res".

c) Faça a função "remover" chamar a função assíncrona "findOneAndDelete()" de "usuariosModel" com o parâmetro { _id: req.params.id } e retornar o status "204" sem conteúdo.

d) Exporte a função "remover" para os outros módulos do projeto.

e) Abra o arquivo "swagger.yaml" e adicione o método "delete" para a rota "/usuarios".

f) Adicione a tag "usuarios" para o método "delete", defina parâmetro obrigatório da requisição "id" do tipo "string" e a resposta "204" sem conteúdo.

g) Recarregue a página da documentação da API no navegador e teste a chamada ao endpoint "POST /usuarios/login".


10. Envio de alterações locais para um repositório remoto do GitHub.

a) Abra um novo terminal no VSCode.

b) Execute o comando "git" para listar a ramificação atual. Certifique que esteja na ramificação "develop".

c) Caso não esteja na ramificação "develop", execute o comando "git" para mudar para a ramificação.

d) No terminal, execute o comando "git" para verificar a situação do repositório local.

e) Execute o comando "git" para adicionar os arquivos modificados ao repositório local.

f) Execute o comando "git" para efetivar a alteração com uma mensagem descritiva "Adicionando códigos da prática 10".

g) Execute o comando "git" para atualizar a ramificação "develop" com o repositório remoto.

h) Execute o comando "git" para enviar as alterações na ramificação "develop" para o repositório remoto.

i) Atualize a página do repositório do GitHub no navegador para verificar se as alterações foram enviadas.

