require(['assets/js/app/lib/smartcomments.js'], function(smartcomments) {

    $(".generate").click(function() {
        var code = $(".demo textarea").val(),
            default_config = {
                tags: {
                    function: {
                        name: {},
                        desc: {
                            value: "Description"
                        },
                        params: {},
                        rtrn: {}
                    }
                },
                template: '../templates/default.js'
            }

        smartcomments.initialize(default_config);
        $(".demo textarea").val(smartcomments.generate(code));
    });
});
