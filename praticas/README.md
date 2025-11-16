# Prática 9 – Documentação de API REST com Express e Swagger

Este guia descreve passo a passo como preparar o ambiente, criar um projeto Express, documentar a API com Swagger e enviar as alterações para o GitHub.

---

## 1. Preparação do VSCode

1. Abra o **Visual Studio Code (VSCode)**.
2. Clique em **File > Open Folder…** e selecione a pasta clonada do repositório.
3. Clique em **Select Folder**.
4. Abra o terminal em **Terminal > New Terminal**.
5. Execute:
   ```bash
   git branch
Certifique-se de estar na branch develop.

Caso não esteja, mude para a branch correta:

bash
git checkout develop
2. Criação do projeto Express
Acesse a pasta praticas:

bash
cd praticas
Crie o projeto com express-generator:

bash
npx express-generator pratica09 --no-view
Acesse a pasta do projeto:

bash
cd pratica09
Instale as dependências:

bash
npm install
Instale pacotes adicionais:

bash
npm install swagger-ui-express yaml
Instale o nodemon como dependência de desenvolvimento:

bash
npm install nodemon --save-dev
No arquivo package.json, adicione o script:

json
"scripts": {
  "dev": "nodemon -e yaml,js ./bin/www"
}
Remova a pasta public e os arquivos da pasta routes.

Limpe o arquivo app.js das linhas desnecessárias.

Execute o projeto:

bash
npm run dev
3. Criação do documento Swagger
Crie o arquivo swagger.yaml na pasta pratica09.

Estrutura inicial:

yaml
openapi: 3.0.0
info:
servers:
tags:
paths:
components:
Configure:

openapi: 3.0.0

info: título, descrição e versão

servers:

yaml
- url: http://localhost:3000
  description: Ambiente de desenvolvimento
tags:

yaml
- name: produtos
paths: rotas /produtos e /produtos/{produtoId} com métodos get, post, put, delete

components.schemas:

ArrayOfProdutos → type: array, items: $ref: '#/components/schemas/Produto'

Produto → type: object com propriedades id (string), nome (string), preco (number)

4. Criação do roteador de documentação
Crie o arquivo routes/apidocsRouter.js.

Importe:

js
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const fs = require('fs');
const YAML = require('yaml');
Crie instâncias:

js
const router = express.Router();
const file = fs.readFileSync('./swagger.yaml', 'utf8');
const swaggerDocument = YAML.parse(file);
Configure middlewares:

js
router.use('/', swaggerUI.serve);
router.get('/', swaggerUI.setup(swaggerDocument));
Exporte:

js
module.exports = router;
No app.js, importe:

js
const apidocsRouter = require('./routes/apidocsRouter');
app.use('/api-docs', apidocsRouter);
Acesse no navegador: http://localhost:3000/api-docs

5. Documentação dos endpoints
GET /produtos

Tag: produtos

Resposta 200: "Uma lista de produtos"

Content: application/json → ArrayOfProdutos

POST /produtos

Tag: produtos

RequestBody: "Um JSON com dados do novo produto"

Respostas:

201: "Produto criado com sucesso" → Produto

422: "Nome e preço são obrigatórios"

GET /produtos/{produtoId}

Parâmetro: produtoId (integer, required, path)

Respostas:

200: "Um JSON com os dados do produto encontrado" → Produto

404: "Produto não encontrado"

PUT /produtos/{produtoId}

Parâmetro: produtoId

RequestBody: "Um JSON com dados do produto a atualizar"

Respostas:

200: "Um JSON com os dados do produto atualizado" → Produto

404: "Produto não encontrado"

422: "Nome e preço são obrigatórios"

DELETE /produtos/{produtoId}

Parâmetro: produtoId

Respostas:

204: "Produto removido com sucesso"

404: "Produto não encontrado"

6. Envio das alterações para o GitHub
Abra um novo terminal.

Verifique a branch:

bash
git branch
Caso necessário, mude para develop:

bash
git checkout develop
Verifique status:

bash
git status
Adicione arquivos:

bash
git add .
Faça commit:

bash
git commit -m "Adicionando códigos da prática 9"
Atualize branch local:

bash
git pull origin develop
Envie alterações:

bash
git push origin develop
Atualize o repositório no GitHub e verifique.