// Get the form
const form = document.getElementById(`blogForm`);

//event listener 
form.addEventListener()`submit`, function (e) {
    e.preventDefault()

    //input values 
const username = document.getElementById(`username`).value;
const title = document.getElementById(`title`).value;
const content = document.getElementById(`content`).value;

//check if its empty 
if (!username || !title || !content) {
   document.getElementById(`error-message`).innerText = "please fill out.";
   return;
}}
const blogPost = {
    username,
    title,
    content
};
window.location.href = 'blog.html';

let posts = JSON.parse(localStorage.getItem(`blogPosts`)) || [];
post.push(blogPost);
localStorage.setItem(`blogPosts`, JSON,stringify(posts));

window.location.href = `blog.html`; //refresh to post page 

