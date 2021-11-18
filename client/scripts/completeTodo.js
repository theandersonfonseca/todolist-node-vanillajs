import { getTodos } from './getTodos.js';

const api = 'http://localhost:3333/todos';

async function completeTodo(id) {
  try {
    await fetch(`${api}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
    });

    getTodos();
  } catch (error) {
    console.log(error.message);
  }
}

export { completeTodo };
