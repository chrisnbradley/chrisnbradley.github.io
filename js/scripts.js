// Get the modal
const modal = document.getElementById('modalCopyPaste');

// Get the button that opens the modal
const btn = document.getElementById("copyPasteBox");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    $('body').addClass('noScroll');
    $('html').addClass('noScroll');
    console.log("document.getElementsByClassName('noScroll');");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    $('body').removeClass('noScroll');
    $('html').removeClass('noScroll');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $('.body').removeClass('noScroll');
        $('.html').removeClass('noScroll');
    }
}

// Get the hamburger menu button that opens Navigation
const navBtn = document.getElementsByClassName('menuBtn')[0];

// Get the navigation menu
const navMenu = document.getElementsByClassName('main-nav')[0];
const disNav = navMenu.style.display;

// When user clicks the hamburger button, toggle show/hide navigation menu
$('.menuBtn').click(function() {
  $('.main-nav').fadeToggle(1000, function() {
    // If navigation menu is expanded show, give hamburger button light grey shade
    if ($('#btnCollapse').css('background-color') === 'rgb(168, 168, 168)') {
      $('#btnCollapse').css('background-color', 'rgb(43,45,57)');
    } else {
      $('#btnCollapse').css('background-color', 'rgb(168,168,168)');
    }
  }); //jQuery animation to fade show/hide navigation menu
})
