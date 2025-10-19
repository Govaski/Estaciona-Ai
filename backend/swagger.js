const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentação da API',
      version: '1.0.0',
      description: 'Descrição da sua API aqui',
    },
  },
  apis: ['./routes/*.js'], // Altere esse caminho se suas rotas estiverem em outro lugar
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };