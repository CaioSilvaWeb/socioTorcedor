const routes = require('express').Router();
const sociosController = require('../controllers/sociosController')

routes.get('/', sociosController.getAll);

routes.get("/socios/:id", sociosController.getById);
//rota para pegar o filme especifico
routes.get("/criar", sociosController.criar);
routes.post("/criacao", sociosController.criacao);
routes.get("/editar/:id", sociosController.editar1);
routes.post("/editar/:id", sociosController.editar);
routes.get("/deletar/:id", sociosController.deletar);

module.exports = routes;