const fontSizes = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');
const small = document.querySelector('.font-size_small');
const normal = document.querySelector('.book__control_font-size').children[1];
const big = document.querySelector('.font-size_big');
// Текст
const textColor = Array.from(document.querySelectorAll('.color'));
const textColorBlack = document.querySelector('.text_color_black');
const textColorGray = document.querySelector('.text_color_gray');
const textColorWhitesmoke = document.querySelector('.text_color_whitesmoke');
// Фон
const bgColorBlack = document.querySelector('.bg_color_black');
const bgColorGray = document.querySelector('.bg_color_gray');
const bgColorWhite = document.querySelector('.bg_color_white');

fontSizes.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        if (item.dataset.size === 'small') {
            book.classList.remove('font-size_big');
            book.classList.add('font-size_small');
            item.classList.add('font-size_active');
            big.classList.remove('font-size_active');
            normal.classList.remove('font-size_active');
        }
        if (item.dataset.size === 'big') {
            book.classList.remove('font-size_small');
            book.classList.add('font-size_big');
            item.classList.add('font-size_active');
            small.classList.remove('font-size_active');
            normal.classList.remove('font-size_active');
        }
        if (item.dataset.size !== 'small' && item.dataset.size !== 'big') {
            book.classList.remove('font-size_small');
            book.classList.remove('font-size_big');
            item.classList.add('font-size_active');
            small.classList.remove('font-size_active');
            big.classList.remove('font-size_active');
        }
    })
});

textColor.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        if (item.dataset.textColor === 'black') {
            book.classList.add('book_color-black');
            book.classList.remove('book_color-gray');
            book.classList.remove('book_color-whitesmoke');
            textColorBlack.classList.add('color_active');
            textColorGray.classList.remove('color_active');
            textColorWhitesmoke.classList.remove('color_active');
        }
        if (item.dataset.textColor === 'gray') {
            book.classList.add('book_color-gray');
            book.classList.remove('book_color-black');
            book.classList.remove('book_color-whitesmoke');
            textColorGray.classList.add('color_active');
            textColorBlack.classList.remove('color_active');
            textColorWhitesmoke.classList.remove('color_active');
        }
        if (item.dataset.textColor === 'whitesmoke') {
            book.classList.add('book_color-whitesmoke');
            book.classList.remove('book_color-black');
            book.classList.remove('book_color-gray');
            textColorWhitesmoke.classList.add('color_active');
            textColorBlack.classList.remove('color_active');
            textColorGray.classList.remove('color_active');
        }
        if (item.dataset.bgColor === 'black') {
            book.classList.add('text_color_black');
            book.classList.remove('text_color_gray');
            book.classList.remove('text_color_whitesmoke');
            item.classList.add('color_active');
            bgColorGray.classList.remove('color_active');
            bgColorWhite.classList.remove('color_active');
        }
        if (item.dataset.bgColor === 'gray') {
            book.classList.add('text_color_gray');
            book.classList.remove('text_color_black');
            book.classList.remove('text_color_whitesmoke');
            item.classList.add('color_active');
            bgColorBlack.classList.remove('color_active');
            bgColorWhite.classList.remove('color_active');
        }
        if (item.dataset.bgColor === 'white') {
            book.classList.add('text_color_whitesmoke');
            book.classList.remove('text_color_black');
            book.classList.remove('text_color_gray');
            item.classList.add('color_active');
            bgColorBlack.classList.remove('color_active');
            bgColorGray.classList.remove('color_active');
        }
    })
})

