const links = document.querySelectorAll('.menu__link');

for (let i = 0; i < links.length; i++) {
	let link = links[i];
	let item = link.closest('.menu__item');

	const subMenu = item.querySelector('.menu_sub');
	console.log(subMenu);

	link.onclick = function() {
		if(subMenu) {
			subMenu.classList.toggle('menu_active');
			return false;
		}
	}
}