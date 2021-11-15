import { addFormStatus } from './handleFormStatus.js';

const api = 'http://localhost:3333/todos';

async function addTodo(event) {
  event.preventDefault();

  const buttonAdd = document.querySelector('[data-js="button-add"]');
  const inputTodo = document.querySelector('[data-js="input-todo"]');

  const todoValue = inputTodo.value;

  if (!todoValue.trim()) {
    addFormStatus('error', 'Preencha o campo.');

    return;
  }

  addFormStatus('loading');
  buttonAdd.disabled = true;

  try {
    await fetch(api, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: todoValue }),
    });

    addFormStatus('success', 'Todo Added Successfully.');
  } catch (error) {
    console.log(error);

    addFormStatus('error', 'An error occurred.');
  } finally {
    inputTodo.value = '';
    buttonAdd.disabled = false;
  }
}

export { addTodo };
