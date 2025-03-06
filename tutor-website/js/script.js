// we want to listen for the event of the page loading then run the following function
document.addEventListener('DOMContentLoaded', function () {
    // then we need to select the hamburger menu button and the menu
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

    // then we want to listen for when the toggle button is clicked and add/remove the active class to  .mobile-menu-items so that the menu will sweep in and out
    toggleButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active')
    })

})