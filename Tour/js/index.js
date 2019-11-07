$(function(){
	$(".topNavLanguage").hover(function(){
		$(this).addClass("open");
		$(".topNavLanguage .second-menu").css("display","block");
	});
	$(".topNavLanguage").mouseleave(function(){
		$(this).removeClass("open");
		$(".topNavLanguage .second-menu").css("display","none");
	});
	
	$("#menuNav li:not(li:first)").hover(function(){
		$("#menuNav li").find(".submenu-nav").css("display","none");		
		var len=$(this).find(".submenu-nav").length;		
		if(len>0){
			$("#submenuNavBg").css("display","none");			
			$(this).find(".submenu-nav").css("display","block");			
		}else{
			$("#submenuNavBg").css("display","block");	
		}
	  	$(this).addClass("open");
		
		
	});
	$("#menuNav li").mouseleave(function(){
		$(this).find("submenu-nav").css("display","none");
		$(this).removeClass("open");
	});
})