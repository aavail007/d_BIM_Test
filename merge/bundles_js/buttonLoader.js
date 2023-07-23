(function(n) {
  n(".has-spinner").attr("disabled", !1);
  n.fn.buttonLoader = function(t) {
      var i = n(this), r;
      if (t == "start") {
          if (n(i).attr("disabled") == "disabled")
              return !1;
          n(".has-spinner").attr("disabled", !0);
          n(i).attr("data-btn-text", n(i).html());
          r = "Loading";
          n(i).attr("data-load-text") != undefined && n(i).attr("data-load-text") != "" && (r = n(i).attr("data-load-text"));
          n(i).html('<span class="spinner"><i class="fa fa-spinner fa-spin" title="button-loader"><\/i><\/span> ' + r);
          n(i).addClass("active")
      }
      t == "stop" && (n(i).html(n(i).attr("data-btn-text")),
      n(i).removeClass("active"),
      n(".has-spinner").attr("disabled", !1))
  }
}
)(jQuery)
