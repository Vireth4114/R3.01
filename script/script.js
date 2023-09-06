//Exercice 1
let celsius = 27;
document.getElementById("celsius").textContent += celsius+"°C";
let fahrenheit = celsius * 9/5 + 32;
document.getElementById("fahrenheit").textContent += fahrenheit+"°F";

//Exercice 2
let longueur = 45;
document.getElementById("longueur").textContent += longueur+" cm";
let largeur = 12;
document.getElementById("largeur").textContent += largeur+" cm";
let aire = longueur*largeur;
document.getElementById("aire").textContent += aire+" cm²";

//Exercice 3
let prenom = "Jean";
document.getElementById("prenom").textContent += prenom;
let nom = "Aubry";
document.getElementById("nom").textContent += nom;
let lesdeux = prenom+" "+nom;
document.getElementById("lesdeux").textContent += lesdeux;

//Exercice 4
let ht = 9;
document.getElementById("ht").textContent += ht+"€";
let tva = 20;
document.getElementById("tva").textContent += tva+"%";
let ttc = ht + ht*tva/100;
document.getElementById("ttc").textContent += ttc+"€";