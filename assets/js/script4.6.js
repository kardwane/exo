const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const score3 = document.querySelector("#score3");
const score4 = document.querySelector("#score4");
const check = document.querySelector("#check");

check.addEventListener("click", () => {
  // ballotage
  if (
    score1.value >= 12.5 &&
    score1.value <= 50 &&
    score2.value <= 50 &&
    score3.value <= 50 &&
    score4.value <= 50
  ) {
    // favorable?
    if (
      score1.value > score2.value &&
      score1.value > score3.value &&
      score1.value > score4.value
    ) {
      alert("ballotage favorable");
    } else {
      alert("ballotage défavorable");
    }
  } else {
    //gagnant ou battu
    if (score1.value > 50) {
      alert("élu au premier tour");
    }
    if (
      score2.value > 50 ||
      score3.value > 50 ||
      score4.value > 50 ||
      score1.value < 12.5
    ) {
      alert("battu au premier tour");
    }
  }
});
