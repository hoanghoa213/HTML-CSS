$(function() {
	$(".language-item").click(function(event) {
		/* Act on the event */
		var text = $(this).html();
		$(".language").html(text);
	});
	$(".unit-item").click(function(event) {
		/* Act on the event */
		var text = $(this).text();
		$(".unit").text(text);
	});
});