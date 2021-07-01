const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

toggle.addEventListener('click', toggler);

function toggler () {
    links.classList.toggle('show-links');
}

const allLinks = links.querySelectorAll('.nav-item');

allLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        for (let i = 0; i < allLinks.length; i++) {
            allLinks[i].classList.remove('active');
        }
        link.classList.add('active');

    })
})

