const createP = document.querySelector("#createP");
const deleteP = document.querySelector("#deleteP");
const toDelete = document.querySelector("#toDelete");
const deleteImgChild = document.querySelector("#deleteImgChild");
const toDeleteChild = document.querySelector("#toDeleteChild");
const result = document.querySelector("#result");

createP.addEventListener("click", function () {
	//je demande a créer une balise <p>
	const img = document.createElement("img");
	//je lui ajoute un contenu text
	img.src =
		"https://marcas-logos.net/wp-content/uploads/2020/11/JavaScript-logo.jpg";
	//je lui ajout un id
	img.id = "logoJS";
	//je lui ajoute une action sur le click
	img.onclick = () => {
		img.width = "500";
	};
	this.style = "color:yellow;";

	//meme si mon element est créer, pour il n'est créer que coté JS
	//je dois demander a Js d'inclue mon élément sur ma page html
	result.appendChild(img);
});

deleteP.onclick = function () {
	// je dmande à JS de supprimer l'element suivant
	toDelete.remove();
	//on peut aussi modifier le style d'un element directement
	this.style = "display:none";
};

deleteImgChild.onclick = function (){
    toDeleteChild.childNodes[1].remove();
    console.log(toDelete.parentNode);
};
