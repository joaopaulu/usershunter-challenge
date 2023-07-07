# Users API

API feita NODE, consumindo a API RandomUsers

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- TypeORM
- Postgres

## Entidades

<pre>
User {
  id: string;
  gender: string;
  first: string;
  last: string;
  email: string;
  phone: string;
  picture: string;
  location: Location;

}</pre>

## Rotas

- GET /users - retorna os usuários salvos no banco
- POST /users - cria um usuário
- PATCH /users/:id - atualiza um usuário
- DELETE /users/:id - deleta um usuário


