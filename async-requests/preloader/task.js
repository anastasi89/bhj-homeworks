const loader = document.getElementById('loader');
const cardItems = document.getElementById('items');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE) {
		loader.classList.remove('loader_active');

		const responseObj = xhr.response;
		const responseObjValute = responseObj.response.Valute;

		for (let valute in responseObjValute) {
			cardItems.insertAdjacentHTML('beforeend', `<div class="item"><div class="item__code">${responseObjValute[valute].CharCode}</div><div class="item__value">${responseObjValute[valute].Value}</div><div class="item__currency">руб.</div></div>`);
		}
	}
});