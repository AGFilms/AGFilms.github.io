$(document).ready(function() {
	/*$('.menu-trigger').click(function() {
		$('nav ul').slideToggle(500);
	    $('body').toggleClass('fixed_body');
	    return false;
	});//end slide toggle*/
  	
  	$('.menu-trigger').on('click', function() {
  		$('nav ul').slideToggle(500);
  		return false;
  	});


	$(window).resize(function() {		
		if (  $(window).width() > 939 ) {			
			$('nav ul').removeAttr('style');
		}
	});//end resize

	if($('header').width() > 939){
	 $('.lang').click(function() {
	    $('.drop_down').slideToggle(300);
	 });//end 
	}
	
	 if($('header').width() < 939){
	  	$('a.link_menu').click(function(e) {
			$('.onMobile').slideUp(300); 
			$('body').removeClass('fixed_body');  
		});
	}



  	if($('header').width() > 939){
		$(window).bind('scroll', function () {
    		if ($(window).scrollTop() > $('header').height() - 1){
        	$('.navbg').addClass('fixed');
    	} else {
        	$('.navbg').removeClass('fixed');
    	}
		});
	}
});//end ready