{
    let slider = document.querySelector('.gallery-slider');
    if(slider) {
        let dataSlider = new Swiper(slider.querySelector('.swiper-container'), {
            observer: true,
            observeParents: true,
            slidesPerView: 'auto',
            spaceBetween: 18,
            speed: 800,
            freeMode: true,
            pagination: {
                el: slider.querySelector('.swiper-pagination'),
                type: "fraction",
              },
        });
    }
}