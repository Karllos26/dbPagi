const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017'; //Em meu computador não foi possivel realizar  a conexão de forma padrão
/* const uri = 'mongodb://localhost:27017/' */
const dbName = 'livros';
const collectionName = 'livro';

let client;

const connectDatabase = async () => {
    if (!client) {
        console.log("Conectando ao Banco de dados");
        client = new MongoClient(uri);
        await client.connect();
        console.log("MongoDB conectado");
    }

    const db = client.db(dbName);

    // Verifica se está conectado ao banco de dados 'livros'
    if (db.databaseName !== dbName) {
        throw new Error(`Erro: Não foi possível conectar ao banco de dados '${dbName}'`);
    }

    // Verifica se está conectado à coleção 'livro'
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(collection => collection.name);

    if (!collectionNames.includes(collectionName)) {
        throw new Error(`Erro: Não foi possível encontrar a coleção '${collectionName}'`);
    }

    console.log("Conexão estabelecida com sucesso");

    return { client, db };
}

module.exports = connectDatabase;
