import { getTodos } from './getTodos.js';
import { addFormStatus } from './handleFormStatus.js';

const api = 'http://localhost:3333/todos';

const formTodo = document.querySelector('[data-js="form-todo"]');
const formEdit = document.querySelector('[data-js="form-edit"]');
const inputEdit = document.querySelector('[data-js="input-edit"]');
const buttonSaveEdit = document.querySelector('[data-js="button-edit"]');

async function editTodo(id) {
  formTodo.style.display = 'none';
  formEdit.style.display = 'block';

  inputEdit.value = document
    .querySelector(`[data-js="${id}"]`)
    .textContent.trim();

  inputEdit.focus();

  buttonSaveEdit.addEventListener('click', async (event) => {
    event.preventDefault();

    if (!inputEdit.value.trim()) {
      addFormStatus('error', 'Preencha o campo.');

      return;
    }

    addFormStatus('loading');
    buttonSaveEdit.disabled = true;

    try {
      await fetch(`${api}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: inputEdit.value }),
      });

      addFormStatus('success', 'Todo edited Successfully.');
      getTodos();
    } catch (error) {
      console.log(error.message);
      addFormStatus('error', 'An error occurred.');
    } finally {
      formTodo.style.display = 'block';
      formEdit.style.display = 'none';

      buttonSaveEdit.disabled = false;

      location.reload(true);
    }
  });
}

export { editTodo };
