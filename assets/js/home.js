const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const allLinks = links.querySelectorAll('.nav-item');

toggle.addEventListener('click', toggler);

// Toggle hamburger state
function toggler () {
    links.classList.toggle('show-links');
}

// Apply active state for links
allLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        for (let i = 0; i < allLinks.length; i++) {
            allLinks[i].classList.remove('active');
        }
        link.classList.add('active');
    })
})


// Image Slider

const left_caret = document.querySelector('.left-caret');
const right_caret = document.querySelector('.right-caret');
const banner_carousel = document.querySelector('.banner-carousel');
const image_wrappers = document.querySelectorAll('.image-wrapper');

let count = 0;

image_wrappers.forEach(function(slide, index) {
    slide.style.left = `${index*120}%`
})


left_caret.addEventListener('click', () => {
    count--;
    console.log(count);
    if (count>-1) {
        banner_carousel.style.transform = `translateX(-${count * 120}%)`;
    }
    else {
        count = 0
    }
})

right_caret.addEventListener('click', () => {
    count++;
    console.log(count);
    if (count<3) {
        banner_carousel.style.transform = `translateX(-${count * 120}%)`;
    } else {
        count = 2
    }
})


