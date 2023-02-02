$(document).ready(function () {
	$('.slider').slick({
		dots: true,
		
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					arrows: false,
				}
			}
		]
	});

});
$(document).ready(function () {
	$('.second-slider').slick({
		dots: true,
		
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					arrows: false,
				}
			}
		]
	});

});