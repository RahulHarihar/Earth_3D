let stars;
document.addEventListener('DOMContentLoaded', function() {

  function createStars(count) {
      for (let i = 0; i < count; i++) {
          drawStars();
      }
  }

  function drawStars() {
      var tmpStar = document.createElement('figure');
      tmpStar.className = "star";
      tmpStar.style.top = 100 * Math.random() + '%';
      tmpStar.style.left = 100 * Math.random() + '%';
      var starsContainer = document.getElementById('stars');
      if (starsContainer) {
          starsContainer.appendChild(tmpStar);
      } else {
          console.error('The stars container is not found.');
      }
  }

  function selectStars() {
      stars = document.querySelectorAll(".star");
      console.log(stars);
  }

  function animateStars() {
      Array.prototype.forEach.call(stars, function(el) {
          gsap.to(el, {
              duration: Math.random() * 0.5 + 0.5,
              opacity: Math.random(),
              onComplete: animateStars
          });
      });
  }

  
  createStars(200);
  selectStars();
  animateStars();
});