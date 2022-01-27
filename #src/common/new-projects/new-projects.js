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

