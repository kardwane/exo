let response = prompt("donne moi un chiffre compris entre 10 et 20");

while (response < 10 || response > 20) {
  if (response < 10) {
    response = prompt("Plus grand");
  } else if (response > 20) {
    response = prompt("Plus petit");
  }
}

document.querySelector("#result").textContent =
  "Merci, rappel de votre chiffre " + response;