$(document).ready(inicializarEventos);


var myCodeMirror = {};

function inicializarEventos() {
	navbar();
	var demo_value = '//Paste or Write your code here for testing...\n\n'+
					'var someUncommentFunction = function(a, b){\n'+
					'	return true;\n'+
					'}\n\n'+


					'/*\n'+
					' * Old commented function description\n'+
					' * @method oldCommentedFunction\n'+
					' * @return x\n'+
					' */\n'+
					'function oldCommentedFunction(newUnCommentedParam){\n'+
						'	var x = 1;\n'+
					   	'    return "Thanks Rick Kilgore";\n'+
					'}\n\n'+
					'var someObject = {\n'+
					  '	anotherUncommentFunction: function(x, y){\n'+
					  	'		return x;\n'+
					  '	}\n'+
					'}\n\n'+
					'someFunction.prototype.test = function(){\n'+
					    '   return "Thanks karelm";\n'+
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
		 for (i; i <= 6; i++) {
			if (i==id) {
		 		continue;	
		 	}
		 	else {
		 		$('#'+i).attr(CLASS,'');
		 	}	 
		 }
	});
}
