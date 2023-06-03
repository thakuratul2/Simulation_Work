function changeImage() {
  var image = document.getElementById('gif_test');
  var currentImageSrc = image.src;

  
  if (currentImageSrc.includes('images/initial.png')) {
    image.src = 'images/lab.gif';
    image.alt = 'Lab Gif';
  } else {
    image.src = 'images/initial.png';
    image.alt = 'initial 1';
  }
}
