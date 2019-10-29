$(function(){
	$(".topNavLanguage").hover(function(){
		$(this).addClass("open");
		$(".topNavLanguage .second-menu").css("display","block");
	});
	$(".topNavLanguage").mouseleave(function(){
		$(this).removeClass("open");
		$(".topNavLanguage .second-menu").css("display","none");
	});
})