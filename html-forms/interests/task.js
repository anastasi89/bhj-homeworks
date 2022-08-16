const interestCheckBoxes = Array.from(document.querySelectorAll('.interest__check'));

let highestInterestCheckBoxes = [];

interestCheckBoxes.forEach(item => {
	if (!item.closest('.interests_active')) {
		highestInterestCheckBoxes.push(item);
	}
});

highestInterestCheckBoxes.forEach(item => {
	item.addEventListener('change', () => {

		const containerForCheckBoxesGroup = item.closest('.interest');
		const containerInterests = containerForCheckBoxesGroup.querySelector('ul');
		const innerCheckBoxes = Array.from(containerInterests.querySelectorAll('input'));

		innerCheckBoxes.forEach(el => {
			if (!el.checked) {
				el.checked = true;
			} else {
				el.checked = false;
			}
		})
	})
})