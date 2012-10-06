jQuery(document).ready(function($) {

	function change_size() {
		var window_width = $(window).width();
		var left_col = Math.round((window_width / 3.5));
		var content = Math.round((window_width - left_col) - 100);
		$('.leftcol').width(left_col);
		$('.articles').css('left', left_col + 100 + 'px'); 
		$('.articles').width(content);
	}		
	
	change_size();
		
	$(window).resize(function() {
	  change_size();
	});	
	
});