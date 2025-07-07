/*
	pUploady by orugari
	http://puploady.orugari.fr
	License: ttp://puploady.orugari.fr/license.php
	v2.0
*/
(function($) {

    $.fn.puploady = function(options) {
		
        const settings = $.extend({
            file: 'upload.php',
            callback: true
        }, options);

        $(this).on('submit', function(event){
            event.preventDefault();
            const form = $(this);

            // Supprimer ancienne instance
            $('#blackback').remove();

            // Ajout UI
            form.after(`
                <div id="blackback">
                    <progress id="thebar" value="0"></progress>
                    <span id="pup_cancel"><img src="images/cancel.png" alt="cancel" /></span>
                </div>
            `);

            $("#blackback").css({
                backgroundColor: "rgba(0,0,0,0.7)",
                width: "100%",
                height: "100%",
                position: "fixed",
                textAlign: "center",
                top: "0",
                left: "0",
                zIndex: 9999,
                display: "none"
            }).fadeIn();

            $("#thebar").css({
                width: "30%",
                marginTop: "20%"
            });

            $("#pup_cancel img").css({
                cursor: "pointer",
                verticalAlign: "middle",
                paddingBottom: "2px"
            });

            const formdata = window.FormData ? new FormData(form[0]) : form.serialize();

            const theax = $.ajax({
                xhr: function() {
                    const xhr = $.ajaxSettings.xhr();
                    if (xhr.upload) {
                        xhr.upload.addEventListener('progress', function(e) {
                            if (e.lengthComputable) {
                                $('#thebar').attr({ value: e.loaded, max: e.total });
                            }
                        }, false);
                    }
                    return xhr;
                },
                url: settings.file,
                data: formdata,
                cache: false,
                contentType: false,
                processData: false,
                type: 'POST',
                success: function(data){
                    $('#blackback').fadeOut(function(){
                        if (settings.callback) {
                            // Remplace alert par console.log (modifiable selon ton usage)
                            console.log(data);
                        }
                    });
                }
            });

            $("#pup_cancel").on('click', function() {
                theax.abort();
                $('#blackback').fadeOut();
            });
        });
    };

})(jQuery);
