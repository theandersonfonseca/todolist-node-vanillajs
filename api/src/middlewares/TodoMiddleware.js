const { validate: isUuid } = require('uuid');
const Todo = require('../models/Todo');

module.exports = {
  async validateId(request, response, next) {
    const { id } = request.params;

    if (!isUuid(id)) return response.status(400).json({ error: 'Invalid ID.' });

    try {
      const todo = await Todo.findById(id);
      response.todo = todo;

      if (!todo) {
        return response.status(400).json({ error: 'Todo not found.' });
      }
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }

    next();
  },
};
