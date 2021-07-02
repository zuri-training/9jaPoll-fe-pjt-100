const left_caret = document.querySelector('img.left-caret');
const right_caret = document.querySelector('img.right-caret');
const banner_carousel = document.querySelector('div.banner-carousel');

let click_counts = 0;

const setCaretState = (index) => {
    if (index > 0 && index < 3)
        left_caret.classList.add('active');
    else left_caret.classList.remove('active');
    if (index > -1 && index < 2)
        right_caret.classList.add('active');

    else right_caret.classList.remove('active')

}

setCaretState(0);

left_caret.addEventListener('click', () => {
    if (click_counts > 0 && click_counts < 3) click_counts--;
    banner_carousel.style.transform = `translateX(${-100*click_counts}%)`
    setCaretState(click_counts);
})

right_caret.addEventListener('click', () => {
    if (click_counts > -1 && click_counts < 2) click_counts++;
    banner_carousel.style.transform = `translateX(${-100*click_counts}%)`
    setCaretState(click_counts);
})