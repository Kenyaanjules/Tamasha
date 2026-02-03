(function () {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((b) => {
    if (b.textContent && b.textContent.trim() === 'Register') {
      b.addEventListener('click', () => {
        alert('Next: we will connect this button to Django registrations + M-Pesa payments.');
      });
    }
  });
})();
