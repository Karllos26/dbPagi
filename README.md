Claro! Aqui está um README baseado no seu `package.json` fornecido:

---

# Projeto dbpagi

Este é o projeto `dbpagi`, que consiste em um front-end e um back-end. O projeto é configurado para facilitar a execução e desenvolvimento das duas partes.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior) ou Yarn
- MongoDB

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Karllos26/dbPagi.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd dbPagi
   ```

3. Instale as dependências do projeto:

   ```bash
   npm run install
   ```

4. Iniciae ambos os servidores em modo de desenvolvimento simultaneamente:

   ```bash
   npm run devs
   ```
## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

- `npm run dev`: Navega para `back_pagi` e executa `npm run dev` para iniciar o back-end em modo de desenvolvimento.
- `npm run start`: Navega para `front_pagi` e executa `npm run dev` para iniciar o front-end em modo de desenvolvimento.
- `npm run start-api`: Navega para `back_pagi` e executa `npm start` para iniciar o back-end em modo de produção.
- `npm run install`: Instala as dependências para o projeto principal, bem como para `back_pagi` e `front_pagi`.
- `npm run devs`: Executa ambos os servidores front-end e back-end em modo de desenvolvimento simultaneamente usando `concurrently`.
- `npm run at_ignore`: Executa o script `update_gitignore.sh` para atualizar o arquivo `.gitignore`.

## Estrutura do Projeto

- `back_pagi/`: Contém o código do back-end.
  - `src/`: Contém os arquivos fonte do back-end.
    - `controllers/`: Controladores que contêm a lógica da aplicação.
    - `models/`: Modelos do Mongoose para o MongoDB.
    - `routes/`: Definições de rotas da API.
    - `middlewares/`: Middlewares personalizados para o aplicativo.
    - `database/`: Configurações e conexões do banco de dados.
    - `services/`: Serviços que encapsulam a lógica de negócios.
    - `app.js`: Arquivo principal que configura e inicia o servidor.

- `front_pagi/`: Contém o código do front-end.
  - `src/`: Contém os arquivos fonte do front-end.
    - Componentes React e outros recursos relacionados ao front-end.

## Executando o Projeto

1. Para iniciar o back-end em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

2. Para iniciar o front-end em modo de desenvolvimento:

   ```bash
   npm run start
   ```

3. Para iniciar ambos os servidores em modo de desenvolvimento simultaneamente:

   ```bash
   npm run devs
   ```

4. Para iniciar o back-end em modo de produção:

   ```bash
   npm run start-api
   ```

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [React](https://reactjs.org/)
- [Concurrently](https://www.npmjs.com/package/concurrently)

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch (`git checkout -b minha-feature`).
3. Faça suas alterações e commit (`git commit -am 'Adiciona minha feature'`).
4. Faça o push para a branch (`git push origin minha-feature`).
5. Crie um Pull Request.

## Autor

Karllos

## Licença

Este projeto está licenciado sob a licença ISC.
```

Sinta-se à vontade para ajustar os URLs, nomes de repositórios e outros detalhes conforme necessário para o seu projeto específico.