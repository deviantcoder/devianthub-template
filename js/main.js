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
    const modalTriggers = document.querySelectorAll('.js-modal-trigger');

    modalTriggers.forEach(trigger => {
        const modal = document.getElementById(trigger.dataset.target);

        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            modal.classList.add('is-active');
        });

        modal.querySelector('.modal-background').addEventListener('click', () => {
            modal.classList.remove('is-active');
        });
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.classList.remove('is-active');
        });
    });
});
