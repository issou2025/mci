export function setupValidation() {
  document.querySelectorAll('form.validate').forEach(form => {
    form.addEventListener('input', e => {
      if (e.target.matches('input[required], textarea[required]')) {
        e.target.setCustomValidity('');
        if (!e.target.checkValidity()) {
          e.target.setCustomValidity('Invalid field');
        }
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', setupValidation);
