/**
 * 动态改变rem，基于iphone7 宽度375 1rem = 5px
 * 比如设计稿为2倍图 宽度750px 则 设计稿元素宽度/10 = rem
 */

;(function (doc, win, undefined) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (clientWidth === undefined) return;
            docEl.style.fontSize = 5 * (clientWidth / 375) + 'px';
        };
        
    if (doc.addEventListener === undefined) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);