{
    let footerNavItems = Array.from(document.querySelector('.footer__nav').children);
    if (footerNavItems.length) {
        footerNavItems.forEach(item => {
            let title = item.querySelector('.footer__nav-title');
            let list = item.querySelector('.footer__nav-list');

            if (title && list) {
                title.addEventListener('click', (e) => {
                    if (document.documentElement.clientWidth < 768) {
                        e.preventDefault();
                        title.classList.toggle('active');
                        _slideToggle(list, 400);

                        footerNavItems.forEach(i => {
                            if (i === item) return;

                            let title = i.querySelector('.footer__nav-title');
                            let list = i.querySelector('.footer__nav-list');

                            title.classList.remove('active');
                            _slideUp(list, 400);

                        })
                    }
                })
            }
        })
    }
}