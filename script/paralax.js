

$(document).ready(function(){	
	
	setTimeout(function(){
		$('.header__logo').addClass('is-visible');
		$('.header__phone').addClass('is-visible');
	},1000);
	
	setTimeout(function(){
		$('.header__zagolovok').addClass('is-visible');
		$('.offer__spisok-block').addClass('is-visible');
	},1500);
	
	setTimeout(function(){
		$('.offer__img').addClass('is-visible');
		$('.hr').addClass('is-visible');
	},2000);
	
	setTimeout(function(){
		$('.form-box').addClass('is-visible');
		$('.offer__strelka').addClass('is-visible');
	},2500);
	
	$(window).scroll(function(){
		var $this = $(this),
		wScroll = $this.scrollTop(),
		toolsBlock = $('.tools-box'),
		toolsItem = toolsBlock.find('.base-block__item'),
		browserBox = $('.browser-box'),
		browserItem = browserBox.find('.base-block__item');
		
		if(wScroll>toolsBlock.offset().top - ($(window).height()/1.8)){
			toolsItem.each(function(e){
				setTimeout(function(){	
					toolsItem.eq(e).addClass('is-visible');
				},300 * (e+1));
			});
		}
		if(wScroll>browserBox.offset().top - ($(window).height()/1.8)){
			browserItem.each(function(e){
				setTimeout(function(){	
					browserItem.eq(e).addClass('is-visible');
				},500 * (e+1));
			});
		}
	});
});
