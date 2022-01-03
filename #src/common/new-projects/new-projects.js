{
    let slider = document.querySelector('.new-projects__slider');
    if(slider) {
        let dataSlider = new Swiper(slider, {
            observer: true,
            observeParents: true,
            slidesPerView: 'auto',
            spaceBetween: 0,
            speed: 800,
            pagination: {
            	el: slider.querySelector('.swiper-pagination'),
            	clickable: true,
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

