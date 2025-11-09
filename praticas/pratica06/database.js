require('dotenv').config();

const { MongoClient } = require('mongodb');
const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOST}/`;

const client = new MongoClient(url);

async function conectar() {
    try {
        await client.connect();
        console.log("Conectado ao MongoDB com sucesso!");
        return client.db('agenda');
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
        await client.close();
        throw error;
    }
}

module.exports = conectar;
