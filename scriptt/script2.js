const elementsToAnimate = document.querySelectorAll('.animated');

        function animateElements() {
            elementsToAnimate.forEach((element, index) => {
                element.style.animation = `fadeInUp 1s ease forwards ${index * 0.2}s`;
            });
        }

        window.addEventListener('load', animateElements);