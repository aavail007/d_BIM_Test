var datatablePrevious = "<i class='mdi mdi-chevron-left'>", datatableNext = "<i class='mdi mdi-chevron-right'>", funNoInfo = "43F27864-D10D-447C-9C04-BB15987E0973", typeCodeInfo = 2, typeCodeSys = 1, typeCodeSysHasFront = 3, typeCodeInfoMgd = 1, forumSubjectType = 1, forumSubjectStatus = 2, groupCourseMgdTypeCode = 1, typeSubscription = 1, typeSubscriptionItem = 2, typeCodeMemberCopType = 1, typeCodeMemberWork = 2, typeCodeMemberTopical = 3, typeCodeMemberTag = 4, forumCourseService = 1, forumCourseTopical = 2, carouselPicType = 1, infoCoverType = 2, infoAttType = 3, infoHTMLEditPic = 4, groupCourseHTMLEditPic = 5, groupCourseCoverType = 6, groupCourseMapType = 7, groupCourseRecomendType = 8, carouselMp4Type = 9, hotLessonCover = 10, profilePic = 11, memImportExcel = 12, GalleryPic = 13, grfNoCarousel = "FC7C36FC-5554-4947-A17E-4E2A04316B37", grfNoMeta = "EE9E090A-0AED-4372-849D-ADB2D76E84D9", grfNoInfoGrf = "FA8F03CB-04BD-4B12-A555-25A48242442B", grfNoGroupCourse = "C129EF5C-1DF9-4042-BC6A-5A4FEF7CC91A", grfNoMenu = "826C6A48-FA50-41F3-8FE4-A2F5E4BB4496", grfNoMember = "A2DBA017-FAEA-4CD2-99B5-E5EAAE3E79F7", grfNoCourse = "72E5395D-226A-4666-B80A-7753FB1D5F65", grfNoForumSubject = "71166FAB-4BA9-406E-92C3-34F2951E5B6C", grfNoForumCourse = "C14F7D1B-AF5D-43B1-A178-384F98CD5557", grfNoAuth = "52E49130-027B-41D6-A681-0C42F0CD5FC7", grfNoKeyword = "0BD74577-990D-456A-8867-060E33971CD5", grfNoViewLog = "86CB1CCC-20C6-4954-97F4-AB477A40EC06", grfNoGallery = "6E20D14C-8652-4D3A-987D-E047E89B99DB", grfNoHotLesson = "6080461F-BCE4-4FBE-BF90-548E00A4A99C", grfSelfLearnLesson = "E659FCEB-7DBA-4964-8E55-5CA171E6EE41", grfNoSubscription = "D9141524-40E9-4DB3-99B6-E01D116611C2", mailForgetSswordCtoNo = "406A9393-880A-4245-81C1-8D89AA8C2112", mailCheckMailCtoNo = "42E758A9-1AA6-4E91-9E4F-5FA9CF50D4A7", mailSubscriptionCtoNo = "BC7E7477-1207-453D-BC95-15A2F89B154D", mailForumSubjectMgrCtoNo = "42CEDE54-B8AD-49EA-A7C8-39EC51F76EE4", mailForumSubjectSenderCtoNo = "67029ACA-999D-4DD5-A569-9A431981BC30", mailForumSenderReplyCtoNo = "45D60FE4-290D-4A08-B8D3-AEE453271AFC", mailForumMgrReplyCtoNo = "1A7D3285-A00F-4F55-8F8C-B63F64EA71A8", mailImportMemberCtoNo = "B90FEB25-C80A-40BF-84E8-616C43336FA0", mailApiExceptionCtoNo = "B49FEF61-1436-450C-8390-888CD761F838", mailCheckCopMailCtoNo = "0B3ABB03-3AAC-43D6-A6B6-224F454654BB", mailCustomerServiceCtoNo = "3FFFD8C4-95FA-464D-8A24-0E3F9C8F87CA", mailForgetSswordTypeCode = 1, mailCheckMailTypeCode = 2, mailSubscriptionTypeCode = 3, mailForumSubjectTypeCode = 4, mailImportMemberTypeCode = 5, mailApiExceptionTypeCode = 6, mailCheckCopMailTypeCode = 7, notifyEmailSendCode = 1, notifyLineSendCode = 2, notifySMSSendCode = 3, keyTraineeMemNo = "traineeMemNo", keyTraineeAccount = "traineeAccount", keyTraineeName = "traineeName", CodeList = {
    MemKindCodeString: function(n) {
        var t = "";
        return n == 1 ? t = "一般會員" : n == 2 ? t = "進階會員未驗證" : n == 3 && (t = "進階會員"),
        t
    }
}, BaseFunction, BaseSecu, BasePage;
Number.prototype.numberFormat = function(n, t, i) {
    var u = this
      , n = isNaN(n = Math.abs(n)) ? 2 : n
      , t = t == undefined ? "." : t
      , i = i == undefined ? "," : i
      , e = u < 0 ? "-" : ""
      , f = String(parseInt(u = Math.abs(Number(u) || 0).toFixed(n)))
      , r = (r = f.length) > 3 ? r % 3 : 0;
    return e + (r ? f.substr(0, r) + i : "") + f.substr(r).replace(/(\d{3})(?=\d)/g, "$1" + i) + (n ? t + Math.abs(u - f).toFixed(n).slice(2) : "")
}
;
String.prototype.removeThousands = function() {
    return this.replaceAll(",", "")
}
;
String.prototype.paddingLeft = function(n, t) {
    return this.length >= n ? this : (t + this).paddingLeft(n, t)
}
;
String.prototype.IsValidMac = function() {
    var n = this;
    return /^[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}$/.test(n) ? !0 : !1
}
;
String.prototype.IsValidIPV4 = function() {
    var n = this;
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(n) ? !0 : !1
}
;
String.prototype.IsNumber = function() {
    var n = this
      , t = new RegExp("^[0-9]+$");
    return t.test(n)
}
,
function() {
    jQuery.fn.setfocus = function() {
        return this.each(function() {
            var n = this;
            setTimeout(function() {
                try {
                    n.focus()
                } catch (t) {}
            }, 1e3)
        })
    }
}(jQuery);
String.prototype.toDateTime = function() {
    var n = new Date(this)
      , t = n.getFullYear()
      , i = n.getMonth() + 1
      , r = n.getDate()
      , u = n.getHours()
      , f = n.getMinutes();
    return t == 1 ? "" : t + "/" + i.toString().paddingLeft(2, "0") + "/" + r.toString().paddingLeft(2, "0") + " " + u.toString().paddingLeft(2, "0") + ":" + f.toString().paddingLeft(2, "0")
}
;
String.prototype.toDateTimeSecond = function() {
    var n = new Date(this)
      , t = n.getFullYear()
      , i = n.getMonth() + 1
      , r = n.getDate()
      , u = n.getHours()
      , f = n.getMinutes()
      , e = n.getSeconds();
    return t == 1 ? "" : t + "/" + i.toString().paddingLeft(2, "0") + "/" + r.toString().paddingLeft(2, "0") + " " + u.toString().paddingLeft(2, "0") + ":" + f.toString().paddingLeft(2, "0") + ":" + e.toString().paddingLeft(2, "0")
}
;
String.prototype.toDateTimeCache = function() {
    var n = new Date(this)
      , t = n.getFullYear()
      , i = n.getMonth() + 1
      , r = n.getDate()
      , u = n.getHours()
      , f = n.getMinutes();
    return t == 1 ? "" : t + i.toString().paddingLeft(2, "0") + r.toString().paddingLeft(2, "0") + u.toString().paddingLeft(2, "0") + f.toString().paddingLeft(2, "0").substring(0, 1) + "0"
}
;
String.prototype.toChDateTime = function() {
    var n = new Date(this)
      , t = n.getFullYear() - 1911
      , i = n.getMonth() + 1
      , r = n.getDate()
      , u = n.getHours()
      , f = n.getMinutes();
    return t <= 1 ? "" : t + "/" + i.toString().paddingLeft(2, "0") + "/" + r.toString().paddingLeft(2, "0") + " " + u.toString().paddingLeft(2, "0") + ":" + f.toString().paddingLeft(2, "0")
}
;
String.prototype.toDateWeekTime = function() {
    var n = new Date(this)
      , t = n.getFullYear()
      , i = n.getMonth() + 1
      , r = n.getDate()
      , u = n.getHours()
      , f = n.getMinutes()
      , e = n.getDay();
    return t == 1 ? "" : t + "/" + i.toString().paddingLeft(2, "0") + "/" + r.toString().paddingLeft(2, "0") + "(" + ["日", "一", "二", "三", "四", "五", "六"][e] + ") " + u.toString().paddingLeft(2, "0") + ":" + f.toString().paddingLeft(2, "0")
}
;
String.prototype.toDate = function() {
    var n = new Date(this)
      , t = n.getFullYear()
      , i = n.getMonth() + 1
      , r = n.getDate();
    return t == 1 ? "" : t + "/" + i.toString().paddingLeft(2, "0") + "/" + r.toString().paddingLeft(2, "0") == "1/01/01" ? "" : t + "/" + i.toString().paddingLeft(2, "0") + "/" + r.toString().paddingLeft(2, "0")
}
;
String.prototype.toDate2 = function() {
    var n = new Date(this)
      , t = n.getFullYear()
      , i = n.getMonth() + 1
      , r = n.getDate();
    return t == 1 ? "" : t + "-" + i.toString().paddingLeft(2, "0") + "-" + r.toString().paddingLeft(2, "0") == "1/01/01" ? "" : t + "-" + i.toString().paddingLeft(2, "0") + "-" + r.toString().paddingLeft(2, "0")
}
;
String.prototype.toDate3 = function() {
    var n = new Date(this)
      , r = n.getFullYear()
      , t = n.getMonth() + 1
      , i = n.getDate();
    return r == 1 ? "" : t.toString().paddingLeft(2, "0") + "/" + i.toString().paddingLeft(2, "0") == "1/01/01" ? "" : t.toString().paddingLeft(2, "0") + "/" + i.toString().paddingLeft(2, "0")
}
;
String.prototype.toTime = function() {
    var n = new Date(this)
      , t = n.getHours()
      , i = n.getMinutes();
    return t.toString().paddingLeft(2, "0") + ":" + i.toString().paddingLeft(2, "0")
}
;
String.prototype.toTimeSec = function() {
    var n = new Date(this)
      , t = n.getHours()
      , i = n.getMinutes()
      , r = n.getSeconds();
    return t.toString().paddingLeft(2, "0") + ":" + i.toString().paddingLeft(2, "0") + ":" + r.toString().paddingLeft(2, "0")
}
;
String.prototype.toYear = function() {
    var t = new Date(this)
      , n = t.getFullYear();
    return n == 1 ? "" : n
}
;
String.prototype.toChYear = function() {
    var t = new Date(this)
      , n = t.getFullYear() - 1911;
    return n <= 1 ? "" : n
}
;
String.prototype.toMonth = function() {
    var n = new Date(this)
      , t = n.getFullYear()
      , i = n.getMonth() + 1;
    return t == 1 ? "" : i + "月"
}
;
String.prototype.toDay = function() {
    var n = new Date(this)
      , t = n.getFullYear()
      , i = n.getDate();
    return t == 1 ? "" : i.toString().paddingLeft(2, "0")
}
;
String.prototype.addComma = function() {
    var t = this + "", n;
    for (x = t.split("."),
    x1 = x[0],
    x2 = x.length > 1 ? "." + x[1] : "",
    n = /(\d+)(\d{3})/; n.test(x1); )
        x1 = x1.replace(n, "$1,$2");
    return x1 + x2
}
;
Date.prototype.addDays = function(n) {
    return this.setDate(this.getDate() + n),
    this
}
;
Date.prototype.MergeTime = function(n) {
    return this.setHours(n.split(":")[0], n.split(":")[1], 0),
    this
}
;
Date.prototype.addDays = function(n) {
    return this.setDate(this.getDate() + n),
    this
}
;
String.prototype.encryptDes = function(n, t) {
    var i = CryptoJS.enc.Utf8.parse(this)
      , r = CryptoJS.enc.Utf8.parse(n)
      , u = CryptoJS.enc.Utf8.parse(t);
    return encrypted = CryptoJS.DES.encrypt(i, r, {
        iv: u,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }),
    encrypted.ciphertext.toString()
}
;
String.prototype.replaceAll = function(n, t) {
    return this.replace(new RegExp(n,"gm"), t)
}
;
String.prototype.NewLineToHTML = function() {
    return this.replace(/\n/g, "<br />")
}
;
String.prototype.htmlEncode = function() {
    return $("<div/>").text(this).html()
}
;
String.prototype.htmlDncode = function() {
    return $("<div/>").html(this).text()
}
;
BaseFunction = {
    QueryString: function(n) {
        var i = this.HtmlDecode(window.location.href)
          , t = new RegExp("[?&]" + n + "=([^&#]*)").exec(i);
        return t == null ? "" : decodeURI(t[1]) || 0
    },
    QueryStringDEncode: function(n) {
        var t = new RegExp("[?&]" + n + "=([^&#]*)").exec(window.location.href);
        return t == null ? "" : decodeURIComponent(decodeURI(t[1])) || 0
    },
    QueryRemoveParam1: function(n, t) {
        var u = n.split("?"), i;
        if (u.length > 1 && u[1].indexOf(t) > -1) {
            var e = u[1]
              , f = {}
              , r = e.split("&");
            for (i = 0; i < r.length; i++)
                r[i] = r[i].split("="),
                f[r[i][0]] = r[i][1];
            return delete f[t],
            u[0] + "?" + JSON.stringify(f).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&")
        }
        return n
    },
    IsEmail: function(n) {
        return /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(n) ? !0 : !1
    },
    IsURL: function(n) {
        return /^(?:https?:\/\/(?:www\.)?|www\.)[a-z0-9]+(?:[-.][a-z0-9]+)*\.[a-z]{2,5}(?::[0-9]{1,5})?(?:\/\S*)?$/.test(n) ? !0 : !1
    },
    IsValidString: function(n) {
        return /<[^\w<>]*(?:[^<>"'\s]*:)?[^\w<>]*(?:\W*s\W*c\W*r\W*i\W*p\W*t|\W*f\W*o\W*r\W*m|\W*s\W*t\W*y\W*l\W*e|\W*s\W*v\W*g|\W*m\W*a\W*r\W*q\W*u\W*e\W*e|(?:\W*l\W*i\W*n\W*k|\W*o\W*b\W*j\W*e\W*c\W*t|\W*e\W*m\W*b\W*e\W*d|\W*a\W*p\W*p\W*l\W*e\W*t|\W*p\W*a\W*r\W*a\W*m|\W*i?\W*f\W*r\W*a\W*m\W*e|\W*b\W*a\W*s\W*e|\W*b\W*o\W*d\W*y|\W*m\W*e\W*t\W*a|\W*i\W*m\W*a?\W*g\W*e?|\W*v\W*i\W*d\W*e\W*o|\W*a\W*u\W*d\W*i\W*o|\W*b\W*i\W*n\W*d\W*i\W*n\W*g\W*s|\W*s\W*e\W*t|\W*i\W*s\W*i\W*n\W*d\W*e\W*x|\W*a\W*n\W*i\W*m\W*a\W*t\W*e)[^>\w])|(?:<\w[\s\S]*[\s\0\/]|['"])(?:formaction|style|background|src|lowsrc|ping|on(?:d(?:e(?:vice(?:(?:orienta|mo)tion|proximity|found|light)|livery(?:success|error)|activate)|r(?:ag(?:e(?:n(?:ter|d)|xit)|(?:gestur|leav)e|start|drop|over)?|op)|i(?:s(?:c(?:hargingtimechange|onnect(?:ing|ed))|abled)|aling)|ata(?:setc(?:omplete|hanged)|(?:availabl|chang)e|error)|urationchange|ownloading|blclick)|Moz(?:M(?:agnifyGesture(?:Update|Start)?|ouse(?:PixelScroll|Hittest))|S(?:wipeGesture(?:Update|Start|End)?|crolledAreaChanged)|(?:(?:Press)?TapGestur|BeforeResiz)e|EdgeUI(?:C(?:omplet|ancel)|Start)ed|RotateGesture(?:Update|Start)?|A(?:udioAvailable|fterPaint))|c(?:o(?:m(?:p(?:osition(?:update|start|end)|lete)|mand(?:update)?)|n(?:t(?:rolselect|extmenu)|nect(?:ing|ed))|py)|a(?:(?:llschang|ch)ed|nplay(?:through)?|rdstatechange)|h(?:(?:arging(?:time)?ch)?ange|ecking)|(?:fstate|ell)change|u(?:echange|t)|l(?:ick|ose))|m(?:o(?:z(?:pointerlock(?:change|error)|(?:orientation|time)change|fullscreen(?:change|error)|network(?:down|up)load)|use(?:(?:lea|mo)ve|o(?:ver|ut)|enter|wheel|down|up)|ve(?:start|end)?)|essage|ark)|s(?:t(?:a(?:t(?:uschanged|echange)|lled|rt)|k(?:sessione|comma)nd|op)|e(?:ek(?:complete|ing|ed)|(?:lec(?:tstar)?)?t|n(?:ding|t))|u(?:ccess|spend|bmit)|peech(?:start|end)|ound(?:start|end)|croll|how)|b(?:e(?:for(?:e(?:(?:scriptexecu|activa)te|u(?:nload|pdate)|p(?:aste|rint)|c(?:opy|ut)|editfocus)|deactivate)|gin(?:Event)?)|oun(?:dary|ce)|l(?:ocked|ur)|roadcast|usy)|a(?:n(?:imation(?:iteration|start|end)|tennastatechange)|fter(?:(?:scriptexecu|upda)te|print)|udio(?:process|start|end)|d(?:apteradded|dtrack)|ctivate|lerting|bort)|DOM(?:Node(?:Inserted(?:IntoDocument)?|Removed(?:FromDocument)?)|(?:CharacterData|Subtree)Modified|A(?:ttrModified|ctivate)|Focus(?:Out|In)|MouseScroll)|r(?:e(?:s(?:u(?:m(?:ing|e)|lt)|ize|et)|adystatechange|pea(?:tEven)?t|movetrack|trieving|ceived)|ow(?:s(?:inserted|delete)|e(?:nter|xit))|atechange)|p(?:op(?:up(?:hid(?:den|ing)|show(?:ing|n))|state)|a(?:ge(?:hide|show)|(?:st|us)e|int)|ro(?:pertychange|gress)|lay(?:ing)?)|t(?:ouch(?:(?:lea|mo)ve|en(?:ter|d)|cancel|start)|ime(?:update|out)|ransitionend|ext)|u(?:s(?:erproximity|sdreceived)|p(?:gradeneeded|dateready)|n(?:derflow|load))|f(?:o(?:rm(?:change|input)|cus(?:out|in)?)|i(?:lterchange|nish)|ailed)|l(?:o(?:ad(?:e(?:d(?:meta)?data|nd)|start)?|secapture)|evelchange|y)|g(?:amepad(?:(?:dis)?connected|button(?:down|up)|axismove)|et)|e(?:n(?:d(?:Event|ed)?|abled|ter)|rror(?:update)?|mptied|xit)|i(?:cc(?:cardlockerror|infochange)|n(?:coming|valid|put))|o(?:(?:(?:ff|n)lin|bsolet)e|verflow(?:changed)?|pen)|SVG(?:(?:Unl|L)oad|Resize|Scroll|Abort|Error|Zoom)|h(?:e(?:adphoneschange|l[dp])|ashchange|olding)|v(?:o(?:lum|ic)e|ersion)change|w(?:a(?:it|rn)ing|heel)|key(?:press|down|up)|(?:AppComman|Loa)d|no(?:update|match)|Request|zoom))[\s\0]*=/.test(n) ? !1 : !0
    },
    HtmlEncode: function(n) {
        var t = document.createElement("div");
        return t.appendChild(document.createTextNode(n)),
        t.innerHTML
    },
    HtmlDecode: function(n) {
        var t = document.createElement("div");
        return t.innerHTML = n,
        t.innerText || t.textContent
    },
    NewGuid: function() {
        var n = Date.now();
        return typeof performance != "undefined" && typeof performance.now == "function" && (n += performance.now()),
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var i = (n + Math.random() * 16) % 16 | 0;
            return n = Math.floor(n / 16),
            (t === "x" ? i : i & 3 | 8).toString(16)
        })
    },
    EmptyGuid: function() {
        return "00000000-0000-0000-0000-000000000000"
    },
    sizeMBToBytes: function(n) {
        return n == 0 ? 0 : (n * 1048576).toFixed(0)
    },
    sizeBytesToMB: function(n) {
        return n == 0 ? 0 : parseFloat((n / 1048576).toFixed(2))
    },
    NowDateTime: function() {
        var n = new Date;
        return n.toString().toDateTime()
    },
    NowDateTimeSecond: function() {
        var n = new Date;
        return n.toString().toDateTimeSecond()
    },
    NowDateTimeCache: function() {
        var n = new Date;
        return n.toString().toDateTimeCache()
    },
    NowDate: function(n) {
        var t = new Date;
        return t.addDays(n),
        t.toString().toDate()
    },
    RedirectPost: function(n, t) {
        var i = "";
        $.each(t, function(n, t) {
            t = t.split('"').join('"');
            i += '<input type="hidden" name="' + n + '" value="' + t + '">'
        });
        $('<form action="' + n + '" method="POST">' + i + "<\/form>").appendTo($(document.body)).submit()
    },
    ScrollToTop: function(n) {
        $("html, body").animate({
            scrollTop: $(n).offset().top - 200
        }, "slow")
    }
};
$(document).ready(function() {
    $(document).ajaxSend(function(n, t, i) {
        // if (i.url.indexOf("api/TM_ApiMgr_App_CheckSsword") < 0) {
        //     var r = sessionStorage.getItem("apitoken")
        //       , f = sessionStorage.getItem("apitokentimeout")
        //       , e = new Date
        //       , u = "Co11ege0ne@cc0unt";
        //     r != BaseFunction.EmptyGuid() && r != null && r != "" ? e.toString().toDateTime() < f.toString().toDateTime() ? t.setRequestHeader("Authorization", "Basic " + btoa(u + ":" + r)) : BaseSecu.SetApiLogin(u, t) : BaseSecu.SetApiLogin(u, t)
        // }
    });
    $(document).on({
        ajaxError: function(n, t) {
            t.status == 401 && (sessionStorage.removeItem("apitoken"),
            sessionStorage.removeItem("apitokentimeout"))
        }
    })
});
BaseSecu = {
    AppLogin: function(n) {
        var t = null
          , i = {
            account: n,
            ssword: "Acc453#b6B7@234N"
        };
        return $.ajax({
            type: "GET",
            url: webURL + "/api/TM_ApiMgr_App_CheckSsword?" + $.param(i),
            contentType: "application/json",
            dataType: "json",
            async: !1,
            cache: !1,
            success: function(n) {
                n.ErrorMessage == "" && (t = n)
            }
        }),
        t
    },
    SetApiLogin: function(n, t) {
        var i = BaseSecu.AppLogin(n);
        i != null ? (sessionStorage.setItem("apitoken", i.Token),
        sessionStorage.setItem("apitokentimeout", i.TokenExpire),
        t.setRequestHeader("Authorization", "Basic " + btoa(n + ":" + i.Token))) : (sessionStorage.removeItem("apitoken"),
        sessionStorage.removeItem("apitokentimeout"))
    },
    ToLogin: function(n) {
        var t = {
            memNo: n
        };
        $.ajax({
            type: "GET",
            url: webURL + "/api/TM_MemberAuth_Member_GetOne?" + $.param(t),
            contentType: "application/json",
            dataType: "json",
            async: !1,
            cache: !1,
            success: function(n) {
                sessionStorage.setItem("memno", n.MemNo);
                localStorage.setItem("memno", n.MemNo);
                sessionStorage.setItem("memaccount", n.Account);
                sessionStorage.setItem("memname", n.Name);
                sessionStorage.setItem("memnickname", n.NickName);
                sessionStorage.setItem("kindcode", n.KindCode);
                sessionStorage.setItem("lsmsid", n.OtherToken);
                sessionStorage.removeItem(keyTraineeMemNo);
                sessionStorage.removeItem(keyTraineeAccount);
                sessionStorage.removeItem(keyTraineeName);
                var i = ""
                  , t = []
                  , r = !1
                  , u = {
                    memNo: n.MemNo
                };
                $.ajax({
                    type: "GET",
                    url: webURL + "/api/TM_MemberAuth_AuthRoleMem_GetMemGroupFunList?" + $.param(u),
                    contentType: "application/json",
                    dataType: "json",
                    async: !1,
                    cache: !1,
                    success: function(n) {
                        if (n.ErrorMessage != "")
                            alert(n.ErrorMessage);
                        else {
                            if (n.ItemList.length > 0) {
                                r = !0;
                                sessionStorage.setItem("adminfunlist", JSON.stringify(n.ItemList));
                                var o = ""
                                  , u = ""
                                  , f = ""
                                  , e = ""
                                  , s = ""
                                  , h = ""
                                  , c = ""
                                  , l = "";
                                $.each(n.ItemList, function(n, i) {
                                    var r = i.GrfNo.toUpperCase()
                                      , a = i.FunNo.toUpperCase();
                                    (i.IsMax || i.AuthCode != 1) && (i.GrfTypeCode == typeCodeSys || i.GrfTypeCode == typeCodeSysHasFront) ? r == grfNoAuth ? (o += '             <li class="side-nav-item">                 <a href="AuthRoleList" class="side-nav-link">                     <i class="dripicons-user-id"><\/i>                     <span> 權限設定 <\/span>                 <\/a>             <\/li>',
                                    t.push("權限設定")) : r == grfNoMember ? (o += '             <li class="side-nav-item">                 <a href="MemberList" class="side-nav-link">                     <i class="dripicons-user"><\/i>                     <span> 帳號管理 <\/span>                 <\/a>             <\/li>                         <li class="side-nav-item">                 <a href="MemberTagList" class="side-nav-link">                     <i class="dripicons-tags"><\/i>                     <span> 標籤管理 <\/span>                 <\/a>             <\/li>                        <li class="side-nav-item">                 <a href="MemberTraineeList" class="side-nav-link">                     <i class="mdi mdi-account-multiple-outline"><\/i>                     <span> 會員模擬畫面 <\/span>                 <\/a>             <\/li>',
                                    t.push("帳號管理")) : r == grfNoMenu ? (u += '             <li class="side-nav-item">                 <a href="MenuList" class="side-nav-link">                     <i class="dripicons-align-left"><\/i>                     <span> 前台選單維護 <\/span>                 <\/a>             <\/li>',
                                    t.push("前台選單維護")) : r == grfNoCarousel ? (u += '             <li class="side-nav-item">                 <a href="CarouselList" class="side-nav-link">                     <i class="dripicons-duplicate"><\/i>                     <span> 首頁輪播管理 <\/span>                 <\/a>             <\/li>',
                                    t.push("首頁輪播管理")) : r == grfNoMeta ? (u += '             <li class="side-nav-item">                 <a href="MetaList" class="side-nav-link">                     <i class="dripicons-duplicate"><\/i>                     <span> Meta管理 <\/span>                 <\/a>             <\/li>',
                                    t.push("Meta管理")) : r == grfNoHotLesson ? (u += '             <li class="side-nav-item">                 <a href="HotLessonList" class="side-nav-link">                     <i class="dripicons-star"><\/i>                     <span> 首頁主打課程管理 <\/span>                 <\/a>             <\/li>',
                                    t.push("首頁主打課程管理")) : r == grfSelfLearnLesson ? (u += '             <li class="side-nav-item">                 <a href="SelfLearnList" class="side-nav-link">                     <i class="dripicons-star"><\/i>                     <span> 首頁雲端自學管理 <\/span>                 <\/a>             <\/li>',
                                    t.push("首頁雲端自學管理")) : r == grfNoInfoGrf ? (f += '                     <li>                         <a href="InfoGrfList">文章類型維護<\/a>                     <\/li>                     <li>                         <a href="ViewGroupList">限閱群組維護<\/a>                     <\/li>',
                                    t.push("文章類型維護"),
                                    t.push("限閱群組維護")) : r == grfNoForumSubject ? (i.AuthCode == 4 && (c += '                     <li class="side-nav-item">                         <a href="MgdList?grfno=' + grfNoForumSubject + "&typecode=" + forumSubjectType + '&mainfunname=社群互動&subfunname=x">類別維護<\/a>                     <\/li>                     <li class="side-nav-item">                         <a href="MgdList?grfno=' + grfNoForumSubject + "&typecode=" + forumSubjectStatus + '&typestring=狀態&mainfunname=社群互動&subfunname=x">狀態維護<\/a>                      <\/li>'),
                                    c += '                     <li class="side-nav-item">                         <a href="ForumSubjectList">聯絡我們管理<\/a>                     <\/li>',
                                    t.push("聯絡我們管理")) : r == grfNoCourse ? (l += '             <li class="side-nav-item">                 <a href="CourseList" class="side-nav-link">                     <i class="dripicons-to-do"><\/i>                     <span> 課程設定 <\/span>                 <\/a>             <\/li>',
                                    t.push("課程設定")) : r == grfNoGroupCourse ? (l += '             <li class="side-nav-item">                 <a href="GroupCourseList" class="side-nav-link">                     <i class="dripicons-view-apps"><\/i>                     <span> 系列學程維護 <\/span>                 <\/a>             <\/li>',
                                    t.push("系列學程維護")) : r == grfNoKeyword ? (e += '             <li class="side-nav-item">                 <a href="KeywordList" class="side-nav-link">                     <i class="dripicons-tags"><\/i>                     <span> 關鍵字維護 <\/span>                 <\/a>             <\/li>',
                                    t.push("關鍵字維護")) : r == grfNoViewLog ? (s += '             <li class="side-nav-item">                 <a href="ViewLogSummaryList" class="side-nav-link">                     <i class="mdi mdi-mouse"><\/i>                     <span> 點閱率維護 <\/span>                 <\/a>             <\/li>',
                                    t.push("點閱率維護")) : r == grfNoGallery && (h += '             <li class="side-nav-item">                 <a href="GalleryList" class="side-nav-link">                     <i class="mdi mdi-folder-image"><\/i>                     <span> 圖庫管理 <\/span>                 <\/a>             <\/li>',
                                    t.push("圖庫管理")) : i.GrfTypeCode == typeCodeInfo && (i.IsMax || i.AuthCode != 1) && a == funNoInfo && (f += '                     <li class="side-nav-item">                         <a href="javascript: void(0);" aria-expanded="false">                             ' + i.GrfName + (i.ViewTypeCode != 0 ? "<span class='text-danger ml-2'><i class='mdi mdi-eye-plus'><\/i><\/span>" : "") + '                             <span class="menu-arrow"><\/span>                         <\/a>                         <ul class="side-nav-third-level" aria-expanded="false">                             <li>                                 <a href="MgdList?grfno=' + r + "&typecode=" + typeCodeInfoMgd + '">' + i.GrfName + '類別維護<\/a>                             <\/li >                             <li>                                 <a href="InfoList?grfno=' + r + '">' + i.GrfName + "維護<\/a>                             <\/li>                         <\/ul>                     <\/li>",
                                    t.push(i.GrfName + "類別維護"),
                                    t.push(i.GrfName + "維護"))
                                });
                                o != "" && (i += '             <li class="side-nav-title side-nav-item">帳號權限<\/li>' + o,
                                t.push("帳號權限"));
                                u != "" && (i += '             <li class="side-nav-title side-nav-item">網站設定<\/li>' + u,
                                t.push("網站設定"));
                                f != "" ? (i += '             <li class="side-nav-title side-nav-item">內容管理<\/li>             <li class="side-nav-item">                 <a href="javascript: void(0);" class="side-nav-link">                     <i class="dripicons-blog"><\/i>                     <span> 文章管理 <\/span>                     <span class="menu-arrow"><\/span>                 <\/a>                 <ul class="side-nav-second-level" aria-expanded="false">',
                                i += f,
                                i += "                 <\/ul>",
                                e != "" && (i += e),
                                s != "" && (i += s),
                                h != "" && (i += h),
                                i += "             <\/li>",
                                t.push("內容管理"),
                                t.push("文章管理")) : f == "" && (e != "" || s != "" || h != "") && (i += '             <li class="side-nav-title side-nav-item">內容管理<\/li>' + e,
                                t.push("內容管理"));
                                c != "" && (i += '             <li class="side-nav-title side-nav-item">社群互動<\/li>             <li class="side-nav-item">                 <a href="javascript: void(0);" class="side-nav-link">                     <i class="dripicons-inbox"><\/i>                     <span> 聯絡我們管理 <\/span>                     <span class="menu-arrow"><\/span>                 <\/a>                 <ul class="side-nav-second-level" aria-expanded="false">',
                                i += c,
                                i += "                 <\/ul>             <\/li >",
                                t.push("社群互動"),
                                t.push("聯絡我們管理"));
                                l != "" && (i += '             <li class="side-nav-title side-nav-item">課程管理<\/li>' + l,
                                t.push("課程管理"));
                                sessionStorage.setItem("adminmenulist", i);
                                sessionStorage.setItem("adminMenuAry", t)
                            }
                            sessionStorage.setItem("isadmin", r)
                        }
                    }
                })
            }
        })
    },
    ToLogout: function() {
        sessionStorage.removeItem("memno");
        localStorage.removeItem("memno");
        sessionStorage.removeItem("memaccount");
        sessionStorage.removeItem("memname");
        sessionStorage.removeItem("memnickname");
        sessionStorage.removeItem("adminfunlist");
        sessionStorage.removeItem("adminmenulist");
        sessionStorage.removeItem("adminMenuAry");
        sessionStorage.removeItem("isadmin");
        sessionStorage.removeItem("lsmsid");
        sessionStorage.removeItem("apitoken");
        sessionStorage.removeItem("apitokentimeout");
        sessionStorage.removeItem(keyTraineeMemNo);
        sessionStorage.removeItem(keyTraineeAccount);
        sessionStorage.removeItem(keyTraineeName)
    }
};
BasePage = {
    BindPager: function(n, t, i, r, u, f, e, o, s) {
        var l, c, a, h;
        if (f > 1) {
            if (l = "<option value='5'" + (e == 5 ? " selected='selected'" : "") + ">5<\/option>",
            l += "<option value='10'" + (e == 10 ? " selected='selected'" : "") + ">10<\/option>",
            l += "<option value='15'" + (e == 15 ? " selected='selected'" : "") + ">15<\/option>",
            l += "<option value='20'" + (e == 20 ? " selected='selected'" : "") + ">20<\/option>",
            l += "<option value='25'" + (e == 25 ? " selected='selected'" : "") + ">25<\/option>",
            l += "<option value='30'" + (e == 30 ? " selected='selected'" : "") + ">30<\/option>",
            l += "<option value='50'" + (e == 50 ? " selected='selected'" : "") + ">50<\/option>",
            l += "<option value='100'" + (e == 100 ? " selected='selected'" : "") + ">100<\/option>",
            $("#divPagerTotle" + n).html("每頁顯示<div class='form-group'>                     <select id='ddlPageSize' class='custom-select ml-2 mr-2' title='選擇每頁顯示幾筆'>                         " + l + "                     <\/select>                 <\/div>筆，目前第 " + t + " 到 " + i + " 筆結果，共 " + r + " 筆"),
            $("#ulPager" + n).empty(),
            c = '<li class="page-item' + (u == 1 ? " disabled" : "") + '">                                 <a class="page-link" href="#" aria-label="First" title="回到第一頁按鈕">                                     <span class="d-none">回到第一頁按鈕<\/span>                                     <i class="mdi mdi-chevron-double-left"><\/i>                                 <\/a>                             <\/li>                             <li class="page-item' + (u == 1 ? " disabled" : "") + '">                                 <a class="page-link" href="#" aria-label="Previous" title="上一頁按鈕">                                      <span class="d-none">上一頁按鈕<\/span>                                     <i class="mdi mdi-chevron-left"><\/i>                                 <\/a>                             <\/li>',
            a = 5,
            f <= a + 2)
                for (h = 1; h <= f; h++)
                    c += '                         <li class="page-item' + (u == h ? " active" : "") + '"><a class="page-link" href="#" title="第' + h + '頁">' + h + "<\/a><\/li>";
            else if (u < a) {
                for (h = 1; h <= a; h++)
                    c += '                         <li class="page-item' + (u == h ? " active" : "") + '"><a class="page-link" href="#" title="第' + h + '頁">' + h + "<\/a><\/li>";
                c += "                         <li>…<\/li>";
                c += '                         <li class="page-item' + (u == f ? " active" : "") + '"><a class="page-link" href="#" title="第' + f + '頁">' + f + "<\/a><\/li>"
            } else if (u >= a && u <= f - a + 1) {
                for (c += '                         <li class="page-item' + (u == 1 ? " active" : "") + '"><a class="page-link" href="#" title="第1頁">1<\/a><\/li>',
                c += "                         <li>…<\/li>",
                h = u - 1; h <= u + 1; h++)
                    c += '                         <li class="page-item' + (u == h ? " active" : "") + '"><a class="page-link" href="#" title="第' + h + '頁">' + h + "<\/a><\/li>";
                c += "                         <li>…<\/li>";
                c += '                         <li class="page-item' + (u == f ? " active" : "") + '"><a class="page-link" href="#" title="第' + f + '頁">' + f + "<\/a><\/li>"
            } else
                for (c += '                         <li class="page-item' + (u == 1 ? " active" : "") + '"><a class="page-link" href="#" title="第1頁">1<\/a><\/li>',
                c += "                         <li>…<\/li>",
                h = f - a + 1; h <= f; h++)
                    c += '                         <li class="page-item' + (u == h ? " active" : "") + '"><a class="page-link" href="#" title="第' + h + '頁">' + h + "<\/a><\/li>";
            c += '                         <li class="page-item' + (u == f ? " disabled" : "") + '">                             <a class="page-link" href="#" aria-label="Next" title="下一頁按鈕">                                 <span class="d-none">下一頁按鈕<\/span>                                 <i class="mdi mdi-chevron-right"><\/i>                             <\/a>                         <\/li>                         <li class="page-item' + (u == f ? " disabled" : "") + '">                             <a class="page-link" href="#" aria-label="Last" title="到最後一頁按鈕">                                 <span class="d-none">到最後一頁按鈕<\/span>                                 <i class="mdi mdi-chevron-double-right"><\/i>                             <\/a>                         <\/li>';
            $("#ulPager" + n).append(c);
            $("#ddlPageSize").change(function() {
                sessionStorage.setItem(o, $(this).val());
                s("", 1)
            });
            $(".page-link").click(function() {
                var n = 0;
                n = $(this).attr("aria-label") == "Next" ? u + 1 : $(this).attr("aria-label") == "Previous" ? u - 1 : $(this).attr("aria-label") == "First" ? 1 : $(this).attr("aria-label") == "Last" ? f : $(this).html();
                s("", n)
            });
            $("#navPager" + n).show()
        } else
            $("#navPager" + n).hide()
    },
    BindPager2: function(n, t, i, r, u, f, e, o, s) {
        var b, w, k, a, l, y, h;
        let c, v = location.pathname;
        b = "/CollegeOne";
        v.toLowerCase().indexOf(b.toLowerCase()) == 0 && (v = v.replace("/CollegeOne", ""),
        v = v.replace("/collegeone", ""));
        let p = location.search;
        if (w = "page",
        p != "")
            if (p.toLowerCase().indexOf(w.toLowerCase()) != -1) {
                const n = new URLSearchParams(window.location.search);
                pageParms = n.get("page");
                pageParms != "" && (k = p.split("page="),
                c = webURL + v + k[0] + "page=")
            } else
                c = webURL + v + p + "&page=";
        else
            p.toLowerCase().indexOf(w.toLowerCase()) != 1 && (c = webURL + v + "?page=");
        if (f >= 1) {
            if (a = "<option value='5'" + (e == 5 ? " selected='selected'" : "") + ">5<\/option>",
            a += "<option value='10'" + (e == 10 ? " selected='selected'" : "") + ">10<\/option>",
            a += "<option value='15'" + (e == 15 ? " selected='selected'" : "") + ">15<\/option>",
            a += "<option value='20'" + (e == 20 ? " selected='selected'" : "") + ">20<\/option>",
            a += "<option value='25'" + (e == 25 ? " selected='selected'" : "") + ">25<\/option>",
            a += "<option value='30'" + (e == 30 ? " selected='selected'" : "") + ">30<\/option>",
            a += "<option value='50'" + (e == 50 ? " selected='selected'" : "") + ">50<\/option>",
            a += "<option value='100'" + (e == 100 ? " selected='selected'" : "") + ">100<\/option>",
            $("#divPagerTotle" + n).html("每頁顯示<div class='form-group'>                     <select id='ddlPageSize' class='custom-select ml-2 mr-2' title='選擇每頁顯示幾筆'>                         " + a + "                     <\/select>                 <\/div>筆，目前第 " + t + " 到 " + i + " 筆結果，共 " + r + " 筆"),
            $("#ulPager" + n).empty(),
            l = '<li class="page-item' + (u == 1 ? " disabled" : "") + '">                                 <a class="page-link" href="' + c + 1 + '" aria-label="First" title="回到第一頁按鈕" rel="prev">                                     <span class="d-none">回到第一頁按鈕<\/span>                                     <i class="mdi mdi-chevron-double-left"><\/i>                                 <\/a>                             <\/li>                             <li class="page-item' + (u == 1 ? " disabled" : "") + '">                                 <a class="page-link" href="' + c + (u - 1) + '" aria-label="Previous" title="上一頁按鈕" rel="prev">                                      <span class="d-none">上一頁按鈕<\/span>                                     <i class="mdi mdi-chevron-left"><\/i>                                 <\/a>                             <\/li>',
            y = 5,
            f <= y + 2)
                for (h = 1; h <= f; h++)
                    l += '                         <li class="page-item' + (u == h ? " active" : "") + '"><a class="page-link" href="' + c + h + '" title="第' + h + '頁" rel="' + (u > h ? "prev" : "next") + '">' + h + "<\/a><\/li>";
            else if (u < y) {
                for (h = 1; h <= y; h++)
                    l += '                         <li class="page-item' + (u == h ? " active" : "") + '"><a class="page-link" href="' + c + h + '" title="第' + h + '頁" rel="' + (u > h ? "prev" : "next") + '">' + h + "<\/a><\/li>";
                l += "                         <li>…<\/li>";
                l += '                         <li class="page-item' + (u == f ? " active" : "") + '"><a class="page-link" href="' + c + f + '" title="第' + f + '頁" rel="' + (u > h ? "prev" : "next") + '">' + f + "<\/a><\/li>"
            } else if (u >= y && u <= f - y + 1) {
                for (l += '                         <li class="page-item' + (u == 1 ? " active" : "") + '"><a class="page-link" href="' + c + 1 + '" title="第1頁" rel="' + (u > h ? "prev" : "next") + '">1<\/a><\/li>',
                l += "                         <li>…<\/li>",
                h = u - 1; h <= u + 1; h++)
                    l += '                         <li class="page-item' + (u == h ? " active" : "") + '"><a class="page-link" href="' + c + h + '" title="第' + h + '頁" rel="' + (u > h ? "prev" : "next") + '">' + h + "<\/a><\/li>";
                l += "                         <li>…<\/li>";
                l += '                         <li class="page-item' + (u == f ? " active" : "") + '"><a class="page-link" href="' + c + f + '" title="第' + f + '頁" rel="' + (u > h ? "prev" : "next") + '">' + f + "<\/a><\/li>"
            } else
                for (l += '                         <li class="page-item' + (u == 1 ? " active" : "") + '"><a class="page-link" href="' + c + 1 + '" title="第1頁" rel="' + (u > h ? "prev" : "next") + '">1<\/a><\/li>',
                l += "                         <li>…<\/li>",
                h = f - y + 1; h <= f; h++)
                    l += '                         <li class="page-item' + (u == h ? " active" : "") + '"><a class="page-link" href="' + c + h + '" title="第' + h + '頁" rel="' + (u > h ? "prev" : "next") + '">' + h + "<\/a><\/li>";
            l += '                         <li class="page-item' + (u == f ? " disabled" : "") + '">                             <a class="page-link" href="' + c + (u + 1) + '" aria-label="Next" title="下一頁按鈕" rel="next">                                 <span class="d-none">下一頁按鈕<\/span>                                 <i class="mdi mdi-chevron-right"><\/i>                             <\/a>                         <\/li>                         <li class="page-item' + (u == f ? " disabled" : "") + '">                             <a class="page-link" href="' + c + f + '" aria-label="Last" title="到最後一頁按鈕" rel="next">                                 <span class="d-none">到最後一頁按鈕<\/span>                                 <i class="mdi mdi-chevron-double-right"><\/i>                             <\/a>                         <\/li>';
            $("#ulPager" + n).append(l);
            $("#ddlPageSize").change(function() {
                sessionStorage.setItem(o, $(this).val());
                s("", 1)
            });
            $(".page-link").click(function() {
                var n = 0;
                n = $(this).attr("aria-label") == "Next" ? u + 1 : $(this).attr("aria-label") == "Previous" ? u - 1 : $(this).attr("aria-label") == "First" ? 1 : $(this).attr("aria-label") == "Last" ? f : $(this).html();
                s("", n)
            });
            $("#navPager" + n).show()
        } else
            $("#navPager" + n).hide()
    },
    GenSortField: function(n, t, i, r) {
        return "<th sort='" + n + "' class='sort " + (i == "" + n + "" ? r == "DESC" ? "rowdesc" : "rowasc" : "rowsort") + "'>" + t + "<\/th>"
    },
    SetSortFieldClick: function(n, t, i, r) {
        $(".sort").click(function() {
            i == $(this).attr("sort") ? r == "ASC" ? sessionStorage.setItem(n + "_sortDirection", "DESC") : sessionStorage.setItem(n + "_sortDirection", "ASC") : (sessionStorage.setItem(n + "_sortFields", $(this).attr("sort")),
            sessionStorage.setItem(n + "_sortDirection", "ASC"));
            t(null, 1)
        })
    },
    HasFunAuth: function(n) {
        var t = 1
          , i = JSON.parse(sessionStorage.getItem("adminfunlist"));
        return i != null && i.length > 0 && $.each(i, function(i, r) {
            if (r.GrfName == n)
                return t = r.IsMax ? 4 : r.AuthCode
        }),
        t
    },
    ResponseAttachment: function(n, t, i, r) {
        $.ajax({
            type: "GET",
            url: i + "?" + $.param(t),
            xhrFields: {
                responseType: "blob"
            },
            success: function(n) {
                var t = document.createElement("a")
                  , i = window.URL.createObjectURL(n);
                t.href = i;
                t.download = r;
                document.body.append(t);
                t.click();
                t.remove();
                window.URL.revokeObjectURL(i)
            },
            beforeSend: function() {
                $(n).buttonLoader("start")
            },
            complete: function() {
                $(n).buttonLoader("stop")
            }
        })
    },
    ContentAccessibility: function() {
        $("font").replaceWith(function() {
            var n = $(this);
            return $("<span/>").html(n.html()).css("color", n.attr("color"))
        })
    }
};
$(document).ready(function() {
    sessionStorage.getItem("memno") == null && localStorage.getItem("memno") != null ? BaseSecu.ToLogin(localStorage.getItem("memno")) : sessionStorage.getItem("memno") != null && localStorage.getItem("memno") == null && BaseSecu.ToLogout()
});
var Attachment = {
    Save: function(n, t, i, r, u) {
        var h = {
            ErrorMessage: ""
        }, s = !1, e = new FormData, o, c, l;
        if (n != null && n != "") {
            if (o = $("#" + n).get(0).files,
            o.length > 0)
                for (f = 0; f < o.length; f++)
                    e.append("uploadedFiles", o[f]),
                    s = !0
        } else
            t != null && (e.append("uploadedFiles", t),
            s = !0);
        return s && (c = sessionStorage.getItem("memno"),
        l = sessionStorage.getItem("memname"),
        e.append("bMemNo", c),
        e.append("bMemName", l),
        e.append("typeCode", i),
        e.append("mapDataNo", r),
        e.append("mapDataTitle", u),
        $.ajax({
            type: "POST",
            url: "../api/TM_AttFile_Attachment_Insert",
            data: e,
            contentType: !1,
            processData: !1,
            async: !1,
            cache: !1,
            success: function(n) {
                h = n
            }
        })),
        h
    },
    BindOneImageURL: function(n, t, i, r) {
        var u = {
            mapDataNo: n,
            typeCode: t,
            searchKeyword: ""
        };
        $.ajax({
            type: "GET",
            url: "../api/TM_AttFile_Attachment_GetList?" + $.param(u),
            contentType: "application/json",
            dataType: "json",
            async: !0,
            cache: !1,
            success: function(n) {
                n.ErrorMessage != "" ? alert(n.ErrorMessage) : n.ItemList.length > 0 ? ($.each(n.ItemList, function(n, t) {
                    $("#" + i).attr("src", t.DownloadURL)
                }),
                $("#" + i).show(),
                $("#" + r).hide()) : ($("#" + r).show(),
                $("#" + i).hide(),
                $("#LEARNING_MAP").hide(),
                $(".menu3_btn_primary").hide())
            }
        })
    },
    BindOneMp4URL: function(n, t, i, r, u) {
        $("#" + u).empty();
        var f = {
            mapDataNo: n,
            typeCode: t,
            searchKeyword: ""
        };
        $.ajax({
            type: "GET",
            url: "../api/TM_AttFile_Attachment_GetList?" + $.param(f),
            contentType: "application/json",
            dataType: "json",
            async: !0,
            cache: !1,
            success: function(n) {
                if (n.ErrorMessage != "")
                    alert(n.ErrorMessage);
                else if (n.ItemList.length > 0) {
                    var t = "";
                    $.each(n.ItemList, function(n, i) {
                        t += '<source src="' + i.DownloadURL + '" />'
                    });
                    $("#" + u).append(t);
                    $("#" + i).show();
                    $("#" + r).hide()
                } else
                    $("#" + r).show(),
                    $("#" + i).hide()
            }
        })
    },
    SetMagnificPopup: function(n) {
        $("#" + n + " img").addClass("img-thumbnail");
        $("#" + n + " img").attr("alt", "lightbox-image");
        $("#" + n + " img").removeAttr("style");
        $("#" + n + " img").wrap(function() {
            return "<a class='image-popup-no-margins' href='" + $(this).attr("src") + "'><\/a>"
        });
        $("#" + n + " .image-popup-no-margins").magnificPopup({
            type: "image",
            closeOnContentClick: !0,
            closeBtnInside: !1,
            fixedContentPos: !0,
            mainClass: "mfp-no-margins mfp-with-zoom",
            image: {
                verticalFit: !0
            },
            zoom: {
                enabled: !0,
                duration: 300
            }
        })
    },
    BindList: function(n, t, i, r, u, f, e) {
        $("#" + r).empty();
        var o = {
            mapDataNo: t,
            typeCode: i,
            searchKeyword: ""
        };
        $.ajax({
            type: "GET",
            url: n + "/api/TM_AttFile_Attachment_GetList?" + $.param(o),
            contentType: "application/json",
            dataType: "json",
            async: !0,
            cache: !1,
            success: function(o) {
                if (o.ItemList.length > 0) {
                    var s = "";
                    $.each(o.ItemList, function(e, o) {
                        s += "<div class='card mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete'>                                         <div class='p-2'>                                             <div class='row align-items-center'>                                                 <div class='col-auto ml-2'>                                                     <img data-dz-thumbnail='' class='avatar-now-sm rounded bg-light' alt='" + o.OrgFileName + "' src='" + Attachment.GetFileIcon(n, o.Ext, o.DownloadURL) + "' />                                                 <\/div>                                                 <div class='col pl-0 ml-2 mr-2'>                                                     <a target='_blank' href='" + o.DownloadURL + "' class='text-dark font-weight-bold' data-dz-name=''>" + o.OrgFileName + "<\/a>                                                     <p class='my-0' data-dz-size=''>" + o.SizeString + "<\/p>                                                 <\/div>";
                        u != "" && (s += "                                                 <div class='col-auto'>                                                     <a href='javascript: Attachment.Delete(\"" + o.AttNo + '", "' + t + '", ' + i + ', "' + r + '", "' + u + '", ' + f + ");' class='btn btn-link btn-lg text-muted' data-dz-remove=''>                                                         <i class='dripicons-cross'><\/i>                                                     <\/a>                                                 <\/div>");
                        s += "                                             <\/div>                                         <\/div>                                     <\/div>"
                    });
                    $("#" + r).append(s);
                    $("#" + r).show();
                    Attachment.SetMagnificPopup(r);
                    u != "" && (o.ItemList.length >= f && f != 0 ? $("#" + u).hide() : $("#" + u).show())
                } else
                    $("#" + r).hide(),
                    u != "" && u != null && $("#" + u).show(),
                    e != "" && e != null && $("#" + e).show()
            }
        })
    },
    GetFileIcon: function(n, t, i) {
        var r = "";
        switch (t) {
        case "jpg":
        case "png":
            r = i;
            break;
        case "doc":
        case "docx":
            r = n + "/Content/images/word.png";
            break;
        case "ppt":
        case "pptx":
            r = n + "/Content/images/ppt.png";
            break;
        case "xls":
        case "xlsx":
            r = n + "/Content/images/excel.png";
            break;
        case "pdf":
            r = n + "/Content/images/pdf.png";
            break;
        case "mp4":
            r = n + "/Content/images/mp4.png";
            break;
        case "wav":
            r = n + "/Content/images/wav.png";
            break;
        case "mp3":
            r = n + "/Content/images/mp3.png";
            break;
        default:
            r = n + "/Content/images/file.png"
        }
        return r
    },
    Delete: function(n, t, i, r, u, f) {
        if (confirm("確定刪除?")) {
            var e = {
                attNo: n
            };
            $.ajax({
                type: "GET",
                url: "../api/TM_AttFile_Attachment_Delete?" + $.param(e),
                contentType: "application/json",
                dataType: "json",
                async: !1,
                cache: !1,
                success: function(n) {
                    n.ErrorMessage == "" ? (Attachment.BindList(webURL, t, i, r, u, f),
                    alert("已刪除。")) : alert(n.ErrorMessage)
                }
            })
        }
    }
}
  , BaseMgdNo = {
    BindDDL: function(n, t, i, r, u, f, e, o) {
        $("#" + r).empty();
        var s = {
            grfNo: t,
            typeCode: i,
            langCode: n
        };
        $.ajax({
            type: "GET",
            url: "../api/TM_MessageCode_MessageCode_GetList?" + $.param(s),
            contentType: "application/json",
            dataType: "json",
            async: f,
            cache: !1,
            success: function(n) {
                if (n.ErrorMessage != "")
                    alert(n.ErrorMessage);
                else if (n.ItemList.length > 0) {
                    var t = "";
                    e && (t += "<option value='' selected>請選擇...<\/option>");
                    o != "" && o != null && (t += " <option value='" + BaseFunction.EmptyGuid() + "'>" + o + "<\/option>");
                    $.each(n.ItemList, function(n, i) {
                        t += "<option value='" + i.MgdNo + "'" + (!e && n == 0 ? " selected" : "") + ">" + i.Title + "<\/option>"
                    });
                    $("#" + r).append(t);
                    $("#" + u).show()
                } else
                    $("#" + u).hide()
            }
        })
    }
}
  , BaseSorting = {
    UpdateOrder: function(n, t, i) {
        $.ajax({
            type: "POST",
            url: "../api/" + t,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(n),
            async: i,
            cache: !1,
            success: function(n) {
                if (n.ErrorMessage != "") {
                    alert(n.ErrorMessage);
                    return
                }
            }
        })
    }
}
  , BaseViewLog = {
    Insert: function(n, t, i, r, u, f, e, o, s) {
        var h = sessionStorage.getItem("memno")
          , c = sessionStorage.getItem("memname")
          , l = {
            BMemNo: h,
            BMemName: c,
            MapDataNo: t,
            MapDataTitle: i,
            MapTypeMgdNo: r,
            MapTypeMgdTitle: u,
            GrfNo: f,
            GrfName: e,
            LangCode: o,
            Equip: equip,
            Os: os,
            Browser: browser,
            Ip: ip
        };
        $.ajax({
            type: "POST",
            url: s + "/api/TM_Social_ViewLog_Insert",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(l),
            async: !0,
            cache: !1,
            success: function(i) {
                i.ErrorMessage == "" && n(t, i.ViewCount, i.ViewMemCount)
            }
        })
    }
}
  , BaseValidToken = {
    SetValidTokenToOut: function(n, t, i, r, u) {
        var f = {
            account: n
        };
        $.ajax({
            type: "GET",
            url: "../api/TM_ApiMgr_App_GetOneByAccount?" + $.param(f),
            contentType: "application/json",
            dataType: "json",
            async: !1,
            cache: !1,
            success: function(f) {
                if (f.ErrorMessage != "")
                    alert(f.ErrorMessage);
                else if (f.AppNo == "")
                    alert("應用程式代碼錯誤。");
                else {
                    var e = f.WebURL + t
                      , o = {
                        BMemNo: i,
                        BMemName: r,
                        Content: u,
                        Url: e
                    };
                    $.ajax({
                        type: "POST",
                        url: "../api/TM_ApiMgr_ValidToken_Insert",
                        contentType: "application/json",
                        dataType: "json",
                        data: JSON.stringify(o),
                        async: !1,
                        cache: !1,
                        success: function(t) {
                            t.ErrorMessage != "" ? alert(t.ErrorMessage) : n == "Super8" ? (BaseSecu.ToLogin(i),
                            window.location = e) : window.location = e + t.VatNo
                        }
                    })
                }
            }
        })
    },
    SetSignTokenToOut: function(n, t) {
        var i = n
          , r = {
            ValidTokenTimeout: 3600,
            BMemNo: t,
            Content: t,
            Url: i
        };
        $.ajax({
            type: "POST",
            url: "../api/TM_ApiMgr_ValidToken_Insert",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(r),
            async: !1,
            cache: !1,
            success: function(n) {
                n.ErrorMessage != "" ? alert(n.ErrorMessage) : window.location = i + "&token=" + n.VatNo
            }
        })
    }
}
  , BaseViewGroup = {
    CheckHasPower: function(n, t, i) {
        var r = !1
          , u = {
            memNo: n,
            mapNo1: t,
            mapNo2: i
        };
        return $.ajax({
            type: "GET",
            url: webURL + "/api/TM_CMS_ViewGroupMem_MapHasPower?" + $.param(u),
            contentType: "application/json",
            dataType: "json",
            async: !1,
            cache: !1,
            success: function(n) {
                if (n.ErrorMessage != "") {
                    alert(n.ErrorMessage);
                    return
                }
                return r = n.HasPower
            }
        }),
        r
    }
}
  , Info = {
    UpdateViewCount: function(n, t, i) {
        var r = {
            infNo: n,
            viewCount: t,
            viewMemCount: i
        };
        $.ajax({
            type: "GET",
            url: "../api/TM_CMS_Info_UpdateView?" + $.param(r),
            contentType: "application/json",
            dataType: "json",
            async: !0,
            cache: !1,
            success: function(n) {
                n.ErrorMessage != "" && alert(n.ErrorMessage)
            }
        })
    }
}
