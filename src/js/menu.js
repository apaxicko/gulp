var showSubMenu = function() {
	$('.nav__item').on('click', function() {
		if(!$(this).hasClass('active')) {
			$(this).addClass('active').find('.nav__submenu').removeClass('hidden');
			$(this).find('.ic-down').attr('class','ic-up').show();
		} else {
			$(this).removeClass('active').find('.nav__submenu').addClass('hidden');
			$(this).find('.ic-up').attr('class','ic-down');
		}
	});
}; 

$(document).ready(function() {
	showSubMenu();
});