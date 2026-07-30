document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('ctaButton');

  if (button) {
    button.addEventListener('click', () => {
      button.textContent = 'Thanks!';
    });
  }
});
