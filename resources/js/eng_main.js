$(document).ready(function () { 
/* visual */
$('.list_nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.visual_section .list',
	//dots: true,	
	vertical: true,
	centerMode: true,
	focusOnSelect: true,
	
});
$('.visual_section .list').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.list_nav'
});



/* Play & Health */
const $sect01Olpark = $(".section01 .play")
$sect01Olpark.slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,         
    dots:false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }
    ]
})

/* etc_site */
const $etcSite = $(".etc_site .list")
$etcSite.slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,         
    dots:false,
	variableWidth: true
})

setTimeout(function(){$(".section").addClass(AC)},100)
/*
$(".acctoggle_fontsize, .fontsize_btn").click(function(){
	$(window).on("resize", function () {
        $sect03Olpark.slick("resize")
    })
});
  
	
   $(".section02 .select .title").on("click", function () {
        active(this, "active")
    })      

   
    
*/
})

