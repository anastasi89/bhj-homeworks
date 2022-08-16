const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));

function toggleClass() {
	const rotatorCaseActive = document.querySelector('.rotator__case_active');
	const nextRotatorCase = rotatorCaseActive.nextElementSibling;

	let activeCaseIndex = rotatorCases.findIndex((item) => item.classList.contains('rotator__case_active'));

	rotatorCaseActive.classList.remove('rotator__case_active');
	if (activeCaseIndex === rotatorCases.length - 1) {
		rotatorCases[0].classList.add('rotator__case_active');
	} else {
		nextRotatorCase.classList.add('rotator__case_active');
	}
}

setInterval(toggleClass, 1000);