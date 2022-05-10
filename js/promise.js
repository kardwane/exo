/*
const countryTitle = document.querySelector("#countryTitle");
const countryFlag = document.querySelector("#countryFlag");
const counryFrName = document.querySelector("#counryFrName");
const population = document.querySelector("#population");
const superficie = document.querySelector("#superficie");
const languages = document.querySelector("#languages");

const getCountry = async (name) => {
	//je recupere la réponse de l'api pays
	const url = await fetch(`https://restcountries.com/v3.1/name/${name}`);
	//je transforme le resultat en JSON
	const response = await url.json();
	const country = response[0];

	document.querySelector("#result").innerHTML = "";

	countryTitle.textContent = country.name.common;
	countryFlag.src = country.flags.png;
	counryFrName.textContent =
		"Nom français : " + country.translations.fra.official;
	population.textContent = country.population;
	superficie.textContent = country.area + " km²";

	let lstLng = [];
	for (lang in country.languages) {
		lstLng.push(country.languages[lang]);
	}

	languages.textContent = lstLng.join(", ");
};

document.querySelector("#searchCountry").onsubmit = (e) => {
	e.preventDefault();
	getCountry(document.querySelector("#country").value);
};
*/

// const getCountries = async () => {
// 	//je recupere la réponse de l'api pays
// 	const url = await fetch("https://restcountries.com/v3.1/all");

// 	//je transforme le resultat en JSON
// 	const res = await url.json();
// 	// console.log(res);
// 	//pour chaque pays
// 	res.forEach((country) => {
// 		//je créer sa "fiche"
// 		const p = document.createElement("p");
// 		//si le pays ne possede pas de capital "j'adapte" sa fiche en retirant la capital
// 		if (country.capital) {
// 			p.textContent = `${country.name.common} - ${country.capital[0]}`;
// 		} else {
// 			p.textContent = `${country.name.common} - pas de capital`;
// 		}
// 		// j'ajoute la "fiche" a mon body HTML
// 		document.querySelector("#result").appendChild(p);
// 		console.log(country);
// 	});
// };

//appel de la methode
// getCountries();

/*
//version create element
const getCountry = async (name) => {
	//je vide la zone de resultat
	document.querySelector("#result").innerHTML = "";
	//je recupere la réponse de l'api pays
	const url = await fetch(`https://restcountries.com/v3.1/name/${name}`);
	//je transforme le resultat en JSON
	const response = await url.json();
	response.forEach((country) => {
		console.log(country);

		const divCountry = document.createElement("div");
		divCountry.classList.add("card", "mb-2" );

		const imgCountry = document.createElement("img");
		imgCountry.src = country.flags.png;
		imgCountry.classList.add("rounded", "mx-auto", "d-block", "mt-2");
		divCountry.appendChild(imgCountry);

		const cardBody = document.createElement("div");
		cardBody.classList.add("card-body");

		const hName = document.createElement("h5");
		hName.classList.add("card-title");
		hName.textContent = country.name.common;
		cardBody.appendChild(hName);

		const pFrName = document.createElement("p");
		pFrName.classList.add("card-text");
		pFrName.textContent = "Nom FR : " + country.translations.fra.official;
		cardBody.appendChild(pFrName);

		if (country.demonyms["fra"]["m"]) {
			const pGentile = document.createElement("p");
			pGentile.classList.add("card-text");
			pGentile.textContent = "Gentilé : " + country.demonyms["fra"]["m"];
			cardBody.appendChild(pGentile);
		}

		const pPopulation = document.createElement("p");
		pPopulation.classList.add("card-text");
		pPopulation.textContent =
			"Population : " + country.population + " habitants";
		cardBody.appendChild(pPopulation);

		const pArea = document.createElement("p");
		pArea.classList.add("card-text");
		pArea.textContent = "Superficie : " + country.area + " km²";
		cardBody.appendChild(pArea);

		let lstLng = [];
		for (lang in country.languages) {
			lstLng.push(country.languages[lang]);
		}
        console.log(lstLng);

		const pLang = document.createElement("p");
		pLang.classList.add("card-text");
		pLang.textContent = "Langue(s) : " + lstLng.join(", ");
		cardBody.appendChild(pLang);

		let lstCur = [];
		for (currencie in country.currencies) {
			lstCur.push(country.currencies[currencie]);
		}

		const pCurencies = document.createElement("p");
		pCurencies.classList.add("card-text");
		lstCur.forEach((cur) => {
			pCurencies.innerHTML +=
				"Nom monnaie : " +
				cur["name"] +
				", symbole : " +
				cur["symbol"] +
				"<br/>";
		});

		cardBody.appendChild(pCurencies);

		openStreetMapsLink = document.createElement("a");
		openStreetMapsLink.href = country.maps.openStreetMaps;
		openStreetMapsLink.target = "_blank";
		openStreetMapsLink.classList.add("btn", "btn-info");
		openStreetMapsLink.textContent = "Voir sur la carte du monde";
		cardBody.appendChild(openStreetMapsLink);

		divCountry.appendChild(cardBody);
		document.querySelector("#result").appendChild(divCountry);
	});
};
*/

const result = document.querySelector("#result");

//version string literal + destructuration
const getCountry = async (name) => {
	//je vide la zone de resultat
	result.innerHTML = "";
	//je recupere la réponse de l'api pays
	const url = await fetch(`https://restcountries.com/v3.1/name/${name}`);
	//je transforme le resultat en JSON
	const response = await url.json();

	response.forEach((country) => {
		let gentile = "";
		if (country.demonyms["fra"]) {
			gentile =
				country.demonyms["fra"]["m"] + " et " + country.demonyms["fra"]["f"];
		}

		const objLanguages = Object(country.languages);
		let lstLng = "";
		for (lang in objLanguages) {
			lstLng += lang + ", ";
		}

		const objCur = Object(country.currencies);
		let lstCur = "";
		for (currencie in objCur) {
			lstCur +=
				country.currencies[currencie]["name"] + " (" + country.currencies[currencie]["symbol"] + ")";
		}

		const countryCard = `
        <div class="card mb-2">
            <img
                src="${country.flags.png}"
                class="rounded mx-auto d-block mt-2"
            />
            <div class="card-body">
                <h5 class="card-title">${country.name.common}</h5>
                <p class="card-text">Nom FR : ${country.translations.fra.official}</p>
                <p class="card-text">Gentilé : ${gentile}</p>
                <p class="card-text">Population : ${country.population} habitants</p>
                <p class="card-text">Superficie : ${country.area} km²</p>
                <p class="card-text">Langue(s) : ${lstLng}</p>
                <p class="card-text">Nom monnaie : ${lstCur}<br /></p>
                <a
                    href="${country.maps.openStreetMaps}"
                    target="_blank"
                    class="btn btn-info"
                    >Voir sur la carte du monde</a
                >
            </div>
        </div>
        `;
		result.innerHTML += countryCard;
	});
};

document.querySelector("#searchCountry").onsubmit = (e) => {
	e.preventDefault();
	getCountry(document.querySelector("#country").value);
};
