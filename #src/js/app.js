let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));


window.addEventListener('load', function () {

	document.body.classList.add('is-load');

	// ==== ADD PADDING-TOP ================================
	{
		let wrapper = document.querySelector('._padding-top');
		if (wrapper) {
			let header = document.querySelector('.header');
			if (header) {
				const setPedding = () => wrapper.style.paddingTop = header.clientHeight + 'px';
				setPedding();
				window.addEventListener('resize', setPedding);
			}

		}
	}
	// ==== AND ADD PADDING-TOP ================================

	@@include('_function.js');
	@@include('files/dynamic_adapt.js');
	@@include('forms.js');
	@@include('../common/checkbox/checkbox.js');
	@@include('../common/header/header.js');
	@@include('../common/hero/hero.js');
	@@include('../common/footer/footer.js');
	@@include('../common/new-projects/new-projects.js');
	@@include('../common/gallery-slider/gallery-slider.js');
	@@include('../common/popup/popup.js');
	@@include('../common/popup-gallery-slider/popup-gallery-slider.js');
	@@include('../common/products/products.js');
	@@include('../common/video-block/video-block.js');
	@@include('../common/history/history.js');
	@@include('../common/gallery/gallery.js');


	let tooltipItems = document.querySelectorAll('[data-tooltip-text]');
	if (tooltipItems.length) {
		tooltipItems.forEach(item => {
			tippy(item, {
				content: item.dataset.tooltipText || '',
			});
		})
	}


	let productList = document.querySelector('.products__list');
	if (productList) {
		let arr = Array.from(productList.children).filter(i => {
			if (i.previousElementSibling) {
				if (i.previousElementSibling.classList.contains('big')) {
					return false
				} else {
					return i;
				}
			} else {
				return i
			}
		})
		.filter(i => i.classList.contains('big') ? false : i);

		const splitArray = (arr, length) => {
			let arr2 = []
			let step = Math.floor(arr.length / length);
			let count = 0;
			for (let i = 0; i <= step; i++) {
				arr2.push([arr[count], arr[count + 1], arr[count + 2]]);
				count += length;
			}

			return arr2
		}

		let arrayEl = splitArray(arr, 3);

		arrayEl.forEach(innerArr => {
			innerArr[0] && innerArr[0].classList.add('first');
			innerArr[1] && innerArr[1].classList.add('second');
			innerArr[2] && innerArr[2].classList.add('third');
		})
	}

});

@@include('blocks/map.js');



window.addEventListener('DOMContentLoaded', function () {
	if (isMobile.any()) {
		document.body.classList.add('_is-mobile');
	}


	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
});

//@@include('plagins/lazy-load.js');

