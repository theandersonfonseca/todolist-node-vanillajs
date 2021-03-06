function createTodo({ _id: id, description, completed }) {
  const todo = document.createElement('li');
  todo.classList.add('todo');
  todo.setAttribute('data-js', id);

  if (completed) todo.classList.add('completed');

  const todoContent = `
    <span class="complete" data-js="complete"><i class="check fas fa-check"></i></span>

    <p class="description">${description}</p>

    <div class="options">
      ${
        !completed ? '<i class="edit fas fa-edit" data-js="edit-todo"></i>' : ''
      }
      <i class="remove fas fa-trash" data-js="remove-todo"></i>
    </div>
  `;

  todo.innerHTML = todoContent;

  return todo;
}

export { createTodo };
