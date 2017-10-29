var lastScrollTop = 0;
jQuery("div").scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        jQuery('img').animate({top: '-=10'}, 10);
    } else {
        jQuery('img').animate({top: '+=10'}, 10);
    }
    lastScrollTop = st;
});