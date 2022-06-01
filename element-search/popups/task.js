const closeButton = document.querySelectorAll('.modal__close_times');
const showSuccess = document.querySelector('.show-success');

const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');

showSuccess.onclick = function() {
	modalMain.classList.remove('modal_active');
	modalSuccess.classList.add('modal_active');
}

for (let i = 0; i < closeButton.length; i++) {
	closeButton[i].onclick = function() {
		let modalWindow = this.closest('.modal');
		console.log(modalWindow);
		modalWindow.classList.remove('modal_active');
	}
}