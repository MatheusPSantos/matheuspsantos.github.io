/**
 *  Unect Júnior - 2018
 * @matheuspsantos
 */

// script para contrair menu após scroll
$(document).on("scroll", function() {
    if($(document).scrollTop()>100) {
        $("header").removeClass("header").addClass("smallheader");
        var logo = document.getElementById('header-logo');
        logo.src='img/small-logo.png';
    }
    else {
        $("header").removeClass("smallheader").addClass("header");
        var logo = document.getElementById('header-logo');
        logo.src='img/logo.png';
    }
});

$(document).on("scroll", function() {
    var scre = $("body").width();
    if(scre <= 768) {
        if($(document).scrollTop()>100) {
            $("nav").removeClass("header-menu").addClass("header-menu-toogle");
        }
        else {
            $("nav").removeClass("header-menu-toogle").addClass("header-menu");
        }
    } else if(scre >= 769) {
        $("nav").removeClass("header-menu-toogle").addClass("header-menu");
    }
});
