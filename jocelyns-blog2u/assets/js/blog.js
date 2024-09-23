// back button event listener 
document.getElementById(`backButton`).addEventListener(`click`, function (){
// back to the landing page 
window.location.href = `index.html`
});

//light/dark toggle button EL
document.getElementById(`toggleTheme`).addEventListeners(`click`, function () {
 //  toggle the dark mode 
 document.body.classList.toggle(`dark-mode`);   
}
);

