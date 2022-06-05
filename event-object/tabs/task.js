const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));

function selectTab(e) {
	console.log(e.target);
	let target = e.target;
	document.querySelectorAll('.tab').forEach(el => {
		el.classList.remove('tab_active');
	});
	document.querySelectorAll('.tab__content').forEach(el => {
		el.classList.remove('tab__content_active');
	});
	target.classList.add('tab_active');
	let id = tabs.indexOf(document.querySelector('.tab_active'));
	console.log(id);
	tabsContent[id].classList.add('tab__content_active');
}

tabs.forEach(el => {
	el.addEventListener('click', selectTab);
})