//sæt eventlistener på knappen, for at kunne igangsættes nedenstående funktion
document.querySelector("button").addEventListener("click", buttonClicked);

//denne definerer at længden skal "findes" i id'et længde som er inputfeltet i html.
//det samme gælder bredden.
//definer arealet som værende længde gange bredde
function buttonClicked() {
  let længde = document.querySelector("#længde").value;
  let bredde = document.querySelector("#bredde").value;
  let a = areal(længde, bredde);

  let resultat;
  if (isNaN(a)) {
    resultat = "Det er ikke et tal, prøv igen";
  } else if (a <= 0) {
    resultat = "Arealet er mindre end, eller lig med 0, prøv igen";
  } else {
    resultat = `Arealet er ${a}`;
  }

  console.log(resultat);
}

//funktion der udregner areal. l for længde, b for bredde skrives i funktionens top.
//denne funktion skal give os - return - længde gange bredde.
function areal(l, b) {
  return l * b;
}
