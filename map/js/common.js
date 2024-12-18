$(document).ready(function () {

    $wrap = $("#wrap"),
    $header = $(".header"),
    //$depth1 = $(".topmenu .depth1"),
    //$schLayer = $(".sch_layer"),
    //$goTop = $(".go_top"),
    $footer = $(".footer")

    
    $("#skipNav a").on("click", function(){        
      $("html,body").stop().animate({
          scrollTop: 0
      }, 800)
    })

    
	//sns
    $(".sns_btn").on("click", function () {
        active(this, "toggle", 1)
    }) 
	
	/*  
    // 탭메뉴     
    $(".tabs .tab_nav").on("click", function () {
        tabs(this, ".tab_cont")
    })
    //아코디언    
    $(".accordion>li>a").on("click", function(){
        active(this, "accordion") 
    })  
	*/   

    

    // web accessibility
    $("[class*='xi-'], [class*='icon_']").attr("aria-hidden", "true")
    $("a[target='_blank']").attr("title", "새창으로 열림")

    

})

