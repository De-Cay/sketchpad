$(document).ready(function(){
	$('.container').append('<ul />')
				   .append('<ul />')
				   .append('<ul />')
				   .append('<ul />');
			
	$('ul').append('<li />')
		   .append('<li />')
		   .append('<li />')
		   .append('<li />');
		   
	$('li').css({
		display: 'inline-block',
		'list-style-type': 'none',
		height: '25px',
		width: '25px',
		border: '1px black solid',
		margin: '0 1px',
		'box-sizing': 'border-box'
		}).hover(function() {
    	$(this).css('background-color','blue')
  	});
  	$('.container').css({
		margin: '0 auto'
	});

  	$('ul').css({
		padding: '0',
		margin: '0'
  	});

  	$('button').css({
    	margin: '10px 0',
    	padding: '10px',
    	'font-size': '16px'
  	});
  	
});

function newGrid(){

	$('li').css('background-color','white');
	$('.container').remove();
	$('button').remove();
	$('body').prepend('<div class="container"></div>');

	var width = prompt('Enter a new grid width');

	if(width > 45){
		var width = prompt('Grid width must be 45 or less');
	}

	var height = prompt('Enter new grid height');

	if(height > 20) {
		var height = prompt('Grid height must be 20 or less');
	}

	for (var i=0; i<=height;i++){
		$('.container').append('<ul />');
	}

	for (var i=0; i<=width;i++){
		$('ul').append('<li />');
	}

	$('.container').prepend('<button onclick="newGrid(); return false">New Grid</button>')

	$('li').css({
		display: 'inline-block',
		'list-style-type': 'none',
		height: '25px',
		width: '25px',
		border: '1px black solid',
		margin: '0 1px',
		'box-sizing': 'border-box'
		}).hover(function() {
		$(this).css('background-color','blue')
	});

	$('.container').css({
		margin: '0 auto'
	});

	$('ul').css({
		padding: '0',
		margin: '0'
	});

	$('button').css({
		margin: '10px 0',
		padding: '10px',
		'font-size': '16px'
	});
};
