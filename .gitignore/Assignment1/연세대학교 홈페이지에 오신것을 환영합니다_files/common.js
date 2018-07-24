$(function() {
	getScrollBarWidth();
	formResizer();
	indexHeight();
	imageupload();
	//pc gnb
	$(".gnb>li>a").click(function(){
		$(".menuwrap").hide();
		$(".gnb>li").removeClass("on");
		$(this).parent().addClass("on");
		$(this).addClass("on").next("div").show(0, function(){
			$("#wrap>*:not('#header')").click(function(e){
				if ($(".gnb>li>a").has(e.target).length === 0){
					$(".gnb .menuwrap").hide();
					$(".gnb>li").removeClass("on");
				};
			});
		});
		return false;
	});
	$(".gnb .menuwrap .close").click(function(){
		$(this).parent().hide();
		$(".gnb>li").removeClass("on");
	});
	//header language seleect
	$("#header .language>a").click(function(){
		$("#header .language").toggleClass("active", function(){
			$("#container, #footer, .gnbwrap").one("click", function(){
				$("#header .language").removeClass("active");
			});
		});
		return false;
	});
	//gnb, snb has child or not
	$("#mgnb>ul>li>div>ul>li, #snb>ul>li").each(function(){
		if ( $(this).children("ul").length ) $(this).addClass("hasChild");
	});
	//header toggle menu
	$(".toggle>a.fc").click(function(){
		$("body").addClass("opened");
		$(this).parent(".toggle").addClass("active");
		$("#quick>a.top").stop().fadeOut(240);
		if ( $("#mgnb>ul>li.active").length == false ) {
			$("#mgnb>ul>li.m1").addClass("active");
		};
		return false;
	});
	$(".toggle .lt>.close").click(function(){
		$("body").removeClass("opened");
		$("#quick>a.top").stop().delay(120).fadeIn(240);
		$(this).parents(".toggle").removeClass("active");
	});
	//mobile gnb action
	$("#mgnb a").click(function(){
		$(this).parent().toggleClass("active").siblings().removeClass("active");
		if ( $(this).siblings().length ) {
			return false;
		};
	});
	//snb
	$("#snb>ul>li>a").click(function(){
		$(this).parent().toggleClass("active").siblings().removeClass("active");
		if ( $(this).siblings("ul").length ) {
			return false;
		};
	});
	//mobile campus select
	$("#header .campus>a").click(function(){
		$("#header .campus").toggleClass("active", function(){
			$("#container, #footer, .gnbwrap").one("click", function(){
				$("#header .campus").removeClass("active");
			});
		});
		return false;
	});
	//search@header
	$("#header .search .srchBtn").click(function(){
      
        $(this).attr("title", "통합검색");
      
		if ( $("#header .search").hasClass("active") == false ) {
			$("#header .search").addClass("active", function(){
				$("#container, #footer, .gnbwrap").bind("one", function(){
                    
					$("#header .search").removeClass("active");
				});
			});
			return false;
		};
	});
	//quick
	var duration = 200;
	var duration2 = 170;
	var ease = "easeOutQuad";
	$("#quick .menu>li:not(:eq(4))>a").click(function(){
		$("#quick .qwrap").stop().animate({"width":"0"}, duration, ease, function(){$("#quick .close").fadeOut(duration2)});
		$(this).next("div").stop().animate({"width":"521px"}, duration, ease,function(){$(this).next("p").fadeIn(duration2);});
	});
	$("#quick .menu>li .close").click(function(){
		$(this).fadeOut(duration2);
		$(this).siblings("div").stop().animate({"width":"0"}, duration, ease);
	});
	$("#quick .tabmenu>li>a").click(function(){
		$("#quick .tabmenu div").hide();
		$(this).next("div").show();
	});
	$("#quick a.top").click(function(){
		var top = $(window).scrollTop();
		$("html, body").stop().animate({scrollTop: 0}, top*0.15, "easeOutQuad");
		return false;
	});
	/*
	$("#wrap").click(function(e){
		if ($("#quick").has(e.target).length === 0){
			$("#quick .qwrap").stop().animate({"width":"0"}, duration, ease, function(){$("#quick .close").fadeOut(duration2)});
		}
	});
	*/
	quickPos(0);
	//calendar
	if ( $(".datepicker").length ) {
		$(".datepicker").datepicker({
			dateFormat: 'yy-mm-dd',
			prevText: '이전 달',
			nextText: '다음 달',
			monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
			monthNamesShort: ['01','02','03','04','05','06','07','08','09','10','11','12'],
			dayNames: ['Su','Mo','Tu','We','Th','Fr','Sa'],
			dayNamesShort: ['Su','Mo','Tu','We','Th','Fr','Sa'],
			dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
			showMonthAfterYear: true,
			showOn: "button",
			//buttonImage: "../img/common/btn_calender.png",	//버튼 이미지
			//buttonImageOnly: true,
			changeMonth: true,	//월 변경
			changeYear: true	//년도 변경
		});
	};
	//designed input[type=file]
	function imageupload(input){
		$(".toInputfile").click(function () {
			$(".inputfile").trigger("click");
			return false;
		});
		$(".inputfile").on("change", function(){
			var files = !!this.files ? this.files : [];
			if (!files.length || !window.FileReader) return;
			if (/^image/.test( files[0].type)){
				var reader = new FileReader();
				reader.readAsDataURL(files[0]);
				reader.onloadend = function(){
					$(".picArea").html("<img src="+this.result+">")
				};
			};
		});
	};
	//layer popup
	$("a.popup_open").click(function(){
		var ptarget = $(this).attr("href");
		$(".popWrap").fadeIn();
		$(ptarget).fadeIn(200).css({marginLeft: -$(ptarget).width() / 2, marginTop: -$(ptarget).height() / 2 });
		$("body").addClass("overflowHidden");
		return false;
	});
	$(".layer_close, .dimmed").click(function(){
		$(".popWrap").fadeOut(200);
		$(".popup:visible").hide();
		$("body").removeClass("overflowHidden");
		return false;
	});
	$(".btn_submit.next").click(function(){
		var parent = $(this).parents(".popup");
		var ptarget = $(this).attr("href");
		$(parent).fadeOut(200);
		$(ptarget).fadeIn(200).css({marginLeft: -$(ptarget).width() / 2, marginTop: -$(ptarget).height() / 2});
		return false;
	});
	$(".btnarea2 .btnP").click(function(){
		$("#popProf").fadeIn();
		$("#popProf .popup").fadeIn();
		if ($("#popProf").css("display") == "block"){
			$("body").addClass("overflowHidden");
		} else {
			$("body").removeClass("overflowHidden");
		};
		return false;
	});
	//faq
	function faqlist(){
		var ww = $(window).width();
		$('li.empty').remove();
		if ( ww > 640 -scrollbarwidth ){
			$('.faq_list.ty1 ul').each(function(){
				if ( $(this).children('li').length % 5 == 4 ) {
					$(this).append('<li class="empty"><span></span></li>');
				} else if ( $(this).children('li').length % 5 == 3 ) {
					$(this).append('<li class="empty"><span></span></li><li class="empty"><span></span></li>');
				} else if ( $(this).children('li').length % 5 == 2 ) {
					$(this).append('<li class="empty"><span></span></li><li class="empty"><span></span></li><li class="empty"><span></span></li>');
				} else if ( $(this).children('li').length % 5 == 1 ) {
					$(this).append('<li class="empty"><span></span></li><li class="empty"><span></span></li><li class="empty"><span></span></li><li class="empty"><span></span></li>');
				};
			});
		} else {
			$('.faq_list.ty1 ul').each(function(){
				if ( $(this).children('li').length % 2 != 0 ) {
					$(this).append('<li>&nbsp;</li>');
				};
			});
		};
	};
	faqlist();
	$(window).resize(function(){
		faqlist();
	});
	
	function faqInit(){
		$('.list_sortarea').find('.faq_cont').hide();
		$('.list_sortarea').find('.faq_open').removeClass('on');
	}
	$(".faq_open").on("click",function() {
		if ( $(this).hasClass('on') == true ) {
			faqInit();
			$(this).removeClass('on');
			$(this).parent().find('.faq_cont').hide();
		} else {
			faqInit();
			$(this).addClass('on');
			$(this).parent().find('.faq_cont').show();
		}
		return false;
	});
	//intro list
	$('.gs_list.ty2').each(function(){
		if ( $(this).children('li').length % 2 != 0 ) {
			$(this).append('<li class="empty">&nbsp;</li>');
		};
	});
	//window resize
	function Dep(){
		$(".infoBox .bl").each(function(){
			if ( !$(this).parent().hasClass("single") ) {
				var br = $(this).siblings(".br").outerHeight();
				if ( $(window).width() > 640-scrollbarwidth ) $(this).css("minHeight", br + 5);
				else $(this).css("minHeight", 0);
			};
		});
	};
	Dep();
	//list_gallery
	function list_gall(i){
		var ww = $(window).width();
		$(".list_gallery>li").removeClass('first');
		if (ww < 480) {
			$(this).removeClass('first');
		}else if (ww >= 480 && ww < 768) {
			$(".list_gallery>li").each(function(i){
				if( (i + 1)%3 == 1 ){
					$(this).addClass('first');
				}
			});
		}else if (ww > 768) {
			$(".list_gallery>li").each(function(i){
				if( (i + 1)%3 == 1 ){
					$(this).addClass('first');
				}
			});
		};
	};
	list_gall();
	$(window).resize(function(){
		list_gall();
	});
	//tab content
	$(".tab_info.ty2 a").click(function() {
		var menu = $(this).parents(".tab_info.ty2");
		var conts = $(this).attr("href");
		$(this).parent().siblings().removeClass("on");
		$(this).parent().addClass("on");
		menu.parent().siblings(".bgfocus").hide();
		menu.siblings(".tab_cont").hide();
		menu.siblings(conts).show();
		return false;
	});
	//mobile tab select
	var select = $("select#select_m");
	var mcenter = $(".mselect_box>label");
	$(".mselect_box").click(function(){
		select.change(function(){
			var select_name = $(this).children("option:selected").text();
			$(this).siblings("label").text(select_name);
			mauto();
		});
	});
	function mauto(){
		mcenter.css({"margin-left":- mcenter.width()/2 - 10 });
	};
	mauto();
	$(window).resize(function(){
		mauto();
		Dep();
	});
	$(window).load(function(){
		mauto();
	});
	//viewpage
	function viewCondition(){
		var sHeight = $('.board_view dt strong').height();
		var cHeight = $('.board_view dt strong .btn_condition').height() * 2;
		if( cHeight < sHeight ){
			$('.board_view dt strong .btn_condition').css("margin", "0.5em 0 0 0");
		};
	};
	viewCondition();
	$(window).resize(function(){
		viewCondition();
	});
	//familysites
	var $ftr = $("#footer");
	$(".familysites>a").click(function(){
		$ftr.toggleClass("opened");
		return false;
	});

	//이미지 경로 변경
//	$("img").each(function(){
		//$(this).attr("src", $(this).attr("src").replace("${resPath}img/", "../img/"));
	//});

});
//스크롤바 너비 구하기
function getScrollBarWidth() {
	var inner = document.createElement('p');
	inner.style.width = "100%";
	inner.style.height = "200px";
	var outer = document.createElement('div');
	outer.style.position = "absolute";
	outer.style.top = "0px";
	outer.style.left = "0px";
	outer.style.visibility = "hidden";
	outer.style.width = "200px";
	outer.style.height = "150px";
	outer.style.overflow = "hidden";
	outer.appendChild (inner);
	document.body.appendChild (outer);
	var w1 = inner.offsetWidth;
	outer.style.overflow = 'scroll';
	var w2 = inner.offsetWidth;
	if (w1 == w2) w2 = outer.clientWidth;
	document.body.removeChild (outer);
	scrollbarwidth = (w1 - w2);
};
//대학생활 인덱스 페이지 높이 정렬맨
function indexHeight(){
	var $ul = $(".list_bg");
	var $li = $ul.children("li");
	$li.height("");
	if ( $(window).width() > 640 - scrollbarwidth ) {
		$ul.each(function(){
			var $li = $(this).children("li");
			var maxHeight = $li.map(function( i, e ) {
				return $( e ).height();
			}).get();
			return $li.height( Math.max.apply( $li, maxHeight ) );
		});
	};
};
//form resize
function formResizer(){
	//100%
	$(".w100p").each(function(){
		var t = this.tagName;
		var p = $(this).parent();
		var pw = p.width();
		var blw = parseInt($(this).css("border-left-width"));
		var brw = parseInt($(this).css("border-right-width"));
		var pl = $(this).css("padding-left");
		pl = pl.replace("px", "");
		var pr = $(this).css("padding-left");
		pr = pr.replace("px", "");
		if ( t == "select" ) {
			pl = 0;
			pr = 0;
		};
		var total = Math.round(pw - blw - brw - pl - pr);
		$(this).width( total );
	});
};
function quickPos(duration){
	var ww = $(window).width(),
		wh = $(window).height(),
		wt = $(window).scrollTop(),
		q = $("#quick>.inner"),
		qh = q.height(),
		ease = "easeOutQuad",
		top1 = 267,
		top2 = 150;
	if ( $("body").attr("id") == "main" ) {
		var top1 = 690 - wt,
			top2 = 600;
		if ( $("#topbanner:visible").length ) {
			top1 += 100;
			top2 += 100;
		};
	};
	if ( ww >= 1200 ) {
		if ( wt < top2 ){
			q.stop().animate({top:top1,marginTop:0},duration,ease);
		} else {
			if ( wh > 772 ) q.stop().animate({top:"267px",marginTop:0},duration,ease);
			else if ( wh <= 772 && wh > qh ) q.stop().animate({top:"50%",marginTop:-qh/2+"px"},duration,ease);
			else q.stop().animate({top:"10px",marginTop:0},duration,ease);
		};
	};
};
$(window).resize(function(){
	quickPos(175);
	formResizer();
	indexHeight();
});
$(window).scroll(function(){
	quickPos(175);
});