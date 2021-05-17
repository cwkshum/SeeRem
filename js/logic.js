"use strict";

window.addEventListener('scroll', function () {
  // Display the scrollUpbtn after the user has scrolled
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    $('#scrollUpbtn').css("display", "block");
  } else{
    // hide the scrollUpbtn when user is at top of page
    $('#scrollUpbtn').css("display", "none");
  }
});

// Scroll to the top; activated when the scrollUpbtn is clicked
function toTop() {
  $('html, body').animate({scrollTop: 0});
}


jQuery(document).ready();
