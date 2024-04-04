const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDefinition = {
    info: {
        title: 'TaskManager',
        version: '1.0.0',
        description: 'This API is for task management and schedules',
    },
    basePath: '/',
}

const options = {
    swaggerDefinition: swaggerDefinition,
    apis: ['./src/Routes/*js'],
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec