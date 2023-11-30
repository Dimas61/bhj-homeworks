const clickBtn = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const items = Array.from(document.querySelectorAll('.dropdown__item'));
const value = document.querySelector('.dropdown__value');

clickBtn.addEventListener('click', () => {
    list.classList.toggle('dropdown__list_active');
});

items.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        value.textContent = elem.textContent;
        list.classList.remove('dropdown__list_active');
        event.preventDefault();
    }) 
});    

document.addEventListener('click', (event) => {
    if (event.target !== clickBtn) {
        list.classList.remove('dropdown__list_active');
    }
})