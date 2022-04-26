/*
//section tableaux
{
  let tableau = [5, 15, 26, 12, 78, 56, 45, 78, 42];

  //exo1
  console.log(tableau);
  console.log("===========");

  //exo2
  const newData = prompt("donne moi une valeur");
  tableau.push(parseInt(newData));

  console.log(tableau);
  console.log("===========");

  // exo3
  let temp = tableau[2];
  tableau[2] = tableau[8];
  tableau[8] = temp;

  console.log(tableau);
  console.log("===========");

  //exo 4
  console.log(tableau[2]);
  console.log(tableau[6]);
  console.log("===========");

  //exo 5
  tableau.splice(4, 1);
  console.log(tableau);
  console.log("===========");

  //exo 6
  let tableauCopie = tableau;
  console.log(tableau);
  console.log("=======tab copie====");
  console.log(tableauCopie);
}

// =======================
// partie boucle
// =======================
{
  console.log("======boucles=====");
  //exo 1
  let rep = -10;
  while (rep < 0 || rep > 5) {
    rep = parseInt(prompt("Donnez moi une valeur comprise entre 0 et 5"));
  }

  console.log("===========");

  //exo2
  rep = parseInt(prompt("Donnez moi une valeur numérique valide"));
  for (let i = 1; i <= 10; i++) {
    console.log(rep + i);
  }

  console.log("===========");

  //exo 3
  rep = parseInt(
    prompt(
      "Donnez moi une valeur entiere, je vous donnerai sa table de multiplication"
    )
  );
  for (let i = 1; i <= 10; i++) {
    console.log(rep + "*" + i + "=" + rep * i);
  }

  //exo 4
  let prix = -10,
    total = 0,
    nb1 = 0,
    nb5 = 0,
    nb10 = 0;

  while (prix !== 0) {
    prix = parseInt(prompt("donnez moi un prix (pour arreter, saisir 0)"));
    total += prix;
  }

  const paiement = prompt("combien donnez vous à l'hôtesse de caisse?");
  let reste = paiement - total;

  while (reste >= 10) {
    nb10++;
    reste -= 10;
  }

  if (reste >= 5 && reste < 10) {
    nb5++;
    reste -= 5;
  }

  console.log(
    "montant du panier : " +
      total +
      ", votre paiement : " +
      paiement +
      ",  voici votre rendu de monnaie : " +
      nb10 +
      " billets de 10€, " +
      nb5 +
      " billet de 5€ et " +
      reste +
      " pièce de 1 €"
  );
}

// =======================
// partie boucle et tableaux
// =======================
{
  //exo 1
  let tableau = [];

  for (let i = 0; i < 7; i++) {
    tableau.push(0);
  }

  console.log(tableau);

  //exo 2
  let notes = [5, 10, 15, 17, 6, 18, 12, 7, 6, 2, 14];
  let total = 0;
  notes.forEach((note, index) => {
    total += note;
  });
  console.log("la moyenne des notes est de : " + total / (notes.length - 1));

  //exo 3
  (tableau = []), (valeur = 10), (nbPos = 0), (nbNeg = 0);

  while (valeur !== 0) {
    valeur = parseInt(prompt("donnez moi un chiffre (pour arreter, saisir 0)"));
    if (valeur !== 0) tableau.push(valeur);
  }

  tableau.forEach((valeur) => {
    if (valeur >= 0) {
      nbPos++;
    } else {
      nbNeg++;
    }
  });

  console.log(
    "nombre de positif = " + nbPos + ", nombre de négatif = " + nbNeg
  );

  //exo4
  tableau = [5, 15, 26, 12, 78, 56, 45, 78, 42];
  let tableau2 = [15, 5, 6, 2, 8, 6, 5, 8, 4];
  let tableau3 = [];

  for (let i = 0; i < tableau2.length; i++) {
    tableau3.push(tableau[i] + tableau2[i]);
  }

  console.log(tableau3);
}
*/
