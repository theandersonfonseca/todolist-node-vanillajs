import { getTodos } from './getTodos.js';

const api = 'http://localhost:3333/todos';

async function removeTodo(id) {
  try {
    await fetch(`${api}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    getTodos();
  } catch (error) {
    console.log(error.message);
  }
}

export { removeTodo };
