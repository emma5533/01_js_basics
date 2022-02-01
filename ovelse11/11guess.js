//definer et random tal, mellem 0-20
let tal = Math.round(Math.random() * 20);
let guess;
let antal = 1;

document.querySelector("#tjek").addEventListener("click", guessTal);
document.querySelector("#nyt").addEventListener("click", nytSpil);

document.querySelector("#nyt").style.visibility = "hidden";

//her er funktionen
function guessTal() {
  //læs værdien der indtastes i inputfeltet: guess
  guess = document.querySelector("#guess").value;

  //Hvis inputtet er lig med det random tal, skal der logges følgende:
  //og den ene knap vises, men den anden gemmes
  if (guess == tal) {
    console.log("Rigtigt\ndu du prøvede " + antal + " gange");
    document.querySelector("#nyt").style.visibility = "visible";
    document.querySelector("tjek").style.visibility = "hidden";
  } //hvis det er for lavt, så log
  else if (tal > guess) {
    console.log("Det var for lavt, prøv igen");
    antal++;
  } //Hvis det ikke passer på ovenstående, så:
  else {
    console.log("Det var for højt, prøv igen");
    antal++;
  }
}

//den anden funktion til nyt spil
function nytSpil() {
  location.reload();
}
