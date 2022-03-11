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
}