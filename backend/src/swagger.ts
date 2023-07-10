import { Router } from "express";
import swaggerUi from "swagger-ui-express";

export const configureSwagger = (router: Router): void => {
  const swaggerDocument = {
    openapi: "3.0.0",
    info: {
      title: "API do Desafio Users Hunter",
      version: "1.0.0",
      description:
        "API Node.js, consumindo a API Externa randomuser e um CRUD de usuários",
    },
    paths: {
      "/users": {
        post: {
          summary: "Cria um novo usuário",
          description: "Cria um novo usuário com base nos dados fornecidos",
          responses: {
            "200": {
              description: "Usuário criado com sucesso",
            },
          },
        },
        get: {
          summary: "Obtém a lista de usuários",
          description: "Retorna a lista completa de usuários",
          responses: {
            "200": {
              description: "Lista de usuários obtida com sucesso",
            },
          },
        },
      },
      "/users/{id}": {
        get: {
          summary: "Obtém um usuário pelo ID",
          description: "Retorna um usuário com base no ID fornecido",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "ID do usuário a ser obtido",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            "200": {
              description: "Usuário obtido com sucesso",
            },
            "404": {
              description: "Usuário não encontrado",
            },
          },
        },
        delete: {
          summary: "Exclui um usuário pelo ID",
          description: "Exclui um usuário com base no ID fornecido",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "ID do usuário a ser excluído",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            "200": {
              description: "Usuário excluído com sucesso",
            },
            "404": {
              description: "Usuário não encontrado",
            },
          },
        },
        put: {
          summary: "Atualiza um usuário pelo ID",
          description:
            "Atualiza um usuário com base no ID fornecido e nos dados fornecidos",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "ID do usuário a ser atualizado",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],
          responses: {
            "200": {
              description: "Usuário atualizado com sucesso",
            },
            "404": {
              description: "Usuário não encontrado",
            },
          },
        },
      },
      "/randomusers": {
        get: {
          summary: "Consome os dados da API Externa Random Users",
          description: "Retorna a lista desejada",
          responses: {
            "200": {
              description: "Lista obtida com sucesso",
            },
          },
        },
      },
    },
  };

  router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
