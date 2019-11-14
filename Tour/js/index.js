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
		$(this).addClass("open");
		var has=$(this).hasClass("sub-right");
		var hasFinancialTab=$(this).find(".submenu-nav").hasClass("financialTab");
		if(has){
		$("#submenuNavHoverBg .submenu-nav").addClass("submenu-nav-right");	
		}else{
			$("#submenuNavHoverBg .submenu-nav").removeClass("submenu-nav-right");	
		}
		if(hasFinancialTab){
			$("#submenuNavHoverBg .submenu-nav").addClass("financialTab");	
		}else{
			$("#submenuNavHoverBg .submenu-nav").removeClass("financialTab");	
		}
		var menuHtml=$(this).find(".submenu-nav").html();		
		if(menuHtml){
			$("#submenuNavHoverBg .submenu-nav").html(menuHtml);
			$("#submenuNavHoverBg").css("display","block");
			$("#submenuNavBg").css("display","none");
		}else{
			$("#submenuNavHoverBg").css("display","none");
			$("#submenuNavBg").css("display","block");
		}	
	});
	$("#menuNav li").mouseleave(function(){
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