$(function(){

	//svgPanZoom	
	var panZoom = svgPanZoom('#map', {
		zoomEnabled: true,
		controlIconsEnabled: false,
		fit: true,
		center: true,		
	});

	//리사이즈
	$(window).resize(function(){
		panZoom.resize();
		panZoom.fit();
		panZoom.center();
	});

	//콘트롤
	$('#zoom-in').click(function(){ panZoom.zoomIn() });
	$('#zoom-out').click(function(){ panZoom.zoomOut() });
	$('#reset').click(function(){ 
		panZoom.resetZoom(); 
		panZoom.center(); 
	});

	$(".category a").on("click", function(){
		var link = $(this).attr("href");
		$(".snb").find(".is-depth3>a[href='"+link+"']").trigger("click");		
		var $snb = $(".snb_wrap");
		$(".snb_wrap").addClass(AC);
		let txt = $snb.hasClass(AC) ? " 닫기" : " 열기"		
        $(this).attr("title", "" + $(this).text() + txt + "") 

		var snbDepthActive = $(".snb .is-depth3.active").position().top;			
		$(".snb").scrollTop(snbDepthActive);
	});	

	//오른쪽 메뉴
	$(".snb_control").on("click", function () {
        active(this, "toggle");
    })
    $(".depth2>li>a").on("click", function(){
        active(this, "accordion")
		$(".depth3>li, .depth4>li").removeClass("active");
        //e.preventDefault();
    })
	$(".depth3>li>a, .depth4>li>a").on("click", function(){
		//$(".depth3>li, .depth4>li").removeClass("active");
        active(this);
    })

	//4차뎁스를 갖고있는 상위요소에 클래스부여
    $(".depth4").each(function () {
        $(this).parent().addClass("is-depth4")
    })
	$(".is-depth4>a").on("click", function(){
        $(this).parent().find(".depth4>li:first").addClass("active");
    })

	$('.depth3>li a').click(function(e){		
		var mapW = ($("#map").width() - $(".snb").outerWidth())/2,		
			mapH = $("#map").height()/2,		
			marker = $("svg #icons svg").width()/2,
			//mMapW = $("#map").width()/2,
			//mMapH = ($("#map").height() - $(".snb").outerHeight())/2,	
			wRatio = $("#map").width()/1971,
			hRatio = wRatio * 0.7,
			$zone = $(this).parents(".depth3").data('zone'),
			$posX = $(this).data('x'),
			$posY = $(this).data('y'),
			$sn = $(this).data('sn'),
			$icons = $("#icons"),
			roundColor;
			

		if($zone == "olympic"){
			roundColor = "#26BAE9";
		}else if($zone == "culture"){
			roundColor = "#FDD403";
		}else if($zone == "exciting"){
			roundColor = "#F58220";
		}else if($zone == "picnic"){
			roundColor = "#A6CE39";
		}else if($zone == "facility"){
			roundColor = "#EF5282";
		}else if($zone == "entrance"){
			roundColor = "#1E6DD5";
		}else{
			roundColor = "#B24AEE";
		}
		panZoom.resetZoom(); //줌 리셋
		panZoom.center(); //위치 가운데로
		
		//위치 이동 후 확대		
		/* if(mobile()){						
			panZoom.pan({x: mapW - ($posX + marker) * wRatio, y: mapH - ($posY + marker) * hRatio});
		}else{
			
		} */
		panZoom.pan({x: mapW, y: mapH});
		panZoom.zoom(2);
		
		$icons.removeClass(AC);
		setTimeout(function(){
			$icons.addClass(AC).find("svg").attr({x:$posX, y:$posY});
			$('#round path').eq(1).css('fill', roundColor);
		},250)		
		
		
		console.log("좌표", mapW, mapH);
		console.log("비율", wRatio, hRatio);

		e.preventDefault();
		$(".detail_cont .info").hide();
		$(".detail_cont #"+ $sn +"").show().siblings().hide();//상세정보
	});
	//if(mobile()){$(".snb_wrap").addClass(AC);}

});