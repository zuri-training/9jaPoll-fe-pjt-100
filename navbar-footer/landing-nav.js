const menu = document.querySelector('img.menu');
const closer = document.querySelector('img.close');
const mobile_nav = document.querySelector('div.mobile-nav');

const toggleIcon = (delay) => {
    setTimeout(() => {
        menu.classList.toggle('hide-icon');
        closer.classList.toggle('hide-icon');
    }, delay)
}

menu.addEventListener('click', (e) => {
    mobile_nav.classList.add('show');
    toggleIcon(200);
});

closer.addEventListener('click', (e) => {
    toggleIcon(0);
    mobile_nav.classList.remove('show');
})