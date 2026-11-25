(() => {
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');
  if (!form || !status) return;
  const fields = [...form.querySelectorAll('input,textarea')];

  function validate(field) {
    const value = field.value.trim();
    let message = '';
    if (field.required && !value) message = 'This field is required.';
    else if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = 'Enter a valid email address.';
    else if (value && field.minLength > 0 && value.length < field.minLength) message = `Please enter at least ${field.minLength} characters.`;
    field.setAttribute('aria-invalid', String(Boolean(message)));
    return message;
  }
  fields.forEach(field => field.addEventListener('input', () => {
    if (field.getAttribute('aria-invalid') === 'true') validate(field);
    status.textContent = '';
    status.className = 'form-status';
  }));
  form.addEventListener('submit', event => {
    event.preventDefault();
    const firstInvalid = fields.find(field => validate(field));
    if (firstInvalid) {
      status.textContent = 'Please check the highlighted fields and try again.';
      status.className = 'form-status error';
      firstInvalid.focus();
      return;
    }
    status.textContent = 'Your details look good, but this demo form is not connected to a message service yet. Please email Mohamed directly.';
    status.className = 'form-status notice';
  });
})();
