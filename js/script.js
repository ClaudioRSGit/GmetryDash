const gameContainer = document.getElementById('game');
const character = document.getElementById('character');

gameContainer.addEventListener('click', () => {
	character.classList.add('animate');
	setTimeout(() => {
		character.classList.remove('animate');
	}, 500);
});
