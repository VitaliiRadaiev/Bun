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

	//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================





$('img.img-svg').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});




//Spollers
function spollerInit() {
	let spollers = document.querySelectorAll("._spoller");
	if (spollers.length > 0) {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];

			if(spoller.classList.contains('_active')) {
				_slideDown(spoller.nextElementSibling);
			}

			spoller.addEventListener("click", function (e) {
				e.preventDefault();
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							el.parentElement.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');
				if(spoller.classList.contains('_active')) {
					spoller.parentElement.classList.add('_active');
				} else {
					spoller.parentElement.classList.remove('_active');
				}
				_slideToggle(spoller.nextElementSibling);
			});
		}
	}
}
spollerInit()
// === // Spollers ==================================================================




if($('.anchor').length>0) {
	$(".anchor").click(function() {
	  var elementClick = $(this).attr("href").match(/#\w+$/gi).join(''); 
	  var destination = $(elementClick).offset().top - 70;
	  jQuery("html:not(:animated),body:not(:animated)").animate({
		scrollTop: destination
	  }, 600);
	  return false;
	});
}


function createTabs(containerName = false, triggersName = false, tabsName = false) {
    let container = document.querySelector(`${containerName}`);
    if(container) {
       let allTriggers = container.querySelectorAll(`${triggersName}`);
       let allTabs = container.querySelectorAll(`${tabsName}`);

       if(!allTabs.length) {
        let err = new Error('Tabs not found.');
        throw err;
       }

       if(allTriggers.length) {
           allTriggers.forEach(trigger => {
               trigger.addEventListener('click', (e) => {
                   e.preventDefault();
                   const id = trigger.getAttribute('href').replace('#','');
                  
                   trigger.classList.add('active');

                   allTriggers.forEach(i => {
                       if(i == trigger) {
                           return
                       }
                       i.classList.remove('active');
                   });

                   allTabs.forEach(tab => {
                       if(tab.id == id) {
                           tab.classList.add('active')
                       } else {
                           tab.classList.remove('active');
                       }
                   })
                   
               })
           })
       } else {
        let err = new Error('Triggers not found.');
        throw err;
       }
        
    } else {
      let err = new Error('Container not found.');
      throw err;
    }
};


	(function checkboxHandler() {
	let $checkboxWrap = document.querySelectorAll('.checkbox-wrap');
	if($checkboxWrap.length) {
		$checkboxWrap.forEach((item, index) => {
			let input = item.querySelector('input[type="checkbox"]');
			input.checked = true;
			item.querySelector('.checkbox-wrap__label').setAttribute('for', `_form${index}`)
			input.id = `_form${index}`;
			
			if(input.checked) {
				item.classList.add('_is-checked');
			}
			
			input.addEventListener('click', () => {
				if(input.checked) {
					item.classList.add('_is-checked');
				} else {
					item.classList.remove('_is-checked');
				}
				
			})
		})
	}
})();;
	{
    let slider = document.querySelector('.new-projects__slider');
    if(slider) {
        let dataSlider = new Swiper(slider, {
            slidesPerView: 'auto',
            spaceBetween: 0,
            speed: 800,
            loop: true,
            navigation: {
                nextEl: '.new-projects__slider-next',
            },
        });
    }

}

;
	{
    let slider = document.querySelector('.gallery-slider');
    if (slider) {
        if (slider.classList.contains('gallery-slider_two-rows') && document.documentElement.clientWidth >= 992) {
            let dataSlider = new Swiper(slider.querySelector('.swiper-container'), {
                observer: true,
                observeParents: true,
                spaceBetween: 18,
                speed: 800,
                freeMode: true,
                slidesPerColumn: 2,
                slidesPerView: 3,
                pagination: {
                    el: slider.querySelector('.swiper-pagination'),
                    type: "fraction",
                },
            });

        } else {
            let sliderContainer = slider.querySelector('.swiper-container');
            
            let hideSlier = document.createElement('div');
            hideSlier.className = "gallery-slider-hide";
            hideSlier.append(sliderContainer.cloneNode(true))

            slider.append(hideSlier);

            let dataSlider = new Swiper(sliderContainer, {
                observer: true,
                observeParents: true,
                slidesPerView: 'auto',
                spaceBetween: 18,
                speed: 800,
                freeMode: true,
            });

            let hideDataSlider = new Swiper(hideSlier.querySelector('.swiper-container'), {
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 18,
                speed: 800,
                pagination: {
                    el: slider.querySelector('.swiper-pagination'),
                    type: "fraction",
                },
                thumbs: {
                    swiper: dataSlider,
                },
            });

        }

    }
};
	{
    let popuItems = document.querySelectorAll('.popup');
    if(popuItems.length) {
        popuItems.forEach(popup => {
            let popupGalleryMain = popup.querySelector('.popup-gallery-slider__main');
            let popupGalleryThumb = popup.querySelector('.popup-gallery-slider__thumb');
            let list = popup.querySelector('.popup-gallery-list');
            let totalImages = popup.querySelector('.head-gallery__total');
           
            if(totalImages) {
                let num;
                if(popupGalleryThumb) {
                    num = popupGalleryThumb.querySelector('.swiper-container .swiper-wrapper').children.length;
                }
                if(list) {
                    num = list.children.length;
                }
                totalImages.innerText = num;
            }
        
            if(popupGalleryMain && popupGalleryThumb) {
                let dataThumb = new Swiper(popupGalleryThumb.querySelector('.swiper-container'), {
                    observer: true,
                    observeParents: true,
                    slidesPerView: 'auto',
                    spaceBetween: 18,
                    speed: 800,
                    freeMode: true,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                });
                let dataMain = new Swiper(popupGalleryMain.querySelector('.swiper-container'), {
                    spaceBetween: 18,
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1,
                    speed: 800,
                    preloadImages: false,
                    autoHeight: true,
                    lazy: {
                        loadPrevNext: true,
                    },
                    navigation: {
                        nextEl: popupGalleryMain.querySelector('.popup-gallery-slider__btn-next'),
                        prevEl: popupGalleryMain.querySelector('.popup-gallery-slider__btn-prev'),
                    },
                    thumbs: {
                        swiper: dataThumb,
                    },
                    pagination: {
                        el: popupGalleryThumb.querySelector('.swiper-pagination'),
                        type: "fraction",
                    },
                });
            
                let openTriggersItems = document.querySelectorAll('[data-to-popup-slide]');
                if(openTriggersItems.length) {
                    openTriggersItems.forEach(item => {
                        if(!item.classList.contains('_hasEvent')) {
                            let id = item.dataset.toPopupSlide;
                            item.addEventListener('click', () => {
                                if(id === 'platteground') {
                                    dataMain.slideTo(popupGalleryMain.querySelector('.swiper-wrapper').children.length - 1);
                                } else {
                                    dataMain.slideTo(id);
                                }
                            })
                            item.classList.add('_hasEvent')
                        }
                    })
                }

            }
        })
    }
};
	{
    let products = document.querySelector('.products_tabs');
    if(products) {
        createTabs('.products_tabs', '.nav__link', '.products__list');
    }
};
	function VideoHandler() {
	function togglePlayPause(video,btn) {
		if(video.paused) {
			video.play();
			btn.firstElementChild.className = 'icon-pause';
			video.setAttribute('controls', true);

		} else {
			video.pause();
			btn.firstElementChild.className = 'icon-play2';
			btn.style.opacity = '1';
		}
	}

	let videoBlock = document.querySelectorAll('.video-block');
	if(videoBlock.length) {
		videoBlock.forEach((item) => {
			let videoWrap = item.querySelector('.video-block__video-wrap');
			let video = item.querySelector('.video-block__video');
			let btn = item.querySelector('.video-block__play-pause');

			if(video) {
				if(video.hasAttribute('data-youtube-url')) {
					let url = video.dataset.youtubeUrl;
					btn.addEventListener('click', () => {
						video.innerHTML = `<iframe src="${url}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
					})

				} else {
					btn.addEventListener('click', (e) => {
						e.preventDefault();
						togglePlayPause(video,btn);
					});
					video.addEventListener('ended', () => {
						video.pause();
						btn.firstElementChild.className = 'icon-play2';
						btn.style.opacity = '1';
						video.removeAttribute('controls');
					});
					video.addEventListener('play', () => {
						btn.firstElementChild.className = 'icon-pause';
					});
					video.addEventListener('pause', () => {
						btn.firstElementChild.className = 'icon-play2';
					});
					videoWrap.addEventListener('mouseenter', (e) => { 
						if(!video.paused) {
							btn.style.opacity = '1';
						} 
					});
					videoWrap.addEventListener('mouseleave', (e) => { 
						if(!video.paused ) {
							btn.style.opacity = '0';
						} 
					});
				}
			}
		})
	}

}

VideoHandler();;
	{
    let yearsSlider = document.querySelector('.history__years');
    let historySlider = document.querySelector('.history__slider');

    if (yearsSlider && historySlider) {
        let yearItems = document.querySelectorAll('.history__years-item');
        yearItems.forEach((item, index) => item.setAttribute('data-id', index));
        let el = document.querySelector(`.history__years-item[data-id="${Math.floor(yearItems.length / 2)}"]`);
        el.classList.add('_active');

        setTimeout(() => {
            let dataHistorySlider;

            let dataYearsSlider = new Swiper(yearsSlider, {
                observer: true,
                observeParents: true,
                slidesPerView: 'auto',
                spaceBetween: 0,
                speed: 800,
                freeMode: true,
                initialSlide: Math.floor(yearItems.length / 2),
                // watchOverflow: true,
                centeredSlides: true,
                //loop: true,
                //watchSlidesVisibility: true,
                // slideToClickedSlide: true,
                on: {
                    click: async (data, e) => {
                        let item = e.target.closest('.history__years-item');
                        if (item) {
                            let id = item.dataset.id;
                            item.classList.add('_active');

                            data.slides.forEach(i => {
                                if (i == item) return;

                                i.classList.remove('_active');
                            })

                            await new Promise((res, rej) => {
                                setTimeout(() => {
                                    dataYearsSlider.update();
                                    res();
                                }, 350)
                            })

                            dataYearsSlider.slideTo(id);
                            dataHistorySlider.slideTo(id);
                        }
                    },
                },
                // navigation: {
                //     nextEl: historySlider.querySelector('.slider-button.next'),
                //     prevEl: historySlider.querySelector('.slider-button.prev'),
                // },
            });

            setTimeout(() => {
                dataYearsSlider.update();
            }, 350)

            dataHistorySlider = new Swiper(historySlider, {
                effect: "coverflow",
                observer: true,
                observeParents: true,
                centeredSlides: true,
                slidesPerView: 1,
                spaceBetween: 0,
                initialSlide: Math.floor(yearItems.length / 2),
                speed: 800,
                autoHeight: true,
                touchRatio: 0,
                //preloadImages: false,
                lazy: {
                    loadPrevNext: true,
                },
            });



            let slides = yearsSlider.querySelectorAll('.history__years-item');
            let btnNext = historySlider.querySelector('.slider-button.next');
            if(btnNext) {
                btnNext.addEventListener('click', async () => {
                    let activeItem = yearsSlider.querySelector('.history__years-item._active');
                    if(activeItem.nextElementSibling) {
                        let item = activeItem.nextElementSibling;
                        let id = item.dataset.id;
                        item.classList.add('_active');

                        slides.forEach(i => {
                            if (i == item) return;
        
                            i.classList.remove('_active');
                        })
        
                        await new Promise((res, rej) => {
                            setTimeout(() => {
                                dataYearsSlider.update();
                                res();
                            }, 350)
                        })
        
                        dataYearsSlider.slideTo(id);
                        dataHistorySlider.slideTo(id);
                    }
                    
                })
            }

            let btnPrev = historySlider.querySelector('.slider-button.prev');
            if(btnPrev) {
                btnPrev.addEventListener('click', async () => {
                    let activeItem = yearsSlider.querySelector('.history__years-item._active');
                    if(activeItem.previousElementSibling) {
                        let item = activeItem.previousElementSibling;
                        let id = item.dataset.id;
                        item.classList.add('_active');

                        slides.forEach(i => {
                            if (i == item) return;
        
                            i.classList.remove('_active');
                        })
        
                        await new Promise((res, rej) => {
                            setTimeout(() => {
                                dataYearsSlider.update();
                                res();
                            }, 350)
                        })
        
                        dataYearsSlider.slideTo(id);
                        dataHistorySlider.slideTo(id);
                    }
                    
                })
            }

        }, 350)

    }
};



	let tooltipItems = document.querySelectorAll('[data-tooltip-text]');
	if (tooltipItems.length) {
		tooltipItems.forEach(item => {
			tippy(item, {
				content: item.dataset.tooltipText || '',
			});
		})
	}



});

{


	var isMap = document.getElementById("map");
	if(isMap) {
		var map;

		var center = {
			lat: +isMap.dataset.centerLat,
			lng: +isMap.dataset.centerLng,
		}

		var markerPosition = {
			lat: +isMap.dataset.markPositionLat,
			lng: +isMap.dataset.markPositionLng,
		}

		function initMap() {

			map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: center.lat, lng: center.lng},
				fullscreenControl: false,
				zoom: 16,
				//styles: 
			});

			var marker = new google.maps.Marker({

			    position: {lat: markerPosition.lat, lng: markerPosition.lng},

			    map: map,

			    title: '',
			    label: '',

			   // icon: 'img/contact/googlMarker.svg',
			});

		}
	}
};

