window.addEventListener('DOMContentLoaded', function () {
	if (isMobile.any()) {
		document.body.classList.add('_is-mobile');
	}

    document.head.insertAdjacentHTML('beforeEnd', `
    <style>
        body::-webkit-scrollbar {
            width: 2px;
            height: 2px;
        }

        body::-webkit-scrollbar-thumb {
            background: #24272a;
            border-radius: 10px;
        }

        body::-webkit-scrollbar-thumb:hover {
            background: #b3afb3;
        }

        body::-webkit-scrollbar-track {
            background: #e7e7e7;
            border-radius: 10px;
            -webkit-box-shadow: inset 0px 0px 0px 0px #f0f0f0;
            box-shadow: inset 0px 0px 0px 0px #f0f0f0;
        }

        ._page {
            -webkit-box-flex: 1;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            width: 100%;
            min-height: 100%;
            overflow: hidden;
        }
    </style>
    `)

    @@include('files/dynamic_adapt.js');
    @@include('forms.js');
    @@include('../common/header/header.js');
	@@include('../common/hero/hero.js');
    @@include('../common/footer/footer.js');
    @@include('../common/popup/popup.js');

    
	let productListAll = document.querySelectorAll('.products__list');
	if (productListAll.length) {
		productListAll.forEach(productList => {
			const addClasses = () => {
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

					arr.forEach((item, index) => {
						if( index % 3 === 0) {
							item.classList.add('first');
						}
						if( index % 3 === 1) {
							item.classList.add('second');
						}
						if( index % 3 === 2) {
							item.classList.add('third');
						}
					})
			}

			addClasses();

			let observer = new MutationObserver(mutationRecords => {
				addClasses();
			});

			observer.observe(productList, {
				childList: true
			});
		})
	}
});