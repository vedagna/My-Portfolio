
document.addEventListener('DOMContentLoaded', function() {
 
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('myNavMenu');

    menuIcon.addEventListener('click', function() {
  
        navMenu.classList.toggle('active');
  
        menuIcon.classList.toggle('open');
    });
});

