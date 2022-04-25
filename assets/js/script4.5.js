const age = document.querySelector("#age");
const sexe = document.querySelector("#sexe");
const send = document.querySelector("#send");
const result = document.querySelector("#result");

send.addEventListener("click", () => {
  // console.log(age.value, sexe.value)
  if (
    (age.value > 20 && sexe.value === "h") ||
    (age.value >= 18 && age.value <= 35 && sexe.value === "f")
  ) {
    result.textContent = "Vous payez l'impot";
  } else {
    result.textContent = "Vous ne payez pas l'impot";
  }
});
