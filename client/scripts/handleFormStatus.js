const formMessage = document.querySelector('[data-js="form-message"]');

function addFormStatusText(text) {
  formMessage.innerText = text;

  setTimeout(() => {
    formMessage.innerText = '';
  }, 3000);
}

function addFormStatus(status, text) {
  formMessage.classList.remove('error');
  formMessage.classList.remove('success');

  if (status === 'loading') {
    formMessage.innerText = 'Loading...';

    return;
  }

  formMessage.classList.add(status);

  addFormStatusText(text);
}

export { addFormStatus };
