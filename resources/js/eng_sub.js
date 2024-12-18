$(function () { 	
	$(".header").addClass("sub_active");


	// 왼쪽서브메뉴가 모바일로 변경되는 형태    
    $("#snb .depth2>li.active>a").on("click", function(){
        if (mobile()) active(this, "toggle", 1, ".depth2")
    }) 
    $("#snb .depth3>li.active>a").on("click", function(){
        if (mobile()) active(this, "toggle", 1, ".depth3")
    }) 

	//내용 많은 테이블
	$(".responsive").each(function(){
		$(this).before("<p class='horizontal_scroll eng mobile'><i class='xi-arrow-left'></i><i class='xi-touch'></i><i class='xi-arrow-right'></i><span class='txt'>You can move left and right.</span></p>");
	})
   
});
