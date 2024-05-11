// MIXiTUP JQUERY PLUGINS

var mixer = mixitup('.portfolio-container');

// SMOOTH SCROLL

$(function(){
    $('.main-menu a, .hambergar-menu-links a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }), 1000;
    });
});


//HAMBERGAR MENU

function openMenu() {
	document.getElementById('mobile-menu').style.width = "100%";
}

function closeMenu() {
	document.getElementById('mobile-menu').style.width = "0";
}

//ONE PAGE NAV - SCROLL TO ACTIVE SECTION MENU COLOR

$('.main-menu ul').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
});