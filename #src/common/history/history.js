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
                    }
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
        }, 350)

    }
}