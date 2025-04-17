// M7R
jQuery(document).ready(function($){
$('.owl-carousel').owlCarousel({
	rtl:true,
	loop:true,
	margin:8,
	dots: true,
	autoplay:false,
	autoplayTimeout:4000,
	autoplayHoverPause:true,
	responsive:{
		0:{items:1},
		667:{items:2},
		1000:{items:3}}
});
$('.owl-carousel2').owlCarousel({
	rtl:true,
	loop:true,
	margin:8,
	nav:true,
	navText:["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
	dots: true,
	autoplay:false,
	autoplayTimeout:4000,
	autoplayHoverPause:true,
	responsive:{
		0:{items:1},
		667:{items:2},
		1000:{items:3}}
});
$('.owl-carousel3').owlCarousel({
	rtl:true,
	loop:true,
	margin:8,
	nav:true,
	navText:["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
	dots: true,
	autoplay:false,
	autoplayTimeout:4000,
	autoplayHoverPause:true,
	responsive:{
		0:{items:1},
		667:{items:2},
		1000:{items:4}}
});
$('.owl-carousel4').owlCarousel({
	rtl:true,
	loop:true,
	margin:8,
	nav:true,
	navText:["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
	dots: true,
	autoplay:false,
	autoplayTimeout:4000,
	autoplayHoverPause:true,
	responsive:{
		0:{items:1},

		667:{items:1},
		1000:{items:1}}
});
});