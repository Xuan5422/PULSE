"use strict"
document.addEventListener('DOMContentLoaded',() => {

let tabs = document.querySelector('.tabs');
let tabs__items = document.querySelectorAll('.tabs__item');
let catalog__content = document.querySelectorAll('.catalog__content');
let arr1, arr2;


let hideItems = function (arr1, arr2) {

    for(let i=0; i < arr1.length; i++) {

        console.log("функция hideItems. Выводим arr1[i] arr2[i] " + i);
        console.dir(arr1[i]);
        console.dir(arr2[i]);

        if(arr1[i].classList.contains("tabs__item_active")) {

            console.log('у элемента ' + i + ' удаляем класс aктивности');
            arr1[i].classList.remove('tabs__item_active');

            console.log('Классы таба '+i);
            console.dir(arr1[i]);
            arr2[i].classList.remove('catalog__content_active');
            console.log('Классы каталога '+i);
            console.dir(arr2[i]);
        }
            
    }
};

tabs.addEventListener('click', (Event) => {

    console.log('поймали клик на:');
    console.dir(Event.target.parentNode);
    
    if(!Event.target.parentNode.classList.contains('tabs__item_active')) {

        hideItems(tabs__items, catalog__content);

        Event.target.parentNode.classList.add('tabs__item_active');
        if(Event.target.parentNode.classList.contains('one')) {
            document.querySelector('.catalog__content.one').classList.add('catalog__content_active')
        }
        if(Event.target.parentNode.classList.contains('two')) {
            document.querySelector('.catalog__content.two').classList.add('catalog__content_active')
        }
        if(Event.target.parentNode.classList.contains('three')) {
            document.querySelector('.catalog__content.three').classList.add('catalog__content_active')
        }
    }

})

})
