import { createTodo } from './createTodo.js';

const api = 'http://localhost:3333/todos';

const todosContainer = document.querySelector('[data-js="todos"]');

async function getTodos() {
  todosContainer.innerHTML = '';

  try {
    const response = await fetch(api);
    const { todos } = await response.json();

    todos.forEach((todo) => {
      todosContainer.appendChild(createTodo(todo));
    });
  } catch (error) {
    todosContainer.innerText = 'An error occurred';
  }
}

export { getTodos };
