(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

function send_email(){
  var at = document.getElementById("email_input").value.indexOf("@");
  if (at == -1) {
    alert("Not a valid e-mail!");
    submitOK = "false";
  }
  else{
     var email_passed  = document.getElementById("email_input").value;
     window.open("https://script.google.com/macros/s/AKfycbxN9Wf8d5qB-mFXKvrGMRkLz8sB1HggV-CT78KrPjjCI8qB0Il7/exec?&Data1=" + email_passed,'_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=10000, top=10000, width=0.1, height=0.1, visible=none', '');
  }
}


//Modals

// Get the modal
var modal = document.getElementById('SJ_Modal');
var modal2 = document.getElementById('VN_Modal');
// Get the button that opens the modal
var btn = document.getElementById("StanislavJochman_img");
var btn2 = document.getElementById("VeronikaNemjova_img");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("SJ_close")[0];
var span2 = document.getElementsByClassName("VN_close")[0];
// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

//getting_started button
function copy_btn(text) {
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute('value', text);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  alert("Board manager link copied.");
}


//support us popup


$(".order-cheezburger").on("click", function() {
  $.colorbox.close();
});

function onPopupOpen() {
  $("#modal-content").show();
  $("#yurEmail").focus();
}

function onPopupClose() {
  $("#modal-content").hide();
  Cookies.set('colorboxShown', 'yes', {
    expires: 1
  });
  $(".clear-cookie").fadeIn();
  lastFocus.focus();
}

function displayPopup() {
  $.colorbox({
    inline: true,
    href: "#modal-content",
    className: "cta",
    width: 600,
    height: 350,
    onComplete: onPopupOpen,
    onClosed: onPopupClose
  });
}

var lastFocus;
var popupShown = Cookies.get('colorboxShown');

if (popupShown) {
  console.log("Cookie found. No action necessary");
  $(".clear-cookie").show();
} else {
  console.log("No cookie found. Opening popup in 3 seconds");
  $(".clear-cookie").hide();
  setTimeout(function() {
    lastFocus = document.activeElement;
    displayPopup();
  }, 3000);
}