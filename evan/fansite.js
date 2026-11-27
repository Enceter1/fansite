// Bonnes réponses
var bonnesReponses = ["d", "d", "a", "c", "c"]; //

const boutonValider = document.getElementById("valider");
const resultat = document.getElementById("resultat");

boutonValider.addEventListener("click", function () {
  let score = 0;
  const total = bonnesReponses.length;
  const reponsesUtilisateur = [];

  // Récupération des réponses cochées
  for (let i = 1; i <= 5; i++) {
    const choix = document.querySelector('input[name="q' + i + '"]:checked');

    if (choix === null) {
      reponsesUtilisateur.push("");          // pas de réponse = 0 point
    } else {
      reponsesUtilisateur.push(choix.value);
    }
  }

  // Comparaison des deux listes
  for (let i = 0; i < bonnesReponses.length; i++) {
    if (reponsesUtilisateur[i] === bonnesReponses[i]) {
      score++;
    }
  }

  // Message selon le score
  let message = "Ton score : " + score + " / " + total + ". ";
  if (score === total) {
    message += "Absolute FAN 2 l'Âne";
  } else if (score >= 4) {
    message += "Pas mal, fais peter le Clafoutis";
  } else if (score >= 3) {
    message += "T’es pas mouru, T’es pas mouru !";
  } else if (score >= 2) {
    message += "Nan, tu pues l'ognion de la bouche !";
  } else {
    message += "BOURRICOT DE CRETIN D'AVORTON D'ÂNE !";
  }

  resultat.textContent = message;
});