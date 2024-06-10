const express = require('express');
const app = express();
const connectDatabase = require('./src/database/db');
const userRoute = require('./src/routes/user.route');
const cors = require('cors');

const port = 3000;

app.use(cors());

// Função auto-invocada para conectar ao banco de dados e iniciar o servidor
(async () => {
    try {
        const dbInfo = await connectDatabase();
        if (dbInfo) {
            console.log(`Conectado ao banco de dados: ${dbInfo.databaseName}`);
            console.log(`Conectado à coleção: ${dbInfo.collectionName}`);
        } else {
            console.log("Falha ao conectar ao banco de dados ou coleção");
            process.exit(1); // Encerra o processo se não conseguir conectar
        }

        app.use(express.json());
        app.use('/books', userRoute);

        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    } catch (error) {
        console.error("Erro durante a inicialização do servidor", error);
        process.exit(1); // Encerra o processo se houver erro na conexão com o banco de dados
    }
})();
