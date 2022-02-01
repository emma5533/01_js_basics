//laver først en eventlistener på knappen. Når der klikkes igansættes funktion
document.querySelector("button").addEventListener("click", buttonClicked);

//her er funktionen. Denne undersøger hvad der står i inputfeltet med ID'et navn.
//Det får en variabel foran; brugerNavn, for at vi kan bruge den efter.
function buttonClicked() {
  let brugerNavn = document.querySelector("#navn").value;
  console.log(`Tillykke dit navn er ${brugerNavn}`);
}
