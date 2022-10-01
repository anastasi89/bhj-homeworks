const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const xhr = new XMLHttpRequest();

	xhr.upload.onprogress = function(event) {
		let total = event.total;
		let loaded = event.loaded;
		let delta = loaded / total;

		progress.value = delta;
	};

	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	const formData = new FormData(form);
	xhr.send(formData);
});