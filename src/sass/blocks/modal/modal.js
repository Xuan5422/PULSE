"use strict"
document.addEventListener('DOMContentLoaded',() => {

	// let btns = document.querySelectorAll('.button');
	function OnOffModalConsult() {
		window['consultaition'].classList.toggle('modal_off');
		window['overlay'].classList.toggle('overlay_off');
		// document.body.classList.toggle('fixeScroll')
	};

	function OnOffModalBuy() {
		window['order'].classList.toggle('modal_off');
		window['overlay'].classList.toggle('overlay_off');
		// document.body.classList.toggle('fixeScroll')
	};

	function OnOffModalPhanks() {
		window['phanks'].classList.toggle('modal_off');
		window['overlay'].classList.toggle('overlay_off');
		// document.body.classList.toggle('fixeScroll')
	};


	cosult1.addEventListener('click', (eee) => {
		document.body.style.overflow = "hidden";
		OnOffModalConsult();
	});
	cosult2.addEventListener('click', (eee) => {
		document.body.style.overflow = "hidden";
		OnOffModalConsult();
	});
	
	window['closeConsult'].addEventListener('click', () => {
		document.body.style.overflow = "";
		OnOffModalConsult();
	});
	window['closeOrder'].addEventListener('click', () => {
		document.body.style.overflow = "";
		OnOffModalBuy();
	});

	window['catalog'].addEventListener('click', (Event) => {
	
		if(Event.target.tagName == "BUTTON") {
			document.body.style.overflow = "hidden";
			OnOffModalBuy()
			

			if(Event.target.parentNode.parentNode.classList.contains('card')) {
				document.querySelectorAll('.modal__descr')[1].innerText = Event.target.parentNode.parentNode.children[1].innerText

			} else {
				document.querySelectorAll('.modal__descr')[1].innerText = Event.target.parentNode.parentNode.parentNode.children[0].children[1].innerText
			}
		}
	});

/* 	my_form.addEventListener('submit', () => {
		console.log('Событие отправки формы')
	})  */
	
/* 	document.querySelector('#order>.contact-form').addEventListener('submit', (Event) => {

		// document.querySelector('#order>.contact-form').reset();
		window['order'].classList.toggle('modal_off');
		window['phanks'].classList.toggle('modal_off');
		flag = 1;
		console.log('flag= ' + flag)
	});
 */

	window['closePhanks'].addEventListener('click', () => {
		OnOffModalPhanks();
		document.body.style.overflow = "";
		// console.log('flag= ' + flag)
	});


})