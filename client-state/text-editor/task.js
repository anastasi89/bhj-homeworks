const editor = document.getElementById('editor');
const editorText = {};

editor.addEventListener('input', () => {
	localStorage.setItem('key', editor.value);
});

window.onload = function() {
	let newText = localStorage.getItem('key');
	editor.value = newText;
}