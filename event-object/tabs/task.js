const tabsArray = [...document.querySelectorAll('.tab')];
const tabsContentArray = [...document.querySelectorAll('.tab__content')];

tabsArray.forEach((item, index) => {
    item.addEventListener('click', () => {

       tabsArray.forEach((elem) => {
        elem.classList.remove('tab_active');
        item.classList.add('tab_active');

        tabsContentArray.forEach((state) => {
            state.classList.remove('tab__content_active')
        });
       });
       tabsContentArray[index].classList.add('tab__content_active')
    });
})
