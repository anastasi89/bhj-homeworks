const openChatButton = document.querySelector('.chat-widget__side-text');
const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages')
const chatWidgetInput = document.getElementById('chat-widget__input');

const botGreeting = 'Приветствую!';
const botAnswers = ['Ничего не понимаю.', 'Сами решайте свои проблемы!', 'Что, простите?', 'До свидания! Надеюсь, больше не увидимся!', '...'];

const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();

openChatButton.addEventListener('click', () => {
	chatWidget.classList.add('chat-widget_active');

	messages.innerHTML += `
	<div class="message">
		<div class="message__time">${hours}:${minutes}</div>
		<div class="message__text">${botGreeting}</div>
	</div>
	`
});


document.addEventListener('keyup', (event) => {

	if (event.key === 'Enter' && chatWidgetInput.value !== '') {
		const messageClientText = chatWidgetInput.value;

		messages.innerHTML += `
		<div class="message message_client">
			<div class="message__time">${hours}:${minutes}</div>
			<div class="message__text">${messageClientText}</div>
		</div>
		`

		chatWidgetInput.value = '';

		getRandomBotAnswer();
	}
})

function getRandomBotAnswer() {
	const rand = Math.floor(Math.random()*botAnswers.length);
	const rValue = botAnswers[rand];

	messages.innerHTML += `
	<div class="message">
		<div class="message__time">${hours}:${minutes}</div>
		<div class="message__text">${rValue}</div>
	</div>
	`
}