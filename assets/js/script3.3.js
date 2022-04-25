const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");
const name3 = document.querySelector("#name3");
const checkBtn = document.querySelector("#checkBtn");

//check if the 3 names are alphabtecilay sorted?
checkBtn.addEventListener('click', ()=>{
    if (name1.value < name2.value && name2.value < name3.value ){
        alert('trier par ordre alphabetique');
    } else {
        alert('non trier par ordre alphabetique');
    }
});