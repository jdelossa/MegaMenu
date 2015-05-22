var flag;

$(window).resize(function() {
    var bodyWidth = $(window).width();
    if (flag !== false && bodyWidth < 767) {
        flag = false;

        $('#home').click(function () {
            window.location.replace("http://localhost:8888/megamenu");
        });
        //$('#e-i').click(function () {
        //    $('#employee-information').addClass('menu-active')
        //
        //    if ($('#employee-information').hasClass('menu-active')){
        //        $('#e-i').click(function () {
        //            $('#employee-information').removeClass('menu-active')
        //        });
        //    }
        //
        //    $('#employee-information').addClass('menu-active')
        //    // remove these classes if they are active
        //    $('#clinical-information').removeClass('menu-active')
        //    $('#departments').removeClass('menu-active')
        //    $('#applications').removeClass('menu-active')
        //    $('#directories').removeClass('menu-active')
        //
        //});
        //$('#c-i').click(function () {
        //    $('#clinical-information').addClass('menu-active')
        //    // remove these classes if they are active
        //    $('#employee-information').removeClass('menu-active')
        //    $('#departments').removeClass('menu-active')
        //    $('#applications').removeClass('menu-active')
        //    $('#directories').removeClass('menu-active')
        //});
        //$('#depts').click(function () {
        //    $('#departments').addClass('menu-active')
        //    // remove these classes if they are active
        //    $('#clinical-information').removeClass('menu-active')
        //    $('#employee-information').removeClass('menu-active')
        //    $('#applications').removeClass('menu-active')
        //    $('#directories').removeClass('menu-active')
        //});
        //$('#apps').click(function () {
        //    $('#applications').addClass('menu-active')
        //    // remove these classes if they are active
        //    $('#clinical-information').removeClass('menu-active')
        //    $('#employee-information').removeClass('menu-active')
        //    $('#directories').removeClass('menu-active')
        //    $('#departments').removeClass('menu-active')
        //
        //});
        //$('#dir').click(function () {
        //    $('#directories').addClass('menu-active')
        //    // remove these classes if they are active
        //    $('#clinical-information').removeClass('menu-active')
        //    $('#employee-information').removeClass('menu-active')
        //    $('#applications').removeClass('menu-active')
        //    $('#departments').removeClass('menu-active')
        //});
        $('li').click(function(e){
            if( $(this).find('>ul').hasClass('menu-active') ){
                $(this).children('ul').removeClass('menu-active').children('li').slideUp();
                e.stopPropagation();
            }
            else{
                $(this).children('ul').addClass('menu-active').children('li').slideDown();
                e.stopPropagation();
            }
        });
    } else if (flag !== true && bodyWidth >= 767) {
        flag = true;

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
    }
}).resize();


$(".dropdown-menu li").click(function(e) {
    e.stopPropagation();
});
