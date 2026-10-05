// Dynamic copyright year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// -------------------------------------------------------------
// SMOOTH SCROLLING FOR ALL INTERNAL LINKS & BUTTONS
// Ensures clicking any link (navigation, hero CTA, card buttons, back to top)
// lands cleanly at the right section with proper header offset.
// -------------------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: targetId === "#top" ? 0 : offsetPosition,
        behavior: "smooth"
      });

      // Update URL hash without jumping
      history.pushState(null, null, targetId);
    }
  });
});

// -------------------------------------------------------------
// ACTIVE NAVIGATION HIGHLIGHTING (INTERSECTION OBSERVER)
// -------------------------------------------------------------
const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll("nav a")];

if ("IntersectionObserver" in window && sections.length && navLinks.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.removeAttribute("aria-current");
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.setAttribute("aria-current", "page");
          }
        });
      });
    },
    { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

// -------------------------------------------------------------
// INTERACTIVE CLIPBOARD COPY BUTTONS & TOAST FEEDBACK
// Guarantees every contact action button provides instant, reliable feedback
// -------------------------------------------------------------
const toastEl = document.getElementById("toast");
let toastTimeout = null;

function showToast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.setAttribute("aria-hidden", "false");
  toastEl.classList.add("show");

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    toastEl.classList.remove("show");
    toastEl.setAttribute("aria-hidden", "true");
  }, 2500);
}

document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", async function (e) {
    e.preventDefault();
    e.stopPropagation();

    const textToCopy = this.getAttribute("data-clipboard");
    const isEmail = textToCopy.includes("@");
    const labelType = isEmail ? "Email" : "Phone";

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback for non-https or older environments
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }

      // Visual feedback on button
      const copyTextEl = this.querySelector(".copy-text");
      const originalText = copyTextEl ? copyTextEl.textContent : "Copy";
      if (copyTextEl) copyTextEl.textContent = "Copied!";
      this.classList.add("copied");

      showToast(`✓ ${labelType} copied to clipboard: ${textToCopy}`);

      setTimeout(() => {
        if (copyTextEl) copyTextEl.textContent = originalText;
        this.classList.remove("copied");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      showToast(`Could not copy. Text: ${textToCopy}`);
    }
  });
});

// -------------------------------------------------------------
// THEME TOGGLE — Grey/Brown  ↔  Dark Space
// Reads & writes localStorage("ayushi-theme") and toggles
// data-theme="space" on <html>. Button label flips accordingly.
// -------------------------------------------------------------
(function () {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const STORAGE_KEY = "ayushi-theme";
  const SPACE_THEME = "space";

  const iconEl   = toggleBtn.querySelector(".theme-icon");
  const labelEl  = toggleBtn.querySelector(".theme-label");

  function applyTheme(theme) {
    const isSpace = theme === SPACE_THEME;
    document.documentElement.setAttribute("data-theme", isSpace ? SPACE_THEME : "grey");
    if (!isSpace) document.documentElement.removeAttribute("data-theme");

    if (iconEl)  iconEl.textContent  = isSpace ? "☀" : "✦";
    if (labelEl) labelEl.textContent = isSpace ? "Grey Mode" : "Space Mode";
    toggleBtn.setAttribute("aria-label", isSpace ? "Switch to Grey & Brown Theme" : "Switch to Dark Space Theme");
    toggleBtn.setAttribute("title",      isSpace ? "Switch to Grey & Brown Theme" : "Switch to Dark Space Theme");
    localStorage.setItem(STORAGE_KEY, isSpace ? SPACE_THEME : "grey");
  }

  // Initialise from saved preference
  const saved = localStorage.getItem(STORAGE_KEY) || "grey";
  applyTheme(saved);

  // Toggle on click
  toggleBtn.addEventListener("click", function () {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === SPACE_THEME ? "grey" : SPACE_THEME);

    // Brief star-spin animation feedback
    if (iconEl) {
      iconEl.style.transition = "transform .4s cubic-bezier(0.34, 1.56, 0.64, 1)";
      iconEl.style.transform  = "rotate(360deg) scale(1.3)";
      setTimeout(() => { iconEl.style.transform = ""; }, 420);
    }
  });
})();
