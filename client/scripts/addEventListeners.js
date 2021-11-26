import { completeTodo } from './completeTodo.js';
import { editTodo } from './editTodo.js';
import { removeTodo } from './removeTodo.js';

function addEventListeners() {
  const completeBtns = document.querySelectorAll('[data-js="complete"]');
  const removeBtns = document.querySelectorAll('[data-js="remove-todo"]');
  const editBtns = document.querySelectorAll('[data-js="edit-todo"]');

  completeBtns.forEach((completeBtn) => {
    completeBtn.addEventListener('click', (e) => {
      completeTodo(e.target.parentNode.getAttribute('data-js'));
    });
  });

  removeBtns.forEach((removeBtn) => {
    removeBtn.addEventListener('click', (e) => {
      removeTodo(e.target.parentNode.parentNode.getAttribute('data-js'));
    });
  });

  editBtns.forEach((editBtn) => {
    editBtn.addEventListener('click', (e) => {
      editTodo(e.target.parentNode.parentNode.getAttribute('data-js'));
    });
  });
}

export { addEventListeners };
