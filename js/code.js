function select(selector) {
    return document.querySelector(selector);
}

function applyScroll(top) {
    if (top < 100) {
        console.log(top);
        select('.circle-right').style.transform='translate('+(top)+'px,0px)';
        select('.circle-left').style.transform='translate('+(-top)+'px,0px)';
    }
}

if (document.addEventListener) {
    document.addEventListener('scroll', function(e) {
        var top = window.pageYOffset || document.documentElement.scrollTop;
        applyScroll(top);
    });
}