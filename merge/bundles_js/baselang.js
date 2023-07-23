var lang = "TW", BaseLang;
$(document).ready(function() {
    BaseLang.GetLangCode();
    BaseLang.RefreshLang()
});
BaseLang = {
    GetLangCode: function() {
        lang = $(location).attr("pathname").split("/")[1];
        lang.toUpperCase() != "TW" && lang.toUpperCase() != "EN" && (lang = "TW")
    },
    GetBaseLang: function(n, t, i) {
        $.ajax({
            url: n + t + "." + i + ".js",
            dataType: "script",
            async: !1
        })
    },
    RefreshObj: function(n) {
        var t = $("#" + n + " *[langkey]");
        t.length > 0 && $.each(t, function(n, t) {
            BaseLang.SetItemValue(t, typeof baseLang == "undefined" ? null : baseLang);
            BaseLang.SetItemValue(t, typeof layoutLang == "undefined" ? null : layoutLang);
            BaseLang.SetItemValue(t, typeof pageLang == "undefined" ? null : pageLang)
        })
    },
    RefreshLang: function() {
        var n = $("*[langkey]");
        n.length > 0 && (BaseLang.GetBaseLang(webURL + "/Lang/", "BaseLang", lang),
        BaseLang.GetBaseLang(webURL + "/Lang/" + storyCode + "/", "Layout", lang),
        BaseLang.GetBaseLang(webURL + "/Lang/" + storyCode + "/" + pathCode + "/", pageCode, lang),
        $.each(n, function(n, t) {
            BaseLang.SetItemValue(t, typeof baseLang == "undefined" ? null : baseLang);
            BaseLang.SetItemValue(t, typeof layoutLang == "undefined" ? null : layoutLang);
            BaseLang.SetItemValue(t, typeof pageLang == "undefined" ? null : pageLang)
        }))
    },
    SetItemValue: function(n, t) {
        if (t != null) {
            var i = t[$(n).attr("langkey")];
            $(n).attr("langkey") != "" && i != null && ($(n).is("input") ? $(n).attr("placeholder", i) : $(n).html(i))
        }
    }
}
