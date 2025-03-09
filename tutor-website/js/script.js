// we want to listen for the event of the page loading then run the following function
document.addEventListener("DOMContentLoaded", function () {
  // then we need to select the hamburger menu button and the menu
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  // then we want to listen for when the toggle button is clicked and add/remove the active class to  .mobile-menu-items so that the menu will sweep in and out
  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  // function to give navbar a semi trasnparent background when scrolled past default position to make it more readable as you move down the page
});

// make navigation bar semi transparent as you scroll to aid readability via javascript to add a class based on scroll position
// if we use the window object, this references the browser window and looking at the window we can use an event listener to see the scroll poisition
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  // console.log(this.window.scrollY);
  if (this.window.scrollY > 0) {
    // add the class ".navbar-scroll" using classList.add
    // make sure you dont include the . before the class in these arguments or they wont work
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});
