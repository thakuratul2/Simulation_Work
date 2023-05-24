const gifImage = document.getElementById('gif_test');
const playBtn = document.getElementById('motbut');



playBtn.addEventListener('click', function() {
  if (gifImage.classList.contains('paused')) {
    gifImage.classList.remove('paused');
    gifImage.src = gifImage.src;
    // playBtn.textContent = 'Pause';
  } else {
    gifImage.classList.add('paused');
   // playBtn.textContent = 'Play';
  }
});
