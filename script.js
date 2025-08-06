const darkToggle = document.getElementById('darkModeToggle');

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('darkmode');

  // ✨ Glitch-Effekt für 60 Sekunden
  document.body.classList.add('glitch');
  setTimeout(() => {
    document.body.classList.remove('glitch');
  }, 60000); // 1 Minute
});
