$(document).ready(function() {
	$(".megamenu").on("click", function(e) {
		e.stopPropagation();
	});
});

// Get the modal
var modal1 = document.getElementById("exampleModalCenter");



window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}



// ---------------------------------------------------------



// 
// $(document).ready(function() {
//
//   $('#cookieModal').modal('show');
// 	setTimeout(function() {$('#cookieModal').modal('hide');},
// 	 4000);
// });
