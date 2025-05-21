document.addEventListener('DOMContentLoaded', () => {
  const images = window.roomPhotos || [];
  let currentIndex = 0;

  const imgEl = document.getElementById('carousel-image');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  if (!imgEl || !prevBtn || !nextBtn) return;

  function updateImage() {
    imgEl.src = images[currentIndex];
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });
});
