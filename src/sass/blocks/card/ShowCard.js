let cardBlock = document.querySelector('.catalog__wrapp');
cardBlock.addEventListener('click', (Event) => {
    Event.preventDefault();
    let card = Event.target.parentNode,
    card_wrapp = Event.target.parentNode.parentNode,
    card_back;
    if(Event.target.innerText=="ПОДРОБНЕЕ") {

        card_back = card_wrapp.querySelector('.hidden');
        card_back.classList.toggle('hidden');
        card.classList.toggle('hidden');

    }
    if(Event.target.innerText=="НАЗАД") {
        card_back = card_wrapp.querySelector('.hidden');
        card_back.classList.toggle('hidden');
        card.classList.toggle('hidden');


    }
});