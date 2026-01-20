// Fonction pour ouvrir la visionneuse avec le bon PDF
function openDocModal(cheminFichier) {
  const modal = document.getElementById("universalModal");
  const iframe = document.getElementById("pdfViewer");
  const downloadBtn = document.getElementById("modalDownloadBtn");

  // On injecte le chemin du PDF dans l'iframe et dans le bouton download
  iframe.src = cheminFichier + "#view=FitH";
  downloadBtn.href = cheminFichier;

  // On affiche la modale
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Bloque le scroll du fond
}

// Fonction pour fermer la visionneuse
function closeDocModal() {
  const modal = document.getElementById("universalModal");
  const iframe = document.getElementById("pdfViewer");

  modal.style.display = "none";
  iframe.src = ""; // Stop le chargement du PDF
  document.body.style.overflow = "auto"; // Rend le scroll
}

// Fermer si on clique en dehors du cadre blanc
window.onclick = function (event) {
  const modal = document.getElementById("universalModal");
  if (event.target == modal) {
    closeDocModal();
  }
};

document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
