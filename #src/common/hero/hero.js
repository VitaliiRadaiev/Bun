let singleArticleHero = document.querySelector('.article-single-page .hero');
if(singleArticleHero) {
    let titleWhiteText = singleArticleHero.querySelector('.promo-header__title > strong');
    let bg = singleArticleHero.querySelector('.hero__img');

    // if(!titleWhiteText) {
    //     let title = singleArticleHero.querySelector('.promo-header__title');
    //     let text = title.innerText.split(' ');
    //     let half = Math.round(text.length / 2);
    //     title.innerHTML = `<strong>${text.slice(0, half).join(' ')}</strong> <strong>${text.slice(half).join(' ')}</strong>`
    //     console.log(text);
    //     console.log(half);
    // }
    
    const setBgHeight = () => {
        if(titleWhiteText) {
            let height = titleWhiteText.offsetTop + titleWhiteText.clientHeight;
            bg.style.height = height + 'px';
        }
    }

    setBgHeight();

    window.addEventListener('resize', setBgHeight);
}