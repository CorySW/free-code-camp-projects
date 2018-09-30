$(window).scroll(function() {
	if ($(document).scrollTop() > 50) {
		$("#icon-txt").css("color", "transparent");
	} else {
		$("#icon-txt").css("color", "black");
	}
});
