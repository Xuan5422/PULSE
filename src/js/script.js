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
        },

        submitHandler: function() { 
        
            console.log('валидация успешна');
            window['consultaition'].classList.toggle('modal_off');
            window['overlay'].classList.toggle('overlay_off');
            document.body.style.overflow = "";
            // document.body.classList.toggle('fixeScroll');
            document.querySelector(form).reset()
         }
    })
}

// valForm('.consultaition__form-wrapp .contact-form');
valForm('#consultaition form');
// valForm('#order form');

$('#order form').validate({
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
    },

    submitHandler: function() { 
        
        console.log('валидация успешна');
        window['order'].classList.toggle('modal_off');
		window['phanks'].classList.toggle('modal_off');
        document.querySelector('#order>.contact-form').reset()
        setTimeout(() => {
            window['phanks'].classList.toggle('modal_off');
            window['overlay'].classList.toggle('overlay_off');
            document.body.style.overflow = ""
        }, 3700);
     },

}),

$('.consultaition__form-wrapp .contact-form').validate({
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
    },

    submitHandler: function() { 
        console.log('валидация успешна');
        document.querySelector('.consultaition__form-wrapp .contact-form').reset()
     },

})

$('input[name=phone]').mask("+7 (999) 999-99-99");

// new WOW().init();

})