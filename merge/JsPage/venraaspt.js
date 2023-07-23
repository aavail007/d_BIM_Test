//預設參數
var venraasDomain = 'college.itri.org.tw';
var venraasToken = 'o9Tr539O5L';
var lsmsid = sessionStorage.getItem('lsmsid'); //uid
if (lsmsid == null) {
    lsmsid = '';
}
function isMobileDevice() {
    var mobileDevices = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
    var isMobileDevice = 'pc'
    for (var i = 0; i < mobileDevices.length; i++) {
        if (navigator.userAgent.match(mobileDevices[i])) {
            isMobileDevice = 'mb'
        }
    }
    return isMobileDevice
}
var device = isMobileDevice();

var VenraasFn = function (typecode,recomdId, recname) {
    
    var myVenraasLogs = function () {
        if (venraasDomain != window.location.host) {
            return false
        }
        //console.log('domainName:', venraasDomain, 'token:', venraasToken, 'uid:', lsmsid, 'categ_le:', categLe, 'categ_code:', categCode, 'page_type:', pageType, 'device:', device, 'from_rec:', fromrec, 'gid:', gid);
        try {
            venraas.init({ 'domainName': venraasDomain, 'token': venraasToken });  //init() is Required for each page loading

            // DO TRACKING LOG HERE ...
            //general page with auto send (自動送出訪客瀏覽一般頁面)
            venraas.tracking('pageload|create', {
                'uid': lsmsid,               //Require if user login
                'cc_session': '',         //Optional
                'cc_guid': '',    //Optional
                'categ_le': categLe,     //Optional
                'categ_code': categCode,      //Require in goods page and category page
                'gid': gid,        //Require in goods page
                'from_rec': fromrec, //Require for evaluation
                'page_type': pageType,         //Require for evaluation
                'device': device,          //Require for device evaluation
                'web': '',           //Optional
                'keyword':''     //Require in search page and goods page
            });

            venguid = venraastool.getcookie("venguid");
            //if (venguid == 'undefined' || venguid == '') {
            //    venguid = 'test_venguid'
            //}
            vensession = venraastool.getcookie("vensession");
            //if (vensession == 'undefined' || vensession == '') {
            //    vensession = 'test_vensession'
            //}
            //console.log(venguid, vensession);
            
        } catch (e) { }
    };
    var CartaddLogs = function () {
        if (venraasDomain != window.location.host) {
            return false
        }
        //console.log('domainName:', venraasDomain, 'token:', venraasToken, 'uid:', lsmsid, 'gid:', gid, 'from_rec:', fromrec, 'device:', device);
        try {
            venraas.init({ 'domainName': venraasDomain, 'token': venraasToken });  //init() is Required for each page loading

            // DO TRACKING LOG HERE ...
            venraas.tracking('cartadd|create', {
                'uid': lsmsid,  //Require if user login
                'cc_session': '',          //Optional
                'cc_guid': '',    //Optional
                'gid': gid,        //Require
                'sub_gid': '',   //Optional
                'from_rec': fromrec,   //Require
                'device': device,          //Require for device evaluation
            });

            venraas.tracking('cartadd|send');
        } catch (e) { }
    };
    var ReccallLogs = function (recomdId, recname) {
        if (venraasDomain != window.location.host) {
            return false
        }
        //console.log('domainName:', venraasDomain, 'token:', venraasToken, 'uid:', lsmsid, 'categ_le:', categLe, 'categ_code:', categCode, 'page_type:', pageType, 'device:', device, 'from_rec/recomdId:', recomdId, 'gid:', gid, 'rec_name', recname);
        try {
            venraas.init({ 'domainName': venraasDomain, 'token': venraasToken });  //init() is Required for each page loading

            // DO TRACKING LOG HERE ...
            venraas.tracking('reccall|create', {
                'autosend': false,
                'uid': lsmsid,               //Require if user login
                'cc_session': '',         //Optional
                'cc_guid': '',    //Optional
                'categ_le': categLe,     //Optional
                'categ_code': categCode,      //Require in goods page and category page
                'gid': gid,        //Require in goods page
                'page_type': pageType,         //Require for evaluation
                'device': device,          //Require for device evaluation
                'web': '',           //Optional
            });


            venraas.tracking('reccall|add_rec', {
                'rec': recomdId, //Require
                'rec_name': recname //Optional
            });

            venraas.tracking('reccall|send');
        } catch (e) { }
    };
    try {
        var venraas_dt = Math.floor((new Date()).getTime() / 86400000);
        var venraas_script = document.createElement('script');
        venraas_script.type = 'text/javascript';
        venraas_script.src = 'https://libs.venraas.tw/js/current/venraaspt.min.js?_=' + venraas_dt;
        venraas_script.async = true;

        // Handle Script loading
        var venraas_script_done = false;
        venraas_script.onload = venraas_script.onreadystatechange = function () {
            if (!venraas_script_done && (this.readyState === "loaded" || this.readyState === "complete" || !this.readyState)) {
                venraas_script_done = true;
                if (typecode == 1) {
                    myVenraasLogs();
                } else if (typecode == 2) {
                    ReccallLogs(recomdId, recname);
                } else if (typecode == 3) {
                    CartaddLogs();
                }
                venraas_script.onload = venraas_script.onreadystatechange = null;
            }
        };

        var head = document.getElementsByTagName('head')[0];
        if (head) {
            head.appendChild(venraas_script);
        }
       
    }
    catch (e) { }

};

