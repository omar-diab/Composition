
let toggler = document.querySelector('.the-toggler');
let navbar = document.querySelector('.navbar');
toggler.addEventListener('click', function() {
    if (navbar.style.display === 'none') {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
});