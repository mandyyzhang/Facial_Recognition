// for downward scroll
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
//=============================================================================
var upbutton = document.getElementById("up");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  //upbutton appears 20px from top of website
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upbutton.style.display = "block";
  } else {
    upbutton.style.display = "none";
  }
}

//when clicked, goes all the way to the top
function topFunction() {
  document.body.scrollTop = 0; //0px from top
  document.documentElement.scrollTop = 0;
}
