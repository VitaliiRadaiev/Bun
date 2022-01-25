let singleArticleHero = document.querySelector('.article-single-page .hero');
if(singleArticleHero) {
    let titleWhiteText = singleArticleHero.querySelector('.promo-header__title > strong');
    let bg = singleArticleHero.querySelector('.hero__img');
    
    const setBgHeight = () => {
        let height = titleWhiteText.offsetTop + titleWhiteText.clientHeight;
        bg.style.height = height + 'px';
    }

    setBgHeight();

    window.addEventListener('resize', setBgHeight);
}