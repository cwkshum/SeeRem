// referenced: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// https://javascript.info/onscroll
// https://stackoverflow.com/questions/4884839/how-do-i-get-an-element-to-scroll-into-view-using-jquery
// https://api.jquery.com/offset/

"use strict";

// Display the scrollUpbtn after the user has scrolled
window.addEventListener('scroll', function () {
  $('#scrollUpbtn').css("display", "block");
});

// Scroll to the top; activated when the scrollUpbtn is clicked
function toTop() {
  $('html, body').animate({scrollTop: 0});
}

// Scroll to a particular section
function scrollFunction(string) {
  if (string === 'confirm') {
    $('.confirmation-container').css("display", "block");
    $('.hidden.container').css("display", "flex");
    var offset = $('.confirmation-container').offset();
    $('html, body').animate({scrollTop: offset.top});
  } else if (string === 'form') {
    var offset = $('.contact-sales-container').offset();
    $('html, body').animate({scrollTop: offset.top});
  }
}

// Change Mobile Nav on Menu button click
var nav = 0; // off as default

function changeNav() {
  // if nav is off and the Menu button is clicked, show the navigation links if the screen size is under 960px
  if (nav === 0) {
    if ($(window).width() <= 960) {
      $('.nav-link-section').css("display", "block");
      $('.nav-link-section a').css("display", "block");
      nav = 1;
    }
  } else if (nav === 1) {
    $('.nav-link-section a').css("display", "none");
    nav = 0;
  }
}

// Change mobile navigation if the screen is resized. Navigation links are hidden whenever the window is resized.
$(window).resize(function() {
  if ($(window).width() <= 960) {
    $('.mobile-nav').css("display", "inline-block");
    $('.nav-link-section a').css("display", "none");
    nav = 0;
  } else if ($(window).width() >= 960) {
    $('.mobile-nav').css("display", "none");
    $('.nav-link-section a').css("display", "inline");
    nav = 0;
  }
});


// When the user selects a subscription tier, the radio buttons on the form are selected automatically
function fillRadio(string) {
  if (string === 'trial') {
    $('input:radio[id=trialRad]').attr('checked', true);
    $('input:radio[id=monthlyRad]').attr('checked', false);
    $('input:radio[id=annualRad]').attr('checked', false);
  } else if (string === 'monthly') {
    $('input:radio[id=trialRad]').attr('checked', false);
    $('input:radio[id=monthlyRad]').attr('checked', true);
    $('input:radio[id=annualRad]').attr('checked', false);
  } else if (string === 'annual') {
    $('input:radio[id=trialRad]').attr('checked', false);
    $('input:radio[id=monthlyRad]').attr('checked', false);
    $('input:radio[id=annualRad]').attr('checked', true);
  }
}


// Validate forms - check if the required forms are filled out. If they are filled and the user clicks the Submit button, the confirmation div shows and the window scrolls down to the confirmation div
function validateForm(string) {

  var firstName = document.forms.Form.firstname.value;
  var lastName = document.forms.Form.lastname.value;
  var email = document.forms.Form.email.value;

  if (string === "contact") {
    if(firstName === "" || lastName ==="" || email ==="") {
      return false;
    } else {
      scrollFunction('confirm');
    }
  }

  if (string === "account") {
    var confirmEmail = document.forms.Form.confirmemail.value;
    if(firstName === "" || lastName ==="" || email ==="" || confirmEmail === "") {
      return false;
    } else {
      scrollFunction('confirm');
    }
  }
  if (string === "subscription") {
    if(firstName === "" || lastName ==="" || email ==="") {
      return false;
    } else {
      scrollFunction('confirm');
    }
  }
}

jQuery(document).ready();
