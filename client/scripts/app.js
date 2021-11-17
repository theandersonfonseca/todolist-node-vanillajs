import { addTodo } from './addTodo.js';
import { getTodos } from './getTodos.js';

getTodos();

const formTodo = document.querySelector('[data-js="form-todo"]');
formTodo.addEventListener('submit', addTodo);


