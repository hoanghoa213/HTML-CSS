/* $(document).on('click', '.panel-heading span.clickable', function(e){
    var $this = $(this);
	if(!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
		
	} else {
		$this.parents('.panel').find('.panel-body').slideDown();
		$this.removeClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
		
	}
}) */
$(function(){
    //Show hide FAQ
    $("#headingOne1").click(function (e) { 
        var show = 'img-achoo/collapse-show.png';
        var hide = 'img-achoo/collapse-hide.png';
        
        if($(this).hasClass('faq-hide-achoo')){
            $(this).removeClass('faq-hide-achoo');
            $(this).addClass('faq-show-achoo');
            $("#collapseOne1").removeClass('faq-hide-achoo').addClass('faq-show-achoo');
            $("#changeCollapse1").attr("src", show);
        }
        else
        {
            $(this).addClass('faq-hide-achoo');
            $(this).removeClass('faq-show-achoo');
            $("#collapseOne1").removeClass('faq-show-achoo').addClass('faq-hide-achoo');
            $("#changeCollapse1").attr("src", hide);
        }
    });
    //Show hide FAQ
    $("#headingOne2").click(function (e) { 
        var show = 'img-achoo/collapse-show.png';
        var hide = 'img-achoo/collapse-hide.png';
        
        if($(this).hasClass('faq-hide-achoo')){
            $(this).removeClass('faq-hide-achoo');
            $(this).addClass('faq-show-achoo');
            $("#collapseOne2").removeClass('faq-hide-achoo').addClass('faq-show-achoo');
            $("#changeCollapse2").attr("src", show);
        }
        else
        {
            $(this).addClass('faq-hide-achoo');
            $(this).removeClass('faq-show-achoo');
            $("#collapseOne2").removeClass('faq-show-achoo').addClass('faq-hide-achoo');
            $("#changeCollapse2").attr("src", hide);
        }
    });
    //Show hide FAQ
    $("#headingOne3").click(function (e) { 
        var show = 'img-achoo/collapse-show.png';
        var hide = 'img-achoo/collapse-hide.png';
        
        if($(this).hasClass('faq-hide-achoo')){
            $(this).removeClass('faq-hide-achoo');
            $(this).addClass('faq-show-achoo');
            $("#collapseOne3").removeClass('faq-hide-achoo').addClass('faq-show-achoo');
            $("#changeCollapse3").attr("src", show);
        }
        else
        {
            $(this).addClass('faq-hide-achoo');
            $(this).removeClass('faq-show-achoo');
            $("#collapseOne3").removeClass('faq-show-achoo').addClass('faq-hide-achoo');
            $("#changeCollapse3").attr("src", hide);
        }
    });
    //Show hide FAQ
    $("#headingOne4").click(function (e) { 
        var show = 'img-achoo/collapse-show.png';
        var hide = 'img-achoo/collapse-hide.png';
        
        if($(this).hasClass('faq-hide-achoo')){
            $(this).removeClass('faq-hide-achoo');
            $(this).addClass('faq-show-achoo');
            $("#collapseOne4").removeClass('faq-hide-achoo').addClass('faq-show-achoo');
            $("#changeCollapse4").attr("src", show);
        }
        else
        {
            $(this).addClass('faq-hide-achoo');
            $(this).removeClass('faq-show-achoo');
            $("#collapseOne4").removeClass('faq-show-achoo').addClass('faq-hide-achoo');
            $("#changeCollapse4").attr("src", hide);
        }
    });
    //Show hide FAQ
    $("#headingOne5").click(function (e) { 
        var show = 'img-achoo/collapse-show.png';
        var hide = 'img-achoo/collapse-hide.png';
        
        if($(this).hasClass('faq-hide-achoo')){
            $(this).removeClass('faq-hide-achoo');
            $(this).addClass('faq-show-achoo');
            $("#collapseOne5").removeClass('faq-hide-achoo').addClass('faq-show-achoo');
            $("#changeCollapse5").attr("src", show);
        }
        else
        {
            $(this).addClass('faq-hide-achoo');
            $(this).removeClass('faq-show-achoo');
            $("#collapseOne5").removeClass('faq-show-achoo').addClass('faq-hide-achoo');
            $("#changeCollapse5").attr("src", hide);
        }
    });
    //Show hide FAQ
    $("#headingOne6").click(function (e) { 
        var show = 'img-achoo/collapse-show.png';
        var hide = 'img-achoo/collapse-hide.png';
        
        if($(this).hasClass('faq-hide-achoo')){
            $(this).removeClass('faq-hide-achoo');
            $(this).addClass('faq-show-achoo');
            $("#collapseOne6").removeClass('faq-hide-achoo').addClass('faq-show-achoo');
            $("#changeCollapse6").attr("src", show);
        }
        else
        {
            $(this).addClass('faq-hide-achoo');
            $(this).removeClass('faq-show-achoo');
            $("#collapseOne6").removeClass('faq-show-achoo').addClass('faq-hide-achoo');
            $("#changeCollapse6").attr("src", hide);
        }
    });
    //Show hide FAQ
    $("#headingOne7").click(function (e) { 
        var show = 'img-achoo/collapse-show.png';
        var hide = 'img-achoo/collapse-hide.png';
        
        if($(this).hasClass('faq-hide-achoo')){
            $(this).removeClass('faq-hide-achoo');
            $(this).addClass('faq-show-achoo');
            $("#collapseOne7").removeClass('faq-hide-achoo').addClass('faq-show-achoo');
            $("#changeCollapse7").attr("src", show);
        }
        else
        {
            $(this).addClass('faq-hide-achoo');
            $(this).removeClass('faq-show-achoo');
            $("#collapseOne7").removeClass('faq-show-achoo').addClass('faq-hide-achoo');
            $("#changeCollapse7").attr("src", hide);
        }
    }); 
    /* POPUP AUTO OPEN  */
    $(window).on('load',function(){
        $('#exampleModalCenter').modal('show');
    });

})