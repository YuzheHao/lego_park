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

function change_text(target) {
    $(document).ready(function() {
        $('div.' + target).hover(
            function() {
                $('#shown')[0].innerHTML = 'asdasdas';
                $('#hidden')[0].fadeIn(30);
                $('#shown')[0].fadeOut(30);
            },
            function() {
                $('#shown')[0].fadeIn(30);
                $('#hidden')[0].fadeOut(30);
            });
    });
}