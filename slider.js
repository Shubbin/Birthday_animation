document.addEventListener('DOMContentLoaded', function() {
    let currentImage = 0;
    const images = [
      'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg',
      'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg'
    ];
    const sliderImage = document.getElementById('sliderImage');

    function showNextImage() {
      sliderImage.src = images[currentImage];
      currentImage = (currentImage + 1) % images.length;
    }

    showNextImage();
    setInterval(showNextImage, 5000);
  });
