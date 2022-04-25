const age = document.querySelector("#age");
const checkBtn = document.querySelector("#checkBtn");

//tell the grade from the age
checkBtn.addEventListener("click", () => {
  /*
  if (age.value < 6) {
    alert("trop jeune");
  } else if (age.value >= 6 && age.value <= 7) {
    alert("poussin");
  } else if (age.value >= 8 && age.value <= 9) {
    alert("pupille");
  } else if (age.value >= 10 && age.value <= 11) {
    alert("minime");
  } else if (age.value >= 12) {
    alert("poussin");
  }
*/
  /* if(age.value < 6){
        alert('trop jeune');
    }
    if(age.value>=6 && age.value <=7){
        alert('poussin');
    };
    if(age.value>=8 && age.value <=9){
        alert('pupille');
    };
    if(age.value>=10 && age.value <=11){
        alert('minime');
    };
    if(age.value>=12){
        alert('poussin');
    }; */
  if (age.value < 6) alert("trop jeune");
  if (age.value >= 6 && age.value <= 7) alert("poussin");
  if (age.value >= 8 && age.value <= 9) alert("pupille");
  if (age.value >= 10 && age.value <= 11) alert("minime");
  if (age.value >= 12) alert("cadet (trop vieux)");
});
