const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0', // Specify the version of OpenAPI
    info: {
      title: 'Task Manager API', // Title of your API
      version: '1.0.0', // Version of your API
      description: 'API documentation for the Task Manager', // Description of your API
    },
    servers: [
      {
        url: 'http://localhost:5000', // Base URL of your API
        description: 'Development server', // Description of the server
      },
    ],
  },
  apis: ['./src/Routes/*.js'], // Path to the routes files that contain API documentation annotations
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
