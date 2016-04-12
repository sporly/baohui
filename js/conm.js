/****回到顶部的设置* S***/
$(function(){
	var bt = $('.back-top');
	var sw = $(document.body)[0].clientWidth;

	var limitsw = (sw - 840) / 2 - 80;
	if (limitsw > 0) {
		limitsw = parseInt(limitsw);
		bt.css("right", limitsw);
	}
	$(window).scroll(function() {
		var st = $(window).scrollTop();
		if (st > 30) {
			bt.show();
		} else {
			bt.hide();
		}
	});
	/****回到顶部的设置* E***/
	
	/*菜单切换 S*/
	$('.menu li').bind({
        mouseover:function(){
            
            $(this).find('.submenu').stop().slideDown(300);
        },
        mouseout:function(){
            $(this).find('.submenu').stop().slideUp(300);
        }
    });
    
    $('.menu li').click(function(){
    	$(this).append("<b class='barcur'></b>").siblings().find('b').remove();
    });
   
    $(window).load(function(){
    	 
    	var count=$('.submenu .li').length;
    	var w=$('.menu li').width();
    	if(count<=5){
    		$('.submenu').width(w);
    	}
    });
	/*菜单切换 E*/
})

