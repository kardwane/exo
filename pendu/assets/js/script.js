const words = ["tonneaux", "gomme", "presidentielle", "vietnam", "javascript", "jeux", "aragorn", "xylophone"];
const endgame = 7;
const maskedWord = document.querySelector("#maskedWord");
const vKeyboard = document.querySelector("#vKeyboard");
const hangmanStep = document.querySelector("#hangmanStep");
const letters = "azertyuiopqsdfghjklmwxcvbn";

let randomIndex, wordToFind, fail;

const init = () => {
    randomIndex = Math.floor(Math.random() * (words.length - 1));
    wordToFind = words[randomIndex];
    fail = 0;
    maskedWord.innerHTML = createMaskedWord();
    createVirtualKeyboard();
    document.querySelector(".restart").textContent = "";
    hangmanStep.style.backgroundPosition = "2% 60%";
};

const updateMaskedWord = (wordToShow, letter) => {
    let newMaskedWord = "";
    for (let i = 0; i < wordToFind.length; i++) {
        if (letter === wordToFind[i]) {
            newMaskedWord += letter;
        } else {
            newMaskedWord += wordToShow[i];
        }
    }
    return newMaskedWord;
};

const createMaskedWord = () => {
    let newMaskedWord = "";
    for (let i = 0; i < wordToFind.length; i++) {
        newMaskedWord += "*";
    }
    return newMaskedWord;
};

const createEndMessage = (isWinner) => {
    let cssClass = "endmessagev";
    const newP = document.createElement("p");
    newP.innerHTML = 'Vous avez gagné <img src="https://media2.giphy.com/media/lnyPptAfGwHeTdoQDk/giphy.gif?cid=ecf05e47i6s88fufl369lmxlxixeqtawrobjyz2e2rouhfpe&rid=giphy.gif&ct=g"/>';
    if (!isWinner) {
        cssClass = "endmessaged";
        newP.innerHTML =
            "Vous avez perdu, le mot à trouver était : " + wordToFind +
            ' <img src="https://media4.giphy.com/media/QmGNyXP5MRFgeFERPd/giphy.gif?cid=ecf05e47noe95fuwwg8v1ifpx1eve59xlwoapg1zm4k5uutr&rid=giphy.gif&ct=g"/>';
    }
    newP.classList.add(cssClass);
    vKeyboard.innerHTML = "";
    vKeyboard.appendChild(newP);
};

const showRestartButton = (result) => {
    const restart = document.createElement("button");
    restart.innerHTML = "Recommencer";
    restart.onclick = () => {
        init();
    };
    document.querySelector(".restart").appendChild(restart);
    createEndMessage(result);
};

const winTurn = (letter) => {
    let newMaskedWord = updateMaskedWord(maskedWord.innerHTML, letter);
    maskedWord.innerHTML = newMaskedWord;
    if (newMaskedWord === wordToFind) {
        const victoire = new Audio(
            "./assets/sound/mixkit-animated-small-group-applause-523.wav"
        );
        victoire.play();
        showRestartButton(true);
    }
};

const looseTurn = () => {
    fail++;
    document.querySelector("#spanll").innerHTML = endgame - fail;
    switch (fail) {
        case 1:
            hangmanStep.style.backgroundPosition = "16% 60%";
            break;
        case 2:
            hangmanStep.style.backgroundPosition = "29% 60%";
            break;
        case 3:
            hangmanStep.style.backgroundPosition = "43% 60%";
            break;
        case 4:
            hangmanStep.style.backgroundPosition = "57% 60%";
            break;
        case 5:
            hangmanStep.style.backgroundPosition = "70% 60%";
            break;
        case 6:
            hangmanStep.style.backgroundPosition = "84% 60%";
            break;
        case 7:
            hangmanStep.style.backgroundPosition = "99% 60%";
            break;
        default:
            hangmanStep.style.backgroundPosition = "2% 60%";
    }
    if (fail === endgame) {
        const defaite = new Audio(
            "./assets/sound/mixkit-player-losing-or-failing-2042.wav"
        );
        defaite.play();
        showRestartButton(false);
    }
};

const checkLetter = (letter) => {
    document.querySelector("#btn" + letter).disabled = true;
    if (wordToFind.indexOf(letter) !== -1) {
        winTurn(letter);
    } else {
        looseTurn();
    }
    return true;
};

const createVirtualKeyboard = () => {
    vKeyboard.innerHTML = "";
    for (let i = 0; i < letters.length; i++) {
        let newBtnLetter = document.createElement("button");
        newBtnLetter.innerHTML = letters[i].toUpperCase();
        newBtnLetter.id = "btn" + letters[i];
        newBtnLetter.classList.add("btn-letter");
        newBtnLetter.onclick = () => {
            checkLetter(letters[i]);
        };
        vKeyboard.appendChild(newBtnLetter);
    }
};

window.document.body.onkeyup = (e) => {
    if (letters.match(e.key)) {
        if (!document.querySelector("#btn" + e.key).disabled) checkLetter(e.key);
    }
};

init();
