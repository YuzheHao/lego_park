function magic(target, xx, yy) {
    $(document).ready(function() {
        $('body').mousemove(function(e) {
            var x = (e.pageX *ΩΩ -1 / 2),
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
// mi
// 然后我得让git graph里的图合并过来

// 是不是squash and merge了就连不起来了？
// 我这次试试不squash，直接merge

// 本地试试squash，这样相当于放弃了github那边的操作
// 我其实也没有非要在那边使用的理由
// 我的最终目的是保证master这个branch干净就可以了

// 试试在commit的注释里写上#6，能不能在merge之后锁定它是哪个mergeladiesdsadsa
// 1
// 2
// 3
// 4