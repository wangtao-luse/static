$(function(){
	$(".topNavLanguage").hover(function(){
		$(this).addClass("open");
	});
	$(".topNavLanguage").mouseleave(function(){
		$(this).removeClass("open");
	});
	$(".topNavMyTour").hover(function(){
		$(this).addClass("open");
	});
	$(".topNavMyTour").mouseleave(function(){
		$(this).removeClass("open");
	});
	$(".consumerService").hover(function(){
		$(this).addClass("open");
	});
	$(".consumerService").mouseleave(function(){
		$(this).removeClass("open");
	});
	$(".topjoinTeam").hover(function(){
		$(this).addClass("open");
	});
	$(".topjoinTeam").mouseleave(function(){
		$(this).removeClass("open");
	});
	$("#menuNav li").hover(function(){
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
	
	$(".rcc-ban li").click(function(){
		$(".rcc-ban li").removeClass("rcc-at");
		$(this).addClass("rcc-at");
		var index=$(".rcc-ban li").index(this);		
		$(".recom-city .rcc-con").css("display","none");
	    $(".recom-city .rcc-con").eq(index).css("display","block");	
		
	});
	$(".nowCity").hover(function(){
		$(this).addClass("active");
		$("#showChooseCity").css("display","block");
	});
	$(".nowCity").mouseleave(function(){
		$(this).removeClass("active");
		$("#showChooseCity").css("display","none");
	});
})