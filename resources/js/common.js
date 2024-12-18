$(document).ready(function () {

    $wrap = $("#wrap"),
    $header = $(".header"),
    $depth1 = $(".topmenu .depth1"),
    $schLayer = $(".sch_layer"),
    $goTop = $(".go_top"),
    $footer = $(".footer")

    //header fixed
    fix(".header")
    $("#skipNav a").on("click", function(){        
      $("html,body").stop().animate({
          scrollTop: 0
      }, 800)
    })
    
    //gnb
    gnb()

    // site_area
    $(".site_area_mobile .title").on("click", function () {
        active(this, "toggle", 1)
    })

    //search
    $(".btn_sch_open").on("click", function () {
        $schLayer.add($header).addClass(AC)
        $wrap.removeClass("allmenu")
        $(".header .sitemap_footer").remove();
    })
    $(".btn_sch_close").on("click", function () {
        $schLayer.add($header).removeClass(AC)
    })

    
	$(".acctoggle_fontsize, .fontsize_btn").click(function(){
		$("html").toggleClass("acc_fontsize");
	});

	//sns
    $(".sns_btn").on("click", function () {
        active(this, "toggle", 1)
    })   
    // 탭메뉴     
    $(".tabs .tab_nav").on("click", function () {
        tabs(this, ".tab_cont", 1)
    })
	//내용 많은 테이블
	$(".responsive").each(function(){
		$(this).before("<p class='horizontal_scroll mobile'><i class='xi-arrow-left'></i><i class='xi-touch'></i><i class='xi-arrow-right'></i><span class='txt'>좌, 우로 이동 가능합니다.</span></p>");
	})
	

    //아코디언    
    $(".accordion>li>a").on("click", function(){
        active(this, "accordion") 
    })  

	//팝업레이어
	var $clickSpot;
	$(".btn_popopen").on("click", function(){
		var obj = $(this).data('id');

		$obj = $("."+obj);
		$wrap.addClass("dimm");
		$obj.attr("tabindex", 0).fadeIn().focus();
		$clickSpot = $(this);
		if($obj.height() % 2 != 0){
			$obj.css("height",""+ ($obj.height()+1) +"px");
		}
		//$("html").addClass("noscroll");
		//event.preventDefault();
	})
	$(".modal_close, .btn_cancel").on("click", function(){
		$(".modal_popup_wrap").fadeOut();
		$clickSpot.focus();
		//$("html").removeClass("noscroll");  
	})

    // footer
    $(".relate_site .title").on("click", function () {
        active(this, "toggle", 1)
    })
 

    // 탭갯수를 구해 클래스 부여(반응형)
    var tabLi = $(".content .depth4 li")
    tabLi.each(function () {
        $(this).parent().addClass("num" + tabLi.length + "")
    })
    var tabDepthLi = $(".content .depth5 li")
    tabDepthLi.each(function () {
        $(this).parent().addClass("num" + tabDepthLi.length + "")
    })

    // web accessibility
    $("[class*='xi-']").attr("aria-hidden", "true")
    $("a[target='_blank']").attr("title", "새창으로 열림")

})


/* 팝업 - 하루동안 열지 않기 */
//get 쿠키
function getCookie(name)
{
    var nameOfCookie = name + "=";
    var x = 0;
    while ( x <= document.cookie.length )
    {
        var y = ( x + nameOfCookie.length );
        if ( document.cookie.substring(x,y) == nameOfCookie )
        {
            if( (endOfCookie = document.cookie.indexOf(";", y)) == -1 )
                endOfCookie = document.cookie.length;
            return unescape(document.cookie.substring(y, endOfCookie)); 
        }
        x = document.cookie.indexOf( " ", x ) + 1;
        if ( x == 0 )
            break;
    }
    return "";		
}

// 레이어 팝업 열기
function openLayer(arg)
{
    var pop = document.getElementById(arg);
    pop.style.display = "block";
}
// 레이어 팝업 닫기
function closeLayer(arg)
{
    var pop = document.getElementById(arg);
    pop.style.display = "none";
}
// set 쿠키
function setCookie( name, value, expiredays ){	
    var todayDate = new Date() ;  
    todayDate.setDate(todayDate.getDate() + expiredays) ;
    document.cookie = name + "=" + escape( value ) + "; path=/" + "; expires=" + todayDate.toGMTString() + ";";		
}
function check_close(id, arg){	
    if (document.getElementById(id).checked) {
        setCookie(arg, "done", 1);
    }else{
        setCookie(arg, "f", 1);
    }
}