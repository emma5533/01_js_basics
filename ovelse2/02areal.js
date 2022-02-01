//definer variabler, der ønskes at arbejdes med
//arealet skal være de definerede værdier for længde og bredde
let længde = 5;
let bredde = 5;
let areal = længde * bredde;
let resultat;

if (areal < 100) {
  resultat = "Arealet er for lille"; //hvis arealet er mindre end 100, skriv:
} else if (areal < 200) {
  resultat = "Arealet er ok"; //hvis arealet er mindre end 200, skriv;
} else {
  resultat = "Arealet er for stort"; //hvis intet ovenstående passer, så skriv:
}
console.log(resultat);
