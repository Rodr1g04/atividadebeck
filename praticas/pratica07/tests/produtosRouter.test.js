
const request = require('supertest');
const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);


const url = '/produtos';
let produtoId;
let token;     
let novoToken; 

describe('Teste do recurso /produtos', () => {



    test('POST /produtos deve retornar 201', async () => {
        const response = await request(app).post(url).send({ nome: "Laranja", preco: 10.0 });
        expect(response.status).toBe(201);
        expect(response.body._id).toBeDefined();
        expect(response.body.nome).toBe("Laranja");
        expect(response.body.preco).toBe(10.0);
        produtoId = response.body._id;
    });

    test('POST /produtos deve retornar 422', async () => {
        const response = await request(app).post(url).send({});
        expect(response.status).toBe(422);
        expect(response.body.msg).toBe("Nome e preço do produto são obrigatórios");
    });

    test('GET /produtos sem token deve retornar 401 e msg "Não autorizado"', async () => {
        const response = await request(app).get(url);
        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('msg', 'Não autorizado');
    });

    test('GET /produtos/:id deve retornar 200 com o produto correto', async () => {
        const response = await request(app).get(`${url}/${produtoId}`);
        expect(response.status).toBe(200);
        expect(response.body._id).toBe(produtoId);
        expect(response.body.nome).toBe("Laranja");
        expect(response.body.preco).toBe(10.0);
    });

    test('GET /produtos/:id deve retornar 400', async () => {
        const response = await request(app).get(`${url}/0`);
        expect(response.status).toBe(400);
        expect(response.body.msg).toBe("Parâmetro inválido");
    });

    test('GET /produtos/:id deve retornar 404', async () => {
        const response = await request(app).get(`${url}/000000000000000000000000`);
        expect(response.status).toBe(404);
        expect(response.body.msg).toBe("Produto não encontrado");
    });

    test('PUT /produtos/:id deve retornar 200 com produto atualizado', async () => {
        const response = await request(app)
            .put(`${url}/${produtoId}`)
            .send({ nome: "Laranja Pera", preco: 18.0 });
        expect(response.status).toBe(200);
        expect(response.body._id).toBe(produtoId);
        expect(response.body.nome).toBe("Laranja Pera");
        expect(response.body.preco).toBe(18.0);
    });

    test('PUT /produtos/:id deve retornar 422', async () => {
        const response = await request(app).put(`${url}/${produtoId}`).send({});
        expect(response.status).toBe(422);
        expect(response.body.msg).toBe("Nome e preço do produto são obrigatórios");
    });

    test('PUT /produtos/:id deve retornar 400', async () => {
        const response = await request(app).put(`${url}/0`).send({ nome: "Teste", preco: 1 });
        expect(response.status).toBe(400);
        expect(response.body.msg).toBe("Parâmetro inválido");
    });

    test('PUT /produtos/:id deve retornar 404', async () => {
        const response = await request(app)
            .put(`${url}/000000000000000000000000`)
            .send({ nome: "Teste", preco: 1 });
        expect(response.status).toBe(404);
        expect(response.body.msg).toBe("Produto não encontrado");
    });

    test('DELETE /produtos/:id deve retornar 204', async () => {
        const response = await request(app).delete(`${url}/${produtoId}`);
        expect(response.status).toBe(204);
    });

    test('DELETE /produtos/:id deve retornar 400', async () => {
        const response = await request(app).delete(`${url}/0`);
        expect(response.status).toBe(400);
        expect(response.body.msg).toBe("Parâmetro inválido");
    });

    test('DELETE /produtos/:id deve retornar 404', async () => {
        const response = await request(app).delete(`${url}/${produtoId}`);
        expect(response.status).toBe(404);
        expect(response.body.msg).toBe("Produto não encontrado");
    });



    test('POST /usuarios/login deve retornar 200 e token', async () => {
        const response = await request(app)
            .post('/usuarios/login')
            .send({ usuario: 'email@exemplo.com', senha: 'abcd1234' });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
        token = response.body.token;
    });

    test('GET /produtos com token inválido deve retornar 401 e msg "Token inválido"', async () => {
        const response = await request(app)
            .get(url)
            .set('authorization', '123456789');
        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('msg', 'Token inválido');
    });

    test('GET /produtos com token válido deve retornar 200 e JSON', async () => {
        const response = await request(app)
            .get(url)
            .set('authorization', token);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test('POST /usuarios/renovar deve retornar 200 e novo token', async () => {
        const response = await request(app)
            .post('/usuarios/renovar')
            .set('authorization', token);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
        novoToken = response.body.token;
    });

    test('GET /produtos com novo token deve retornar 200 e JSON', async () => {
        const response = await request(app)
            .get(url)
            .set('authorization', novoToken);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

});
