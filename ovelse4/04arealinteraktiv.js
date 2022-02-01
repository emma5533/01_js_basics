//sæt eventlistener på knappen, for at kunne igangsættes nedenstående funktion
document.querySelector("button").addEventListener("click", buttonClicked);

//denne definerer at længden skal "findes" i id'et længde som er inputfeltet i html.
//det samme gælder bredden.
//definer arealet som værende længde gange bredde
function buttonClicked() {
  let længde = document.querySelector("#længde").value;
  let bredde = document.querySelector("#bredde").value;
  let areal = længde * bredde;
  let resultat = `Længden ${længde} meter og bredden er ${bredde} meter. Arealet er ${areal}`;

  console.log(resultat);
}
