var x;
x=$(document);
x.ready(inicializarEventos);
var myCodeMirror = {};

function inicializarEventos() {
	navbar();
	var demo_value = '//Paste or Write your code here for testing...\n\n'+
					'var someUncommentFunction = function(a, b){\n'+
					'	return true;\n'+
					'}\n\n'+
					'function otherUncommentFunction(){\n'+
						'	var x = 1,\n'+
					        '		y = 1;\n'+
					   	'	return x;\n'+
					'}\n\n'+
					'var someObject = {\n'+
					  '	anotherUncommentFunction: function(x, y){\n'+
					  	'		return x;\n'+
					  '	}\n'+
					'}';

	myCodeMirror = CodeMirror($('div.demo')[0], {
  		value: demo_value,
  		mode:  "javascript"
	});
}

function refresh(){
     location.reload();
}

function navbar(){
	$(".home").click(function() {
	 $("#li-home").attr('class','active');
	 $("#li-installation").attr('class','');
	 $("#li-usage").attr('class','');
	 $("#li-features").attr('class','');
	 $("#li-about").attr('class','');
	 
	});

    $(".installation").click(function() {
	 $("#li-home").attr('class','');
	 $("#li-installation").attr('class','active');
	 $("#li-usage").attr('class','');
	 $("#li-features").attr('class','');
	 $("#li-about").attr('class','');
	});

	$(".usage").click(function() {
	 $("#li-home").attr('class','');
	 $("#li-installation").attr('class','');
	 $("#li-usage").attr('class','active');
	 $("#li-features").attr('class','');
	 $("#li-about").attr('class','');
	});

	$(".features").click(function() {
	 $("#li-home").attr('class','');
	 $("#li-installation").attr('class','');
	 $("#li-usage").attr('class','');
	 $("#li-features").attr('class','active');
	 $("#li-about").attr('class','');
	});

	$(".about").click(function() {
	 $("#li-home").attr('class','');
	 $("#li-installation").attr('class','');
	 $("#li-usage").attr('class','');
	 $("#li-features").attr('class','');
	 $("#li-about").attr('class','active');
	});
}

