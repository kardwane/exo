//attribut disabled
const btn = document.querySelector("#btn");
const btnPlay = document.querySelector("#btnPlay");
const btnPause = document.querySelector("#btnPause");
const btnStop = document.querySelector("#btnStop");
const btnStopInterval = document.querySelector("#btnStopInterval");
const btnSetTimeout = document.querySelector("#btnSetTimeout");
const chiffre = document.querySelector("#chiffre");
/*
btn.addEventListener("click", () => {
	//desactiver un bouton
	btn.disabled = true;
});

btnPlay.onclick = function () {
	//je lance la lecture de mon mp3
	son.play();
};

btnPause.onclick = function () {
	//je lance la lecture de mon mp3
	son.pause();
};

btnStop.onclick = function () {
	//je lance la lecture de mon mp3
	son.pause();
	son.currentTime = 0;
};

btnStopInterval.onclick = function () {
	//j'arrete mon interval
	clearInterval(myInterval);
};

btnSetTimeout.addEventListener("click", () => {
	//sert a empecher l'execution d'un setTimeout
	clearTimeout(myTimeout);
});

//rechercher dans un tableau (array)
let array = [
	"bonjour",
	"javascript",
	"chelou",
	"web",
	"anticonstutionnellement",
	"ornythorinque",
];
//comment verifier si une valeur est présente dasn un tableau
let result = array.indexOf("web");
console.log(result);
result = array.indexOf("toto");
console.log(result);

//rechercher dans une chaine de caractere
let mot = "lorem";
result = mot.indexOf("o");
console.log(result);
result = mot.indexOf("a");
console.log(result);
console.log(mot[2]);
//version match
result = mot.match("ta");
console.log(result);

//le cas ou on à plusieurs la meme lettre
mot = "lorom";
result = mot.indexOf("o");
console.log(result);
//le deuxieme o
resultO2 = mot.indexOf("o", result + 1);
console.log(resultO2);

//l'element audio
const son = new Audio("./assets/sound/forest-sounds-free.mp3");
// pour nadia (ps n'oublie pas de desactiver/supprimer les boutons coté html ^^ )
// son.play();
// son.loop();

//lancer la répetition d'une action tout les x secondes
let myInterval = setInterval(function () {
	const randomRed = Math.floor(Math.random() * 255);
	const randomGreen = Math.floor(Math.random() * 255);
	const randomBlue = Math.floor(Math.random() * 255);
	//color : rgb(x,y,z) ou x,y,z compris entre 0 et 255
	btnPause.style =
		"color : rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ");";
}, 200);

//attendre x seconde avant de lancer une action (ne se relance pas)
const myTimeout = setTimeout(() => {
	alert("test");
}, 5000);
*/
chiffre.onkeyup = function (e) {
	console.log(this.value);
	if (e.key === "Enter") {
		switch (this.value) {
			case "toto":
				alert("toto mais pas tata");
				break;
			case "12":
				alert("12 mais pas tatra");
				break;
			case "js":
				alert("je c'est la vie");
				break;
			default:
				alert("ogogol (par defaut)");
		}
	}
};
let age = 33;
switch (age) {
	case 15:
		alert("ado");
		break;
	case 8:
		alert("enfant");
		break;
	case 20:
		alert("jeune");
		break;
	case 30:
		alert("moins jeune");
		break;
	case 50:
		alert("boomer");
		break;
	case 60:
		alert("vieux");
		break;
	case 90:
		alert("d cd");
		break;
	default:
		alert("par defaut");
}
