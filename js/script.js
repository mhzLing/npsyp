$(document).ready(function(){
	$('.carousel').carousel({
		interval: 8000,
		pause: "false"
	});

	/* Click video to play and pause*/
	$('.video').click(function () {
		if (this.paused) {
			this.play();
		}
		else {
			this.pause();
		}
	});
	
	/*When video is playing, pause the carousel. 
	  setTimeout so video has a chance to start
	  playing and hook on to event
	*/
	$('video').on('play', function () {
		setTimeout(function() {
			$('.carousel').carousel('pause'); 
		}, 500);
	});
	
	/*Stat carousel when video is stop pause or end*/
	$('video').on('stop pause ended', function () {
		$(".carousel").carousel('cycle');
	});

});


