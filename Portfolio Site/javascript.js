//(function (window, document) {
//
//    // code that should be taken care of right away
//
//    window.onload = init;
//    function init() {
//
//        // sticky navbar
//        window.onscroll = function () {
//            sticky();
//        }
//
//        var offset = document.getElementById("navbar").offsetTop;
//        console.log(offset);
//
//        function sticky() {
//
//            if (window.pageYOffset >= offset) {
//                $("#navbar").addClass("navbar-scrolled");
//            } else {
//                $("#navbar").removeClass("navbar-scrolled");
//            }
//
//
//        }
//
//    }
//})(window, document, undefined);