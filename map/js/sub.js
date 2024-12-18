var tab1 = "";
var tab2 = "";
var tab3 = "";
var tab4 = "";
var tab5 = "";
var tab6 = "";
var tab7 = "";

$(function(){
	tab1 = $('a[name="tab1_li_a"]');
	tab2 = $('a[name="tab2_li_a"]');
	tab3 = $('a[name="tab3_li_a"]');
	tab4 = $('a[name="tab4_li_a"]');
	tab5 = $('a[name="tab5_li_a"]');
	tab6 = $('a[name="tab6_li_a"]');
	tab7 = $('a[name="tab7_li_a"]');

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
		var aId = $(this).attr("id");
		if (aId == 'allView'){
			window.location.href = window.location.href.split('?')[0] + '?gnbOpen=Y';
			return false;
		}
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
    $(".snb").on("click", ".depth2>li>a", function(){
        active(this, "accordion")
		$(".depth3>li, .depth4>li").removeClass("active");
        //e.preventDefault();
    })
	$(".snb").on("click", ".depth3>li>a, .depth4>li>a", function(){
		//$(".depth3>li, .depth4>li").removeClass("active");
        active(this);
		//$("#wrap").removeClass("print_position");
    })

	//4차뎁스를 갖고있는 상위요소에 클래스부여
    $(".depth4").each(function () {
        $(this).parent().addClass("is-depth4")
    })
	$(".is-depth4>a").on("click", function(){
        $(this).parent().find(".depth4>li:first").addClass("active");
    })

	if($siteName == "misa"){
		var svgWidth = 1549,
			svgHeight = 377;
	}else{		
		var svgWidth = 953,
			svgHeight = 676;
	}	


	$('.snb').on("click", ".depth3>li a", function(e){
		
		var mapW = ($("#map").width() - $(".snb").outerWidth())/2,
			mapH = $("#map").height()/2,
			marker = $("svg #icons svg").width()/2,	
			wRatio = $("#map").width()/svgWidth, //svg 넓이 963
			hRatio = $("#map").height()/svgHeight, //svg 높이 676
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
		if(mobile()){	
			panZoom.pan({x: mapW - $posX + marker, y: mapH - $posY - marker});	
			//panZoom.pan({x: mapW - ($posX - marker) * wRatio, y: mapH - ($posY - marker) * hRatio});					
			//panZoom.pan({x: mapW - ($posX - marker) * wRatio, y: (mapH - $posY * hRatio)/2});
			//panZoom.pan({x: mapW - ($posX - marker) * wRatio, y:  $posY - mapH / 2});
			//panZoom.zoom(3); 
		}else{
			panZoom.pan({x: mapW - $posX + marker, y: mapH - $posY - marker});			
		}	
		panZoom.zoom(2); 	
	
		$icons.removeClass(AC);
		setTimeout(function(){
			$icons.addClass(AC).find("svg").attr({x:$posX, y:$posY});
			$('#round path').eq(1).css('fill', roundColor);
			$('#icons circle').css('stroke', roundColor);
		},250)		
		
		console.log(mapH, $posY, hRatio, $posY - mapH / 2);
		// console.log("좌표", mapW, mapH);
		e.preventDefault();
		$(".detail_cont .info").hide();
		$(".detail_cont #"+ $sn +"").show().siblings().hide();//상세정보
	});

});

