{
    let galleryBlocks = document.querySelectorAll('.gallery');
    if (galleryBlocks.length) {
        galleryBlocks.forEach(gallery => {
            let id = gallery.querySelector('[data-to-popup-slide]').dataset.toPopupSlide;
            let btn = gallery.querySelector('.popup-link-scroll');

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const popupName = btn.getAttribute('href').replace('#', '');
                const currentPopup = document.getElementById(popupName);
                let topHeight = currentPopup.querySelector(`[data-to-popup-slide="${id}"]`).offsetTop;
                let headHeight = currentPopup.querySelector('.popup-gallery__top').clientHeight + 15;
                popupOpen(currentPopup);

                currentPopup.scrollTo({
                    top: topHeight - headHeight,
                    behavior: 'smooth',
                });
            })
        })
    }
}