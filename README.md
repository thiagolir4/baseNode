# CRUD API com Node.js, Express e MongoDB

Este é um projeto de API CRUD (Create, Read, Update, Delete) desenvolvido com Node.js, Express e MongoDB. A API gerencia informações de usuários e suporta operações básicas como criação, leitura, atualização e exclusão de usuários.

## Pré-requisitos

- Node.js instalado
- MongoDB configurado e em execução
- Gerenciador de pacotes `npm` ou `yarn`

## Instalação

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>

2. Instale as dependências:
`npm install`
Configure o MongoDB. Certifique-se de que o banco de dados está em execução e conectado.

3. Inicie o servidor:
node <NOME_DO_ARQUIVO>
O servidor será iniciado na porta 8080.

## Estrutura do Projeto
css
project/
├── src/
│   ├── database/
│   │   ├── models/
│   │   │   └── user.model.js
│   └── views/
│       └── index.ejs
├── app.js
└── README.md

# Endpoints

### 1. Criar Usuário
URL: /users
Método: POST
Descrição: Cria um novo usuário.
Body Exemplo:
json
{
  "firstName": "João",
  "lastName": "Silva",
  "email": "joao.silva@example.com",
  "password": "1234567"
}
Resposta: Retorna o usuário criado.

### 2. Listar Todos os Usuários
URL: /users
Método: GET
Descrição: Retorna todos os usuários cadastrados.
Resposta: Array de usuários.

### 3. Buscar Usuário por ID
URL: /users/:id
Método: GET
Descrição: Busca um usuário pelo ID.
Resposta: Dados do usuário.

### 4. Atualizar Usuário
URL: /users/:id
Método: PATCH
Descrição: Atualiza informações de um usuário específico.
Body Exemplo:
json
Copiar
Editar
{
  "firstName": "Maria"
}
Resposta: Usuário atualizado.

### 5. Deletar Usuário
URL: /users/:id
Método: DELETE
Descrição: Remove um usuário pelo ID.
Resposta: Usuário removido.

### 6. Renderizar Página de Usuários
URL: /views/users
Método: GET
Descrição: Renderiza uma página com a lista de usuários.

### 7. Página Inicial
URL: /home
Método: GET
Descrição: Retorna uma página HTML simples com a mensagem "Hello World".
Middleware
Loga o tipo de requisição, o content-type, a data e o corpo da requisição antes de processá-la.
Modelo de Usuário
O modelo de usuário utiliza o Mongoose com os seguintes campos:

firstName (String, obrigatório)
lastName (String, obrigatório)
email (String, obrigatório)
password (String, obrigatório, mínimo 7 caracteres)

### Ferramentas Utilizadas
- Node.js: Plataforma de execução de JavaScript.
- Express: Framework para criação de APIs.
- MongoDB: Banco de dados NoSQL.
- EJS: Template engine para renderizar views.
- Mongoose: ODM para MongoDB.
