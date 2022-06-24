$(function(){
	$(".pic-explanation").mouseover(function(event) {
		$(".content .change:nth-child(1)").removeClass('active');
	});
	$(".pic-explanation").mouseout(function(event) {
		$(".content .change:nth-child(1)").addClass('active');
	});
	$(window).scroll(function(event) {
		var height = $(".menu-top").height();
		if($(this).scrollTop() >= $("#about").offset().top - 5){
			$(".menu-top").addClass('fixed-top');
			$("body").css("padding-top", height + "px");
		}
		else{
			$(".menu-top").removeClass('fixed-top');
			$("body").css("padding-top", 0);
		}

		//Back-to-top
		if($(this).scrollTop()){
			$(".back-to-top").fadeIn();
		}
		else{
			$(".back-to-top").fadeOut();
		}
	});
	$('header .menu-top ul li a').on('click',function (e) {
		e.preventDefault();
	    var target = this.hash;
	    if (target){
		    $target = $(target);

		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 800, 'swing', function () {
		        window.location.hash = target;
		    });
	    }
	});
	$(".back-to-top").click(function(event) {
		/* Act on the event */
		//Về home và có hiệu chậm chậm
		$("html").animate(
		{
			scrollTop: 0
		},
		2000
		);
	});
	$(window).scroll(countAnimation);
	var viewed = false;

	function isScrolledIntoView(elem) {
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	function countAnimation() {
	  	if (isScrolledIntoView($(".award")) && !viewed) {
	      	viewed = true;
	      	$(".award .number").each(function () {
	      		$(this).prop('Counter',0).animate({
	          		Counter: $(this).text()
	      		}, 	{
			          	duration: 4000,
			          	easing: 'swing',
			          	step: function (now) {
			            	$(this).text(Math.ceil(now));
	          		}
	      		});
	    	});
	  	}
	}
	
});


