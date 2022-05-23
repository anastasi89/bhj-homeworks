const startTimer = document.getElementById('timer');
let timerId = setInterval(function() {
	--startTimer.textContent;

	if(startTimer.textContent == 0) {
		clearInterval(timerId);
		alert('Вы победили в конкурсе!');
	}
}, 1000);
