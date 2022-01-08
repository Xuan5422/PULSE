"use strict"
// let cosult1, cosult2;
document.addEventListener('DOMContentLoaded',() => {
	// let btns = document.querySelectorAll('.button');
	function OnOffModalConsult() {
		window['consultaition'].classList.toggle('modal_off');
		window['overlay'].classList.toggle('overlay_off')
	};

	function OnOffModalBuy() {
		window['order'].classList.toggle('modal_off');
		window['overlay'].classList.toggle('overlay_off')
	};

	cosult1.addEventListener('click', (eee) => {

		OnOffModalConsult();
	});
	cosult2.addEventListener('click', (eee) => {

		OnOffModalConsult();
	});
	
	window['closeConsult'].addEventListener('click', () => {

		OnOffModalConsult();
	});
	window['closeOrder'].addEventListener('click', () => {

		OnOffModalBuy();
	});

	window['catalog'].addEventListener('click', (Event) => {
	
		if(Event.target.tagName == "BUTTON") {
			OnOffModalBuy()
			

			if(Event.target.parentNode.parentNode.classList.contains('card')) {
				document.querySelectorAll('.modal__descr')[1].innerText = Event.target.parentNode.parentNode.children[1].innerText

			} else {
				document.querySelectorAll('.modal__descr')[1].innerText = Event.target.parentNode.parentNode.parentNode.children[0].children[1].innerText
			}
		}
	})
	


})