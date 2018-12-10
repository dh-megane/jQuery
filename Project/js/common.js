const C_TITLE = "確認ダイアログ";
const C_BTN_OK_MSG = "OK";
const C_BTN_NG_MSG = "キャンセル";

$(function(){
    $("#dialog").button().click(function(){
        $("#show_dialog").dialog({
            modal: true,
            title: C_TITLE,
            buttons: [
                {
                    text: C_BTN_OK_MSG,
                    "class": "btn-OK",
                    click : function() { $(this).dialog("close"); }
                },
                {
                    text: C_BTN_NG_MSG,
                    "class": "btn-NG",
                    click : function() { $(this).dialog("close"); }
                }
            ]
        });
    });
});