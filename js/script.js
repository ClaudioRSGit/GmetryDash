const gameContainer = document.getElementById('game');
const character = document.getElementById('character');
const tempoDisplay = document.getElementById('tempo');

var tempo=0;

col();
gameContainer.addEventListener('click', () => {
	character.classList.add('animate');
	setTimeout(() => {
		character.classList.remove('animate');
	}, 500);
});

function col(){
		tempo++;
		tempoDisplay.innerHTML = tempo;
	window.requestAnimationFrame(col);
}