//頁面初始設定
$(document).ready(function () {
    DefaultPage.BindUI();
    DefaultPage.BindEvent();
    DefaultPage.BindData();
    //預設區塊顯示
    listType = "list";
    DefaultPage.BindCourseList("", sessionStorage.getItem("course_" + FoldType + "_pageIndex"));
    //讓每列TR都可以連結到課程資料
    for (x = 0; x <= 10; x++) {
        $("#trRow" + x).click(function () {
            window.location = $(this).data("href");
        });
    }

});

var DefaultPage = {
    BindUI: function () {

    },
    BindEvent: function () {
        //電子報
        $('#divGoEpaper').click(function () {
            sessionStorage.setItem('EpaperEmail', $('#txtEpaperEmail').val());
            var EpaperEmail = sessionStorage.getItem('EpaperEmail');
            if (EpaperEmail != '') {
                window.location = webURL + '/Home/EpaperItem';
            } else {
                alert('請輸入Email');
            }
        });

        //課程型態頁籤
        $('#aAttributeL').click(function () {
            actAttribute = 'L'
            searchDurationTypeCode = 1;
            holidayClass = 99;
            actConfirm = 99;
            sortTypeCode = 7;
            DefaultPage.BindCourseList();
            $('#aAttributeL').addClass('active');
            $('#aAttributeP').removeClass('active');
            $('#aAttributeD').removeClass('active');
            $('#aAttributeC').removeClass('active');
            $('#aAttributeTotal').removeClass('active');
            $("#divSort").hide();
        });
        $('#aAttributeP').click(function () {
            actAttribute = 'P'
            searchDurationTypeCode = 1;
            holidayClass = 99;
            actConfirm = 95;
            sortTypeCode = $("#ddlSort").val();
            DefaultPage.BindCourseList();
            $('#aAttributeL').removeClass('active');
            $('#aAttributeP').addClass('active');
            $('#aAttributeD').removeClass('active');
            $('#aAttributeC').removeClass('active');
            $('#aAttributeTotal').removeClass('active');
            $("#divSort").show();
        });
        $('#aAttributeD').click(function () {
            actAttribute = 'D'
            searchDurationTypeCode = 1;
            holidayClass = 99;
            actConfirm = 95;
            sortTypeCode = $("#ddlSort").val();
            DefaultPage.BindCourseList();
            $('#aAttributeL').removeClass('active');
            $('#aAttributeP').removeClass('active');
            $('#aAttributeD').addClass('active');
            $('#aAttributeC').removeClass('active');
            $('#aAttributeTotal').removeClass('active');
            $("#divSort").show();
        });
        $('#aAttributeC').click(function () {
            actAttribute = 'C'
            searchDurationTypeCode = 1;
            holidayClass = 99;
            actConfirm = 95;
            sortTypeCode = $("#ddlSort").val();
            console.log(actAttribute);
            DefaultPage.BindCourseList();
            $('#aAttributeL').removeClass('active');
            $('#aAttributeP').removeClass('active');
            $('#aAttributeD').removeClass('active');
            $('#aAttributeC').addClass('active');
            $('#aAttributeTotal').removeClass('active');
            $("#divSort").show();
        });
        $('#aAttributeTotal').click(function () {
            actAttribute = ''
            searchDurationTypeCode = 1;
            holidayClass = 99;
            actConfirm = 95;
            sortTypeCode = $("#ddlSort").val();
            DefaultPage.BindCourseList();
            $('#aAttributeL').removeClass('active');
            $('#aAttributeP').removeClass('active');
            $('#aAttributeD').removeClass('active');
            $('#aAttributeC').removeClass('active');
            $('#aAttributeTotal').addClass('active');
            $("#divSort").show();
        });
        $("#courseListTableTab").click(function () {
            DefaultPage.BindCourseList("list", 1);
        });
        $("#courseListCardTab").click(function () {
            DefaultPage.BindCourseList("block", 1);
        });
        $("#ddlSort").change(function () {
            sortTypeCode = $("#ddlSort").val();   //排序方式代碼V
            DefaultPage.BindCourseList();
        });


    },
    BindData: function () {

        //#region 目錄
        var inParam = {
            ApiName: 'LSMS_Poster_GetSubComparison',
            PList: [
                {
                    Key: 'parentFolder',
                    Value: PSID
                }
            ]
        };
        $.ajax({
            // type: "POST", // TODO:開發註解
            // url: webURL + "/api/LSM01_ByGet", // TODO:開發註解
            type: "GET",
            url: webURL2 + "fakeData/subComparison.json",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(inParam),
            async: false,
            cache: false,
            success: function (data) {
                if (data.ErrorMessage != "") {
                } else if (data.ItemList.length > 0) {
                    var tablist = '';
                    $.each(data.ItemList, function (index, obj) {
                        index = index + 1;
                        tablist += '\
                    <li class="nav-item">\
                        <a class="nav-link" id="card-tab-'+ index + '" data-toggle="tab" href="#" role="tab" aria-controls="card-' + index + '" aria-selected="false" folderguid="' + obj.FolderGUID + '">' + obj.SubCompareName + '</a>\
                    </li>';
                    });
                    $('#cardTab').empty();
                    $('#cardTab').append(tablist);
                    $('#card-tab-1').addClass('active');
                    FolderGuid = $('#card-tab-1').attr('folderguid');
                }
            }
        });
        //領域子分類
        $("#cardTab li").click(function () {
            FolderGuid = $(this).find('a').attr('folderguid');
            $('#catalog1').slick('unslick');
            DefaultPage.BindProductList(FolderGuid);
            $('#catalog1 .slick-next').html('<i class="fas fa-chevron-right"></i>');
            $('#catalog1 .slick-prev').html('<i class="fas fa-chevron-left"></i>');
        });
        DefaultPage.BindProductList(FolderGuid);
        //目錄輪播


        //#region 延伸閱讀
        var p = {
            "grfNo": DefaultGrfno0,
            "infoCoverAttTypeCode": infoCoverType,
            "langCode": langCode,
            "typeMgdNo": DefaultTypeMgdNo0,
            "searchKeyword": DefaultKeyword0,
            "searchJustOnline": "Y",
            "pageSize": 12,
            "currentPage": 1,
            "sortFields": sortFields,
            "sortDirection": sortDirection,
        };

        $.ajax({
            type: "GET",
            // url: webURL + "/api/TM_CMS_Info_GetList?" + $.param(p), // TODO:開發註解
            url: webURL2 + "fakeData/furtherReading.json",//本機開發用
            contentType: "application/json",
            dataType: "json",
            async: false,
            cache: false,
            success: function (data) {
                var furtherReading = '';
                $.each(data.ItemList, function (index, obj) {
                    furtherReading += '\
                    <div class="nz-course-bg-card m-4">\
                        <a href="'+ webURL + '/Home/InfoData/' + obj.GrfNo + '/' + obj.InfNo + '">\
                            <div class="nz-course-bg-card-img">';
                    if (obj.CoverURL != '') {
                        furtherReading += '<img class="nz-img" src="' + obj.CoverURL + '" alt="文章封面" />';
                    } else {
                        furtherReading += '<img class="nz-img" src="img/example/img-4.JPG" alt="文章封面" />';
                    }
                    furtherReading += '</div>\
                            <div class="nz-course-bg-card-info">';
                    if (obj.Keyword != '') {
                        var arr = obj.Keyword.split(",");
                        //console.log(arr);
                        for (i = 0; i < 2; i++) {
                            furtherReading += '<div class="nz-course-status nz-bg-primary">' + arr[i] + '</div> ';
                        }
                    }
                    furtherReading += '<h5 class="nz-course-bg-card-title nz-black nz-overflow-ellipsis-2 card-title-h">\
                                    '+ obj.Title + '\
                                </h5>\
                                <p class="nz-overflow-ellipsis-3">\
                                   '+ obj.Memo + '\
                                </p>\
                            </div>\
                        </a>\
                    </div>\
                    ';

                });
                $('#furtherReading').empty();
                $('#furtherReading').append(furtherReading);
            }
        });
        //延伸閱讀輪播
        $('#furtherReading').slick({
            arrows: true,
            dots: true,
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 3000,
            centerMode: true,
            centerPadding: '0px',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        centerPadding: '0px',

                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        centerPadding: '0px',
                    }
                }
            ]
        });
        $('#furtherReading .slick-next').html('<i class="fas fa-chevron-right"></i>');
        $('#furtherReading .slick-prev').html('<i class="fas fa-chevron-left"></i>');
        //#endregion

        //#region 學習推薦
        var p2 = {
            "grfNo": DefaultGrfno4,
            "infoCoverAttTypeCode": infoCoverType,
            "langCode": langCode,
            "typeMgdNo": DefaultTypeMgdNo4,
            "searchKeyword": DefaultKeyword4,
            "searchJustOnline": "Y",
            "pageSize": 15,
            "currentPage": 1,
            "sortFields": sortFields,
            "sortDirection": sortDirection,
        };

        $.ajax({
            type: "GET",
            // url: webURL + "/api/TM_CMS_Info_GetList?" + $.param(p2), // TODO:開發註解
            url: webURL2 + "fakeData/TM_CMS_Info_GetList.json",//本機開發用
            contentType: "application/json",
            dataType: "json",
            async: false,
            cache: false,
            success: function (data) {
                var RecommendList = '';
                $.each(data.ItemList, function (index, obj) {
                    RecommendList += '\
                        <div>\
                            <!-- Simple card -->\
                            <div class="user_pic">\
                                <div class="img_mask m-auto d-flex justify-content-center">';
                    if (obj.CoverURL != '') {
                        RecommendList += '<img style="saturate(1)" src="' + obj.CoverURL + '" alt="' + obj.Name + '-預覽圖" />';
                    } else {
                        RecommendList += '<img src="../Images/' + storyCode + '/default_commend_peo.jpg" alt="預設圖"/>';
                    }
                    RecommendList += '\
                                </div>\
                            </div>\
                            <div class="card">\
                                <div class="card-body recommend-card">\
                                    <div class="con mt-4 mb-3 text_ellipsis_4">'+ obj.Memo + '</div>\
                                    <div class="d-flex flex-column text-right">\
                                        <div class="name nz-overflow-ellipsis-2">'+ obj.Title + '</div>\
                                        <div class="position nz-overflow-ellipsis-2">'+ obj.Keyword + '</div>\
                                    </div>\
                                </div> <!-- end card-body-->\
                            </div> <!-- end card-->\
                        </div>';
                });
                $('#peo_recommend').empty();
                $('#peo_recommend').append(RecommendList);
            }
        });

        //學習推薦輪播
        $('#peo_recommend').slick({
            arrows: true,
            dots: true,
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 3000,
            centerMode: true,
            centerPadding: '0px',
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                        centerPadding: '0px',

                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        centerPadding: '0px',
                    }
                }
            ]
        });
        //#endregion

    },
    BindCourseList: function (listType, pageIndex) {
        pageIndex = pageIndex == null || pageIndex < 1 ? 1 : pageIndex;
        var searchMemNo = sessionStorage.getItem("memno");
        var searchMemName = sessionStorage.getItem("memname");

        if (sortTypeCode == null || sortTypeCode == '') {
            sortTypeCode = $("#ddlSort").val();   //排序方式代碼V
        }
        if (listType == "" || listType == null) {
            listType = sessionStorage.getItem("course_" + FoldType + "_listType");
            if (listType == "" || listType == null) {
                listType = "list";
            }
        }
        var pageSize = sessionStorage.getItem("course_" + FoldType + "_pageSize");
        if (pageSize == null) {
            pageSize = 15;
            sessionStorage.setItem("course_" + FoldType + "_pageSize", pageSize);
        }
        //#region 課程總覽
        var inParam = {
            "GetS": GetS,
            "courseType": courseType,
            "searchDurationTypeCode": searchDurationTypeCode,
            "PSID": PSID,
            "actAttribute": actAttribute,
            "holidayClass": holidayClass,
            "actConfirm": actConfirm,
            "pageSize": 18,
            "currentPage": pageIndex,
            "sortTypeCode": sortTypeCode,
            "includeTopDate": includeTopDate,
            "searchMemNo": searchMemNo,
            "searchMemName": searchMemName,
            "selectAllOrg": selectAllOrg,
            "GetCover": (listType == "list" ? "N" : "Y"), //是否顯示封面圖片Y或N，預設N
            "GetAttributeList": "N"
        };
        $.ajax({
            // type: "POST", // TODO:開發註解
            // url: webURL + "/api/COL06_GetWithHolidayA", // TODO:開發註解
            type: "GET",
            url: webURL2 + "fakeData/COL06_GetWithHolidayA.json",//本機開發用
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(inParam),
            async: false,
            cache: false,
            success: function (data) {
                var courseContent = '';
                if (listType == 'list') {
                    if (data.ItemList.length != 0) {
                        //表格清單
                        $.each(data.ItemList, function (index, obj) {
                            var topDate = obj.TopDate.toDateTimeCache();
                            var ActBeginDate = obj.ActBeginDate;
                            var ActEndDate = obj.ActEndDate;
                            courseContent += '\
                    <tr>\
                        <td class="nz-table-title">\
                            <a href="'+ webURL + '/Home/LessonData/' + obj.PosterGUID + '" class="nz-primary d-flex" data-toggle="tooltip" data-placement="top" target="_itriCollege_" title="" data-original-title="' + obj.Subject + '">';
                            if (topDate != "") {
                                courseContent += '<div class="i-star mr-2"><i class="fas fa-star"></i></div>';
                            }
                            courseContent += '<div class="d-lg-inline-block d-block">' + obj.Subject + '</div>\
                            </a>\
                        </td>';
                            //obj.Location
                            //P：實體、D：線上同步、L：雲端自學、C：混成(實體+線上同步)
                            if (obj.ActAttribute == 'L') {//雲端自學
                                courseContent += '\
                            <td class="d-md-none d-block" data-th="地點">\
                              <div class="d-inline-block nz-dark-gray" data-toggle="tooltip" data-placement="top" title="雲端自學">\
                                <i class="fas fa-photo-video"></i>\
                              </div>\
                            </td>\
                            <td class="d-none d-md-block" data-th="地點/型態">\
                              <div class="d-inline-block nz-dark-gray" data-toggle="tooltip" data-placement="top" title="雲端自學">\
                                <i class="fas fa-photo-video"></i>\
                              </div>\
                            </td>';
                            } else if (obj.ActAttribute == 'P') {//實體
                                courseContent += '<td class="d-md-none d-block" data-th="地點">\
                                <div class="d-inline-block nz-dark-gray" data-toggle="tooltip" data-placement="top" data-original-title="實體課程">\
                                    '+ obj.Location + '</div>\
                            </td>\
                            <td class="d-none d-md-block" data-th="地點/型態">\
                                    <div class="d-inline-block nz-dark-gray" data-toggle="tooltip" data-placement="top" data-original-title="實體課程">\
                                        '+ obj.Location + '</div>\
                                </td>';
                            } else if (obj.ActAttribute == 'C') {//混成
                                courseContent += '\
                            <td class="d-none d-md-block" data-th="地點/型態">\
                                <div class="d-inline-block nz-dark-gray" data-toggle="tooltip" data-placement="top" data-original-title="實數混成">\
                                    '+ obj.Location + ' <i class="fas fa-laptop-house"></i>\
                                </div>\
                            </td>\
                            <td class="d-md-none d-block" data-th="地點">\
                                    <div class="d-inline-block nz-dark-gray" data-toggle="tooltip" data-placement="top" data-original-title="實數混成">\
                                        '+ obj.Location + ' <i class="fas fa-laptop-house"></i>\
                                    </div>\
                                </td>';
                            } else if (obj.ActAttribute == 'D') {//數位直播
                                courseContent += '\
                            <td class="d-md-none d-block" data-th="地點">\
                                <div class="d-inline-block nz-dark-gray" data-toggle="tooltip" data-placement="top" data-original-title="數位直播"><i class="fas fa-video"></i></div>\
                            </td>\
                            <td class="d-none d-md-block" data-th="地點/型態">\
                                    <div class="d-inline-block nz-dark-gray" data-toggle="tooltip" data-placement="top" data-original-title="數位直播"><i class="fas fa-video"></i></div>\
                            </td>';
                            }
                            courseContent += '<td data-th="日期">' + ActBeginDate.toDate() + '~' + ActEndDate.toDate() + '</td>\
                            <td data-th="時數">'+ obj.Duration + 'hr</td>\
                    </tr>';
                        });
                        $('#Tbody').empty();
                        $('#Tbody').append(courseContent);
                        $('[data-toggle="tooltip"]').tooltip();
                        $("#courseListTable").show();
                        $("#courseListCard").hide();
                        $("#divNone").hide();
                    } else {
                        $("#courseListTable").hide();
                        $("#courseListCard").hide();
                        $("#divNone").show();
                    }
                    BasePage.BindPager3("1", data.StartIndex, data.EndIndex, data.TotalItemCount, data.CurrentPage, data.TotalPageCount, pageSize, "course_" + FoldType + "_pageSize", DefaultPage.BindCourseList);
                    sessionStorage.setItem("course_" + FoldType + "_pageIndex", pageIndex);
                    sessionStorage.setItem("course_" + FoldType + "_listType", "list");
                    $("#courseListTable").addClass('show active');
                    $("#courseListCard").removeClass('show active');
                } else if (listType == 'block') {

                    if (data.ItemList.length != 0) {
                        //表格清單
                        $.each(data.ItemList, function (index, obj) {
                            var topDate = obj.TopDate.toDateTimeCache();
                            var ActBeginDate = obj.ActBeginDate;
                            var ActEndDate = obj.ActEndDate;
                            let imgUrl = 'img/example/img-' + (Math.floor(Math.random() * 5) + 1) + '.JPG'
                            courseContent += '\
                <div class="col-sm-6 col-md-4">\
                  <div class="nz-course-bg-card">\
                    <a href="'+ webURL + '/Home/LessonData/' + obj.PosterGUID + '"> \
                      <div class="nz-course-bg-card-img">';
                            if (obj.CoverURL == '') {
                                courseContent += '<img class="nz-img" src="' + imgUrl + '" alt="' + obj.Subject + '" />';
                            } else {
                                courseContent += '<img class="nz-img" src="' + obj.CoverURL + '" alt="' + obj.Subject + '" />';
                            }
                            courseContent += '</div>\
                      <div class="nz-course-bg-card-info">';
                            //obj.Location
                            //P：實體、D：線上同步、L：雲端自學、C：混成(實體+線上同步)
                            if (obj.ActAttribute == 'L') {//雲端自學
                                courseContent += '\
                                <div class="nz-course-status nz-bg-primary" data-toggle="tooltip" data-placement="top" data-original-title="雲端自學"><i class="fas fa-photo-video"></i></div>';
                            } else if (obj.ActAttribute == 'P') {//實體
                                courseContent += '\
                                <div class="nz-course-status nz-bg-primary" data-toggle="tooltip" data-placement="top" data-original-title="實體課程">'+ obj.Location + ' <i class="fas fa-user-friends"></i></div>';
                            } else if (obj.ActAttribute == 'C') {//混成
                                courseContent += '\
                                <div class="nz-course-status nz-bg-primary" data-toggle="tooltip" data-placement="top" data-original-title="實數混成">'+ obj.Location + ' <i class="fas fa-laptop-house"></i></div>';
                            } else if (obj.ActAttribute == 'D') {//數位直播
                                courseContent += '\
                                <div class="nz-course-status nz-bg-primary" data-toggle="tooltip" data-placement="top" data-original-title="數位直播"><i class="fas fa-video"></i></div>';
                            }
                            courseContent += ' <div class="nz-course-status nz-bg-dark-gray">' + obj.Duration + 'hr</div>\
                        <h5 class="nz-course-bg-card-title nz-black nz-overflow-ellipsis-2 card-title-h">';
                            if (topDate != "") {
                                courseContent += '<span class="i-star mr-2"><i class="fas fa-star"></i></span>' + obj.Subject;
                            }
                            courseContent += obj.Subject + '\
                        </h5>\
                        <p class="nz-overflow-ellipsis-3">\
                          '+ obj.ProdSyllabus + '\
                        </p>\
                        <div class="nz-know-date">' + ActBeginDate.toDate() + '~' + ActEndDate.toDate() + '</div>\
                      </div>\
                    </a>\
                  </div>\
                </div>';
                        });
                        $('#curseCardDiv').empty();
                        $('#curseCardDiv').append(courseContent);
                        $('[data-toggle="tooltip"]').tooltip();
                        $("#courseListCard").show();
                        $("#courseListTable").hide();
                        $("#divNone").hide();
                    } else {
                        $("#courseListTable").hide();
                        $("#courseListCard").hide();
                        $("#divNone").show();
                    }
                    BasePage.BindPager3("2", data.StartIndex, data.EndIndex, data.TotalItemCount, data.CurrentPage, data.TotalPageCount, pageSize, "course_" + FoldType + "_pageSize", DefaultPage.BindCourseList);
                    sessionStorage.setItem("course_" + FoldType + "_pageIndex", pageIndex);
                    sessionStorage.setItem("course_" + FoldType + "_listType", "block");
                    $("#courseListCard").addClass('show active');
                    $("#courseListTable").removeClass('show active');
                }
            }
        });
        //#endregion
    },
    BindProductList: function (FolderGuid) {
        var MemNo = sessionStorage.getItem("memno");
        var MemName = sessionStorage.getItem("memname");
        if (MemNo == "" || MemNo == null) {
            MemNo = BaseFunction.EmptyGuid;
        }
        //console.log(FolderGuid);
        //FolderGuid = '';//本機測試
        //#region 產品目錄
		var p = {
			"PSID": FolderGuid
		}
        var inParam = {
            "GetS": 'Y',
            "courseType": courseType,
            "searchDurationTypeCode": searchDurationTypeCode,
            "subPSID": FolderGuid,
            "actAttribute": actAttribute,
            "holidayClass": holidayClass,
            "actConfirm": actConfirm,
            "pageSize": 15,
            "currentPage": 1,
            "sortTypeCode": sortTypeCode,
            "includeTopDate": includeTopDate,
            "searchMemNo": MemNo,
            "searchMemName": MemName,
            "selectAllOrg": selectAllOrg,
            "GetCover": "N", //是否顯示封面圖片Y或N，預設N
            "GetAttributeList": "N"
        };
        $.ajax({
            // type: "POST", // TODO:開發註解
            //url: webURL + "/api/COL63_GetFeature",
			// url: webURL + "/api/COL65_GetFeatureMenu?" + $.param(p), // TODO:開發註解
            type: "GET",//本機開發用
            url: webURL2 + "fakeData/product.json",//本機開發用
            contentType: "application/json",
            dataType: "json",
            //data: JSON.stringify(inParam),
            async: false,
            cache: false,
            success: function (data) {
                //console.log(data);
                var productContent = '';
                if (data.ItemList.length != 0) {
                    $.each(data.ItemList, function (index, obj) {

                        productContent += '\
                        <div class="pow-card">\
                                <div>\
                                    <div class="pow-card-p">\
                                        <div class="d-flex justify-content-between align-content-start">\
                                            <h3 class="nz-black nz-overflow-ellipsis-2 card-title-h">'+ obj.ProductName + '</h3>';
                        var p = {
                            bMemNo: MemNo,
                            crsNo: obj.ProductGUID
                        };
                        $.ajax({
                            type: "GET",
                            // url: webURL + "/api/TM_Course_Favority_GetOne?" + $.param(p), // TODO:開發註解
                            url: webURL2 + "fakeData/favority.json",//本機開發用
                            contentType: "application/json",
                            dataType: "json",
                            async: false,
                            cache: false,
                            success: function (data) {
                                if (data.ErrorMessage != "") {
                                    productContent += '<a class="new-notify divFavbox" productguid="' + obj.ProductGUID + '" productname="' + obj.ProductName + '" title="新課通知"><i class="far fa-heart"></i></a>';
                                }
                                else {
                                    if (MemNo == data.BMemNo) {
                                        productContent += '<a class="new-notify divFavbox" productguid="' + obj.ProductGUID + '" productname="' + obj.ProductName + '" title="新課通知"><i class="fas fa-heart"></i></a>';
                                    } else {
                                        productContent += '<a class="new-notify divFavbox" productguid="' + obj.ProductGUID + '" productname="' + obj.ProductName + '" title="新課通知"><i class="far fa-heart"></i></a>';
                                    }
                                }
                            }
                        });
                        productContent += '</div>\
                                        <p class="pow-overflow-ellipsis">\
                                            <!---調整 css .pow-overflow-ellipsis 的 webkit-line-clamp ，可控制最多顯示行數，目前設定 10-->';
                        productContent += obj.ProdSyllabus.replace(/\r\n/g, '<br>');
                        productContent += '</p>\
                                        <a class="pow-card-btn" href="'+ webURL + '/Home/LessonList?getS=Y&productGUID=' + obj.ProductGUID +'" target="_blank">\
                                            近期開班資訊\
                                            <span class="pow-card-angle"><i class="fas fa-angle-right"></i></span>\
                                        </a>';
                        var inParam = {
                            "GetS": 'Y',
                            "courseType": courseType,
                            "searchDurationTypeCode": searchDurationTypeCode,
                            "subPSID": FolderGuid,
                            "productGUID": obj.ProductGUID,
                            "actAttribute": actAttribute,
                            "holidayClass": holidayClass,
                            "actConfirm": actConfirm,
                            "pageSize": 15,
                            "currentPage": 1,
                            "sortTypeCode": sortTypeCode,
                            "includeTopDate": includeTopDate,
                            "searchMemNo": MemNo,
                            "searchMemName": MemName,
                            "selectAllOrg": selectAllOrg,
                            "GetCover": "N", //是否顯示封面圖片Y或N，預設N
                            "GetAttributeList": "N"
                        };
                        $.ajax({
                            // type: "POST", // TODO:開發註解
                            // url: webURL + "/api/COL63_GetFeature", // TODO:開發註解
                            type: "GET",//本機開發用
                            url: webURL2 + "fakeData/COL63_GetFeature.json",//本機開發用
                            contentType: "application/json",
                            dataType: "json",
                            data: JSON.stringify(inParam),
                            async: false,
                            cache: false,
                            success: function (data) {
                                //console.log(data);
                                //console.log(data.ItemList[0].PosterGUID);	
                                var MinActBeginDate = data.MinActBeginDate;
                                var MaxActBeginDate = data.MaxActBeginDate;
                                if (data.ItemList.length != 0) {
                                    //顯示若該產品目前無可報名之課程公告，則顯示上一次已開班之課程公告(前一年～後一年之內的)
                                    productContent += '<a class="pow-card-date" href="' + webURL + '/Home/LessonData/' + data.ItemList[0].PosterGUID + '" target="_blank">' + MinActBeginDate.toDate() + '~' + MaxActBeginDate.toDate() + '</a>';
                                } else if (data.ItemList.length == 0) {
                                    //顯示即將開班
                                    productContent += '<span class="pow-card-date" href="#">即將開班</span>';
                                }
                            }
                        });
						
                        
                        productContent += '</div>\
                                </div>\
                            </div>\
                        ';
                    });
                    $('#catalog1').empty();
                    $('#catalog1').append(productContent);
                } else {
                    productContent += '<div class="text-center my-5">尚未有產品資料</div>';
                    $('#catalog1').empty();
                    $('#catalog1').append(productContent);
                }
            }
        });
        $('#catalog1').not('.slick-initialized').slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1028,
                    settings: {
                        arrows: false,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        });
        $('#catalog1 .slick-next').html('<i class="fas fa-chevron-right"></i>');
        $('#catalog1 .slick-prev').html('<i class="fas fa-chevron-left"></i>');
        //#endregion

        //我的最愛
        $(".divFavbox").click(function () {
            productName = $(this).attr('productname');
            productGUID = $(this).attr('productguid');
            console.log(productName, productGUID);
            var MemNo = sessionStorage.getItem("memno");
            if (MemNo == "" || MemNo == null) {
                MemNo = "00000000-0000-0000-0000-000000000000";
                alert("請先登入帳號，才能收藏最愛喔！！");
                return;
            }
            var MemName = sessionStorage.getItem("memname");
            var Fav = $(this).find("i").attr("class");
            if (Fav == 'fas fa-heart') {
                $(this).html('<i class="far fa-heart"></i>');
            } else if (Fav == 'far fa-heart') {
                $(this).html('<i class="fas fa-heart"></i>');
            }

            /* TypeCode = 1 = 課程，TypeCode=2=文章，TypeCode=3=領域專頁產品*/
            var p = {
                bMemNo: MemNo,
                crsNo: productGUID
            };
            $.ajax({
                type: "GET",
                url: webURL + "/api/TM_Course_Favority_GetOne?" + $.param(p),
                contentType: "application/json",
                dataType: "json",
                async: false,
                cache: false,
                success: function (data) {
                    if (data.ErrorMessage != "") {
                        //上傳收藏清單
                        var inParam = {
                            BMemNo: MemNo,
                            BMemName: MemName,
                            TypeCode: 3,
                            CrsTitle: productName,
                            CrsNo: productGUID
                        };
                        $.ajax({
                            type: "POST",
                            url: webURL + "/api/TM_Course_Favority_Insert",
                            contentType: "application/json",
                            dataType: "json",
                            data: JSON.stringify(inParam),
                            async: true,//非同步
                            cache: false,
                            success: function (data) {
                                if (data.ErrorMessage != "") {
                                    alert(data.ErrorMessage);
                                    return;
                                }
                                else {
                                    alert("已收藏課程。");
                                }
                            }
                        });
                    }
                    else {
                        //刪除收藏
                        var favNo = data.FavNo;
                        var p = {
                            favNo: favNo,
                        };
                        $.ajax({
                            type: "GET",
                            url: webURL + "/api/TM_Course_Favority_Delete?" + $.param(p),
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
                                    alert("已移除收藏。");
                                }
                            }
                        });
                    }
                }
            });
        });
    },
}