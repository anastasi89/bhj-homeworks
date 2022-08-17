const hasTooltipLinks = Array.from(document.querySelectorAll('.has-tooltip'));

const createTooltip = (title, top, left) => {
	let tooltip = document.createElement('div');
	tooltip.textContent = title;
	tooltip.classList.add('tooltip');
	tooltip.classList.toggle('tooltip_active');
	tooltip.style.left = left + 'px';
	tooltip.style.top = (top + 18) + 'px';

	return tooltip;
}

hasTooltipLinks.forEach(item => {
	item.addEventListener('click', (event) => {
		event.preventDefault();
		let tooltip = document.querySelector('.tooltip');
		let { top, left } = item.getBoundingClientRect();

		if (!tooltip) {
			item.insertAdjacentElement('afterend', createTooltip(item.title, top, left));
		} else {
				item.insertAdjacentElement('afterend', createTooltip(item.title, top, left));
			tooltip.remove();
		}
	})
})