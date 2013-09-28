require(['assets/js/app/lib/smartcomments.js'], function(smartcomments) {

    $(".generate").click(function() {
        var code = myCodeMirror.getValue(),
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
        myCodeMirror.setValue(smartcomments.generate(code));
    });
});
