function magic(target,xx,yy)
{
	$(document).ready(function(){
		$('body').mousemove(function(e) {
	        var x = (e.pageX * -1 / 2), y = (e.pageY * -1 / 2);
				$('div.'+target).css('left', (x/20)+xx+'px');
				$('div.'+target).css('top', (y/40)+yy+'px');
	   });
	});
}

function super_magic()
{
	$(document).ready(function(){
		$('body').mousemove(function(e) {
	        var x = (e.pageX * -1 / 2), y = (e.pageY * -1 / 2);
				$('body').css('left', (x/20)+xx+'px');
				$('body').css('top', (y/40)+yy+'px');
	   });
	});
}
