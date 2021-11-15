const formMessage = document.querySelector('[data-js="form-message"]');

function addFormStatusText(text) {
  formMessage.innerText = text;

  setTimeout(() => {
    formMessage.innerText = '';
  }, 3000);
}

function addFormStatus(status) {
  formMessage.classList.remove('error');
  formMessage.classList.remove('success');

  if (status === 'loading') {
    formMessage.innerText = 'Loading...';

    return;
  }

  formMessage.classList.add(status);

  const text =
    status === 'success' ? 'Todo Added Successfully.' : 'An error occurred.';

  addFormStatusText(text);
}

export { addFormStatus };
