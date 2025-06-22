
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
            if (typeof confetti === 'function') { // Check if confetti is loaded
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
            } else {
                console.warn("Confetti.js library not found. Confetti animation will not play.");
            }


            if (helloOverlay) {
                helloOverlay.style.opacity = '1';
                helloOverlay.style.transform = 'translate(-50%, -50%) scale(1)';
                helloOverlay.style.display = 'flex'; // Use flex if it's a centered overlay

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
                    balloon.src = 'path/to/your/burst.png'; // Update this path
                    balloon.style.animation = 'burst 1s steps(5) forwards';
                    helloText.style.display = 'block';
                    helloText.style.animation = 'fadeIn 1s ease-in forwards';
                }, 2000);

                setTimeout(() => {
                    balloonContainer.style.display = 'none';
                    balloon.src = 'path/to/your/balloon.png'; // Update this path
                    balloon.style.animation = '';
                    helloText.style.animation = '';
                    helloText.style.display = 'none';
                }, 5000);
            }
        });
    }

    const playGameDiv1Button = document.getElementById('playGameDiv1Button');

    if (playGameDiv1Button) {
        playGameDiv1Button.addEventListener('click', function() {
            window.location.href = 'tictactoe.html';
        });
    }

    function setupLikeButton(buttonId, countId, localStorageCountKey, localStorageLikedKey) {
        const btn = document.getElementById(buttonId);
        const countSpan = document.getElementById(countId);

        if (!btn || !countSpan) {
            return;
        }

        let currentCount = parseInt(localStorage.getItem(localStorageCountKey)) || 0;
        let userHasLiked = localStorage.getItem(localStorageLikedKey) === 'true';

        countSpan.textContent = currentCount;

        if (userHasLiked) {
            btn.classList.add('active');
        }

        function updateDisplayAndStorage() {
            countSpan.textContent = currentCount;
            localStorage.setItem(localStorageCountKey, currentCount);
            localStorage.setItem(localStorageLikedKey, userHasLiked);
        }

        btn.addEventListener('click', () => {
            if (userHasLiked) {
                currentCount--;
                userHasLiked = false;
                btn.classList.remove('active');
            } else {
                currentCount++;
                userHasLiked = true;
                btn.classList.add('active');
            }
            updateDisplayAndStorage();
        });
    }

    setupLikeButton('likeBtn', 'likeCount', 'likeCountIndex', 'userLikedIndex');
    setupLikeButton('likeBtnAbout', 'likeCountAbout', 'likeCountAboutPage', 'userLikedAboutPage');

    const allcardLink = document.querySelector('a[href="#allcard"]');
    if (allcardLink) {
        allcardLink.addEventListener('click', function(e) {
            e.preventDefault();
            const allcardSection = document.querySelector('#allcard');
            if (allcardSection) {
                allcardSection.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.warn("#allcard section not found for smooth scroll.");
            }
        });
    }


  

















    

}); 
