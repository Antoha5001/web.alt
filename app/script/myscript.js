
var $lite_green = "#bcefd3";
var $lite_green2 = "#8adbb0";
var $blue = "#38baf2";
var $lite_blue = "#2bd9f5";
var $dark_blue = "#096790";
var $dark_green = "#25995b";
var $dark_green2 = "#3fac72";

/*$(function(){
    $(".form-box__input").focusin(function(){
        $(this).css("background","white");
    });
    $(".form-box__input").focusout(function(){
        $(this).css("background",$lite_green);
    });
    $(".form-box__button").mouseenter(function(){
        $(this).css("background",$lite_green2);
    });
    $(".form-box__button").mouseleave(function(){
        $(this).css("background",$dark_green);
    });
    $(".form-box__button").click(function(){
        $(this).css("background",$dark_green2);
    });*/
    
   /* $(window).scroll(function() {
    $('.zagolovok').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+800) {
        $(this).addClass('bounceInLeft');
      }
    });
  });
});*/
$(document).ready(function(){	
	
	$(".offer__strelka").on("click", function(){
		var sectionTop = $(".tools-box").offset().top;
		$('body, html').animate({scrollTop:sectionTop},500);
	});
	
	$(".popup_button").magnificPopup();
	
	//Верхняя форма
    $("#top_form").submit(function(){
		var $this = $(this),
			form_data = $this.serialize();	
		$.ajax({
			type: "POST",
			url:"/assets/templates/script/formtop.php",
			data: form_data,
			success: function(){
				alert("Ваше сообщение отправленно!");
			}
		});
	});	
	
	//Нижняя форма
    $("#bottom_form").submit(function(){
		var $this = $(this),
			form_data = $this.serialize();	
		$.ajax({
			type: "POST",
			url:"/assets/templates/script/form.php",
			data: form_data,
			success: function(){
				alert("Ваше сообщение отправленно!");
			}
		});
	});	
		
	var itemsGlob = $('.top-menu__items'),
		buttonGlob = $('.top-menu__button'),
		planshet = 910;	
   
	$(window).resize(function(){
		var $this = $(this),
			width=window.innerWidth;
		if(width > planshet){
			itemsGlob.attr('style','display:block');
		} else if((width < planshet) && buttonGlob.hasClass('clicked')){	
			itemsGlob.attr('style','display:block');
		}else if(width<planshet || width == planshet){		
			itemsGlob.attr('style','display:none');
		}
	});
	
	buttonGlob.on('click',function(e){
		e.preventDefault();
		var btn = $(this),
			items = btn.siblings('.top-menu__items'),
			item = items.children('li'),
			duration = 200;
		if(!btn.hasClass('clicked')){			
		btn.addClass('clicked');
        items.stop(true, true).slideDown(duration); 
		}else{					
			btn.stop(true, true).removeClass('clicked');
        items.stop(true, true).slideUp(duration,function(){
		});
		
		}
	});
	
});
