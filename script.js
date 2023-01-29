const form = document.querySelector('form');

function validateForm(e) {
  const form = e.target;

  if (form.checkValidity()) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(form));

    alert('The form is valid.\n(Check console for the form data)');
    console.log(formData);
  } else {
    e.preventDefault();
  }
}

form.addEventListener('submit', (e) => {
  validateForm(e);
});
