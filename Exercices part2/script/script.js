//Exercice 1
const personne = {
    prenom: "Didier",
    nom: "Truukd",
    age: 47,
    ville: "Jouvernaisinaz"
}
console.log("prénom : "+personne.prenom);
console.log("nom : "+personne.nom);
console.log("age : "+personne.age);
console.log("ville : "+personne.ville);

//Exercice 2
personnes = [{prenom: "John", nom: "Doe", age: 25, ville: "Rouen"},
             {prenom: "Jane", nom: "Doe", age: 30, ville: "Paris"},
             {prenom: "Jim", nom: "Doe", age: 35, ville: "Caen"}]
console.log(personnes);
console.table(personnes);

//Exercice 3 😁😁
personnes.push({prenom:"Marc",nom:"Doe",age:32,ville:"Marseille"});
console.log(personnes);
console.table(personnes);

//Exercice 4
personnes[0].prenom = "Jean";
personnes.splice(1, 1);
console.log(personnes);
console.table(personnes);

//Exercice 5
