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

            /*
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoHeight: true,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1268: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
            */
        });
    }
}