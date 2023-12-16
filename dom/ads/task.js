const text = [...document.querySelectorAll('.rotator__case')];
// console.log(text)
let index = 0;
let nextIndex = 0;
let previousIndex = 1

setInterval(() => {

    if (text[nextIndex].classList.contains('rotator__case_active')) {
        text[nextIndex].classList.remove('rotator__case_active');
        nextIndex += 1;
        text[nextIndex].classList.add('rotator__case_active');
    } else if (nextIndex === text.length) {
        text[nextIndex].classList.remove('rotator__case_active');
        nextIndex += 1;
        text[nextIndex].classList.add('rotator__case_active');
    }

}, 1000);
