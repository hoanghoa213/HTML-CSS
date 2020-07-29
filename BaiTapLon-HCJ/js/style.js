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
	$( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] +".00"+ " - $" + ui.values[ 1 ]+".00" );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 )+".00" +
      " - $" + $( "#slider-range" ).slider( "values", 1 )+".00" );
});