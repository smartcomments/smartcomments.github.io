var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos() {
	navbar();
	// $(".generate").click(function() {
		
	// };
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