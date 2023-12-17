const text = [...document.querySelectorAll('.rotator__case')];
// console.log(text)
let index = 0;
let nextIndex = 0;
let previousIndex = 1;
const textLength = text.length - 1;
console.log(textLength)


// setInterval(() => {

        // text[nextIndex].classList.remove('rotator__case_active');
        // nextIndex += 1;
        // text[nextIndex].classList.add('rotator__case_active');
//         if (nextIndex >= 5) {
//             nextIndex = 0 ;
//         } else {
//             text[nextIndex].classList.remove('rotator__case_active');
//             nextIndex += 1;
//             text[nextIndex].classList.add('rotator__case_active');
//         }

// }, 1000);

// setInterval(() => {
//     text.forEach((item, index, array) => {
//         array[nextIndex].classList.add('rotator__case_active');
//         nextIndex += 1
//     })
// }, 1000);

setInterval(() => {
    if (index == textLength) {
        index = 0;
    } 

        text[index].classList.remove('rotator__case_active');
        index += 1;
        text[index].classList.add('rotator__case_active');
    
}, 1000)