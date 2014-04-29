require(['lib/smartcomments/lib/smartcomments.js'], function(smartcomments) {

    $(".generate").click(function() {
        var code = myCodeMirror.getValue(),
            default_config = {
                private : false,
                favor_generated : true,
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
        setCutValue(myCodeMirror.getValue());
        smartcomments.initialize(default_config);
        myCodeMirror.setValue(smartcomments.generate(code, default_config));
    });
});
