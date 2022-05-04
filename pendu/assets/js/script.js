const words = [
	"javascript",
	"html",
	"developpeur",
	"bronchopneumopathie",
	"anticonstitutionellement",
];
const endgame = 7;
const spanwtf = document.querySelector("#spanWtf");
const btnLetters = document.querySelector("#btnLetters");
const letters = "azertyuiopqsdfghjklmwxcvbn";
const hangmanstep = document.querySelector(".hangman-step");

let randomIndex, wordTofind, fail;

const init = () => {
	randomIndex = Math.ceil(Math.random() * words.length - 1);
	wordTofind = words[randomIndex];
	console.log(wordTofind);
	fail = 0;
	spanwtf.innerHTML = createMaskedWord();
	createVirutalKeyboard();
	document.querySelector("#restart").textContent = "";
    hangmanstep.style.backgroundPosition = "2% 60%";
};

const createMaskedWord = () => {
	let newMaskedWord = "";
	for (let i = 0; i < wordTofind.length; i++) {
		newMaskedWord += "*";
	}
	return newMaskedWord;
};

const createVirutalKeyboard = () => {
	btnLetters.innerHTML = "";
	for (let i = 0; i < letters.length; i++) {
		const newBtnLetter = document.createElement("button");
		newBtnLetter.textContent = letters[i].toUpperCase();
		newBtnLetter.id = "btn" + letters[i];
		newBtnLetter.onclick = () => {
			checkLetter(letters[i]);
		};
		btnLetters.appendChild(newBtnLetter);
	}
};

const checkLetter = (letter) => {
	//je desactive le bouton joué
	document.querySelector("#btn" + letter).disabled = true;
	//je verifie si la lettre proposé appartient au mot ou non
	if (wordTofind.indexOf(letter) !== -1) {
		//la lettre appartient au mot
		winTurn(letter);
	} else {
		//la lettre n'appartient pas au mot
		loseTurn();
	}
};

const winTurn = (letter) => {
	//je met à jour les lettres découvertes
	let newMaskedWord = updateMaskedWord(spanwtf.textContent, letter);
	spanwtf.textContent = newMaskedWord;
	console.log(newMaskedWord, wordTofind);
	//la partie est gagné?
	if (newMaskedWord === wordTofind) {
		const winMusic = new Audio(
			"./assets/sound/mixkit-animated-small-group-applause-523.wav"
		);
		winMusic.play();
		showRestartButton(true);
	}
};

const loseTurn = () => {
	fail++;
	
	switch (fail) {
		case 1:
			hangmanstep.style.backgroundPosition = "16% 60%";
			break;
		case 2:
			hangmanstep.style.backgroundPosition = "29% 60%";
			break;
		case 3:
			hangmanstep.style.backgroundPosition = "43% 60%";
			break;
		case 4:
			hangmanstep.style.backgroundPosition = "57% 60%";
			break;
		case 5:
			hangmanstep.style.backgroundPosition = "70% 60%";
			break;
		case 6:
			hangmanstep.style.backgroundPosition = "84% 60%";
			break;
		case 7:
			hangmanstep.style.backgroundPosition = "99% 60%";
			break;
		default:
			hangmanstep.style.backgroundPosition = "2% 60%";
	}

    console.log(fail, endgame);

	//fin de partie : defaite?
	if (fail === endgame) {
		const looseMusic = new Audio(
			"./assets/sound/mixkit-player-losing-or-failing-2042.wav"
		);

		looseMusic.play();
		showRestartButton(false);
	}
};

const showRestartButton = function (result) {
	const restartBtn = document.createElement("button");
	restartBtn.textContent = "Recommencer";
	restartBtn.addEventListener("click", function () {
		init();
	});
	document.querySelector("#restart").appendChild(restartBtn);
	createEndMessage(result);
};

const createEndMessage = (result) => {
	const newP = document.createElement("p");
	newP.innerHTML =
		'Vous avez gagné <img src="https://media2.giphy.com/media/lnyPptAfGwHeTdoQDk/giphy.gif?cid=ecf05e47i6s88fufl369lmxlxixeqtawrobjyz2e2rouhfpe&rid=giphy.gif&ct=g"/>';
	if (!result) {
		//if (result === false)
		newP.innerHTML =
			"Vous avez perdu, le mot à trouver était : " +
			wordTofind +
			' <img src="https://media4.giphy.com/media/QmGNyXP5MRFgeFERPd/giphy.gif?cid=ecf05e47noe95fuwwg8v1ifpx1eve59xlwoapg1zm4k5uutr&rid=giphy.gif&ct=g"/>';
	}

	btnLetters.innerHTML = "";
	btnLetters.appendChild(newP);
};

const updateMaskedWord = (wordToShow, letter) => {
	let newMaskedWord = "";
	for (let i = 0; i < wordTofind.length; i++) {
		if (letter == wordTofind[i]) {
			newMaskedWord += letter;
		} else {
			newMaskedWord += wordToShow[i];
		}
	}
	return newMaskedWord;
};

window.addEventListener('keyup', (e)=>{
    //si la touche est une lettre de l'alphabet ( et pas un f5 ou enter ou autre...)
    const allLetters = "azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN";
    const minuscule = e.key.toLowerCase();
    if(allLetters.indexOf(e.key) !== -1){
        checkLetter(minuscule);
    }
})

//permet d'initialiser le jeux
init();
