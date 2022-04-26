//les tableaux
//déclaration simple
let tableau = [
    "texte",
    15,
    true,
    "toto"
];

//ajouter un element en fin de tableau
tableau.push("nouvelle valeur");
tableau = [...tableau,"autre nouvelle valeur" ]

//modifier une valeur dans un tableau (ex case n°2)
//tableau[indice] = valeur
tableau[1] = 30; //la numeration commence à 0 d'ou le -1

//supprimer une case de mon tableau
tableau.splice(3,1);

//parcourir un tableau
//foreach((case, indice)=>{ traitement a effectuer sur la case})
let contenuTableau = "";
tableau.forEach((item, indice)=>{
    contenuTableau+=" la case n°"+indice +" contient la valeur "+item+"<br/>";
})

document.querySelector('#result').innerHTML = contenuTableau;

