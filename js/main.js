document.addEventListener('DOMContentLoaded', () => {
    const burgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if (burgers.length > 0) {
        burgers.forEach(burger => {
            burger.addEventListener('click', () => {
                const target = document.getElementById(burger.dataset.target);
                burger.classList.toggle('is-active');
                target.classList.toggle('is-active');
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.carousel-control.prev');
  const nextButton = document.querySelector('.carousel-control.next');
  const carouselWrapper = document.querySelector('.carousel-wrapper');
  const carouselSlides = document.querySelectorAll('.carousel-slide');
  const indicatorsContainer = document.querySelector('.carousel-indicators');
  const modalTriggers = document.querySelectorAll('.js-modal-trigger');
  const modal = document.getElementById('modal-js-example-3');
  const modalImage = document.getElementById('modal-image');
  let index = 0;

  function updateCarousel() {
      const totalSlides = carouselSlides.length;
      carouselWrapper.style.transform = `translateX(-${index * 100}%)`;

      prevButton.disabled = index === 0;
      nextButton.disabled = index === totalSlides - 1;

      // Update indicators
      document.querySelectorAll('.carousel-indicator').forEach((indicator, i) => {
          indicator.classList.toggle('active', i === index);
      });
  }

  function createIndicators() {
      indicatorsContainer.innerHTML = '';
      carouselSlides.forEach((_, i) => {
          const indicator = document.createElement('div');
          indicator.className = 'carousel-indicator';
          indicator.addEventListener('click', () => {
              index = i;
              updateCarousel();
          });
          indicatorsContainer.appendChild(indicator);
      });
  }

  prevButton.addEventListener('click', () => {
      if (index > 0) {
          index--;
          updateCarousel();
      }
  });

  nextButton.addEventListener('click', () => {
      if (index < carouselSlides.length - 1) {
          index++;
          updateCarousel();
      }
  });

  // Function to open modal with clicked image
  modalTriggers.forEach(trigger => {
      trigger.addEventListener('click', (event) => {
          event.preventDefault();
          const imageUrl = trigger.querySelector('img').src;
          modalImage.src = imageUrl;
          modal.classList.add('is-active');
      });
  });

  // Close modal on background or close button click
  modal.querySelector('.modal-background').addEventListener('click', () => {
      modal.classList.remove('is-active');
  });

  modal.querySelector('.modal-close').addEventListener('click', () => {
      modal.classList.remove('is-active');
  });

  createIndicators();
  updateCarousel();
});

document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('#tab-buttons li');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Удаляем активные классы с кнопок и содержимого
            tabButtons.forEach(btn => btn.classList.remove('is-active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Добавляем активные классы к выбранным элементам
            button.classList.add('is-active');
            document.getElementById(button.dataset.tab).classList.add('active');
        });
    });
});


