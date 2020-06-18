$(document).ready(function(){
	$(".js-slider").slick({
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		customPaging: function() {
			return '<div class="slider__dot"></div>'},
		arrows:  true,
		prevArrow:".slider-nav__prev",
		nextArrow:".slider-nav__next",
		appendDots: '.slider-dots'
	});
})