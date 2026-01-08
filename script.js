// Animation des barres de compétences
window.addEventListener("scroll", () => {
  const section = document.querySelector("#compétences");
  const bars = document.querySelectorAll(".skill-progress");

  if (window.scrollY + window.innerHeight > section.offsetTop) {
    bars.forEach((bar) => {
      bar.style.width = bar.getAttribute("data-level");
    });
  }
});

// Gestion Modale
function openModal(type) {
  const modal = document.getElementById("modal-overlay");
  const doc = document.getElementById("modal-document");
  modal.classList.add("active");

  if (type === "cv") {
    doc.innerHTML =
      '<iframe src="assets/CV_Stage_2eme_annee_Youssouf_TAPE.pdf" width="100%" height="500px"></iframe>';
  } else {
    doc.innerHTML =
      '<iframe src="assets/Veille_Technologique_RFID_Youssouf.pdf" width="100%" height="500px"></iframe>';
  }
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("active");
}
