document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('Button');

  if (button) {
    button.addEventListener('click', () => {
      const a = document.createElement('a');
        a.href = 'The_Start.zip';
        a.download = 'The_Start.zip';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
  }
});
