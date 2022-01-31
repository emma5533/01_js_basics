let tid = new Date().getHours();

if (tid <= 10) {
  console.log("Godmorgen");
} else if (tid <= 18) {
  console.log("Goddag");
} else if (tid <= 24) {
  console.log("Godaften");
} else {
  console.log("Godnat");
}
