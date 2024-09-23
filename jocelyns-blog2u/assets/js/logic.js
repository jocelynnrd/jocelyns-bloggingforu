//function to load and show post.
function loadBlogPosts () {
const posts = JSON.parse(localStorage.getItem(`blogPosts`)) || [];
const postsList = document.getElementById(`postsList`);



posts.forEach(({ title, content, username }) => {
    postsList.innerHTML += `
    <div class="post">
    <h2>${title}</h2>
    <p>${content}</p>
    <p><em>By: ${username}</em></p>
    </div>
    `;
});
}

document.addEventListener(`DOMContentLoaded`, () => {
    loadBlogPosts();

    const modeToggle = document.getElementById(`modeToggle`);
    if (modeToggle) {
        modeToggle.addEventListener(`click`, toggleDarkMode);
       
    }

});


