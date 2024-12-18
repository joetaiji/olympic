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

	const $sect01News = $(".section01 .news .list")
    $sect01News.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false, 
        dots:false,
		rows: 2,
        responsive: [
			{
			    breakpoint: 768,
			    settings: {
					rows: 1,
					slidesToShow: 1,					
			        vertical: true
			    }
			}
        ]
    })
	
	const $sect01popupzone = $(".section01 .popupzone .list")
    $sect01popupzone.on('init', function (event, slick) {
        $(this).append('<div class="slick-counter"><span class="current"></span> - <span class="total"></span></div>');
        $(this).find('.current').text(slick.currentSlide + 1);
        $(this).find('.total').text(slick.slideCount);
    }).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        dots:false
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		$(this).find('.current').text(nextSlide + 1);
	})
	$(".control_pause").on("click", function () {
        $(this).removeClass(AC).siblings("button").addClass(AC)
        $sect01popupzone.slick("slickPause")
    })
    $(".control_play").on("click", function () {
        $(this).removeClass(AC).siblings("button").addClass(AC)
        $sect01popupzone.slick("slickPlay")
    })
	
/* culture & arts */
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
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					//centerPadding: '30px',
				}
			},
			{
			    breakpoint: 1024,
			    settings: {
                    centerMode: true,
			        slidesToShow: 3,
					

			    }
			}
        ]
    })/*.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        $(".current").text(nextSlide + 3)
    })*/
    
   

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
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
               	centerMode: true,
				//centerPadding: '30px',
            }
        },
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

