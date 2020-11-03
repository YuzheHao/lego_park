function magic(target)
{
	$(document).ready(function(){
		$('body').mousemove(function(e) {
	        var x = (e.pageX * -1 / 2), y = (e.pageY * -1 / 2);
				$('div.'+target).css('left', (x/20)+200+'px');
				$('div.'+target).css('top', (y/40)+200+'px');
	   });
	});
}