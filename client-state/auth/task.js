const form = document.getElementById('signin__form');
const userID = document.getElementById('user_id');
const welcomeModal = document.getElementById('welcome');

function welcomeUser() {
	form.classList.add('welcome');
	welcomeModal.classList.add('welcome_active');
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

	xhr.responseType = 'json';

	const formData = new FormData(form);
	xhr.send(formData);

	xhr.onload = function() {
		let responseObj = xhr.response;

		if(responseObj.user_id) {
			userID.textContent = responseObj.user_id;

			welcomeUser();

			localStorage.setItem('id', userID.textContent);
		} else {
			alert('Неверный логин/пароль');
		}
	}

	form.reset();
});

window.onload = function() {
	const userId = localStorage.getItem('id');
	console.log(userId);

	if(userId) {
		userID.textContent = userId;
		welcomeUser();
	}
}