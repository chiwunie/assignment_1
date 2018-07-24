$(function(){
			
		var menu_cd = _cur_menu_cd ; // 현재 메뉴 CD 
		var site_id = _siteId;
		
			$.ajax({
				url: "/_custom/yonsei/_common/admin_info/admin_info.jsp",
				data : { 
					menuCd : menu_cd ,
					siteId : site_id , 
					pageURI : window.location.pathname
				},
				dataType: 'json',
				type: "POST",
				success : function(data){
                  
					if( data.success == true ){
                      
										
						var html  = '<div class="article admin_info">';
							html += '<div class="box_gray">'; 
							html += '<dl>';
							html += '<dt class="">담당부서</dt>';
							html += '<dd>' + data.name + '</dd>';
							html += '<dt class="tel">전화번호</dt>';
							html += '<dd>' + data.tel + '</dd>';
		                    html += '<dt class="mail">이메일</dt>';
		                    html += '<dd><a href="mailto:' + data.email + '" title="메일 보내기">'+ data.email +'</a></dd>';
							html += '</dl></div></div>';
							
							if( $("#jwxe_main_content").length > 0 ){
								
								$("#jwxe_main_content").append(html);
								
							}
					}
				},
				error : function(data)	{
				}
			 });
		
	});