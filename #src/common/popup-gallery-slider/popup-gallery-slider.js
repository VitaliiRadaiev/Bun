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
                                dataMain.slideTo(id);
                            })
                            item.classList.add('_hasEvent')
                        }
                    })
                }

            }
        })
    }
}