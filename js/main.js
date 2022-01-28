const swiper = new Swiper('.swiper', {
    // Optional parameters

    slidesPerView: 3, /*сколкь слайдев отображается сразу, от 640 px и больше*/
    loop: true, /*зацикленность*/
    speed: 400, /*скрорость */
    spaceBetween: 70, /*расстяняие между карточками отзывов*/
    centeredSlides: true,
    slideToClickedSlide: true,
    toggle: true,
    breakpoints: { /*для адаптива*/
        // when window width is >= 320px до 480
        // 320: {
        //     slidesPerView: 1,
        //     spaceBetween: 20
        // },
        // // when window width is >= 480px до 640
        // 480: {
        //     slidesPerView: 2,
        //     spaceBetween: 30
        // },
        // // when window width is >= 640px
        // 640: {
        //     slidesPerView: 3,
        //     spaceBetween: 40
        // }
    }



});


const modal = document.querySelector('.modal'); /*мод окно*/
const orderButton = document.querySelector('.main-display__button'); //кнопка Зазкзаать


orderButton.addEventListener('click', () => {
    modal.classList.add('active');
});

modal.addEventListener('click', (evt) => {
    const isModal = evt.target.closest('.modal__inner'); // ближайшие элменты к .modal__inner
    if (!isModal) { // есл кликнули по области  кроме .modal__inner
        modal.classList.remove('active');
    }

});