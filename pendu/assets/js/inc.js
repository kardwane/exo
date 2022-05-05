//création des variables de configuration du jeu
const tabMots = ['anticonstitutionnellement', 'javascript', 'htmlcss', 'designer', 'boomerang','shlags'];
const maxEssai = 7;
let nbErreur = 0;

//permet le choix d'un mot aléatoire
function choixMotRandom(lstMots) {
    //on genere un chiffre random compris entre 0 et la longueur du tableau de mot
    //le -1 permet d'eviter une erreur d'indice hors tableau
    let aleatoire = Math.floor(Math.random() * Math.floor(lstMots.length)) - 1;
    //on s'assure que le chiffre soit positif pour eviter la aussi un indice hors des limite du tableau
    if (aleatoire < 0) {
        aleatoire = 0;
    }
    //on renvoie le mot random
    return lstMots[aleatoire];
}

//fonction qui permet de changer la source de mon element img
//le parametre numImage correspond au nombre d'echec => 1 erreur on charge l'image pendu n°1 etc...
const setImage = (numImage) => {
    document.querySelector('.img-fluid').setAttribute('src', 'assets/img/pendu-part' + numImage + '.png');
};

//permet d'afficher l'image et le son de la défaite
const perdu = () => {
    //partie son
    const looseSound = new Audio('assets/sound/motus-boule-noire.mp3');
    looseSound.play();
    // partie image => on ecrase le contenu HTML du 1er élément row de la page de jeu
    document.querySelector(".container>.row:first-child").innerHTML = "" +
        "    <div class=\"col text-center pt-5\">" +
        "<img src=\"assets/img/NIRVANA-HEAD.JPG\" class=\"img-fluid\" alt=\"perdu\">" +
    "</div>";
};

//meme principe que la défaite mais vesion victoire (l'image et le son sont différent)
const victoire = () => {
    const winSound = new Audio('assets/sound/applaudissement.mp3');
    winSound.play();
    document.querySelector(".container>.row:first-child").innerHTML = "" +
        "    <div class=\"col text-center pt-5\">" +
        "<img src=\"assets/img/mireille-mathieu-bravo.jpg\" class=\"img-fluid\" alt=\"gagner\">" +
        "</div>";
};

//focntion de vérirification de la saisie
function verifierSaisie(lettre, motMystere) {
    //on récupere l'etat du mot caché (avec les lettres découverte et les * restantes
    const motCache = document.querySelector('#lblMotCache').textContent;
    let newMotCache = '';       //en prévision du nouveau mot cache a afficher (si des lettres sont découverte lors de la saisie)
    let isLettreOk = false;     //flag pour tester si la proposition découvre une lettre ou non

    //on véririfie si la partie est fini
    if (nbErreur >= maxEssai) {
        perdu();
    } else {
        //sinon on compare chaque lettre du mot caché avec la saisie de l'utilisateur
        for (let i = 0; i <= (motMystere.length - 1); i++) {
            if (motMystere.substr(i, 1) === lettre) {
                //si on trouve une correspondance on découvre la lettre sur le mot caché
                newMotCache += lettre;
                //on passe le flag a vrai
                isLettreOk = true;
            } else {
                //sinon on laisse le mot caché dans le même état
                newMotCache += motCache.substr(i, 1); //
            }
        }
        //si la proposition n'a aucune correspondance on augmente le nombre d'erreur et on met a jour l'image du pendu
        if (!isLettreOk) {
            nbErreur++;
            setImage(nbErreur);
        }
        //enfin on affiche la nouvelle version du mot caché
        majEtatMot(newMotCache);
    }
}

//permet l'afficher le nouvel état du mot caché
const majEtatMot = (mot) => {
    //on remplace le contenu de l'element mot cache coté HTML
    document.querySelector('#lblMotCache').innerHTML = mot;
    //on recupere l'element texte ou le joueur fait sa proposition
    const txtLettre = document.querySelector('#txtLettre');
    //on vide la zone de saisie
    txtLettre.value = '';
    //on force le focus sur la zone de saisie
    txtLettre.focus();
    //jeu fini?
    if (mot.indexOf('*') === -1) {
        victoire();
    }
};

//créer le masque du mot (pour le caché)
function creerMasquageMot(mot) {
    let masqueMot = '';
    //on créer une chaine contenant autant d'étoile que de lettre dans le mot a trouver
    for (let i = 0; i < mot.length; i++) {
        masqueMot += '*';
    }
    //renvoi la chaine completé
    return masqueMot;
}
