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

$(".dropdown-menu li").click(function(e) {
    e.stopPropagation();
});
