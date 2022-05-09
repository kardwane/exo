const getCountries = async ()=>{
    //je recupere la réponse de l'api pays
    const url = await fetch("https://restcountries.com/v3.1/all");
    //je transforme le resultat en JSON
    const res = await url.json();
    // console.log(res);
    //pour chaque pays
    res.forEach((country) => {
        //je créer sa "fiche"
        const p = document.createElement('p');
        //si le pays ne possede aps de capital "j'adapte" sa fiche en retirant la capital
        if(country.capital) {
            p.textContent=`${country.name.common} - ${country.capital[0]}` ;
        } else {
            p.textContent=`${country.name.common} - pas de capital` ;
        }
        // j'ajoute la "fiche" a mon body HTML
        document.querySelector('body').appendChild(p);
        console.log(country);
    });
}

//appel de la methode
getCountries();

