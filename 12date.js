//definer nødvendige variabler
let min;
let max;
let dinAlder;
let datesAlder;

//Sørg for at der er en eventlistener på knappen
document.querySelector("button").addEventListener("click", buttonClicked);

//Igangsæt denne funktion, der lige er nævnt
function buttonClicked() {
  //Aflæs værdierne fra inputfelterne dinAlder og datesAlder
  dinAlder = document.querySelector("#dinalder").value;
  datesAlder = document.querySelector("#datesalder").value;

  //Hvor ung må daten mindst være?
  min = Math.round(dinAlder / 2 + 7);
  //Hvor gammel må daten max være?
  max = Math.round((dinAlder - 7) * 2);

  //Hvis din alder er mindre end 15, eller din dates er, så igangsæt komamando:
  if (
    !Number(dinAlder) ||
    dinAlder < 15 ||
    !Number(datesAlder) ||
    datesAlder < 15
  ) {
    console.log("Programmet er ikke for mindreårige");
  } else {
    //datens alde er på eller over minimumsalderen, og lig med eller under maks, er det okay
    if (datesAlder >= min && datesAlder <= max) {
      console.log("Ok, det er passende");
      //Hvis daten er mindre end eller lig med minimum, så er de for unge
    } else if (datesAlder <= min) {
      console.log(
        "Du er " +
          dinAlder +
          " år og din date er " +
          datesAlder +
          ". Din date er " +
          (min - datesAlder) +
          " år for ung."
      );
    } else if (datesAlder >= max) {
      console.log(
        "Du er kun " +
          dinAlder +
          " år, og din date er jo" +
          datesAlder +
          " år. Din date er " +
          (datesAlder - max) +
          " år for gammel til dig!"
      );
    }
  }
}
