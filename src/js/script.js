"use strict"
// let cosult1, cosult2;
document.addEventListener('DOMContentLoaded',() => {

    $(document).ready(function () {
        $('.slider__block').slick({
            speed: 1100,
            adaptiveHeight: true,
            arrows: true
    /*         prevArrow: <button type="button" class="slick-prev"> <img src="icons/left.svg"/> </button>,
            nextArrow: <button type="button" class="slick-next"> <img src="icons/right.svg"/> </button> */
        });
    });

function valForm(form) {
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            phone: {
                required: true,
                minlength: 11
            },
            email: {
                required: true,
            }
        },
        messages: {
            name: {
                required:"Подалуйста введите имя",
                minlength: jQuery.validator.format("Имя минимум из {0} символов.")
            },
    
            phone: {
                required:"Подалуйста введите номер телефона",
                minlength: jQuery.validator.format("Номер минимум из {0} символов.")
            },
            email: "Пожалуйста введите свой e-mail"
        }
    })
}

valForm('.consultaition__form-wrapp .contact-form');
valForm('#consultaition form');
valForm('#order form');

$('input[name=phone]').mask("+7 (999) 999-99-99");

})