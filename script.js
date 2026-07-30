document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('Button');

  if (button) {
    button.addEventListener('click', () => {
      button.textContent = 'Thanks!';
      button.download = The_Start.zip;
    });
  }
});
