/*global $, document, setTimeout, clearTimeout */
(function() {

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
		outStr = minutes + ":" + "0" + seconds;
	}
	$('#countdown').html(outStr);
	$('#elapsedMin').val(minutes);
	$('#elapsedSec').val(seconds);
	if (seconds === 0) {
		seconds = 60;
		minutes = minutes - 1;
	}
	t = setTimeout(function() { timedCount(); },1000);
}

function doTimer() {
	currentMin = minutes;
	currentSec = seconds;
	clearTimeout(t);
	if (!timer_is_on) {
		$('#btn-start').html('Pause Test');
		timer_is_on = 1;
		timedCount();
	} else {
		$('#btn-start').html('Start Test');
		var totalTime = currentMin + ":" + currentSec;
		$('#countdown').html(totalTime);
		timer_is_on = 0;
	}
}

$(document).ready(function() {
	$('#btn-start').click(doTimer);
});

})();