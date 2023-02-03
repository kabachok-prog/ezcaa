$(function () {
    $('.client__inner').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('client__inner--active')) {
            $(this).removeClass('client__inner--active')
            $(this).children('.client__description').slideUp()
        } else {
            $('.client__inner').removeClass('client__inner--active')
            $('.client__description').slideUp()
            $(this).addClass('client__inner--active')
            $(this).children('.client__description').slideDown()
        }
    })
})

// const items = document.querySelectorAll(".second__step-client a");

// function toggleAccordion() {
//     const itemToggle = this.getAttribute('aria-expanded');

//     for (i = 0; i < items.length; i++) {
//         items[i].setAttribute('aria-expanded', 'false');
//     }

//     if (itemToggle == 'false') {
//         this.setAttribute('aria-expanded', 'true');
//     }
// }

// items.forEach(item => item.addEventListener('click', toggleAccordion));

// $('.client__inner').click(function () {
//     setTimeout(function () {
//         //Открываем 1 блок 
//         $('.client__description').slideToggle(500); //и задаём время анимации   
//     }, 300);//Задаём время задержки перед открытием после клика
// });