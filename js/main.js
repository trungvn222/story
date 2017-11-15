/* 
 * Main javascript
 */
 
jQuery(function($) {
	/*
		Hamburger
	*/
	$("#hamurger").click(function(event) {
		var hamburger = $(this).find('.hamburger')
		if($("#nav-main").is(":hidden")){
			$("#nav-main").slideDown(function(){
				$(hamburger).addClass('is-active');
			})
		}else{
			$("#nav-main").slideUp(function(){
				$(hamburger).removeClass('is-active');
			})
		}
	});

	$('.scroll-to > a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		    	var target = $(this.hash);
		    	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		    	if (target.length) {
		        	$('html, body').animate({
		          		scrollTop: target.offset().top
		        	}, 1000);
		        	return false;
		      	}
		}
	});

	function MenuHover(){
		var v = viewport();
		var w = v['width'];
		if(w > 991){
			$("#nav-main li").hover(function() {
				var ul = $(this).find(">ul");
				var bodyW = $("body").width();
				if( $(ul).length > 0 ){
					var ulOffset = $(ul).offset();
					if( (ulOffset.left + $(ul).outerWidth()) >= bodyW ) {
						$(ul).removeClass("left").addClass('right');
					}else{
						$(ul).removeClass("right").addClass('left');
					}
				}

			}, function() {
				var ul = $(this).find(">ul");
				if( $(ul).length > 0 ){
					$(ul).removeClass('right');
					$(ul).removeClass('left')
				}
			});
		}	
	}
	MenuHover();
	
	function ProductSlider(){
		this.sliders = [];
		this.slidersObject = [];
		this.options = {
			'nextText': '<i class="fa fa-angle-right" aria-hidden="true"></i>',
			'prevText': '<i class="fa fa-angle-left" aria-hidden="true"></i>',
			minSlides: 5,
			maxSlides: 5,
			slideWidth: 500
		};
		this.constructor = function(){
			var sliders = [];
			$('.story-container').each(function(index, el) {

				var slider = $(el).find('.story-slider');
				sliders.push(slider);
			});
			this.sliders = sliders;
		}

		this.run = function(){
			var x = 0;
			var l = this.sliders.length;
			for(x; x < l; x++){
				var slider = $(this.sliders[x]).bxSlider(this.options);
				this.slidersObject.push(slider);
			}

		}

		this.destroy = function(){
			for(x in this.slidersObject){ 
				this.slidersObject[x].destroySlider();
			}
			this.slidersObject = [];
		}

		this.constructor();
	}

	function ProductSlidersRes(){
		this.productSlider = null;
		this.run = false;

		this.constructor = function(){
			this.productSlider = new ProductSlider();
		}

		this.run = function(){
			var v = viewport();
			var w = v['width'];

			if(w <= 480){
				if(this.productSlider.slidersObject.length > 0){
					this.productSlider.destroy();
				}
				this.productSlider.options.minSlides = 1;
				this.productSlider.options.maxSlides = 1;
				this.productSlider.run();
			}else if(w <= 767 && w > 480){
				if(this.productSlider.slidersObject.length > 0){
					this.productSlider.destroy();
				}
				this.productSlider.options.minSlides = 3;
				this.productSlider.options.maxSlides = 3;
				this.productSlider.run();
				
			}else{

				if(this.productSlider.slidersObject.length > 0){
					this.productSlider.destroy();
				}
				this.productSlider.options.minSlides = 5;
				this.productSlider.options.maxSlides = 5;
				this.productSlider.run();
			}
		}

		this.constructor();
	}

	$("#nav-main li").each(function(index, el) {
		var ul = $(el).find(">ul");
		var a  = $(el).find(">a");
		if(ul.length > 0){
			$(a).append($('<span class="arrow"></span>'));
		}
	});

	$("#nav-main li > a").click(function(event) {
		if( $(event.target).hasClass('arrow') ){
			var ul = $(this).next("ul");
			if(ul.length > 0){
				if( $(ul).is(":hidden") ){
					$(ul).slideDown(400, function() {
						$(event.target).addClass('active');
						
					});
				}else{
					$(ul).slideUp(400, function() {
						$(event.target).removeClass('active');
					});
				}
			}
			return false;
		}else{
			return true;
		}
	});
	function removeStyleSubMenu(){
		var v = viewport();
		var w = v['width'];
		if( w > 991 ){
			$("#nav-main li ul").removeAttr('style');
		}
		
	}


	function viewport() {
	    var e = window, a = 'inner';
	    if (!('innerWidth' in window )) {
	        a = 'client';
	        e = document.documentElement || document.body;
	    }
	    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
	}
	
	$(window).load(function() {
	    $(this).trigger('resize');

	    var productSlider = new ProductSlidersRes();
	    productSlider.run();

	    $(window).on('afterWindownResize', function(){
	    	productSlider.run();
	    });
	});
	var timer = window.setTimeout(function() {}, 0);
	$(window).resize(function(event) {
	    window.clearTimeout(timer);
	    timer = window.setTimeout(function() {
	      	ProductSlidersRes();
	      	$(window).trigger('afterWindownResize');
	        window.clearTimeout(timer);
	    }, 500);
	   
	});
});