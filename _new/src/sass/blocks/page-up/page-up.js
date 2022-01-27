document.addEventListener('scroll', function() {
    let scroll = window.pageYOffset;
    if(scroll > 1500) document.querySelector('.page-up').classList.remove('page-up_off')
        else document.querySelector('.page-up').classList.add('page-up_off')
});
