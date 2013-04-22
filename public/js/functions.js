//shortcut for document.ready
$(function(){

	//setup the nav
	$('#defaultLink').scrollTo();
	$('#offsetLink').scrollTo({
		offset:-100
	});
	$('#fastLink').scrollTo({
		speed: 'fast'
	});
	$('#slowLink').scrollTo({
		speed: 5000
	});
	
	$('#easeOut').scrollTo({
		easing:'easeOutBounce',
		speed:2000
	});
	
	//grab all the back buttons so they work correctly
	$('.back').scrollTo();
	

});