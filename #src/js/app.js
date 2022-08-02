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


	@@include('../common/checkbox/checkbox.js');
	@@include('../common/new-projects/new-projects.js');
	@@include('../common/gallery-slider/gallery-slider.js');
	@@include('../common/popup-gallery-slider/popup-gallery-slider.js');
	@@include('../common/products/products.js');
	@@include('../common/video-block/video-block.js');
	@@include('../common/history/history.js');



	let tooltipItems = document.querySelectorAll('[data-tooltip-text]');
	if (tooltipItems.length) {
		tooltipItems.forEach(item => {
			tippy(item, {
				content: item.dataset.tooltipText || '',
			});
		})
	}



});

@@include('blocks/map.js');

