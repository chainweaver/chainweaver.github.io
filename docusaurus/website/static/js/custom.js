function scrollCallback() {
    if ($(this).scrollTop() > $("canvas")[0].height - 150) {
        $(".fixedHeaderContainer").removeClass("transparent");
        $(".nav-site.nav-site-internal").removeClass("transparent");
    } else {
        $(".fixedHeaderContainer").addClass("transparent");
        $(".nav-site.nav-site-internal").addClass("transparent");
    }
};

function throttle(fn, wait) {
    var time = Date.now();
    return function() {
        if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
        }
    }
}

function windowResize() {
    $("canvas")[0].width = $(window).width();
    $("canvas")[0].height = $(window).height();
    checkHeight();
}

function checkHeight() {
    if ($("canvas")[0].height < 650) {
        $("canvas")[0].height = 650;
    }
}

function init() {
    $(".fixedHeaderContainer").addClass("transparent");
}

$(window).load(function(){
    scrollCallback();
    checkHeight();
});

init();
window.addEventListener('scroll', throttle(scrollCallback, 100));
window.addEventListener('resize', throttle(windowResize, 100));

