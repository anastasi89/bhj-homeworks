const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
console.log(pollAnswers);

const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', () => {
	let responseObj = xhr.response;

	if(xhr.readyState === xhr.DONE) {
		pollTitle.textContent = responseObj.data.title;
		for (let answer of responseObj.data.answers) {
			pollAnswers.insertAdjacentHTML('beforeend', `<button class="poll__answer">${answer}</button>`);
		}
	}
});

pollAnswers.addEventListener('click', () => {
	alert('Спасибо, ваш голос засчитан!');
});