let currentSectionIndex = 1;
const sections = document.querySelectorAll(".autonomie-section");
const totalSections = sections.length;
const prevBtn = document.getElementById("autonomie-prevBtn");
const nextBtn = document.getElementById("autonomie-nextBtn");
function updateSections() {
  sections.forEach((section, index) => {
    const sectionNumber = index + 1;
    section.classList.remove("active", "previous", "next");
    if (sectionNumber === currentSectionIndex) {
      section.classList.add("active");
    } else if (sectionNumber < currentSectionIndex) {
      section.classList.add("previous");
    } else {
      section.classList.add("next");
    }
  });
  prevBtn.disabled = currentSectionIndex === 1;
  nextBtn.disabled = currentSectionIndex === totalSections;
}
nextBtn.addEventListener("click", () => {
  if (currentSectionIndex < totalSections) {
    currentSectionIndex++;
    updateSections();
  }
});
prevBtn.addEventListener("click", () => {
  if (currentSectionIndex > 1) {
    currentSectionIndex--;
    updateSections();
  }
});
updateSections();
