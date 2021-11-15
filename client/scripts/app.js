import { addTodo } from './addTodo.js';

const formTodo = document.querySelector('[data-js="form-todo"]');
formTodo.addEventListener('submit', addTodo);
