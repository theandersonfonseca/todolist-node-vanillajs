const express = require('express');
const routes = express.Router();

const TodoController = require('./controllers/TodoController');
const TodoMiddleware = require('./middlewares/TodoMiddleware');

routes.get('/todos', TodoController.index);
routes.post('/todos', TodoController.store);

routes.put('/todos/:id', TodoMiddleware.validadeId, TodoController.update);
routes.delete('/todos/:id', TodoMiddleware.validadeId, TodoController.delete);
routes.patch(
  '/todos/:id',
  TodoMiddleware.validadeId,
  TodoController.updateTodoComplete
);

module.exports = routes;
