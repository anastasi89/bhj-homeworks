const deadMoleCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

function getHole(index) {
	return document.getElementById(`hole${index}`);
}

function getZeroing(message) {
	alert(message);
	deadMoleCounter.textContent = 0;
	lostCounter.textContent = 0;
}

for (let i = 1; i <= 9; i++) {
	let hole = getHole(i);
	console.log(hole);

	hole.onclick = function() {
		if(hole.className.includes('hole_has-mole')) {
			deadMoleCounter.textContent = +deadMoleCounter.textContent + 1;
		} else {
			lostCounter.textContent = +lostCounter.textContent + 1;
		}

		if(deadMoleCounter.textContent == 5) {
			getZeroing('Победа!');
		}

		if(lostCounter.textContent == 10) {
			getZeroing('Вы проиграли');
		}
	}
}