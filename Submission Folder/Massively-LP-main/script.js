
// Selecting the html elemnts

const menu = document.querySelector('.menu-btn');
const close = document.querySelector('.close-btn');
const nav = document.querySelector('.navbar');

// Applying javascript function


menu.addEventListener('click', function(){
    nav.style.display = "block";
});

close.addEventListener('click', function() {
    nav.style.display = "none";
})