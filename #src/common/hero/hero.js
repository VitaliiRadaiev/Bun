let hero = document.querySelector('.hero');
if (hero) {
    let blackBox = hero.querySelector('.black-box');

    if (document.documentElement.clientWidth < 1268 && blackBox) {
        let container = document.createElement('div');
        container.className = 'container';
        container.append(blackBox);
        hero.append(container);
    }
}

window.addEventListener('load', function () {
    let hero = document.querySelector('.hero');
    if (hero) {
        let blackBox = hero.querySelector('.black-box');
        let bg = hero.querySelector('.hero__img');
        let title = hero.querySelector('.promo-header__title');
        let body = hero.querySelector('.hero__body');

        if (title) {
            let strong = title.querySelector('strong');
            if (!strong) {
                let brAll = title.querySelectorAll('br');
                if(brAll) {
                    brAll.forEach(br => {
                        br.remove();
                    })
                }
                let text = title.innerText.split(' ');
                if (text.length > 1) {
                    let half = Math.round(text.length / 2);
                    title.innerHTML = `<strong>${text.slice(0, half).join(' ')}</strong> <strong>${text.slice(half).join(' ')}</strong>`
                } else {
                    title.innerHTML = `<strong>${title.innerText}</strong>`
                }
            }

            let strongLast = title.querySelector('strong:last-child');
            const setMinHeight = () => {
                if (strongLast) {
                    body.style.minHeight = bg.clientHeight + strongLast.clientHeight + 'px';
                }
            }
            setMinHeight();

            const setTransfomr = () => {
                if (document.documentElement.clientWidth >= 1268 && blackBox) {
                    blackBox.style.top = "0px";
                    let bottom = Math.round(bg.getBoundingClientRect().bottom);
                    let top = Math.round(blackBox.getBoundingClientRect().top);
                    if (top > bottom) {
                        blackBox.style.transform = `translateY(-${top - bottom}px)`;
                    } else {
                        blackBox.style.transform = `translateY(${bottom - top}px)`;
                    }
                }
            }

            setTransfomr();

            window.addEventListener('resize', setMinHeight);
        }
    }
})