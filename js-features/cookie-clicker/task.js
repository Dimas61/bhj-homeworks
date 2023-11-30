window.onload = function() {
    alert('Страница загружена');
}

const cookie = document.querySelector('#cookie');
let counter = document.querySelector('#clicker__counter');
let tabState = false;

// function widthCookie () {
//     if (tabState === false) {
//         cookie.width = 150;
//         tabState = true;
//        } else {
//         cookie.width = 200;
//         tabState = false;
//        }
//        counter.textContent++;
// }

// cookie.addEventListener('click', widthCookie)

cookie.addEventListener('click', () => {
    console.log(this);
})