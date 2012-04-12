$(document).ready(function() {
	$('#btn-start').click(doTimer);
	$('.showVideo').click(toggleVideo);
});

var t,
	currentMin,
	currentSec,
	timer_is_on = 0,
	minutes = 89,
	seconds = 60;

function timedCount() {
	seconds = seconds - 1;
	var outStr = minutes + ":" + seconds;
	if (seconds <= 9) {
		var outStr = minutes + ":" + "0" + seconds;
	}
	$('#countdown').html(outStr);
	$('#elapsedMin').val(minutes);
	$('#elapsedSec').val(seconds);
	if (seconds == 0) {
		seconds = 60;
		minutes = minutes - 1;
	}
	t=setTimeout("timedCount()",1000);	
}

function doTimer() {
	currentMin = minutes;
	currentSec = seconds;
	clearTimeout(t);
	if (!timer_is_on) {
		$('#btn-start').html('Pause Test');
		timer_is_on=1;
		timedCount();
	} else {
		$('#btn-start').html('Start Test');
		var totalTime = currentMin + ":" + currentSec;
		$('#countdown').html(totalTime);
		timer_is_on=0;
	}
}

function toggleVideo() {
	if ($(this).hasClass('hidden')) {
		$(this).removeClass('hidden').addClass('visible');
		$(this).prev('.q-video').slideDown();
	} else {
		$(this).removeClass('visible').addClass('hidden');	
		$(this).prev('.q-video').slideUp();
	}
}
