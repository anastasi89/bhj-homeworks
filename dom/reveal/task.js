const reveals = Array.from((document.querySelectorAll('.reveal')));

window.addEventListener('scroll', function() {
	for (const reveal of reveals) {
		const {top, bottom} = reveal.getBoundingClientRect();

		if (top < this.window.innerHeight) {
			reveal.classList.add('reveal_active');
		}

		if (bottom < 0 || top > this.window.innerHeight) {
			reveal.classList.remove('reveal_active');
		}
	}
});