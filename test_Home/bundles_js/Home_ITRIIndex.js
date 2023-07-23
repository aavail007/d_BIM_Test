/* Minification failed. Returning unminified contents.
(123,46-47): run-time error JS1003: Expected ':': }
(124,46-47): run-time error JS1003: Expected ':': }
(127,44-45): run-time error JS1003: Expected ':': }
(130,47-48): run-time error JS1003: Expected ':': }
 */
////002
$(document).ready(function () {
    Home_Layout.SearchBar();
    Home_Default.BindUI();
    Home_Default.BindEvent();
    Home_Default.SelfLearn();
    Home_Default.BindData();
    
});

var Home_Default = {
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
        $('#txtEpaperEmail').keypress(function (e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if (code == 13) {
                e.preventDefault();
                sessionStorage.setItem('EpaperEmail', $('#txtEpaperEmail').val());
                window.location = webURL + '/Home/EpaperItem';
            }

        });
        
    },
    BindData: function () {
        //console.log(BaseFunction.NowDateTimeSecond());
        langCode = sessionStorage.getItem("Home_Layout_ddlLangCode");
        var p = {
            //首頁參數
            "langCode": langCode, //語系
            "carouselGrfNo": grfNoCarousel, //大輪播
            "carouselCoverAttTypeCode": carouselPicType, //大輪播
            "carouselVideoAttTypeCode": carouselMp4Type,//大輪播
            "hotLessonGrfNo": grfNoHotLesson,//主打課程輪播清單
            "hotLessonCoverAttTypeCode": hotLessonCover,//主打課程輪播清單
            "openLessonCount": 10,//課程總覽清單(前5筆)
            "selfStudyCount": 4,//雲端自學清單(前4筆)
            "infoFunNo": funNoInfo,
            "infoGrfTypeCode": typeCodeInfo,
            "infoCoverAttTypeCode": infoCoverType,
            "youtubeGrfTitle": "直播頻道",//影音專區輪播清單
            "recommendGrfTitle": "推薦證言",//推薦證言輪播清單
            "articleGrfTitle": "學習專欄", //學習專欄清單(前3筆)
            "articleCount": 3,//學習專欄清單(前3筆)
            "resourceGrfTitle": "人力發展資源",//人力發展資源輪播清單
            "youtubeCount": 5,//影音專區輪播清單(前5筆)
            "_": BaseFunction.NowDateTimeCache()//cache 10分鐘
        }

        $.ajax({
            type: "GET",
            url:webURL + "/api/COL01_Default?" + $.param(p),
            //url: webURL + "/JsPage/H002/Home/default.json",
            contentType: "application/json",
            dataType: "json",
            async: true,//非同步
            cache: true,//快取，配合_參數
            success: function (data) {
                if (data.ErrorMessage != "") {
                    alert(data.ErrorMessage);
                }
                else {
/*                    console.log(data);*/
                    //console.log(data.ArticleList);
                    //console.log(BaseFunction.NowDateTimeSecond());
                    Home_Default.ShowCarousel(data, Home_Default.ShowOther);
                }
            },
            beforeSend: function () {
                $('#loading').modal('show');
            },
            complete: function () {
                setTimeout(function () {
                    $('#loading').modal('hide');
                }, 500);
            }
        });
        
    },
    ShowCarousel: function (data, callback) {
        //#region 上方大圖輪播
        var CarouselData = [];
        var CoverURL = [];
        var VideoURL = [];
        var BigTitle = [];
        var SubTitle = [];
        var BigTitleData = [];
        var SubTitleData = [];
        var LinkURL = [];
        var LinkURLData = [];
        var MenuNum = '';
        var MenuCountBox = [];
        var MenuCount;
        if (data.CarouselList.length > 0) {
            for (let i = 0; i < data.CarouselList.length; i++) {
                /*抓圖片*/
                CoverURL = data.CarouselList[i].CoverURL;
                /*抓影音*/
                if (data.CarouselList[i].VideoURL != '') {
                    VideoURL = data.CarouselList[i].VideoURL;
                }
                /*放輪播*/
                if (data.CarouselList[i].VideoURL == '') {
                    CarouselData.push({ src: CoverURL });
                } else {
                    CarouselData.push({ src: CoverURL, video: { src: [VideoURL], loop: false, mute: true } });
                }
                /*抓標題*/
                BigTitle = data.CarouselList[i].Title;
                SubTitle = data.CarouselList[i].SubTitle;
                BigTitleData.push({ BigTitle });
                SubTitleData.push({ SubTitle });
                /*抓連結*/
                LinkURL = data.CarouselList[i].LinkURL;
                LinkURLData.push({ LinkURL });
                //建立輪播選單內容
                MenuCount = i;
                MenuCountBox.push({ MenuCount });
                if (i < 10) {
                    MenuNum += '<a href="#" data-method="Num' + MenuCount + '" class="menu_num text-white" id="Num' + MenuCount + '"> 0' + (i + 1) + '</a>'
                } else {
                    MenuNum += '<a href="#" data-method="Num' + MenuCount + '" class="menu_num text-white" id="Num' + MenuCount + '">' + (i + 1) + '</a>'
                }
                $("#divMenuNum").empty();
                $("#divMenuNum").append(MenuNum);
            }
            //建立輪播選單功能
            $.each(MenuCountBox, function (index, obj) {
                //console.log(obj.MenuCount);
                $('#Num' + obj.MenuCount).on('click', function () {
                    $("#vegas").vegas('jump', obj.MenuCount);
                });
            });

            $("#vegas").vegas({
                loop: true,
                firstTransition: 'blur2',
                animation: 'random',
                slides: CarouselData,
                overlay: webURL + "/Images/H002/overlays/01.png",
                play: function () {
                    setTimeout(function () {
                        callback(data);
                    }, 500);
                },
                walk: function (index, slideSettings) {
                    //console.log("Slide index " + index + " image " + slideSettings.src);
                    var content = "";
                    //if (index == index) {
                    $("#bigcarousel_title").empty();
                    content += ' \
                                    <a href="'+ LinkURLData[index].LinkURL + '" class="titleE" id ="big_title_en"  title="[' + BigTitleData[index].BigTitle + '] 連結">' + BigTitleData[index].BigTitle + '</a> \
                                    <div class="titleC" id="big_title_ch">'+ SubTitleData[index].SubTitle + '</div> ';
                    $("#bigcarousel_title").append(content);
                    $("#bigcarousel_title").show();
                    //}
                }
            });
        } else {
            $("#vegas").hide();
        }
        //#endregion
    },
    ShowOther: function (data) {
        $("#divLoading").hide(0, function () { $("#divMain").show(); });
        //#region 主打課程
        $('.hot_carousel').empty();
        var HotLesson = '';
        $.each(data.HotLessonList, function (index, obj) {
            //是否另開新視窗
            var aTarget = '';
            if (data.HotLessonList[index].UrlTitle == "Y") {
                aTarget = '_blank';
            } else {
                aTarget = '_self';
            }
            $('#aHotLessonMore').attr('href', obj.LinkURL);
            $('#aHotLessonMore').hide();
            let DateNPlace = obj.DateNPlace;
            const DateNPlaceBox = DateNPlace.split("\n");
            HotLesson += '\
                      <div>\
                        <div class="row">\
                            <div class="col-12 mt-3">\
                                <div class="row">\
                                    <div class="hot_con_boss col-lg-5  d-flex align-items-center">\
                                        <div>\
                                        <div class="info bigTitle mt-1 ml-2 text_ellipsis_1  font-weight-bold">'+ obj.Title + '</div>\
                                        <div class="info con ml-3 mt-3 text_ellipsis_2">'+ obj.SubTitle + '</div>';
            if (DateNPlace != '') {
                HotLesson += '\
                                        <div class="info date ml-3 mt-2">'+ DateNPlaceBox[0] + '</div>\
                                        <div class="info place ml-3 mt-1">'+ DateNPlaceBox[1] + '</div>';
            }
            HotLesson += '\
                                        <div class="line ml-3 mt-3 mt-lg-4"></div>\
                                        <a class="read_more ml-3 mt-2" href="'+ obj.LinkURL + '" title="到 [' + obj.Title + '] 的READ MORE" target="'+aTarget+'">\
                                            <span>更多</span>\
                                            <i class="uil  uil-angle-right-b" style="padding-top: 5px;">\
                            <!--<svg width = "13px" height = "11px" viewBox = "0 0 13 11" version = "1.1" >\
                                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                                <g id="view-more" transform="translate(-171.000000, -25.000000)" fill="#02AFB8">\
                                    <g id="Group-4-Copy-3">\
                                            <path d="M178.3125,29.5833333 L171.8125,29.5833333 C171.325,29.5833333 171,29.95 171,30.5 C171,31.05 171.325,31.4166667 171.8125,31.4166667 L178.3125,31.4166667 L178.3125,36 L184,30.5 L178.3125,25 L178.3125,29.5833333 Z" id="Path-Copy" />\
                                    </g>\
                                </g>\
                            </g>\
                            </svg >-->\
                                           </i >\
                                        </a></div>\
                                    </div>\
                                    <div class="hot_pic_boss col-lg-7">\
                                        <div class="d-flex flex-column">\
                                            <div class="col-auto hot_pic img_mask">\
                                                <img src="'+ obj.CoverURL + '" alt="[' + obj.Title + ']的預覽圖"/>\
                                            </div>\
                                            <div class="col-auto mt-3 mt-lg-0 d-none">\
                                                <div class="view_loca">\
                                                    <a href="'+ obj.LinkURL + '" class="btn_more_box" title="到 [' + obj.Title + '] 的VIEW MORE">\
                                                        <span class="">VIEW MORE</span>\
                                                        <i><img src="'+ webURL + '/Images/' + storyCode + '/icon_arrow_w.svg" alt="白色箭頭" /></i>\
                                                    </a >\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div></div>';
        });
        $('.hot_carousel').append(HotLesson);
        //主打課程輪播
        $('.hot_carousel').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
        });
        $('.hot_carousel').slick('setPosition');
        //#endregion
        //#region 課程總覽(確定開班)
        $('#openLess_box').empty();
        var OpenLesson = '';
        OpenLesson += '<div class="row">';
        $.each(data.OpenLessonList, function (index, obj) {
            let Date = obj.ActBeginDate.toString().toDate();
            OpenLesson += '\
                        <div class="col-sm-6">\
                            <a href="'+ webURL + '/Home/LessonData?PosterGUID=' + obj.PosterGUID + '" class="d-flex mr-0 mr-lg-5" title="到 [' + obj.Title + ']">\
                                <div class="openLesson">\
                                    <div class="row align-items-center">\
                                        <div class="col-12 ">\
                                            <div class="row align-items-center">\
                                                <div class="col-auto pr-0">';
            $.each(obj.KeywordList, function (index2, obj2) {
                OpenLesson += '<div class="tags border  text-primary">' + obj2.Title + '</div>';
            });
            OpenLesson += '\
                                                </div>\
                                                <div class="col-auto date">'+ Date + '</div>\
                                            </div>\
                                            <div class="con mt-2">\
                                                <div class="text_ellipsis_1 float-left">'+ obj.Title + '</div>\
                                            </div>\
                                        </div>\
                                        <div class="arrow_animated d-none col-2 flex-row-reverse">\
                                            <svg class="mr-3" width="16px" height="11px" viewBox="0 0 16 11" version="1.1">\
                                                <g transform="translate(-239.000000, -1313.000000)" fill="#CECECE">\
                                                    <path d="M249.4,1317.33333 L240.6,1317.33333 C240.12,1317.33333 239.8,1317.68 239.8,1318.2 C239.8,1318.72 240.12,1319.06667 240.6,1319.06667 L249.4,1319.06667 L249.4,1323.4 L255,1318.2 L249.4,1313 L249.4,1317.33333 Z" id="Path-Copy-7" />\
                                                </g>\
                                            </svg>\
                                        </div>\
                                    </div>\
                                </div>\
                            </a>\
                        </div>';
        });

        $('#openLess_box').append(OpenLesson);

        OpenLesson += '</div>';
        $('#aLessonMore').attr('href', webURL + '/Home/LessonList');
        //智慧資通訊輪播
        $('.slick_carousel').slick({
            dots: true,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 10000,
            centerMode: true,
            centerPadding: '0px',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        centerPadding: '0px',

                    }
                }
            ]
        });
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            $('.slick_carousel').slick('setPosition');
        })
        //#endregion 
        
        //#region 影音專區
        var VideoList = '';
        var VideGrfNo;
        $.each(data.VideoList, function (index, obj) {
            if (index < 5) {
                //console.log(obj);
                VideGrfNo = obj.GrfNo;
                VideoList += '\
                    <div class="col-md-3">\
                    <a href="'+ webURL + '/Home/InfoData?grfNo=' + obj.GrfNo + '&infNo=' + obj.InfNo + '" class="d-block" >\
                                    <div class="position-relative">\
                                        <div class="video-container wow slideInLeft">\
                                                <img src="'+ obj.CoverURL + '" class="img-fluid" alt="影音專區的預覽圖"/>\
                                                <!--<iframe width="560" height="315" src="'+ obj.VideoURL + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen volumn="0"></iframe>-->\
                                            </div>\
                                        <div class="icon_play">\
                                            <svg viewBox="0 0 106.39 106.39" fill="#14A6AE">\
                                                <path class="cls-1" d="M55.78,2.57A53.2,53.2,0,1,0,109,55.94,53.22,53.22,0,0,0,55.78,2.57Zm23.92,57c-3.06,1.88-25.29,14.75-33.32,19.37a4.86,4.86,0,0,1-4.45.52,3.09,3.09,0,0,1-2.12-3.1c0-6.79-.07-33.44-.06-40a8.73,8.73,0,0,1,.14-1.84,3.91,3.91,0,0,1,5.9-2.27C50.67,35.13,73,48.34,79.33,52.05a4.72,4.72,0,0,1,2.39,2.6A4.41,4.41,0,0,1,79.7,59.57Z" transform="translate(-2.57 -2.57)" />\
                                            </svg >\
                                        </div>\
                                    </div >\
                                            <div>\
                                        <div class="info bigTitle  mt-1  font-weight-bold">'+ obj.Title + '</div>\
                                    </div>\
                                </a>\
                            </div> ';
            }
        });
        $('#movie_carousel').empty();
        $('#movie_carousel').append(VideoList);
        $('#aVideoMore').attr('href', webURL + '/Home/InfoList?grfNo=' + VideGrfNo);
        //影音專區輪播
        $('#movie_carousel').slick({
            arrows: true,
            dots: true,
            slidesToShow:4,
            autoplay: true,
            autoplaySpeed: 3000,
            centerMode: true,
            centerPadding: '0px',
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                        centerPadding: '0px',

                    }
                },
                {
                    breakpoint: 991,
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
        
        //#endregion 
        
        //#region 學習專欄

        var ArticleList = '';
        var ArticleGrfNo;
        $.each(data.ArticleList, function (index, obj) {
            ArticleGrfNo = obj.GrfNo;
            ArticleList += '\
                        <a href="'+ webURL + '/Home/InfoData?grfNo=' + obj.GrfNo + '&infNo=' + obj.InfNo + '" class="col-md-6 col-lg-4  wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s" title="到 [' + obj.Title + '] 的READ MORE">\
                            <!--Simple card-->\
                                <div class="card d-block">\
                                    <div class="lesson_img_mask">\
                                        <img class="card-img-top" src="' + obj.CoverURL + '" alt="' + obj.Title + '-預覽圖">\
                                    </div>\
                                    <div class="card-body">\
                                        <div class="hot_con_boss">\
                                            <div class="info bigTitle mt-1 ml-2 font-weight-bold text_ellipsis_2  font-weight-bold">'+ obj.Title + '</div>\
                                            <div class="info con ml-2 mt-3 text_ellipsis_3 d-none">'+ obj.Desc + '</div>\
                                            <div class="line ml-2 mt-3 d-none"></div>\
                                            <div class="read_more ml-2 mt-2 d-none" tabindex="0">\
                                                <span>更多</span>\
                                                <i class="arrow_animated"><img src="'+ webURL + '/Images/' + storyCode + '/icon_arrow.svg" alt="綠色箭頭"></i>\
                                        </div>\
                                    </div>\
                                </div> <!-- end card-body-->\
                            </div> <!-- end card-->\
                        </a>';
        });
        $('#divArticleList').empty();
        $('#divArticleList').append(ArticleList);
        $('#aArticleMore').attr('href', webURL + '/Home/InfoList?grfNo=' + ArticleGrfNo);
        $('#aArticleMore_sm').attr('href', webURL + '/Home/InfoList?grfNo=' + ArticleGrfNo);
        //#endregion
        //#region 人力資源發展
        var ResourceList = '';
        $.each(data.ResourceList, function (index, obj) {
            //console.log(obj);
            ResourceList += '\
                        <a href="'+ obj.LinkURL + '" class="" target="_blank" title="' + obj.Title + '的連結[另開新視窗]">\
                            <div class="d-flex flex-column align-items-center  justify-content-center">\
                                <div class="logo_mask d-flex align-items-center justify-content-center"><img class="img-fluid" src="'+ obj.CoverURL + '" alt="' + obj.Title + '-預覽圖" /></div>\
                                <div class="mt-2 ml-2">'+ obj.Title + '</div>\
                            </div>\
                        </a>';
        });
        $('#resource_carousel').empty();
        $('#resource_carousel').append(ResourceList);
        //人力發展資源輪播
        $('#resource_carousel').slick({
            arrows: true,
            dots: false,
            centerMode: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            autoplay: true,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 1360,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        arrows: false,
                        centerPadding: '0px',

                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrows: false,
                        centerPadding: '0px',

                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false,
                        centerPadding: '30px',

                    }
                }
            ]
        });
        //#endregion
    },
    SelfLearn: function () {
        //#region 雲端自學
        $('#self_zone .bg_default').attr('style', 'background:url("' + webURL + '/Images/H002/bg_self_study.jpg");background-repeat: no-repeat;background-size: cover;');
        $('#aSelfStudyMore').attr('href', webURL + '/Home/LessonList?actAttribute=L');
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
            async: true,//非同步
            cache: true,//快取，配合_參數
            success: function (data) {
                var SelfStudy = '';
                $("#divSelfStudyList").empty();
                if (data.ErrorMessage != "") {
                } else if (data.ItemList.length > 0) {
                    $.each(data.ItemList, function (index, obj) {
                        if (obj.CompareName != '其他') {  
                            var count = index + 1;
                            SelfStudy += '<div class="cloud_sty">\
                                        <div class="row">\
                                            <div class="col-12 my-2">\
                                                <div class="row mx-0 mx-lg-4 align-items-end">\
                                                    <h3 class="secChi text-white col-auto">'+ obj.CompareName + '</h3>\
                                                    <hr class="col" style="opacity:0.5;" />\
                                                </div>\
                                            </div>\
                                            <div id="SelfContent'+ count + '"></div>\
                                        </div>\
                                    </div>';
                            var p = {
                                "PSID": obj.PSId,
                                "searchJustValid": "Y",
                                "searchReOpen": "Y",
                            }
                            $.ajax({
                                type: "GET",
                                url: webURL + "/api/COL66_GetSelfLearnList?" + $.param(p),
                                //url: webURL + "/SelfLearnList.json",//帶假資料
                                contentType: "application/json",
                                dataType: "json",
                                async: true,//非同步
                                cache: true,//快取，配合_參數
                                success: function (data) {
                                    if (data.ErrorMessage != "") {
                                        alert(data.ErrorMessage);
                                    }
                                    else {
                                        var SelfStudyList = '';
                                        $.each(data.ItemList, function (index, obj) {
                                            if (index <= 4) {
                                                //obj.IsReOpen == true
                                                SelfStudyList += '<div class="col-12">\
                                                <a href="'+ webURL + '/Home/LessonData/'+ obj.PosterGUID +'" class="a_sty d-flex mx-0 mx-lg-4" title="到 ['+ obj.Subject +']">\
                                                    <div class="row w-100">\
                                                        <div class="col-12 mb-1">\
                                                            <div class="openLesson_info col-12">\
                                                                <div class="row">\
                                                                    <div class="">\
                                                                        <i class="mdi mdi-clock-time-four-outline"></i>\
                                                                        <span>18hrs</span>\
                                                                    </div>\
                                                                </div>\
                                                            </div>\
                                                        </div>\
                                                        <div class="col-12 ">\
                                                            <div class="info bigTitle text_ellipsis_1 font-weight-bold title_height">'+ obj.Subject +'</div>\
                                                        </div>\
                                                        <div class="arrow_animated  col-2  flex-row-reverse d-none">\
                                                            <svg class="mr-1" width="16px" height="11px" viewBox="0 0 16 11" version="1.1">\
                                                                <g transform="translate(-239.000000, -1313.000000)" fill="#CECECE">\
                                                                    <path d="M249.4,1317.33333 L240.6,1317.33333 C240.12,1317.33333 239.8,1317.68 239.8,1318.2 C239.8,1318.72 240.12,1319.06667 240.6,1319.06667 L249.4,1319.06667 L249.4,1323.4 L255,1318.2 L249.4,1313 L249.4,1317.33333 Z" id="Path-Copy-7"></path>\
                                                                </g>\
                                                            </svg>\
                                                        </div>\
                                                    </div>\
                                                </a>\
                                            </div>';
                                            }
                                        });
                                        $("#SelfContent" + count).append(SelfStudyList);
                                    }
                                }
                            });
                        }
                    });
                    $("#divSelfStudyList").append(SelfStudy);
                    //智慧資通訊輪播
                    $('#divSelfStudyList').slick({
                        dots: true,
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        autoplay: true,
                        autoplaySpeed: 5000,
                        responsive: [
                            {
                                breakpoint: 991,
                                settings: {
                                    slidesToShow: 1,
                                    arrows: false,
                                    centerPadding: '0px',

                                }
                            }
                        ]
                    });
                }
            }
        });
        
        
        
        
        //#endregion
    }
};
