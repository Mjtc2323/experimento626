var words = ["TE QUIERO ❤", "LO MEJORCITO ❤", "MY SUNSHINE ❤", "ME ENCANTAS ❤", "ERES MI ADORACION ❤", "MI DIOSA ❤", "MI MAMASITA PRECIOSA ❤", "MI INSPIRATION ❤", "MI MUJER ❤", "EXPERIMENTO 626 ❤", "MI REINA", "QUIERES SER MI NOVIA?"];

window.addEventListener("load", function() {
		var randoms = window.document.getElementsByClassName("randoms");
		for (i = 0; i < randoms.length; i++)
				changeWord(randoms[i]);
}, false);

function changeWord(a) {
		a.style.opacity = '1.1';
		a.innerHTML = words[getRandomInt(0, words.length - 1)];
		setTimeout(function() {
				a.style.opacity = '1';
		}, 425);
		setTimeout(function() {
				changeWord(a);
		}, getRandomInt(500, 800));
}


function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
}