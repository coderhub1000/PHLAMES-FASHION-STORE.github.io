document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');

    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });
});
    
     

