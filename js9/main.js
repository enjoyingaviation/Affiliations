$(document).ready(function () {
	$(".go_form").on("touchend, click", function (e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $('#order_form').offset().top
		}, 400);
	});
	var flag = 0;
	if (window.innerWidth <= 990 && flag === 0) {
		flag = 1;
		$('#problems_list_slider').slick({
			arrows: false,
			dots: true
			// adaptiveHeight: true
		});
		$('#solving_slider').slick({
			arrows: false,
			dots: true
			// adaptiveHeight: true
		});
		$('#exercise_slider').slick({
			arrows: false,
			dots: true
			// adaptiveHeight: true
		});
		$('#result_slider').slick({
			arrows: false,
			dots: true
			// adaptiveHeight: true
		});
	}
	$(window).on('resize', function (event) {
		if (event.target.innerWidth <= 990 && flag === 0) {
			flag = 1;
			$('#problems_list_slider').slick({
				arrows: false,
				dots: true
				// adaptiveHeight: true
			});
			$('#solving_slider').slick({
				arrows: false,
				dots: true
				// adaptiveHeight: true
			});
			$('#exercise_slider').slick({
				arrows: false,
				dots: true
				// adaptiveHeight: true
			});
			$('#result_slider').slick({
				arrows: false,
				dots: true
				// adaptiveHeight: true
			});
		} else if (event.target.innerWidth > 990 && flag === 1) {
			flag = 0;
			$('#problems_list_slider').slick('unslick');
			$('#solving_slider').slick('unslick');
			$('#exercise_slider').slick('unslick');
			$('#result_slider').slick('unslick');
		}
	});
	$('._play').on('click', function (e) {
		e.stopPropagation();
		$(this).parents('.video_wrapp').find('._poster').fadeOut(200);
		$(this).parents('.wrapp_play').fadeOut(200);
		$('._video')[0].play();
	})
});
$(window).on('load', function () {
	var rellax = new Rellax('.js-parralax', {
		center: true
	});
	if ($(window).width() > 990) {
		new WOW().init();
	}
});