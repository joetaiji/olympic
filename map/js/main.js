$(document).ready(function () { 
/* visual */
    $(".visual_section .item").on("mouseenter", function(){
        $(this).addClass("active");
    }).on("mouseleave", function(){
        $(this).removeClass("active");
    });
    $(".visual_section .item").on("focusin", function(){
        $(this).addClass("active");
    });
    $(".visual_section .item:last-child .detail a:last-child").on("focusout", function(){
        $(".visual_section .item").removeClass("active");
    });
    $('.visual_section .container').slick({
        mobileFirst: true,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1280,
                settings: 'unslick'
            }
        ]
    });
    $(window).on('resize', function () {
        $('.visual_section .container').slick('resize');
    });
	$(window).on('load', function () {
	    $('.visual_section .container').attr("tabindex","0");
	});
	
/* culture & news */
    $(".acctoggle_contrast").on("click", function(){
        $("body").toggleClass("contrast");
    });
    const $sect02Culture = $(".section02 .culture")
    $sect02Culture.slick({
        slidesToShow: 5,
        slidesToScroll: 1,        
        autoplay: false,         
        dots:false,
        responsive: [
			{
			    breakpoint: 1024,
			    settings: {
                    centerMode: true,
			        slidesToShow: 3
			    }
			}
        ]
    })/*.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        $(".current").text(nextSlide + 3)
    })*/
    const $sect02News = $(".section02 .news")
    $sect02News.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false, 
        dots:false,
        responsive: [
			{
			    breakpoint: 1024,
			    settings: {
			        vertical: true
			    }
			}
        ]
    })
   

/* olpark9 */
const $sect03Olpark = $(".section03 .olpark")
$sect03Olpark.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,         
    dots:false,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: false
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                variableWidth: false
            }
        }
    ]
})

/* Play & Health */
const $sect04Olpark = $(".section04 .play")
$sect04Olpark.slick({
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

setTimeout(function(){$(".section").addClass(AC)},100)
  
/*	
   $(".section02 .select .title").on("click", function () {
        active(this, "active")
    })      

   
    
*/
})

