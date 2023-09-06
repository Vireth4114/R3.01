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
const tva = 20;
document.getElementById("tva").textContent += tva+"%";
let ttc = ht + ht*tva/100;
document.getElementById("ttc").textContent += ttc+"€";

//Exercice 5
let jsp = ((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true);
document.getElementById("jsp").textContent += jsp;

//Exercice 6
let poids = 53;
document.getElementById("poids").textContent += poids+"kg";
let taille = 1.72;
document.getElementById("taille").textContent += taille.toFixed(2)+"m";
let imc = poids / (taille * taille);
document.getElementById("imc").textContent += imc.toFixed(2);

//Exercice 7
const minimum = 50;
document.getElementById("minimum").textContent += minimum+"€";
let montant = 49;
document.getElementById("montant").textContent += montant+"€";
if (montant >= minimum) {
    document.getElementById("frais").textContent = "Livraison Gratuite !";
} else {
    document.getElementById("frais").textContent = "Frais de livraison : "+(minimum-montant)+" euros";
}

//Exercice 8
let binaire = "1010011001101010101010101010"
document.getElementById("binaire").textContent += binaire;
let decimal = parseInt(binaire, 2);
document.getElementById("decimal").textContent += decimal;