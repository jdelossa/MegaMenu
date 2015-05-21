var $menu = $(".dropdown-menu");

$menu.menuAim({
    activate: activatemenuactive,
    deactivate: deactivatemenuactive
});

function activatemenuactive(row) {
    var $row = $(row);
    $row.find(".mega-menu-dropdown").addClass("menu-active");
}

function deactivatemenuactive(row) {
    var $row = $(row);
    $row.find(".mega-menu-dropdown").removeClass("menu-active");
}

//$(window).resize(function() {
//    if ($(this).width() > 767) {
//
//        var $menu = $(".dropdown-menu");
//
//        $menu.menuAim({
//            activate: activatemenuactive,
//            deactivate: deactivatemenuactive
//            });
//
//        function activatemenuactive(row) {
//            var $row = $(row);
//            $row.find(".mega-menu-dropdown").addClass("menu-active");
//        }
//
//        function deactivatemenuactive(row) {
//            var $row = $(row);
//            $row.find(".mega-menu-dropdown").removeClass("menu-active");
//        }
//
//    }
//    else {
//        $('#home').click(function(){
//
//        });
//        $('#e-i').click(function(){
//            $('#employee-information').addClass('menu-active')
//            // remove these classes if they are active
//            $('#clinical-information').removeClass('menu-active')
//            $('#departments').removeClass('menu-active')
//            $('#applications').removeClass('menu-active')
//            $('#directories').removeClass('menu-active')
//        });
//        $('#c-i').click(function(){
//            $('#clinical-information').addClass('menu-active')
//            // remove these classes if they are active
//            $('#employee-information').removeClass('menu-active')
//            $('#departments').removeClass('menu-active')
//            $('#applications').removeClass('menu-active')
//            $('#directories').removeClass('menu-active')
//        });
//        $('#depts').click(function(){
//            $('#departments').addClass('menu-active')
//            // remove these classes if they are active
//            $('#clinical-information').removeClass('menu-active')
//            $('#employee-information').removeClass('menu-active')
//            $('#applications').removeClass('menu-active')
//            $('#directories').removeClass('menu-active')
//        });
//        $('#apps').click(function(){
//            $('#applications').addClass('menu-active')
//            // remove these classes if they are active
//            $('#clinical-information').removeClass('menu-active')
//            $('#employee-information').removeClass('menu-active')
//            $('#directories').removeClass('menu-active')
//            $('#departments').removeClass('menu-active')
//
//        });
//        $('#dir').click(function(){
//            $('#directories').addClass('menu-active')
//            // remove these classes if they are active
//            $('#clinical-information').removeClass('menu-active')
//            $('#employee-information').removeClass('menu-active')
//            $('#applications').removeClass('menu-active')
//            $('#departments').removeClass('menu-active')
//        });
//    }
//});
//

$(".dropdown-menu li").click(function(e) {
    e.stopPropagation();
});