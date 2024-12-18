$(function () { 	
	$(".header").addClass("sub_active");

	/* snb */
	var $lnb = $(".snb");
	$(window).scroll(function() {	
		if($("#content").height() > $lnb.height()){	
			var scrollT = Math.floor($(this).scrollTop());
				contStart = $(".snb_content_wrap").offset().top;
				contEnd = $("#wrap").height()-($(".footer").height() + $lnb.height());			
			if (contEnd > scrollT ) {
				if(scrollT > contStart){
					$lnb.addClass("stick").css({"top":$(".gnb_area").height()} + 10);
					if (mobile()) $lnb.addClass("stick").css({"top":$(".gnb_area").height()})
				}else{
					$lnb.removeClass("stick").removeAttr("style");
				}				
			}else{
				$lnb.css({"top":contEnd-scrollT});
			}	
		}		
	});

	// 왼쪽서브메뉴가 모바일로 변경되는 형태    
    $("#snb .depth2>li.active>a").on("click", function(){
        if ($("html").hasClass("acc_fontsize")||mobile()) active(this, "toggle", 1, ".depth2")
    }) 
    $("#snb .depth3>li.active>a").on("click", function(){
        if ($("html").hasClass("acc_fontsize")||mobile()) active(this, "toggle", 1, ".depth3")
    })
	$(".depth4>li.active>a").on("click", function(){
        if ($("html").hasClass("acc_fontsize")||mobile()) active(this, "toggle", 1, ".depth4")
    }) 

	/* 올림픽9경 */
	var viewno = 1;
	$nineView = $(".nine_view");
	// $nineView.find(".tab_nav").on("click", function () {        
	// 	viewno = $(this).parent().data('view');
    // })		
    $nineView.find(".btn_prev").on("click", function () {
		if(viewno>1) viewno--;
		tabs(".nine_view .tabs li[data-view=" + viewno + "] a");
		$("#view" + viewno + "").show().siblings("div").hide();		
    })
	$nineView.find(".btn_next").on("click", function () {
		if(viewno<9) viewno++;
		tabs(".nine_view .tabs li[data-view=" + viewno + "] a");
		$("#view" + viewno + "").show().siblings("div").hide()
    })

	/* 내부이동탭 */
	$(".in_tabs .tab_nav").on("click", function(){
		$(this).parent().addClass(AC).siblings().removeClass(AC)
	})

	/* 문화공간 */
	$(".sub_tabs .tab_nav").on("click", function () {
        tabs(this, ".slide_tab_cont", 2)
    })

	/* 산책조깅코스 */
	$slick = $('#map01, #map02, #map03, #map04, #map05');

	$slick.find('.list').slick({
		arrows: false,
		asNavFor: '.tracking_course .list_thumb'
	});
	$slick.find('.list_thumb').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		asNavFor:'.tracking_course .list',
  		focusOnSelect: true
	});	     
    $(".tracking_course .tab_nav").on("click", function () {
        tabs(this, ".slide_tab_cont", 2)
    })

	/* 교통주차안내 */	
	$(".parking_info").find("li:nth-child(5)>a, li:nth-child(6)>a").unbind("click keydown");

	/* 장미관람안내 */
	$(".rose_garden area, .rose_plaza area").on("click", function(){
		var link = $(this).attr("href");
		$(this).parents(".tab_wrap").find(".tab_nav[href='"+link+"']").trigger("click");
	});	

	//좌석배치도	
	var $seatSpot;
	$(".seat_layout area").on("click", function(e){
		var obj = $(this).data('id'),
			alt = $(this).attr('alt');
		$wrap.addClass("dimm");
		$(".modal_popup_wrap").attr("tabindex", 0).fadeIn().focus();
		$seatSpot = $(this);			
		//$("html").addClass("noscroll");
		e.preventDefault();

		$(".modal_title").text(alt);		
		$(".modal_cont img").attr("src","../../resources/img/sub/s3_01_04_pic_" + obj + ".jpg");		
		$(".modal_cont img").attr("alt","" + alt + "에서 바라본 무대사진");
	})
	$(".seat_view .btn_close").on("click", function(e){		
		$(".modal_popup_wrap").fadeOut(function(){
			//$("html").removeClass("noscroll");  
		});
		e.preventDefault();
		$seatSpot.focus();
	})
	
	
 

});


