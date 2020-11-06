function magic(target, xx, yy) {
    $(document).ready(function() {
        $('body').mousemove(function(e) {
            var x = (e.pageX * -1 / 2),
                y = (e.pageY * -1 / 2);
            $('div.' + target).css('left', (x / 10) + xx + 'px');
            $('div.' + target).css('top', (y / 10) + yy + 'px');
        });
    });
}