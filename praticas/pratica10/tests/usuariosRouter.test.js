const request = require('supertest');
const app = require('../app');
const usuariosModel = require('../models/usuariosModel');
const mongoose = require('mongoose');

let userId;
let token;
let novoToken;

jest.setTimeout(15000);

beforeAll(async () => {
    while (mongoose.connection.readyState !== 1) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    await usuariosModel.deleteMany({});
});

describe('Testes do recurso /usuarios', () => {

    test('POST /usuarios deve retornar 201 e criar usuário', async () => {
        const response = await request(app)
            .post('/usuarios')
            .send({ email: 'usuario@email.com', senha: 'abcd1234' });

        expect(response.status).toBe(201);
        expect(response.body._id).toBeDefined();
        expect(response.body.email).toBe('usuario@email.com');

        userId = response.body._id;
    });

    test('POST /usuarios deve retornar 422 se JSON estiver ausente', async () => {
        const response = await request(app)
            .post('/usuarios')
            .send({});

        expect(response.status).toBe(422);
        expect(response.body.msg).toBe('Email e Senha são obrigatórios');
    });

    test('POST /usuarios/login deve retornar 200 e token', async () => {
        const response = await request(app)
            .post('/usuarios/login')
            .send({ usuario: 'usuario@email.com', senha: 'abcd1234' });

        expect(response.status).toBe(200);
        expect(response.body.token).toBeDefined();

        token = response.body.token;
    });

    test('POST /usuarios/login com JSON ausente deve retornar 401', async () => {
        const response = await request(app)
            .post('/usuarios/login')
            .send({});

        expect(response.status).toBe(401);
        expect(response.body.msg).toBe('Credenciais inválidas');
    });

    test('POST /usuarios/renovar deve retornar 200 e novo token', async () => {
        const response = await request(app)
            .post('/usuarios/renovar')
            .set('authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.token).toBeDefined();

        novoToken = response.body.token;
    });

    test('POST /usuarios/renovar com token inválido deve retornar 401', async () => {
        const response = await request(app)
            .post('/usuarios/renovar')
            .set('authorization', 'Bearer 123456789');

        expect(response.status).toBe(401);
        expect(response.body.msg).toBe('Token inválido');
    });

    test('DELETE /usuarios/:id deve retornar 204', async () => {
        const response = await request(app)
            .delete(`/usuarios/${userId}`)
            .set('authorization', `Bearer ${novoToken}`);

        expect(response.status).toBe(204);
        expect(response.text).toBe('');
    });
});
