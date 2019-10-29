$(function(){
	$(".content_subtitle .duty-title").hover(function(){
		$(".content .content_subtitle .duty-pop").css("display","block");
	});
	
	$(".content_subtitle .duty-title").mouseout(function(){
		$(".content .content_subtitle .duty-pop").css("display","none");
	});
});
