// -------------------------------------------------------------
// DOWNLOAD PDF BUTTON
// Downloads the existing PDF file from the same folder as the site.
// -------------------------------------------------------------
(function () {
  const pdfBtn = document.getElementById("download-pdf-btn");
  if (!pdfBtn) return;

  const iconEl = pdfBtn.querySelector(".pdf-icon");

  pdfBtn.addEventListener("click", function () {
    // Animate the download icon
    if (iconEl) {
      iconEl.style.transition =
        "transform .35s cubic-bezier(0.34, 1.56, 0.64, 1)";
      iconEl.style.transform = "translateY(6px) scale(1.2)";

      setTimeout(() => {
        iconEl.style.transform = "";
      }, 380);
    }

    // Download PDF from the same folder
    setTimeout(() => {
      const link = document.createElement("a");

      link.href = "./resume.pdf";
      link.download = "Ayushi_Patel_Resume.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 200);
  });
})();
