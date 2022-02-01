let timer = 3;
let co2UdledtIKgVedFlyrejse = timer * 109;
let resultat = `Ved ${timer} timers flyrejse har du udledt ${co2UdledtIKgVedFlyrejse}kg CO2.`;

if (co2UdledtIKgVedFlyrejse < 100) {
  resultat += " Tæt på Thunberg";
} else if (co2UdledtIKgVedFlyrejse <= 200) {
  resultat += " Jaja, du behøver ikke at melde dig ud af Å!";
} else if (co2UdledtIKgVedFlyrejse <= 600) {
  resultat += " Det er godt for turismen i nordeuropa";
} else {
  resultat += " Nå ja, vi kan jo altid kolonisere en anden planet...";
}

console.log(resultat);
