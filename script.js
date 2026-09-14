function filterPortfolio(category) {
  const items = document.querySelectorAll('.portfolio-item');
  const buttons = document.querySelectorAll('.filter-btn');

  // Actualizar estado activo del botón
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // Mostrar u ocultar elementos
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

<script>
  function togglePlay(container) {
    const video = container.querySelector('video');
    const allVideos = document.querySelectorAll('.video-container video');

    // Pausar todos los demás videos que se estén reproduciendo
    allVideos.forEach(v => {
      if (v !== video) {
        v.pause();
        v.parentElement.classList.remove('playing');
      }
    });

    // Alternar reproducción / pausa con sonido
    if (video.paused) {
      video.muted = false; // Asegura que el sonido esté activo
      video.play();
      container.classList.add('playing');
    } else {
      video.pause();
      container.classList.remove('playing');
    }
  }
</script>