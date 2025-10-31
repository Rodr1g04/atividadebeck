const request = require('supertest'); 
const app = require('../app'); 

let token;
let novoToken;

test('GET /produtos com token inválido deve retornar 401', async () => {
    const response = await request(app)
        .get('/produtos')
        .set('authorization', '123456789');
    expect(response.status).toBe(401);
    expect(response.body.msg).toBe('Token invalido'); // ajuste a string de acordo com seu middleware
});

test('POST /usuarios/login deve retornar 200 e token', async () => {
    const response = await request(app)
        .post('/usuarios/login')
        .send({ email: 'email@exemplo.com' }); // ajuste o campo conforme seu endpoint
    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
    token = response.body.token;
});

test('GET /produtos com token válido deve retornar 200', async () => {
    const response = await request(app)
        .get('/produtos')
        .set('authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
});

test('POST /usuarios/renovar deve retornar 200 e novo token', async () => {
    const response = await request(app)
        .post('/usuarios/renovar')
        .set('authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
    novoToken = response.body.token;
});

test('GET /produtos com novo token deve retornar 200', async () => {
    const response = await request(app)
        .get('/produtos')
        .set('authorization', `Bearer ${novoToken}`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
});
