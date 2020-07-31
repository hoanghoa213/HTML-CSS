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
	$(".btn-newsl").click(function(event) {
    	var text = $(".input-newsl").val();
    	if($("#newsl")[0].checkValidity()===true){
    		alert(text);
    	}
    });
    $(".btn-contact").click(function(event) {
    	var name = $("#contact-name").val();
    	var mail = $("#contact-mail").val();
    	var phone = $("#contact-phone").val();
    	var cmt = $("#contact-cmt").val();
    	if($("#form-contact")[0].checkValidity()===true){
    		alert("Tên: "+name+"\nMail: "+mail+"\nPhone: "+phone+"\nCmt: "+cmt);
    	}
    });
    $("#newsl").submit(function(e){
    e.preventDefault(); // <-- prevents the form from submitting
    // do stuff
    // this.submit() // <-- send it through
});
});