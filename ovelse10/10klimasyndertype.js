let timer;
let co2UdledtIKgVedFlyrejse;
let klimasynderKommentar;

document.querySelector("button").addEventListener("click", buttonClicked);

function buttonClicked() {
  //Vær sikker på at funktionen læser det input der er tastet og tager stilling til det.
  timer = document.querySelector("#timer").value;
  //hvis det der er indtastet ikke er et tal, eller tomt så skriv en kommentar.
  //Ellers, så rund tallet op til et helt tal og..
  if (isNaN(timer) || timer == "") {
    console.log("Du har jo ikke tastet et tal ind!");
  } else {
    co2UdledtIKgVedFlyrejse = Math.round(timer * 109);

    if (co2UdledtIKgVedFlyrejse < 100) {
      klimasynderKommentar = " Tæt på Thunberg";
    } else if (co2UdledtIKgVedFlyrejse <= 200) {
      klimasynderKommentar = " Jaja, du behøver ikke at melde dig ud af Å!";
    } else if (co2UdledtIKgVedFlyrejse <= 600) {
      klimasynderKommentar = " Det er godt for turismen i nordeuropa";
    } else {
      klimasynderKommentar =
        " Nå ja, vi kan jo altid kolonisere en anden planet...";
    }
  }

  console.log(
    `Ved ${timer} timers flyrejse har du udledt ${co2UdledtIKgVedFlyrejse} kg CO2. ${klimasynderKommentar} `
  );
}
