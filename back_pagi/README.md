### README para o Back-End

```markdown
# Back-End do Projeto

Este é o back-end do projeto, desenvolvido com Node.js e MongoDB.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior) ou Yarn
- MongoDB

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Karllos26/dbPagi.git
   ```

2. Navegue até o diretório do back-end:

   ```bash
   cd dbPagi/back_pagi
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

   ou, se estiver usando Yarn:

   ```bash
   yarn install
   ```


## Rodando o Projeto

1. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   ou, se estiver usando Yarn:

   ```bash
   yarn dev
   ```

2. O servidor estará rodando em `http://localhost:3000`.

## Scripts Disponíveis

- `npm run dev` ou `yarn dev`: Inicia o servidor de desenvolvimento.
- `npm start` ou `yarn start`: Inicia o servidor em modo de produção.

## Estrutura do Projeto

- `src/`: Contém os arquivos fonte do projeto.
  - `controllers/`: Controladores que contêm a lógica da aplicação.
  - `models/`: Modelos do Mongoose para o MongoDB.
  - `routes/`: Definições de rotas da API.
  - `middlewares/`: Middlewares personalizados para o aplicativo.
  - `database/`: Configurações e conexões do banco de dados.
  - `services/`: Serviços que encapsulam a lógica de negócios.
  - `App.tsx`: Arquivo principal que configura e inicia o servidor.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)