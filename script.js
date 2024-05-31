// toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika menu di klik
document.querySelector('#Menu').
onclick = ( ) => {
    navbarNav.classList.toggle('active');

};

// klik asal untuk close nav 
const menu = document.querySelector('#Menu');
document.addEventListener('click',  function(e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});