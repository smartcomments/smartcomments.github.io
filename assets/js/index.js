$(document).ready(inicializarEventos);

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
					'}\n\n'+
					'someFunction.prototype.test = function(a){\n'+
					    '   return a;\n'+
					'}';


	myCodeMirror = CodeMirror($('div.demo')[0], {
  		value: demo_value,
  		mode:  "javascript"
	});
	$(".logo-github-small").mouseover(function() {
		$('.show-tooltip').tooltip('title')
	});
}
function navbar(){
	$(".jquery").click(function() {
		var CLASS = 'class',
			i = 1,
			id = $(this).attr('id');
		$('#'+id).attr(CLASS,'active');
		 for (i; i <= 5; i++) {
			if (i==id) {
		 		continue;	
		 	}
		 	else {
		 		$('#'+i).attr(CLASS,'');
		 	}	 
		 }
	});
}
