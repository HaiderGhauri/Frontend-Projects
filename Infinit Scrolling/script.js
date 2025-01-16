const filter = document.getElementById('filter');
const newsFeed = document.getElementById('news-feed-container');
const loader = document.getElementById('loader');

let limit = 5;
let page = 1;

async function fetchPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    const data = await res.json();
    return data;
};

async function renderPosts() {
    const posts = await fetchPosts();

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        postDiv.innerHTML = `
            <div id="post-id" class="post-id">${post.id}</div>
                <div class="post-content">
                    <h2 class="post-title">${post.title}</h2>

                    <p class="post-body">${post.body}</p>
                </div>
        `;
        newsFeed.appendChild(postDiv);
    });
};

function showLoader(){
    loader.classList.add('show');

    page++;

    renderPosts();

    loader.classList.remove('show');
};

function filterPosts(e){
    const filterKeyword = e.target.value.toLowerCase();

    const posts = document.querySelectorAll('.post');

    posts.forEach( post => {
        const title = post.querySelector('.post-title').innerText;
        const body = post.querySelector('.post-body').innerText;

        if ( title.indexOf(filterKeyword) >= 0 || body.indexOf(filterKeyword) >= 0){
            post.style.display = 'flex';
        } else{
            post.style.display = 'none';
        }
    });
}

window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if ( scrollTop + clientHeight >= scrollHeight - 50){
        showLoader();
    }
});

filter.addEventListener('input', filterPosts);

renderPosts();