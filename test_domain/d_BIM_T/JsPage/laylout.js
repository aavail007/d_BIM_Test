////002
$(document).ready(function () {
    Home_Layout.BindUI();
    Home_Layout.BindEvent();
    Home_Layout.BindData();
 
    //未完成功能隱藏
    $("noscript").text('');//隱藏無障礙noscript文字
    if ($(window).width() > 1367) {
        //連結到課程資料
        $("li#alesson a").click(function () {
            window.location = $(this).attr("href");
        });
        //連結到MENU資料
        $("ul#divLevel1 li").click(function () {
            if ($(this).data("href") !='') { 
                window.location = $(this).data("href");
            }
        });

    }
});
var langCode;
var backURL = window.location.href;
var CaptchaId = BaseFunction.NewGuid();
var Home_Layout = {
    BindUI: function () {
        $("#aLogoComeBackHome").attr("href", webURL + "/Home/Default");
        $("#aJoin").attr("href", webURL + "/XFile/ConditionsM");
        $("#aCloudClass").attr("href","https://collegeplus.itri.org.tw/?_gl=1*62hcq3*_ga*MTA3MDQ3MDg0OS4xNjI4NDMyNTY2*_ga_DZHFNKGFQQ*MTY2OTg3MzA5MC43MjYuMS4xNjY5ODczNTg3LjU5LjAuMA..");

        //載入登入狀態
        var memNo = sessionStorage.getItem("memno");
        //var memAccount = sessionStorage.getItem("memaccount");
        var memNickName = sessionStorage.getItem("memnickname");
        var memName = sessionStorage.getItem("memname");
        if (memNo != '' && memNo != null) {
            $("#aLogin").hide();
            $("#aJoin").hide();
            $("#spanLangCode").hide();
            $("#add-mem").addClass('add-mem');
            $("#liLogged").show();

            $("#spanMemNickname").text(memNickName == "" ? memName : memNickName);;
        } else {
            $("#aLogin").show();
            $("#liLogged").hide();
        }
        //載入的時候給Captcha
        var d = new Date();
        $("#imgCheck").attr("src", webURL + "/api/TM_WebUI_Captcha_Get?id=" + CaptchaId + "&" + d.getTime());
        $("#imgCheck2").attr("src", webURL + "/api/TM_WebUI_Captcha_Get?id=" + CaptchaId + "&" + d.getTime());
        //登入更新驗證碼
        $("#aLogin").click(function () {
            d = new Date();
            $("#imgCheck").attr("src", webURL + "/api/TM_WebUI_Captcha_Get?id=" + CaptchaId + "&" + d.getTime());
            $("#imgCheck2").attr("src", webURL + "/api/TM_WebUI_Captcha_Get?id=" + CaptchaId + "&" + d.getTime());
        });

        //課程
        $("#aCrs").empty();
        var CrsContent = '<div class="col-12 a_title">領域</div>';
        var inParam = {
            ApiName: 'LSMS_Poster_GetComparisonList',
            PList: [
                {
                    Key: '',
                    Value: ''
                }
            ]
        };
        $.ajax({
            type: "POST",
            url: webURL + "/api/LSM01_ByGet",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(inParam),
            async: false,
            cache: false,
            success: function (data) {
                if (data.ErrorMessage != "") {
                } else if (data.ItemList.length > 0) {
                    $.each(data.ItemList, function (index, obj) {
                        var PsURL;
                        var coursesOther = obj.CompareName;
                        if (coursesOther == '智慧資通訊') {
                            PsURL = 'd_ICT';
                        } else if (coursesOther == '智慧機械') {
                            PsURL = 'd_SMA';
                        } else if (coursesOther == '生技醫藥') {
                            PsURL = 'd_BIM';
                        } else if (coursesOther == '智慧電網與綠能') {
                            PsURL = 'd_SGE';
                        } else if (coursesOther == '淨零永續') {
                            PsURL = 'd_NZS';
                        } else if (coursesOther == '科技管理') {
                            PsURL = 'd_TEM';
                        } else if (coursesOther == '其他') {
                            PsURL = '/Home/LessonList';
                        }
                        if (coursesOther == '其他') {
                            CrsContent += '\
                            <div class="nav flex-column col-6">\
                                <div class="nav-item">\
                                    <a class="nav-link" href="'+ webURL + '/' + PsURL + '" title="所有課程">所有課程</a> \
                                </div>\
                            </div>';
                        } else {
                            CrsContent += '\
                            <div class="nav flex-column col-6">\
                                <div class="nav-item">\
                                    <a class="nav-link" href="'+ webURL + '/' + PsURL + '" title="' + obj.CompareName + ' ">' + obj.CompareName + '</a> \
                                </div>\
                            </div>';
                        }
                    });
                    $("#aCrs").append(CrsContent);
                }
            }
        });

        //會員專區
        $("#aProfile").click(function () {
            window.location = webURL + '/Group/ProfileData';
        });
        //帳號設定
        $("#aAccount").click(function () {
            window.location = webURL + '/Group/AccountEdit';
        });
        //我的課程
        $("#aMyLesson").click(function () {
            window.location = webURL + '/Group/CourseData#myLesson';
        });
        //忘記密碼
        $("#aForgetP").click(function () {
            window.location = webURL + '/XFile/Forget';
        });

    },
    BindEvent: function () {
        //搜尋-您今天想學什麼呢？
        $(".aSearchBar_btn").click(function () {
            var k = $("#txtSearchBar_btn").val();
            //console.log(k);
            if (k == "") {
                $('#txtSearchBar_btn').addClass('is-invalid');
                $('#txtSearchBar_btn').setfocus();
                return;
            }
            window.location = webURL + "/Home/LessonList?searchKeyword=" + encodeURIComponent(k);
        });
        $("#txtSearchBar_btn").keypress(function (e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if (code == 13) {
                var k = $("#txtSearchBar_btn").val();
                if (k == "") {
                    $('#txtSearchBar_btn').addClass('is-invalid');
                    $('#txtSearchBar_btn').setfocus();
                    return;
                }
                e.preventDefault();
                window.location = webURL + "/Home/LessonList?searchKeyword=" + encodeURIComponent(k);
            }
        });
        $("#txtSearchBar_btn").keypress(function (e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if (code == 13) {
                var k = $("#txtSearchBar_btn").val();
                if (k == "") {
                    $('#txtSearchBar_btn').addClass('is-invalid');
                    $('#txtSearchBar_btn').setfocus();
                    return;
                }
                e.preventDefault();
                window.location = webURL + "/Home/LessonList?searchKeyword=" + encodeURIComponent(k);
            }
        });
        //一般課程
        $("#btnSearch").click(function () {
            var searchDurationTypeCode = $("#ddlCrsClassDate").val(); //開課日期V
            var searchKeyword = $("#txtCrsKeyword").val();   //關鍵字V
            var searchLocationList = $("#ddlCrsArea").val();  //上課地點 V
            var holidayClass = $("#ddlCrsHolidayClass").val();  //課程班別V
            var actConfirm = $("#ddlCrsActConfirm").val();  //開課狀態V
            var PSID = $("#ddlCrsField").val();  //領域代碼 V
            var actAttribute = $("#ddlCrsClassState").val();  //活動型態 V
            var sortTypeCode = $("#ddlSort").val();   //排序方式代碼V

            window.location = webURL + "/Home/LessonList?Location=" + searchLocationList + "&PSId=" + PSID + "&actAttribute=" + actAttribute + "&ActConfirm=" + actConfirm + "&searchKeyword=" + searchKeyword + "&searchDurationTypeCode=" + searchDurationTypeCode + "&holidayClass=" + holidayClass + "&sortTypeCode=" + sortTypeCode;
        });
        //搜尋關鍵字可以用enter搜尋
        $("#txtCrsKeyword").keypress(function (e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if (code == 13) {
                var k = $("#txtCrsKeyword").val();
                if (k == "") {
                    $('#txtCrsKeyword').addClass('form-control is-invalid');
                    $('#txtCrsKeyword').setfocus();
                    return;
                }
                e.preventDefault();
                var searchDurationTypeCode = $("#ddlCrsClassDate").val(); //開課日期V
                var searchKeyword = $("#txtCrsKeyword").val();   //關鍵字V
                var searchLocationList = $("#ddlCrsArea").val();  //上課地點 V
                var holidayClass = $("#ddlCrsHolidayClass").val();  //課程班別V
                var actConfirm = $("#ddlCrsActConfirm").val();  //開課狀態V
                var PSID = $("#ddlCrsField").val();  //領域代碼 V
                var actAttribute = $("#ddlCrsClassState").val();  //活動型態 V
                var sortTypeCode = $("#ddlSort").val();   //排序方式代碼V

                window.location = webURL + "/Home/LessonList?Location=" + searchLocationList + "&PSId=" + PSID + "&actAttribute=" + actAttribute + "&ActConfirm=" + actConfirm + "&searchKeyword=" + searchKeyword + "&searchDurationTypeCode=" + searchDurationTypeCode + "&holidayClass=" + holidayClass + "&sortTypeCode=" + sortTypeCode;

            }
        });
        //#region 登入
        //防止按鈕連點兩次
        $("#btnGo").one("click", function () {
            $(this).on("click", function () { return false; });
        });
        //重新產生驗證碼
        $("#aGCheckCode").click(function (e) {
            e.preventDefault();
            var d = new Date();
            $("#imgCheck").attr("src", webURL + "/api/TM_WebUI_Captcha_Get?id=" + CaptchaId + "&" + d.getTime());
        });
        $("#btnGo").click(function (e) {
            var btn = $(this);
            $(".invalid-feedback").removeClass("d-block");//清空原本的錯誤訊息
            e.preventDefault();
            //#region 取資料
            var acc = $("#txtAcc").val();
            var p = $("#txtP").val();
            var check = $("#txtCheck").val();
            //#endregion
            //#region 驗證資料
            if (acc == "") {
                $("#divAccReqError").addClass("d-block");
                $("#txtAcc").setfocus();
                return;
            }
            if (p == "") {
                $("#divPReqError").addClass("d-block");
                $("#txtP").setfocus();
                return;
            }
            if (check == "") {
                $("#divCheckReqError").addClass("d-block");
                $("#txtCheck").setfocus();
                return;
            }
            if (!BaseFunction.IsEmail(acc)) {
                $("#divAccEmailError").addClass("d-block");
                $("#txtAcc").setfocus();
                return;
            }
            //#endregion
            Home_Layout.Letmein(acc, p, check, btn);
        });
        //#endregion
        //登出
        $("#aLogout").click(function () {
            BaseSecu.ToLogout();
            window.location = webURL + '/Home/Default';
        });
        //#region 註冊
        //防止按鈕連點兩次
        $("#btnReg").one("click", function () {
            $(this).on("click", function () { return false; });
        });
        //防止按鈕連點兩次
        $("btnReg").one("click", function () {
            $(this).on("click", function () { return false; });
        });
        $("#aGCheckCode2").click(function (e) {
            e.preventDefault();
            var d = new Date();
            $("#imgCheck2").attr("src", "../api/TM_WebUI_Captcha_Get?id=" + CaptchaId + "&" + d.getTime());
        });
        $("#btnReg").click(function (e) {
            var btn2 = $(this);
            $(".invalid-feedback").removeClass("d-block");//清空原本的錯誤訊息
            e.preventDefault();
            //#region 取資料
            var name = $("#txtName").val();
            var acc2 = $("#txtAcc2").val();
            var reAcc = $("#txtReAcc").val();
            var p2 = $("#txtP2").val();
            var reP = $("#txtReP").val();
            var check2 = $("#txtCheck2").val();
            //#endregion
            //#region 驗證資料
            if (name == "") {
                $("#divNameReqError").addClass("d-block");
                $("#txtName").setfocus();
                return;
            }
            if (acc2 == "") {
                $("#divAccReqError2").addClass("d-block");
                $("#txtAcc2").setfocus();
                return;
            }
            if (!BaseFunction.IsEmail(acc2)) {
                $("#divAccEmailError2").addClass("d-block");
                $("#txtAcc2").setfocus();
                return;
            }
            if (reAcc == "") {
                $("#divReAccReqError").addClass("d-block");
                $("#txtReAcc").setfocus();
                return;
            }
            if (acc2 != reAcc) {
                $("#divReAccError").addClass("d-block");
                $("#txtReAcc").setfocus();
                return;
            }
            if (p2 == "") {
                $("#divPReqError2").addClass("d-block");
                $("#txtP2").setfocus();
                return;
            }
            if (reP == "") {
                $("#divRePReqError").addClass("d-block");
                $("#txtReP").setfocus();
                return;
            }
            if (p2 != reP) {
                $("#divRePError").addClass("d-block");
                $("#txtReP").setfocus();
                return;
            }
            if (check2 == "") {
                $("#divCheckReqError2").addClass("d-block");
                $("#txtCheck2").setfocus();
                return;
            }
            //#endregion
            Home_Layout.Reg(name, acc2, p2, check2, btn2);


            //1.Google綁定
            if ($("#LetGoogleReg").attr("token") != null) {
                var googleToken = $("#LetGoogleReg").attr("token");
                var memNo = $("#btnReg").attr("memno");
                var p = {
                    memNo: memNo,
                    googleToken: googleToken,
                };
                $.ajax({
                    type: "GET",
                    url: "../api/TM_MemberAuth_Member_BindGoogle?" + $.param(p),
                    contentType: "application/json",
                    dataType: "json",
                    async: false,
                    cache: false,
                    success: function (data) {
                        if (data.ErrorMessage != "") {
                            alert("Google綁定修改失敗：" + data.ErrorMessage);
                            return;
                        }
                    },
                });
            }

        });
        //#endregion

        //modal
        $('#ipsum').modally('ipsum');
        $('#lorem').modally('lorem');
        $('#aTerms').modally('aTerms');
        ////判斷已登入轉址關閉dailog
        var memNo = sessionStorage.getItem("memno");
        if (memNo != '' && memNo != null) {
            var letmein = window.location.hash;
            if (letmein == '#lorem') {
                window.location = location.pathname + location.search;
            }
        }
        
        Home_Layout.LessonBar();
    },
    BindData: function () {
        Home_Layout.GetMenuList("1", BaseFunction.EmptyGuid());
    },
    GetMenuList: function (level, pMnuNo) {
        var homeMenuList = sessionStorage.getItem("homemenulist2");
        if (homeMenuList != null && homeMenuList != "") {
            if (homeMenuList.indexOf("<") != -1) {
                //判斷session有舊的HTML MENU，有就清除session重新載入
                sessionStorage.removeItem("homemenulist2");
                Home_Layout.GetMenuList("1", BaseFunction.EmptyGuid());
            } else {
                //判斷session沒有舊的HTML MENU，解碼載入
                $("#divLevel" + level).empty();
                $("#divLevel" + level).append(homeMenuList.htmlDncode());
            }
        } else {
            //第一層
            $("#divLevel" + level).empty();
            var p = {
                pMnuNo: pMnuNo,
                langCode: langCode,
                searchKeyword: ""
            };
            $.ajax({
                type: "GET",
                url: webURL + "/api/My_MemberAuth_Menu_GetListWithViewGroup?" + $.param(p),
                contentType: "application/json",
                dataType: "json",
                async: false,
                cache: false,
                success: function (data) {
                    if (data.ErrorMessage != "") {
                        alert(data.ErrorMessage);
                        return;
                    }
                    else {
                        if (data.ItemList.length > 0) {
                            var content1 = "";
                            //console.log('data', data.ItemList);
                            $.each(data.ItemList, function (index, obj2) {
                                index = index + 1;
                                content1 += ' \
                            ';
                                // console.log(obj2.TypeCode);
                                if (obj2.Title != "課程") {
                                    if (obj2.TypeCode == 1) {
                                        var Field = obj2.Title;
                                        content1 += '<li id="liMenu' + index + '" class="nav-item dropdown bigmenu" data-href="">\
                                                                <a class="nav-link dropdown-toggle arrow-none pr-3" href="#" id="topnav-dashboards" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" mnuno="' + obj2.MnuNo + '">\
                                                                    '+ obj2.Title;
                                    }
                                    if (obj2.TypeCode == 2) {

                                        content1 += '<li id="liMenu' + index + '" class="nav-item dropdown bigmenu" data-href="' + webURL + '/Home/InfoList?MnuNo=' + obj2.MnuNo + '&grfNo=' + obj2.MapGrfNo + '&TypeCode=' + obj2.TypeCode + '">\
                                                                <a class="nav-link dropdown-toggle arrow-none pr-3" href="' + webURL + '/Home/InfoList?MnuNo=' + obj2.MnuNo + '&grfNo=' + obj2.MapGrfNo + '&TypeCode=' + obj2.TypeCode + '" id="topnav-dashboards" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" mnuno="' + obj2.MnuNo + '" title="' + obj2.Title + ' 頁">\
                                                                    '+ obj2.Title + '\
                                                              ' + (obj2.FunViewGroupTypeCode != 0 ? "<span class='text-danger eye_icon' title='限閱！請先登入'><i class='mdi mdi-eye-plus'></i></span>" : "");


                                    }
                                    if (obj2.TypeCode == 3) {
                                        content1 += '<li id="liMenu' + index + '" class="nav-item dropdown bigmenu" data-href="' + webURL + '/Home/InfoData?infNo=' + obj2.MapDataNo + '&grfNo=' + obj2.MapGrfNo + '">\
                                                                <a class="nav-link dropdown-toggle arrow-none pr-3" href="' + webURL + '/Home/InfoData?infNo=' + obj2.MapDataNo + '&grfNo=' + obj2.MapGrfNo + '" id="topnav-dashboards" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  mnuno="' + obj2.MnuNo + '" title="' + obj2.Title + ' 頁">\
                                                                    '+ obj2.Title + '\
                                                                ' + (obj2.FunViewGroupTypeCode != 0 ? "<span class='text-danger eye_icon' title='限閱！請先登入'><i class='mdi mdi-eye-plus'></i></span>" : "");
                                    }
                                    if (obj2.TypeCode == 5) {
                                        content1 += '<li id="liMenu' + index + '" class="nav-item dropdown bigmenu" data-href="' + obj2.Url + '">\
                                                                <a class="nav-link dropdown-toggle arrow-none pr-3" href="'+ obj2.Url + '" id="topnav-dashboards" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" mnuno="' + obj2.MnuNo + '" title="' + obj2.Title + ' 頁" ' + (obj2.OpenTypeCode == 1 ? 'target="_self"' : 'target="_blank"') + '>\
                                                                    '+ obj2.Title;
                                    }
                                    if (obj2.TypeCode == 6) {
                                        content1 += '<li id="liMenu' + index + '" class="nav-item dropdown bigmenu" data-href="' + webURL + '/Home/InfoList?grfNo=' + obj2.MapGrfNo + '&typeMgdNo=' + obj2.MapTypeMgdNo + '&TypeCode=' + obj2.TypeCode + '">\
                                                                <a class="nav-link  dropdown-toggle arrow-none pr-3" href="' + webURL + '/Home/InfoList?grfNo=' + obj2.MapGrfNo + '&typeMgdNo=' + obj2.MapTypeMgdNo + '&TypeCode=' + obj2.TypeCode + '" id="topnav-dashboards" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" mnuno="' + obj2.MnuNo + '" title="' + obj2.Title + ' 頁">\
                                                                    '+ obj2.Title + '\
                                                                ' + (obj2.FunViewGroupTypeCode != 0 ? "<span class='text-danger eye_icon' title='限閱！請先登入'><i class='mdi mdi-eye-plus'></i></span>" : "");
                                    }
                                    var p2 = {
                                        pMnuNo: obj2.MnuNo,
                                        langCode: langCode,
                                        searchKeyword: ""
                                    };
                                    $.ajax({
                                        type: "GET",
                                        url: webURL + "/api/My_MemberAuth_Menu_GetListWithViewGroup?" + $.param(p2),
                                        contentType: "application/json",
                                        dataType: "json",
                                        async: false,
                                        cache: false,
                                        success: function (data2) {
                                            //console.log(data2);
                                            if (data2.ErrorMessage != "") {
                                                alert(data.ErrorMessage);
                                                return;
                                            }
                                            else {
                                                if (data2.ItemList.length > 0) {
                                                    //console.log('data2', data2.ItemList);
                                                    content1 += '<div class="arrow-down"></div></a>';
                                                    content1 += '<div id="divLevel4" class="dropdown-menu menu_hover  dropdown-menu-animated" aria-labelledby="navbarDropdown">\
                                                    <div class="bid_menu">\
                                                        <div class="row">';
                                                    $.each(data2.ItemList, function (index2, obj2) {
                                                        //第二層
                                                        content1 += '\
                                                <div class="col-lg-4 col-xl-3 mt-1">\
                                                    <div class="row">\
                                                        <div class="col-12">\
                                                            <div class="row">';
                                                        if (obj2.TypeCode == 1) {
                                                            Field = obj2.Title;
                                                            content1 += '<div class="col-12 a_title">' + obj2.Title + '</div>';

                                                        }
                                                        if (obj2.TypeCode == 2) {
                                                            content1 += '<div class="w-100"> \
                                                                        <a class="nav-link a_title" href="' + webURL + '/Home/InfoList?MnuNo=' + obj2.MnuNo + '&grfNo=' + obj2.MapGrfNo + '&TypeCode=' + obj2.TypeCode + '" title="' + obj2.Title + ' 功能">' + obj2.Title + '</a> \
                                                                        ' + (obj2.FunViewGroupTypeCode != 0 ? "<span class='text-danger ml-2' title='限閱！請先登入'><i class='mdi mdi-eye-plus'></i></span>" : "") + ' \
                                                                    </div>';
                                                        }
                                                        if (obj2.TypeCode == 3) {
                                                            content1 += '<a class="nav-link a_title" href="' + webURL + '/Home/InfoData?infNo=' + obj2.MapDataNo + '&grfNo=' + obj2.MapGrfNo + '" title="' + obj2.Title + ' 功能">' + obj2.Title + '</a> \
                                                                    ' + (obj2.FunViewGroupTypeCode != 0 ? "<span class='text-danger ml-2' title='限閱！請先登入'><i class='mdi mdi-eye-plus'></i></span>" : "");
                                                        }
                                                        if (obj2.TypeCode == 5) {
                                                            content1 += '<a class="col-12 nav-link a_title" href="' + obj2.Url + '" title="' + obj2.Title + ' 功能" ' + (obj2.OpenTypeCode == 1 ? 'target="_self"' : 'target="_blank"') + '>' + obj2.Title + '</a>';
                                                        }
                                                        if (obj2.TypeCode == 6) {
                                                            Field = obj2.Title;
                                                            //系列學程不分大小寫比對Grfno
                                                            if (obj2.MapGrfNo.toUpperCase() == grfNoGroupCourse.toUpperCase()) {
                                                                content1 += '<div class="col-12"> \
                                                                        <a class="nav-link a_title" href = "' + webURL + '/Home/ProgramList?grfNo=' + obj2.MapGrfNo + '&typeMgdNo=' + obj2.MapTypeMgdNo + '&TypeCode=' + obj2.TypeCode + '" title="' + obj2.Title + ' 功能"> ' + obj2.Title + '</a > \
                                                                    </div>';
                                                            } else {
                                                                content1 += '<a class="nav-link a_title" href = "' + webURL + '/Home/InfoList?MnuNo=' + obj2.MnuNo + '&grfNo=' + obj2.MapGrfNo + '&typeMgdNo=' + obj2.MapTypeMgdNo + '&TypeCode=' + obj2.TypeCode + '" title="' + obj2.Title + ' 功能"> ' + obj2.Title + '</a > \
                                                            ' + (obj2.FunViewGroupTypeCode != 0 ? "<span class='text-danger ml-2' title='限閱！請先登入'><i class='mdi mdi-eye-plus'></i></span>" : "");
                                                            }

                                                        }
                                                        //第三層
                                                        var p4 = {
                                                            pMnuNo: obj2.MnuNo,
                                                            langCode: langCode,
                                                            searchKeyword: ""
                                                        };
                                                        $.ajax({
                                                            type: "GET",
                                                            url: webURL + "/api/My_MemberAuth_Menu_GetListWithViewGroup?" + $.param(p4),
                                                            contentType: "application/json",
                                                            dataType: "json",
                                                            async: false,
                                                            cache: false,
                                                            success: function (data3) {
                                                                if (data3.ErrorMessage != "") {
                                                                    alert(data.ErrorMessage);
                                                                    return;
                                                                }
                                                                else {
                                                                    if (data3.ItemList.length > 0) {
                                                                        // console.log('data3', data3.ItemList);
                                                                        $.each(data3.ItemList, function (index3, obj3) {
                                                                            content1 += '\
                                                                            <div class="nav flex-column col-6">\
                                                                                <div class="nav-item">';
                                                                            if (obj3.TypeCode == 1) {
                                                                                content1 += '<a class="nav-link text-center" href="#" title="' + obj3.Title + ' 頁">' + obj3.Title + '</a>';
                                                                            }
                                                                            if (obj3.TypeCode == 2) {
                                                                                content1 += '<a class="nav-link" href="' + webURL + '/Home/InfoList?MnuNo=' + obj3.MnuNo + '&grfNo=' + obj3.MapGrfNo + '&TypeCode=' + obj3.TypeCode + '" title="' + obj3.Title + ' 頁">' + obj3.Title + '\
                                                                            ' + (obj3.FunViewGroupTypeCode != 0 ? "<span class='text-danger eye_icon' title='限閱！請先登入'><i class='mdi mdi-eye-plus'></i></span>" : "") + ' \
                                                                            </a>';
                                                                            }
                                                                            if (obj3.TypeCode == 3) {
                                                                                content1 += '<a class="nav-link" href="' + webURL + '/Home/InfoData?infNo=' + obj3.MapDataNo + '&grfNo=' + obj3.MapGrfNo + '" title="' + obj3.Title + ' 頁">' + obj3.Title + '</a>';
                                                                            }
                                                                            if (obj3.TypeCode == 5) {
                                                                                content1 += '<a class="nav-link" href="' + obj3.Url + '" title="' + obj3.Title + ' 頁"' + (obj3.OpenTypeCode == 1 ? 'target="_self"' : 'target="_blank"') + '>' + obj3.Title + '</a>';
                                                                            }
                                                                            if (obj3.TypeCode == 6) {
                                                                                Field = obj3.Title;
                                                                                //系列學程
                                                                                if (obj3.MapGrfNo.toUpperCase() == grfNoGroupCourse.toUpperCase()) {
                                                                                    content1 += '<a class="nav-link" href="' + webURL + '/Home/ProgramList?grfNo=' + obj3.MapGrfNo + '&typeMgdNo=' + obj3.MapTypeMgdNo + '&TypeCode=' + obj3.TypeCode + '" title="' + obj3.Title + ' 頁">' + obj3.Title + '</a>';
                                                                                } else {
                                                                                    content1 += '<a class="nav-link" href="' + webURL + '/Home/InfoList?MnuNo=' + obj3.MnuNo + '&grfNo=' + obj3.MapGrfNo + '&typeMgdNo=' + obj3.MapTypeMgdNo + '&TypeCode=' + obj3.TypeCode + '" title="' + obj3.Title + ' 頁">' + obj3.Title + '</a>\
                                                                                ' + (obj3.FunViewGroupTypeCode != 0 ? "<span class='text-danger ml-0 d-inline-block mt-2' title='限閱！請先登入'><i class='mdi mdi-eye-plus'></i></span>" : "");
                                                                                }
                                                                            }
                                                                            content1 += '\
                                                                                </div>\
                                                                            </div>';
                                                                        });
                                                                    }
                                                                }
                                                            }
                                                        });
                                                        content1 += '\
                                                            </div>\
                                                        </div>\
                                                    </div>\
                                                </div>';
                                                    });

                                                }
                                                else {
                                                    content1 += '</a>';
                                                }
                                            }
                                        }
                                    });
                                }

                                content1 += '\
                                    </div>\
                                </div>\
                            </div>\
                        </li>';
                            });
                            MenuList = content1;
                            sessionStorage.setItem("homemenulist2", content1.htmlEncode());
                            $("#divLevel" + level).append(content1.htmlEncode().htmlDncode());

                        }
                    }
                }
            });
        }
    },
    Letmein: function (acc, p, check, btn) {
        //console.log(acc, p, check);
        //#region 驗證登入
        var p = {
            account: acc,
            ssword: p,
            checkId: CaptchaId,
            checkCode: check
        };
        $.ajax({
            type: "GET",
            url: webURL + "/api/TM_MemberAuth_Member_CheckSsword?" + $.param(p),
            contentType: "application/json",
            dataType: "json",
            async: true,//非同步
            cache: false,
            success: function (data) {
                if (data.ErrorMessage == "") {
                    //console.log(data);
                    //console.log(backURL);
                    var letmein = window.location.hash;
                    //console.log(letmein);
                    if (letmein == '#lorem') {//如果在登入dialog登入，頁面重新整理
                        BaseSecu.ToLogin(data.MemNo);
                        //location.reload();
                        window.location = location.pathname + location.search;
                    } else {
                        console.log('a');
                        BaseSecu.ToLogin(data.MemNo);
                        window.location.assign(window.location.href);
                    }
                }
                else {
                    if (data.ErrorMessage == "帳密錯誤") {
                        $("#divAccError").addClass("d-block");
                        $("#txtAcc").setfocus();
                        return;
                    }
                    else if (data.ErrorMessage == "驗證碼錯誤") {
                        $("#divCheckError").addClass("d-block");
                        $("#txtCheck").setfocus();
                        return;
                    }
                    else if (data.ErrorMessage == "驗證碼過期") {
                        $("#divCheckTimeoutError").addClass("d-block");
                        $("#txtCheck").setfocus();
                        return;
                    }
                    else {
                        alert(data.ErrorMessage);
                        return;
                    }
                }
            },
            beforeSend: function () {
                $(btn).buttonLoader('start');
            },
            complete: function () {
                $(btn).buttonLoader('stop');
            }
        });
        //#endregion
    },
    LetmeCommunityin: function (type, token, email, name) {
        var p;
        var title = "";

        //1.Google 2.FB 3.Line
        if (type == 1) {
            title = "Google";
            p = {
                googleToken: token
            };
        }
        else if (type == 2) {
            title = "FaceBook";
            p = {
                fbToken: token
            };
        }
        else if (type == 3) {
            title = "Line";
            p = {
                lineToken: token
            };

            //line移除網址參數(code和state)，重新導回網址
            let redirect_uri = backURL;
            redirect_uri = BaseFunction.QueryRemoveParam1(redirect_uri, "code");
            redirect_uri = BaseFunction.QueryRemoveParam1(redirect_uri, "state");
            //沒網址參數則移除?號
            if (redirect_uri.split('?')[1] != null && redirect_uri.split('?')[1] == "") {
                redirect_uri = redirect_uri.substring(0, redirect_uri.length - 1)
            }
            backURL = redirect_uri;
        }
        else {
            alert("登入方式設定錯誤");
            return;
        }

        var successLogin = false;

        $.ajax({
            type: "GET",
            url: webURL + "/api/TM_MemberAuth_Member_GetOne?" + $.param(p),
            contentType: "application/json",
            dataType: "json",
            async: false,//同步
            cache: false,
            success: function (data) {
                if (data.ErrorMessage == "") {
                    //console.log(data);
                    BaseSecu.ToLogin(data.MemNo);
                    successLogin = true;
                }
            },
        });

        //1.Access Token綁定判斷
        if (successLogin) {
            window.location = backURL;
        }
        else {
            //2.(工研院會員舊資料)另外判斷Email和姓名已存在會員資料表，請自動綁定且登入，並轉到密碼設定頁面
            if (type == 1) {
                var p2 = {
                    account: email
                };
                $.ajax({
                    type: "GET",
                    url: webURL + "/api/TM_MemberAuth_Member_GetOne?" + $.param(p2),
                    contentType: "application/json",
                    dataType: "json",
                    async: false,//同步
                    cache: false,
                    success: function (data) {
                        if (data.ErrorMessage == "") {
                            if (data.GoogleToken == "N") {
                                //修改會員資料，真的不要綁定的會員
                                alert("系統已設定" + title + "不綁定此Mail，登入失敗：" + email);
                                return false;
                            }

                            if (data.Name == name) {
                                //console.log(data);
                                BaseSecu.ToLogin(data.MemNo);
                                //Google綁定儲存
                                var p3 = {
                                    memNo: data.MemNo,
                                    googleToken: token,
                                };
                                $.ajax({
                                    type: "GET",
                                    url: "../api/TM_MemberAuth_Member_BindGoogle?" + $.param(p3),
                                    contentType: "application/json",
                                    dataType: "json",
                                    async: false,
                                    cache: false,
                                    success: function (data) {
                                        if (data.ErrorMessage != "") {
                                            alert("Google綁定失敗：" + data.ErrorMessage);
                                            return;
                                        }
                                    },
                                });

                                var url = "../XFile/Forget?isdirect=Y";
                                window.location = url;
                            }
                            else {
                                alert(email + "：\n系統姓名(" + data.Name + ")與Google姓名(" + name + ")不一致，無法登入");
                            }
                        }
                        else {
                            //查無資料，轉到加入會員
                            alert("此帳號不存在，請先註冊：" + email);
                            document.getElementById('addMember').click();
                            $("#txtName").val(name);
                            $("#txtAcc2").val(email);
                        }
                    },
                });
            }
            else if (type == 2) {
                var p2 = {
                    account: email
                };
                $.ajax({
                    type: "GET",
                    url: webURL + "/api/TM_MemberAuth_Member_GetOne?" + $.param(p2),
                    contentType: "application/json",
                    dataType: "json",
                    async: false,//同步
                    cache: false,
                    success: function (data) {
                        if (data.ErrorMessage == "") {
                            if (data.FbToken == "N") {
                                //修改會員資料，真的不要綁定的會員
                                alert("系統已設定" + title + "不綁定此Mail，登入失敗：" + email);
                                return false;
                            }

                            if (data.Name == name) {
                                //console.log(data);
                                BaseSecu.ToLogin(data.MemNo);
                                //FB綁定儲存
                                var p = {
                                    memNo: data.MemNo,
                                    fbToken: token,
                                };
                                $.ajax({
                                    type: "GET",
                                    url: "../api/TM_MemberAuth_Member_BindFB?" + $.param(p),
                                    contentType: "application/json",
                                    dataType: "json",
                                    async: false,
                                    cache: false,
                                    success: function (data) {
                                        if (data.ErrorMessage != "") {
                                            alert("FB綁定失敗：" + data.ErrorMessage);
                                            return;
                                        }
                                    },
                                });

                                var url = "../XFile/Forget?isdirect=Y";
                                window.location = url;
                            }
                            else {
                                alert(email + "：\n系統姓名(" + data.Name + ")與FaceBook姓名(" + name + ")不一致，無法登入");
                            }
                        }
                        else {
                            //查無資料，轉到加入會員
                            alert("此帳號不存在，請先註冊：" + email);
                            document.getElementById('addMember').click();
                            $("#txtName").val(name);
                            $("#txtAcc2").val(email);
                        }
                    },
                });
            }
            else if (type == 3) {
                //Line先不變
                alert(title + "尚未綁定此Mail，登入失敗，：" + email);
                window.location = backURL;
            }
        }
    },
    Reg: function (name, acc, p, check, btn) {
        //console.log(name, acc, p, check, btn);
        //#region 儲存
        var inParam = {
            Name: name,
            Account: acc,
            Ssword: p,
            Email: acc,
            FBToken: "",
            LineToken: "",
            GoogleToken: "",
            CheckId: CaptchaId,
            CheckCode: check
        };
        $.ajax({
            type: "POST",
            url: webURL + "/api/COL09_MemberReg",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(inParam),
            async: false,//同步(設定memno才能存token)
            cache: false,
            success: function (data) {
                //console.log(data);
                if (data.ErrorMessage != "") {
                    if (data.ErrorMessage == "帳號已存在") {
                        $("#divAccError2").addClass("d-block");
                        $("#txtAcc2").setfocus();
                        return;
                    }
                    else if (data.ErrorMessage == "驗證碼錯誤") {
                        $("#divCheckError2").addClass("d-block");
                        $("#txtCheck2").setfocus();
                        return;
                    }
                    else if (data.ErrorMessage == "驗證碼過期") {
                        $("#divCheckTimeoutError2").addClass("d-block");
                        $("#txtCheck2").setfocus();
                        return;
                    }
                    else {
                        alert(data.ErrorMessage);
                        return;
                    }
                }
                else {
                    $("#btnReg").attr("memno", data.MemNo);

                    alert("會員申請成功! 請重新登入。");
                    window.location = "Default";
                }
            },
            beforeSend: function () {
                $(btn).buttonLoader('start');
            },
            complete: function () {
                $(btn).buttonLoader('stop');
            }
        });
        //#endregion
    },
    GoGoogle: function () {
        // Google 登入程序
        var startGoogleApp = function () {
            gapi.load("auth2", function () {
                var client_id = googleLoginClientId;

                //Google 登入
                auth2 = gapi.auth2.init({
                    client_id: client_id, // 用戶端 ID
                    cookiepolicy: "single_host_origin"
                });
                $("#ssIFrame_google").attr("title", "googleApp");
                Home_Layout.GoogleSignIn(document.getElementById("LetGoogleIn"));

                //Google 註冊
                auth2_reg = gapi.auth2.init({
                    client_id: client_id, // 用戶端 ID
                    cookiepolicy: "single_host_origin"
                });
                $("#ssIFrame_google").attr("title", "googleApp");
                Home_Layout.GoogleSignReg(document.getElementById("LetGoogleReg"));
            });
        };

        startGoogleApp();
    },
    //Google登入
    GoogleSignIn: function (element) {
        auth2.attachClickHandler(element, {},
            // 登入成功
            function (googleUser) {
                var profile = googleUser.getBasicProfile();
                var email = profile.getEmail();
                var token = profile.getId();
                var name = profile.nf;

                //**登入(1.Google 2.FB 3.Line)
                Home_Layout.LetmeCommunityin(1, token, email, name);
            },
            // 登入失敗
            function (error) {
                alert(JSON.stringify(error, undefined, 2));
            });
    },
    //Google註冊
    GoogleSignReg: function (element) {
        auth2_reg.attachClickHandler(element, {},
            // 帶入成功
            function (googleUser) {
                var profile = googleUser.getBasicProfile();

                var email = profile.getEmail();
                var token = profile.getId();
                var name = profile.getName();
                $("#txtName").val(name);
                $("#txtAcc2").val(email);
                $("#txtReAcc").val(email);
                $(element).attr("token", token);
                $(element).attr("email", email);

                Home_Layout.FilterCommunityReg();
            },
            // 帶入失敗
            function (error) {
                alert(JSON.stringify(error, undefined, 2));
            });
    },
    //過濾多筆社群註冊(1.不同mail做綁定)
    FilterCommunityReg: function () {
        //註冊申請的mail(input)
        var email = $("#txtAcc2").val();

        var googleToken = $("#LetGoogleReg").attr("token");
        var fbToken = $("#LetFbReg").attr("token");
        //1.google
        if (googleToken != null) {
            if (email != $("#LetGoogleReg").attr("email")) {
                $("#LetGoogleReg").removeAttr("token");
                $("#LetGoogleReg").removeAttr("email");
            }
        }

        //2.FB
        if (fbToken != null) {
            if (email != $("#LetFbReg").attr("email")) {
                $("#LetFbReg").removeAttr("token");
                $("#LetFbReg").removeAttr("email");
            }
        }

    },
    GoLine: function () {

        var code = BaseFunction.QueryString("code");
        if (code != null && code != "") {
            let callbackUrl = window.location.href;

            var p = {
                "code": code,
                "callbackUrl": callbackUrl
            };
            $.ajax({
                type: "GET",
                url: "../api/COL13_DecodeLineLogin?" + $.param(p),
                contentType: "application/json",
                dataType: "json",
                async: false,
                cache: false,
                success: function (user) {
                    if (user.userId != null && user.userId != "") {
                        var token = user.userId;
                        var email = user.displayName;  //Line的串接回傳的資料，並沒有提供email。暫時使用名子

                        //**登入(1.Google 2.FB 3.Line)
                        Home_Layout.LetmeCommunityin(3, token, email, "");
                    }
                    else {
                        alert("解密LineLogin失敗(code)：" + user.statusMessage);
                    }
                },
            });
        }

        $("#LetLineIn").click(function () {
            Home_Layout.LineSignIn();
        });

        //$("#LetFbReg").click(function () {
        //    Home_Layout.FBSignReg(this);
        //});
    },
    LineSignIn: function () {
        let client_id = lineClientId;

        let redirect_uri = window.location.href;
        redirect_uri = BaseFunction.QueryRemoveParam1(redirect_uri, "code");
        redirect_uri = BaseFunction.QueryRemoveParam1(redirect_uri, "state");
        //沒網址參數則移除?號
        if ((redirect_uri.split('?')[1] != null && redirect_uri.split('?')[1] == "")
            || (redirect_uri.split('#')[1] != null && redirect_uri.split('#')[1] == "")) {
            redirect_uri = redirect_uri.substring(0, redirect_uri.length - 1)
        }

        let link = lineSSO;
        link += 'response_type=code';
        link += '&client_id=' + client_id;
        link += '&redirect_uri=' + redirect_uri;
        link += '&state=login';
        link += '&scope=openid%20profile';
        window.location.href = link;
    },
    LessonBar: function () {
        //#region 建立輪播選單內容
        var content2 = '';
        var inParam = {
            ApiName: 'LSMS_Poster_GetComparisonList',
            PList: [
                {
                    Key: '',
                    Value: ''
                }
            ]
        };
        $.ajax({
            type: "POST",
            url: webURL + "/api/LSM01_ByGet",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(inParam),
            async: false,
            cache: false,
            success: function (data) {
                if (data.ErrorMessage != "") {
                } else if (data.ItemList.length > 0) {
                    content2 += '<option value="" selected="selected" langkey="領域">領域</option>';
                    $.each(data.ItemList, function (index, obj) {
                        content2 += '<option value="' + obj.PSId + '" langkey="' + obj.CompareName + '">' + obj.CompareName + '</option>';
                    });
                }
            }
        });

        $("#ddlCrsField").append(content2);
        var keyNo = BaseFunction.QueryString("KeyNo");
        //#region 總關鍵字
        $('#keyword_crs_all').empty();
        var p2 = {
            "langCode": langCode,
            "topCount": 6,
            "_": BaseFunction.NowDateTimeCache()//cache 10分鐘
        };
        $.ajax({
            type: "GET",
            url: webURL + "/api/TM_CMS_Keyword_GetList?" + $.param(p2),
            contentType: "application/json",
            dataType: "json",
            async: true,//非同步
            cache: true,//快取，配合_參數
            success: function (data) {
                if (data.ErrorMessage != "") {
                    alert(data.ErrorMessage);
                }
                else {
                    var KeyWordList = '';
                    $.each(data.ItemList, function (index, obj) {
                        if (keyNo == obj.KeyNo) {
                            $("#txtCrsKeyword").val(obj.Title);
                        }
                        KeyWordList += '\
                        <a href="'+ webURL + '/Home/LessonList?KeyNo=' + obj.KeyNo + '&searchKeyword=' + obj.Title + '" title="搜尋 [' + obj.Title + '] 關鍵字">' + obj.Title + '</a>';
                        $('#keyword_crs_all').empty();
                        $('#keyword_crs_all').append(KeyWordList);
                    });
                }
            }
        });

        //#endregion
    },

}