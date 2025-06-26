export function setupModals() {
  document.querySelectorAll('[data-modal]').forEach(btn => {
    const target = document.getElementById(btn.dataset.modal);
    if (!target) return;
    btn.addEventListener('click', () => {
      target.classList.add('open');
    });
  });
  document.querySelectorAll('.modal').forEach(modal => {
    modal.querySelector('.close').addEventListener('click', () => {
      modal.classList.remove('open');
    });
  });
}

document.addEventListener('DOMContentLoaded', setupModals);
