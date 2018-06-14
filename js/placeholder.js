  $(function () {  
        //兼容不支持placeholder的浏览器[ie浏览器，并且10以下均采用替代方式处理]  
        if ((navigator.appName == "Microsoft Internet Explorer") && (document.documentMode < 10 || document.documentMode == undefined)) {  
            var $placeholder = $("input[placeholder]");  
            for (var i = 0; i < $placeholder.length; i++) {  
                if ($placeholder.eq(i).attr("type") == "password") {  
                    $placeholder.eq(i).siblings("label").text($placeholder.eq(i).attr("placeholder")).show()  
                } else {  
                    $placeholder.eq(i).val($placeholder.eq(i).attr("placeholder")).css({"color": "#ccc"})  
                }  
            }  
            $placeholder.focus(function () {  
                if ($(this).attr("type") == "password") {  
                    $(this).siblings("label").hide()  
                } else {  
                    if ($(this).val() == $(this).attr("placeholder")) {  
                        $(this).val("").css({"color": "#333"})  
                    }  
                }  
            }).blur(function () {  
                if ($(this).attr("type") == "password") {  
                    if ($(this).val() == "") {  
                        $(this).siblings("label").text($(this).attr("placeholder")).show()  
                    }  
                } else {  
                    if ($(this).val() == "") {  
                        $(this).val($(this).attr("placeholder")).css({"color": "#ccc"})  
                    }  
                }  
            });  
            $(".clone_input_text").live("focus", function () {  
                $(this).siblings("label").hide()  
            }).live("blur", function () {  
                if ($(this).val() == "") {  
                    $(this).siblings("label").text($(this).attr("placeholder")).show()  
                }  
            });  
            $placeholder.siblings("label").click(function () {  
                if ($(this).parent("div").siblings(".see_pwd_btn").attr("data-flag") == "1") {  
                    $(this).hide().next("input").next("input").focus()  
                } else {  
                    $(this).hide().next("input").focus()  
                }  
            })  
        }  
  
        //可视密码  
        $(".see_pwd_btn").click(function() {  
            var obj=$(this);  
            var ch_reg_pwd = $(".ch_reg_pwd");  
            if (obj.attr("data-flag") != 1) {  
                var clone_input = '<input type="text" class="clone_input_text" placeholder="'+ ch_reg_pwd.attr("placeholder") + '" value="' + ch_reg_pwd.val() + '"/>';  
                ch_reg_pwd.after(clone_input);  
                ch_reg_pwd.hide();  
                obj.addClass("see_pwd_on").attr("data-flag", 1);  
            } else {  
                ch_reg_pwd.val($(".clone_input_text").val()).show();  
                $(".clone_input_text").remove();  
                obj.removeClass("see_pwd_on").attr("data-flag", "");  
            }  
        });  
    });  