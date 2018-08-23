$(document).ready(function () {

  // Smooth Scrolling (modified from code by Kevin Powell https://codepen.io/kevinpowell/pen/dWzGox?editors=0010)
  $(".nav-link").click(function (event) { 
    event.preventDefault();
    $("body, html").animate({
      scrollTop: $(this.hash).offset().top - 50
    }, 1000);

    // Close the responsive menu (on mobile)
    $(".navbar-burger, .navbar-menu").removeClass("is-active");
  });

  // Responsive menu (code from https://bulma.io/documentation/components/navbar/)
  $(".navbar-burger").click(function() {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // Close the responsive menu when clicking anywhere on the page outside the menu
  $("#header").siblings().click(function () { 
    $(".navbar-burger, .navbar-menu").removeClass("is-active");
  });
});