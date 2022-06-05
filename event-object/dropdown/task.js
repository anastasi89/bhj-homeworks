const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItems = Array.from(document.querySelectorAll(".dropdown__item"));

function toggleList() {
	dropdownList.classList.toggle("dropdown__list_active");
}
dropdownValue.addEventListener("click", toggleList);

function changeValue(e) {
	e.preventDefault();
	let target = e.target;
	dropdownList.classList.remove("dropdown__list_active");
	dropdownValue.textContent = target.textContent;
	return false;
}

dropdownItems.forEach(el => {
	el.addEventListener("click", changeValue);
})