{
    let menuItemHasChildren = document.querySelectorAll('.menu__list .menu-item-has-children');
    if (menuItemHasChildren.length) {
        menuItemHasChildren.forEach(item => {
            let subMenu = item.querySelector('.sub-menu');
            let link = item.querySelector('.menu__link');

            item.addEventListener('mouseenter', () => {
                if (document.documentElement.clientWidth > 991.98) {
                    if (subMenu) {
                        subMenu.classList.add('is-show');
                        link.classList.add('active');
                    }
                }
            })
            item.addEventListener('mouseleave', () => {
                if (document.documentElement.clientWidth > 991.98) {
                    if (subMenu) {
                        subMenu.classList.remove('is-show');
                        link.classList.remove('active');
                    }
                }
            })

            link.addEventListener('click', (e) => {
                if (document.documentElement.clientWidth < 992) {
                    e.preventDefault();
                    link.classList.toggle('active');
                    _slideToggle(subMenu, 400);

                    menuItemHasChildren.forEach(i => {
                        if (i === item) return;

                        let subMenu = i.querySelector('.sub-menu');
                        let link = i.querySelector('.menu__link');

                        link.classList.remove('active');
                        _slideUp(subMenu, 400);
                    })
                }
            })
        })
    }

    let subMenuAll = document.querySelectorAll('.sub-menu');
    if (subMenuAll.length) {
        subMenuAll.forEach(subMenu => {
            let firstLink = subMenu.querySelector('.sub-menu__list a[data-tab="0"]');
            let firstBlockContent = subMenu.querySelector('.sub-menu-content-item[data-tab="0"]');

            if (firstLink && firstBlockContent) {
                firstLink.classList.add('active')
                firstBlockContent.classList.add('is-show')
            }

            let links = subMenu.querySelectorAll('.sub-menu__list a[data-tab]');
            if (links.length) {
                links.forEach(link => {
                    let tabId = link.dataset.tab;
                    let content = subMenu.querySelector(`.sub-menu-content-item[data-tab="${tabId}"]`);

                    link.addEventListener('mouseenter', () => {
                        if (document.documentElement.clientWidth > 991.98) {
                            link.classList.add('active');
                            content.classList.add('is-show');

                            links.forEach(l => {
                                if (l === link) return;

                                let tabId = l.dataset.tab;
                                let content = subMenu.querySelector(`.sub-menu-content-item[data-tab="${tabId}"]`);

                                l.classList.remove('active');
                                content.classList.remove('is-show');

                            })
                        }
                    })
                })
            }
        })
    }

    let menu = document.querySelector('.menu');
    let burger = document.querySelector('.burger-wrap');
    let btnClose = document.querySelector('.menu__close');

    burger.addEventListener('click', () => {
        menu.classList.add('open');
        document.body.classList.add('lock');
    })
    btnClose.addEventListener('click', () => {
        menu.classList.remove('open');
        document.body.classList.remove('lock');
    })
}