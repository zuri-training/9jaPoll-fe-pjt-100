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

