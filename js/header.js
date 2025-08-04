document.addEventListener("DOMContentLoaded", function () {
    // DOM Elements
    const burgerMenu = document.getElementById('burgerMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const callbackBtn = document.getElementById('callbackBtn');
    const privacyExpand = document.getElementById('privacyExpand');

    // Burger Menu Toggle
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        if (menuOverlay.classList.contains('active')) {
            document.body.classList.add('header-lock');
        } else {
            document.body.classList.remove('header-lock');
        }
    });

    // Close menu when clicking on overlay
    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) {
            burgerMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.classList.remove('header-lock');
        }
    });

    // Close menu when clicking on menu links
    document.querySelectorAll('.menu-overlay__link').forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.classList.remove('header-lock');
        });
    });
});