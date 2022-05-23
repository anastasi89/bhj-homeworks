const clickCookieCounter = document.getElementById('clicker__counter');
const cookieImg = document.getElementById('cookie');

cookieImg.onclick = function() {

	if (cookieImg.width == 200) {
		cookieImg.width = 300;
	} else {
		cookieImg.width = 200;
	}

	clickCookieCounter.textContent = +clickCookieCounter.textContent + 1;
}