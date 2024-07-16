import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API with Swagger',
            version: '1.0.0',
            description: 'A simple API application with Swagger documentation',
        },
    },
    apis: ['./src/routes/*.ts'], // Path to the API docs
};
const swaggerSpec = swaggerJSDoc(options);
const setupSwaggerDocs = (app) => {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
export default setupSwaggerDocs;
//# sourceMappingURL=swagger.js.map