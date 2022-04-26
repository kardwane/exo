//boucle qui affiche la table de muliplication de chiffre
const chiffre = 7;
const result = document.querySelector('#result');

//pour 
//for (valeur depart compteur; valeur fin de compteur; vitesse d'incrementation){ mon action }
for(let i = 1; i<=10; i++){
    result.innerHTML += chiffre + ' * ' + i +' = '+(chiffre*i) + '<br/>';
}
result.innerHTML += "====================================== <br/>";

//tantque
let i = 1;
//while(condition de sortie non atteinte, on boucle)
while(i<=10){
    result.innerHTML += chiffre + ' * ' + i +' = '+(chiffre*i) + '<br/>';
    i++;
}

