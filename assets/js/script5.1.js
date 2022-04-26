let response = prompt('donne moi un chiffre compris entre 1 et 3');

while(response < 1 || response > 3){
    response = prompt('La valeur doit être comprise entre 0 et 3! Donne moi un chiffre compris entre 1 et 3');
}

document.querySelector('#result').textContent = "Merci, rappel de votre chiffre " + response;