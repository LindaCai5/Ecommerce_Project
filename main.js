$(document).ready(function() {
	$(".megamenu").on("click", function(e) {
		e.stopPropagation();
	});
});


var modal1 = document.getElementById("exampleModalCenter");



window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}




function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


$(document).ready(function() {

  $('#cookieModal').modal('show');
	setTimeout(function() {$('#cookieModal').modal('hide');},
	 4000);
});
