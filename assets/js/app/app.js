require(['assets/js/app/lib/smartcomments.js'], function(smartcomments) {

    $(".generate").click(function() {
		console.log('vegra');
		var code = $(".demo textarea").val();
		console.log(code);

		var default_config = {
				tags: {
			    function: {
			      name:{},
			      desc:{value:"Description"},
			      params:{},
			      rtrn:{}
			    }
			},
			template : '../templates/default.js'
		}

	    smartcomments.initialize(default_config);
	    $(".demo textarea").val(smartcomments.generate(code));
	});
});
