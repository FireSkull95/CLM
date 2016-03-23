$( document ).ready(function() {

	$('.svg-container .path-anim').hover(function() {
		$(".svg-container span.box").removeClass("run");
		$(".svg-container .path-anim").removeClassSVG("run");
		$(this).css("stroke","rgba(0,0,0,1)");

	}, function() {
		$(".svg-container span.box").addClass("run");
		$(".svg-container .path-anim").addClassSVG("run");
		$(this).css("stroke","rgba(0,0,0,0)");

	});
	
	$('.svg-container .path-anim.path-anim-8').hover(function() {
		$('.svg-container .path-anim.path-anim-8').css("stroke","rgba(0,0,0,1)");

	}, function() {
		$('.svg-container .path-anim.path-anim-8').css("stroke","rgba(0,0,0,0)");
	});

	$('.svg-container .box').hover(function() {
		$(".svg-container span.box").removeClass("run");
		$(".svg-container .path-anim").removeClassSVG("run");
		$(this).css("border-color","rgba(0,0,0,1)");

	}, function() {
		$(".svg-container span.box").addClass("run");
		$(".svg-container .path-anim").addClassSVG("run");
		$(this).css("border-color","rgba(0,0,0,0)");

	});

	$('li.stream-color-row.unborder').hover(function() {
		$("li.stream-color-row.unborder").removeClass("run");
		// $(this).css("border-color","rgba(0,0,0,1)");

	}, function() {
		$("li.stream-color-row.unborder").addClass("run");
		// $(this).css("border-color","rgba(0,0,0,0)");

	});

});
