const div = document.querySelector('.reveal');

function isVisible (arg) {
    const { top, bottom } = arg.getBoundingClientRect();

    if (bottom > 0 && top < window.innerHeight) {
        arg.classList.add('reveal_active')
    } else {
        arg.classList.remove('reveal_active')
    }
};

window.addEventListener('scroll', () => {
    isVisible(div);
})