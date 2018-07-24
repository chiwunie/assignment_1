var timerId;
$(function() {
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
	getScrollBarWidth();
	//issue
	var interval = 8000;
    
	function issue(){
		var $iss = $(".issue"),
			$li = $(".issue .list li"),
			$inner = $(".issue .list li>.inner"),
			$nav = $(".issue .pagination li"),
			$btn = $(".issue>button"),
			$play = $(".issue .play"),
			$pause = $(".issue .pause"),
			count = 1;
		$inner.prepend("<div class='clone'></div>")
		function setClass(num){
			var img = $(".issue .list li.active img").attr("src");
			//active
			$li.removeClass().filter(":nth-child("+num+")").addClass("active");
			//next
			if ( num == $li.length ) $li.filter(":first-child").addClass("next");
			else $li.filter(":nth-child(" + ( num+1 ) + ")").addClass("next");
			//prev
			if ( num == 1 ) $li.filter(":last-child").addClass("prev");
			else $li.filter(":nth-child(" + ( num-1 ) + ")").addClass("prev");
			//pagination
			$nav.removeClass().filter(":nth-child("+num+")").addClass("active");
			$(".issue .list li.active .clone").css("backgroundImage", "url("+img+")").show().stop().fadeOut(750);
		};
		//initialize
		setClass(count);
		//button event
		function lambert(h){
			clearInterval(timer);
          
			if ( h == false ) {
				setClass(count);
			} else {
				setClass(h);
				count = h;
			};
		//	autoPlay();
		};
		$btn.click(function(){
			if ( $(this).hasClass("prev") ) {
				if ( count == 1 ) count = $li.length;
				else count--;
			} else {
				if ( count == $li.length ) count = 1;
				else count++;
			};
			lambert(false);
		});
		$nav.children("a").click(function(){
			var oi = $(this).parent("li").index()+1;
			if ( oi != count ) {
				lambert(oi);
			};
			return false;
		});
		function autoPlay(){
			timer = setInterval(function(){
				if ( count == $li.length ) count = 1;
				else count++;
				lambert(false);
			}, interval);
			$play.hide();
			$pause.show();
           
          timerId = timer;
          
		};
		autoPlay();
		$play.click(function(){
			autoPlay();
		});
		$pause.click(function(){
			clearInterval(timerId);
            
			$pause.hide();
			$play.show();
		});
	};
	//이건 범용
	function slider(t, w){
		var $t = t,
			$wrap = $t.children(".inner"),
			$ul = $wrap.children("ul"),
			$li = $ul.children("li"),
			$btn = $t.find("button"),
			$nav = $t.find(".pagination li"),
			count = 1,
			cut = 10000,
			ww = $wrap.width();
		if ( w != false ) {
			cut = 640 - scrollbarwidth;
		};
		setSize(ww);
		$nav.removeClass().filter(":nth-child("+count+")").addClass("active");
		//멀쩡하다가 슬라이드 실행하기
		function setSize(ww){
			if ( $(window).width() <= cut ) {
				$ul.width(ww*$li.length).css("marginLeft", -(count-1)*ww);
				$li.outerWidth(ww);
			} else {
				$ul.attr("style" ,"");
				$li.attr("style" ,"");
			};
		};
		//button event
		$btn.click(function(){
			if ( $(this).hasClass("prev") ) {
				if ( count == 1 ) count = $li.length;
				else count--;
			} else {
				if ( count == $li.length ) count = 1;
				else count++;
			};
			$ul.stop().animate({marginLeft: -(count-1)*ww}, 250, "easeInCubic");
			$nav.removeClass().filter(":nth-child("+count+")").addClass("active");
			return false;
		});
		$nav.children("a").click(function(){
			$ul.stop().animate({marginLeft: -$(this).parent("li").index()*ww}, Math.abs( count - ( $(this).parent("li").index() + 1 ) ) * 170, "easeInOutCubic");
			count = $(this).parent("li").index()+1;
			$nav.removeClass().filter(":nth-child("+count+")").addClass("active");
			return false;
		});
		//귀찮은 리사이즈
		$(window).resize(function(){
			ww = $wrap.width();
			setSize(ww);
		});
      
      
      
     /* 2016-03-25 메인 연구성과 자동 스크롤 */
      function autoPlay(){
			timer = setInterval(function(){
                
               
				var self =  $(".spotlites").find("button");
              
				if ( count == $(".spotlites").find(".inner > ul > li").length ) count = 1;
				else count++;
			
			$(".spotlites").find(".inner > ul").stop().animate({marginLeft: -(count-1)*ww}, 250, "easeInCubic");
			
            $(".spotlites").find(".pagination li").removeClass().filter(":nth-child("+count+")").addClass("active");
			return false;
			}, 5000);
		};
      autoPlay();
      
      
	};
	//familysite
	function fluidSlider(t){
		//initialize
		var $t = t,
		$ul = t.children(".inner").children("ul"),
		$li = $ul.children("li"),
		liLength = $li.length,
		$btn = t.children("button"),
		ww = $t.children(".inner").width(),
		cut = 640,
		cut = cut - scrollbarwidth;
		function setSize(){
			if ( $(window).width() >= cut ) {
				$ul.attr("style", "");
				$li.attr("style", "");
				var ulw = 0;
				for ( i = 1 ; i <= liLength ; i++ ) {
					//console.log( "img width "+i+": "+$li.filter(":nth-child("+i+")").find("img").width() );
					ulw += Math.round($li.filter(":nth-child("+i+")").outerWidth(true));
				};
				$ul.width(ulw+1);
				//console.log("ulw: "+ulw)
			} else {
				$ul.width(ww*liLength);
				$li.width(ww);
			};
		};
		//2015-06-02 오후 4:38 이미지 로드 후 li 너비값 계산하고 하느라 플러그인 추가함.
		$t.imagesLoaded( function() {
			setSize();
		});
		//button event
		$btn.click(function(){
			if ( $(window).width() >= cut ) {
				var cml = parseInt($ul.css("marginLeft")),
					ulw = $ul.width(),
					ww = $t.children(".inner").width(),
					duration = 175;
				if ( $(this).hasClass("prev") ) {
					if ( cml == 0 ) {
						mmm = -ulw + ww;
						duration = 350;
					} else {
						if ( Math.abs(cml) < ww ) {
							mmm = 0;
						} else {
							mmm = cml + ww;
						};
					};
				} else {
					if ( Math.abs(cml) + ww == ulw ) {
						mmm = 0;
						duration = 350;
					} else if ( Math.abs(cml) + ww > ulw - ww ) {
						mmm = -ulw  + ww;
					} else {
						mmm = cml - ww;
					};
				};
				$ul.stop().animate({marginLeft: mmm}, duration, "easeInCubic");
			} else {
				var cml = parseInt($ul.css("marginLeft")),
					ulw = $ul.width(),
					ww = $t.children(".inner").width();
				if ( $(this).hasClass("prev") ) {
					if ( cml == 0 ) mmm = -(liLength-1)*ww;
					else mmm = cml+ww;
				} else {
					if ( -(cml/ww)+1 >= liLength ) mmm = 0;
					else mmm = cml-ww;
				};
				//console.log("cml:"+cml+", ulw:"+ulw+", ww"+ww+", mmm:"+mmm);
				$ul.stop().animate({marginLeft: mmm}, 100);
			};
		});
		$(window).resize(function(){
			ww = $t.children(".inner").width();
			setSize();
		});
	};
	//리사이즈시 요소 위치를 바꿔달라고 하시네 ^^
	function wth(){
		var $n = $(".nwrap"),
			$s = $(".story"),
			$l = $(".links"),
			$e = $(".explore");
		function doit(){
			if ( $(window).width() + scrollbarwidth <= 1200 ) {
				$n.css({top: 20});
				$s.css({marginTop: $n.height()+60});
				$l.css({marginTop: $e.height()+40});
				$e.css({top: $l.offset().top - $l.parent().offset().top - $e.height() - 20 });
				//console.log( "oops! i did it again..." )
			} else {
				$n.css({top: 0});
				$s.css({marginTop: 0});
				$l.css({marginTop: 40});
				$e.css({top: 0});
			};
		};
		doit();
		$(window).resize(function(){
			doit();
		});
	};
	function missueResize(){
		function doom(){
			var ww = $(window).width()+scrollbarwidth;
			if ( ww >=430 && ww <= 1080 ) $(".swiper-slide .img").height($(".swiper-slide").width()*0.549);
			else $(".swiper-slide .img").height();
		};
		doom();
		$(window).resize(function(){doom()});
	};
	//mobile issue slider plugin
	var browser = navigator.appVersion,
		browser = browser.indexOf("MSIE 8.0");
	if ( browser < 0 ) {
		var swiper = new Swiper(".swiper-container", {
			pagination: ".swiper-pagination",
			paginationClickable: true,
			slidesPerView: 1,
			loop: true,
			autoplay: interval,
			onInit: function(){
				missueResize();
			}
		});
		$(".missue .play").click(function(){
			swiper.startAutoplay();
			$(this).hide().siblings("button").show();
		});
		$(".missue .pause").click(function(){
			swiper.stopAutoplay();
			$(this).hide().siblings("button").show();
		});
		$(".story").imagesLoaded( function() {
			wth();
		});
	};
	issue();
	slider( $(".story"), 640 );
	slider( $(".spotlites"), false );
	slider( $(".ocx"), 640 );
    slider( $(".youtube"), 640 );
	//2015-08-21 연세소식
	var $ocx_ul = $(".story ul"),
		$ocx_li = $ocx_ul.children("li"),
		$ocx_img = $ocx_li.find("img");
	$ocx_ul.imagesLoaded(function(){
		imageSize();
	});
	$(window).resize(function(){
		imageSize();
	});
	function imageSize(){
		$ocx_img.height($ocx_img.width()*0.63);
	};
	//2015-10-15 탑배너
	$("#topbanner ul").addClass( "num" + $("#topbanner ul li").length );
});