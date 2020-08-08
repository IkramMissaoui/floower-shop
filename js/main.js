$(function() {
	'use strict';
	$('#birthday').datepicker();
	$('.navcolor ul li').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
	});
});
$(window).scroll(function() {
	if ($(window).scrollTop() > 300)
		$('i.first-icon').css({
			opacity: '1',
			'pointer-events': 'auto'
		});
	else {
		$('i.first-icon').css({
			opacity: '0',
			'pointer-events': 'none'
		});
	}
});
$('i.first-icon').click(function() {
	$('html').animate({ scrollTop: 0 }, 500);
});
