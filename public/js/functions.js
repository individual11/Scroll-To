var I11 = I11 || {};
	
I11.download = function(){
	location.href = '_/downloads/scrollTo.zip';
}

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
	
	//for the download
	$('#download').click(I11.download);

});