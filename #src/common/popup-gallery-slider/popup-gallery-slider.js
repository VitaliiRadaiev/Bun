{
    let popupGalleryMain = document.querySelector('.popup-gallery-slider__main');
    let popupGalleryThumb = document.querySelector('.popup-gallery-slider__thumb');

    let totalImages = document.querySelector('.head-gallery__total');
    if(totalImages) {
        let num = popupGalleryThumb.querySelector('.swiper-container .swiper-wrapper').children.length;
        totalImages.innerText = num;
    }

    let dataThumb = new Swiper(popupGalleryThumb.querySelector('.swiper-container'), {
        loop: true,
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
        loop: true,
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
            let id = item.dataset.toPopupSlide;
            item.addEventListener('click', () => {
                dataMain.slideTo(id);
            })
        })
    }


}