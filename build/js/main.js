$(document).ready(function() {
    $(".js-toggle-type").click(function () {
        $(this).toggleClass("toggle-type_text toggle-type_password");
        var target = $($(this).data('target'));

        if (target.attr("type") == "password") {
            target.attr("type", "text");
        } else {
            target.attr("type", "password");
        }
    });

    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }


    $(".input-box-js__input").focusin(function () {
        var parent = $(this).closest(".input-box-js");
        parent.addClass('focus').removeClass('filled');

    });

    $(".input-box-js__input").focusout(function () {
        var value = $(this).val(),
            type = $(this).data('input-type'),
            parent = $(this).closest(".input-box-js");

        if (value !== "") {
            if(type === "email"){
                if (!isValidEmailAddress(value)){
                    parent.addClass('error');
                } else {
                    parent.removeClass('error');
                }
            }
            parent.addClass('filled');
        }

        parent.removeClass('focus');
    });
});