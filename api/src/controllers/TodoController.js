const { v4: uuid } = require('uuid');
const Todo = require('../models/Todo');

module.exports = {
  async index(request, response) {
    try {
      const todos = await Todo.find();

      return response.status(200).json({ todos });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },

  async store(request, response) {
    const { description } = request.body;

    if (!description)
      return response.status(400).json({ error: 'Missing description.' });

    const todo = new Todo({
      _id: uuid(),
      description,
      completed: false,
    });

    try {
      await todo.save();

      return response.status(201).json({ message: 'Todo added successfully' });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },

  async update(request, response) {
    const { description } = request.body;

    if (!description)
      return response
        .status(400)
        .json({ error: 'You must inform the description' });

    if (description) response.todo.description = description;

    try {
      await response.todo.save();

      return response
        .status(200)
        .json({ message: 'Todo updated successfully' });
    } catch (error) {
      return response.status(500).json({ error: error.mensage });
    }
  },

  async delete(request, response) {
    try {
      await response.todo.remove();

      return response
        .status(200)
        .json({ message: 'Todo deleted successfully' });
    } catch (error) {
      return response.status(500).json({ error: error.mensage });
    }
  },

  async updateTodoComplete(request, response) {
    response.todo.completed = !response.todo.completed;

    try {
      await response.todo.save();

      const responseMessage = `${
        response.todo.completed
          ? 'Todo complete successfully.'
          : 'Todo incomplete successfully.'
      }`;

      return response.status(200).json({ message: responseMessage });
    } catch (error) {
      return response.status(500).json({ error: error.mensage });
    }
  },
};
