document.addEventListener('DOMContentLoaded', function() {
  const div1 = document.querySelector('.div1');
  const div2 = document.querySelector('.div2');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, options);

  if (div1) {
    observer.observe(div1);
  }
  if (div2) {
    observer.observe(div2);
  }

  const sayHelloButton = document.getElementById('sayHelloButton');
  const helloOverlay = document.getElementById('helloOverlay'); 

  if (sayHelloButton) {
    sayHelloButton.addEventListener('click', function() {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);

      if (helloOverlay) { 
          helloOverlay.style.opacity = '1';
          helloOverlay.style.transform = 'translate(-50%, -50%) scale(1)';

          setTimeout(() => {
            helloOverlay.style.opacity = '0';
            helloOverlay.style.transform = 'translate(-50%, -50%) scale(0.8)';
          }, 2000);

          setTimeout(() => {
            helloOverlay.style.display = 'none';
          }, 3000);
      }

      const balloonContainer = document.getElementById('balloonContainer');
      const balloon = document.getElementById('balloon');
      const helloText = document.getElementById('helloText');

      if (balloonContainer && balloon && helloText) {
          balloonContainer.style.display = 'block'; 
          balloon.style.animation = 'floatIn 2s ease-out forwards';
          helloText.style.display = 'none'; 

          setTimeout(() => {
            balloon.src = 'path/to/your/burst.png';
            balloon.style.animation = 'burst 1s steps(5) forwards';
            helloText.style.display = 'block'; 
            helloText.style.animation = 'fadeIn 1s ease-in forwards'; 
          }, 2000);

          setTimeout(() => {
              balloonContainer.style.display = 'none';
              balloon.src = 'path/to/your/balloon.png'; 
              balloon.style.animation = ''; 
              helloText.style.animation = '';
              helloText.style.display = 'none'; 
          }, 5000);
      }
    });
  }
});

                                           /*  ..........................For Play Button.........................*/
document.addEventListener('DOMContentLoaded', function() {


  const playGameDiv1Button = document.getElementById('playGameDiv1Button');

  if (playGameDiv1Button) {
    playGameDiv1Button.addEventListener('click', function() {
      window.location.href = 'tictactoe.html'; 
    });
  }



});