function goSearch(arg){
	var $categoryLi = $('.category li');
	var tab1Arr = [];
	var tab2Arr = [];
	var tab3Arr = [];
	var tab4Arr = [];
	var tab5Arr = [];
	var tab6Arr = [];
	var tab7Arr = [];

	var searchResultArr1 = [];
	var searchResultArr2 = [];
	var searchResultArr3 = [];
	var searchResultArr4 = [];
	var searchResultArr5 = [];
	var searchResultArr6 = [];
	var searchResultArr7 = [];

	var searchHtml1 = "";
	var searchHtml2 = "";
	var searchHtml3 = "";
	var searchHtml4 = "";
	var searchHtml5 = "";
	var searchHtml6 = "";
	var searchHtml7 = "";

	var searchKeyword = "";

	if (arg != null){
		searchKeyword = arg;
	} else {
		searchKeyword = $('#searchKeyword').val().trim();

		if (searchKeyword == ''){
			window.location = window.location.href.split('?')[0];
			return false;
		}
	}

	// html 제거
	$('#depth2').html("");

	tab1.each(function(stat, data){
		tab1Arr.push(data);
	})
	tab2.each(function(stat, data){
		tab2Arr.push(data);
	})
	tab3.each(function(stat, data){
		tab3Arr.push(data);
	})
	tab4.each(function(stat, data){
		tab4Arr.push(data);
	})
	tab5.each(function(stat, data){
		tab5Arr.push(data);
	})
	tab6.each(function(stat, data){
		tab6Arr.push(data);
	})
	tab7.each(function(stat, data){
		tab7Arr.push(data);
	})

	tab1Arr.forEach(function(data){
		if (data.innerText.trim().toLowerCase().indexOf(searchKeyword.toLowerCase()) != -1){
			searchResultArr1.push(data);
		}
	})
	tab2Arr.forEach(function(data){
		if (data.innerText.trim().toLowerCase().indexOf(searchKeyword.toLowerCase()) != -1){
			searchResultArr2.push(data);
		}
	})
	tab3Arr.forEach(function(data){
		if (data.innerText.trim().toLowerCase().indexOf(searchKeyword.toLowerCase()) != -1){
			searchResultArr3.push(data);
		}
	})
	tab4Arr.forEach(function(data){
		if (data.innerText.trim().toLowerCase().indexOf(searchKeyword.toLowerCase()) != -1){
			searchResultArr4.push(data);
		}
	})
	tab5Arr.forEach(function(data){
		if (data.innerText.trim().toLowerCase().indexOf(searchKeyword.toLowerCase()) != -1){
			searchResultArr5.push(data);
		}
	})
	tab6Arr.forEach(function(data){
		if (data.innerText.trim().toLowerCase().indexOf(searchKeyword.toLowerCase()) != -1){
			searchResultArr6.push(data);
		}
	})
	tab7Arr.forEach(function(data){
		if (data.innerText.trim().toLowerCase().indexOf(searchKeyword.toLowerCase()) != -1){
			searchResultArr7.push(data);
		}
	})

	if (searchResultArr1.length !== 0){
		searchResultArr1.forEach(function(data){
			searchHtml1 += data.parentElement.outerHTML.replace(/"/gi, "\'").replace(searchKeyword.toLowerCase(), "<mark>"+searchKeyword.toLowerCase()+"</mark>").replace(searchKeyword.toUpperCase(), "<mark>"+searchKeyword.toUpperCase()+"</mark>");
		})

		$('#depth2').append(
			"<li class='is-depth3 active'><a href='#tab1'>" + $categoryLi.eq(0).text() + "</a>" +
				"<ul class='depth3' data-zone='olympic'>" +
					searchHtml1 +
				"</ul>" +
			"</li>"
		);
	}
	if (searchResultArr2.length !== 0){
		searchResultArr2.forEach(function(data){
			searchHtml2 += data.parentElement.outerHTML.replace(/"/gi, "\'").replace(searchKeyword.toLowerCase(), "<mark>"+searchKeyword.toLowerCase()+"</mark>").replace(searchKeyword.toUpperCase(), "<mark>"+searchKeyword.toUpperCase()+"</mark>");
		})

		$('#depth2').append(
			"<li class='is-depth3 active'><a href='#tab2'>" + $categoryLi.eq(1).text() + "</a>" +
				"<ul class='depth3' data-zone='culture'>" +
					searchHtml2 +
				"</ul>" +
			"</li>"
		);
	}
	if (searchResultArr3.length !== 0){
		searchResultArr3.forEach(function(data){
			searchHtml3 += data.parentElement.outerHTML.replace(/"/gi, "\'").replace(searchKeyword.toLowerCase(), "<mark>"+searchKeyword.toLowerCase()+"</mark>").replace(searchKeyword.toUpperCase(), "<mark>"+searchKeyword.toUpperCase()+"</mark>");
		})

		$('#depth2').append(
			"<li class='is-depth3 active'><a href='#tab3'>" + $categoryLi.eq(2).text() + "</a>" +
				"<ul class='depth3' data-zone='exciting'>" +
					searchHtml3 +
				"</ul>" +
			"</li>"
		);
	}
	if (searchResultArr4.length !== 0){
		searchResultArr4.forEach(function(data){
			searchHtml4 += data.parentElement.outerHTML.replace(/"/gi, "\'").replace(searchKeyword.toLowerCase(), "<mark>"+searchKeyword.toLowerCase()+"</mark>").replace(searchKeyword.toUpperCase(), "<mark>"+searchKeyword.toUpperCase()+"</mark>");
		})

		$('#depth2').append(
			"<li class='is-depth3 active'><a href='#tab4'>" + $categoryLi.eq(3).text() + "</a>" +
				"<ul class='depth3' data-zone='picnic'>" +
					searchHtml4 +
				"</ul>" +
			"</li>"
		);
	}
	if (searchResultArr5.length !== 0){
		searchResultArr5.forEach(function(data){
			searchHtml5 += data.parentElement.outerHTML.replace(/"/gi, "\'").replace(searchKeyword.toLowerCase(), "<mark>"+searchKeyword.toLowerCase()+"</mark>").replace(searchKeyword.toUpperCase(), "<mark>"+searchKeyword.toUpperCase()+"</mark>");
		})

		$('#depth2').append(
			"<li class='is-depth3 active'><a href='#tab5'>" + $categoryLi.eq(4).text() + "</a>" +
				"<ul class='depth3' data-zone='facility'>" +
					searchHtml5 +
				"</ul>" +
			"</li>"
		);
	}
	if (searchResultArr6.length !== 0){
		searchResultArr6.forEach(function(data){
			searchHtml6 += data.parentElement.outerHTML.replace(/"/gi, "\'").replace(searchKeyword.toLowerCase(), "<mark>"+searchKeyword.toLowerCase()+"</mark>").replace(searchKeyword.toUpperCase(), "<mark>"+searchKeyword.toUpperCase()+"</mark>");
		})

		$('#depth2').append(
			"<li class='is-depth3 active'><a href='#tab6'>" + $categoryLi.eq(5).text() + "</a>" +
				"<ul class='depth3' data-zone='entrance'>" +
					searchHtml6 +
				"</ul>" +
			"</li>"
		);
	}
	if (searchResultArr7.length !== 0){
		searchResultArr7.forEach(function(data){
			searchHtml7 += data.parentElement.outerHTML.replace(/"/gi, "\'").replace(searchKeyword.toLowerCase(), "<mark>"+searchKeyword.toLowerCase()+"</mark>").replace(searchKeyword.toUpperCase(), "<mark>"+searchKeyword.toUpperCase()+"</mark>");
		})

		$('#depth2').append(
			"<li class='is-depth3 active'><a href='#tab7'>" + $categoryLi.eq(6).text() + "</a>" +
				"<ul class='depth3' data-zone='parking'>" +
					searchHtml7 +
				"</ul>" +
			"</li>"
		);
	}

	var $snb = $(".snb_wrap");
	$(".snb_wrap").addClass(AC);
	let txt = $snb.hasClass(AC) ? " 닫기" : " 열기"

	$('.depth3>li a').on("click", function(e){
		var panZoom = svgPanZoom('#map', {
			zoomEnabled: true,
			controlIconsEnabled: false,
			fit: true,
			center: true,
		});

		var mapW = ($("#map").width() - $(".snb").outerWidth())/2,
			mapH = $("#map").height()/2,
			marker = $("svg #icons svg").width()/2,
			wRatio = $("#map").width()/953, //svg 넓이 963
			hRatio = $("#map").height()/676, //svg 높이 676
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
		if(mobile()){
			panZoom.pan({x: mapW - ($posX - marker) * wRatio, y: mapH - ($posY - marker) * hRatio});
			//panZoom.zoom(3);
		}else{
			panZoom.pan({x: mapW - $posX + marker, y: mapH - $posY - marker});
		}
		panZoom.zoom(2);

		$icons.removeClass(AC);
		setTimeout(function(){
			$icons.addClass(AC).find("svg").attr({x:$posX, y:$posY});
			$('#round path').eq(1).css('fill', roundColor);
			$('#icons circle').eq(1).css('stroke', roundColor);
		},250)

		e.preventDefault();
		$(".detail_cont .info").hide();
		$(".detail_cont #"+ $sn +"").show().siblings().hide();//상세정보
	});
};

function press(){
	if (event.keyCode == 13){
		event.preventDefault()
		goSearch();
	}
}

