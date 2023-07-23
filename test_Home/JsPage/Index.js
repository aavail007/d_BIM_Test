////新首頁
$(document).ready(function () {
    Index.BindUI();
    Index.BindEvent();
    Index.BindData();
});
var Index = {
    BindUI: function () {

        //if ($(window).width() > 1367) {
        //    $("#alesson").attr("data-href","../Home/LessonList");
        //    //連結到課程資料
        //    $("#alesson").click(function () {
        //        window.location = $(this).data("href");
        //    });
        //} 
        //載入進階搜尋
        Home_Layout.LessonBar();
        

    },
    BindEvent: function () {
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

            window.location = "LessonList?Location=" + searchLocationList + "&PSId=" + PSID + "&actAttribute=" + actAttribute + "&ActConfirm=" + actConfirm + "&searchKeyword=" + searchKeyword + "&searchDurationTypeCode=" + searchDurationTypeCode + "&holidayClass=" + holidayClass + "&sortTypeCode=" + sortTypeCode;
            //Home_LessonList.BindData("", 1);
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

                window.location = "LessonList?Location=" + searchLocationList + "&PSId=" + PSID + "&actAttribute=" + actAttribute + "&ActConfirm=" + actConfirm + "&searchKeyword=" + searchKeyword + "&searchDurationTypeCode=" + searchDurationTypeCode + "&holidayClass=" + holidayClass + "&sortTypeCode=" + sortTypeCode;
                //window.location = "../Home/LessonList?searchKeyword=" + encodeURIComponent(k);
            }
        });
    },
    BindData: function () {
    
    }
}