import { addFormStatus } from './handleFormStatus.js';

const api = 'http://localhost:3333/todos';

async function addTodo(event) {
  event.preventDefault();

  const inputTodo = document.querySelector('[data-js="input-todo"]');
  const todoValue = inputTodo.value;

  if (!todoValue.trim()) return;

  addFormStatus('loading');

  try {
    await fetch(api, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: todoValue }),
    });

    addFormStatus('success');
  } catch (error) {
    console.log(error);

    addFormStatus('error');
  }

  inputTodo.value = '';
}

const formTodo = document.querySelector('[data-js="form-todo"]');
formTodo.addEventListener('submit', addTodo);
