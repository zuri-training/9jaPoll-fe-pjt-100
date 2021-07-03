const menu = document.querySelector('img.menu');
const closer = document.querySelector('img.close');
const mobile_nav = document.querySelector('div.mobile-nav');

menu.addEventListener('click', (e) => {
    mobile_nav.classList.add('show');
});

closer.addEventListener('click', (e) => {
    mobile_nav.classList.remove('show');
})