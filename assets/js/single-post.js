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

let postContainer = document.querySelector('.card-container');

async function getSimilarPosts() {
    try {
        let response = await fetch("https://propernaijapoll.herokuapp.com/api/v1/articles")
        let data = await response.json();
        let articles = data.articles;
        console.log(articles); 

        let posts = articles.map((post) => {
            const {title, description} = post;
            return `
            <div class="post-card">
            <img src="./assets/images/similar-post.png">
            <h4>${title}</h4>
            <p>${ description}</p>
            </div>
            `
        })

        postContainer.innerHTML = posts.join('')
        return data;
    } catch (error) {
        console.log(error);
    }


}



getSimilarPosts()

