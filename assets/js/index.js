$(document).ready(inicializarEventos);

function inicializarEventos() {
	navbar();
	// $(".generate").click(function() {
	// };
}
// function refresh(){
//      location.reload();             
// }
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