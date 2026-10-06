# ✦ Portfolio Website

> A thoughtfully designed personal portfolio website focused on **Data Analytics, Applied Machine Learning, Generative AI, and Data Engineering**.

<div align="center">

### Built with intention. Designed for clarity. Engineered for impact.

**Developed by Ravi Shankar Srivastwa & Shrirang Vaje**

[Contact Developers](mailto:dravisrivastwa1116@gmail.com)

</div>

---

## Overview

This project is a modern, responsive personal portfolio website designed to present professional experience, technical skills, selected projects, academic background, and contact information in a clean editorial interface.

The design intentionally avoids the typical generic portfolio aesthetic and instead uses a structured visual system with:

- Editorial-style layouts
- Warm neutral tones
- Structured typography
- Architectural project cards
- Interactive navigation
- Responsive sections
- Downloadable resume
- Accessible interaction feedback

The website is designed to communicate both **technical capability and professional identity** without overwhelming the visitor.

---

## ✦ Features

### Personal Portfolio

- Professional introduction and hero section
- Career positioning and personal philosophy
- Selected project showcase
- Professional experience timeline
- Technical skills matrix
- Academic credentials
- Contact section

### Interactive Experience

- Smooth scrolling navigation
- Active section highlighting
- Responsive layout
- Clipboard copy functionality
- Toast notifications
- Animated interaction elements
- Back-to-top navigation

### Resume Download

The **Download PDF** button retrieves the resume directly from the project directory.

```text
./resume.pdf
```

The downloaded file can be given a custom filename through the JavaScript download handler.

---

## 🎨 Design Philosophy

The website follows a deliberately restrained visual language.

### Visual Principles

| Principle | Approach |
|---|---|
| Typography | Strong editorial hierarchy |
| Layout | Structured grid system |
| Color | Warm stone, brown, taupe & charcoal |
| Components | Minimal but expressive |
| Animation | Subtle and purposeful |
| Navigation | Simple and predictable |
| Content | Information-first |

The goal is to make the portfolio feel **designed rather than generated**.

---

## 🧩 Technology

The project is intentionally lightweight and does not require a large framework stack.

### Frontend

- HTML5
- CSS3
- Vanilla JavaScript

### Browser APIs

- Intersection Observer API
- Clipboard API
- DOM APIs
- Browser Download API
- Smooth Scrolling

### Assets

- Custom portfolio imagery
- PDF resume
- Custom styling and interaction scripts

---

## 📁 Project Structure

```text
portfolio/
│
├── index.html
├── style.css
├── script.js
│
├── hero-image.jpeg
├── resume.pdf
│
└── README.md
```

### File Responsibilities

| File | Purpose |
|---|---|
| `index.html` | Main portfolio structure and content |
| `style.css` | Complete visual design and responsive styling |
| `script.js` | Interactions, navigation, clipboard and PDF download |
| `hero-image.jpeg` | Hero section image |
| `resume.pdf` | Downloadable resume |
| `README.md` | Project documentation |

---

## 🚀 Getting Started

No build system or package manager is required.

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Enter the project directory

```bash
cd portfolio
```

### 3. Open the website

You can simply open:

```text
index.html
```

in a modern browser.

For local development, you can also use a simple local server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

---

## 📄 Resume Download

The portfolio contains a downloadable PDF resume.

Place the resume in the root directory:

```text
portfolio/
└── resume.pdf
```

The download button references:

```javascript
link.href = "./resume.pdf";
```

This keeps the implementation simple and allows the website to work without a backend.

---

## 📱 Responsive Design

The interface is designed to adapt across:

- Desktop
- Laptop
- Tablet
- Mobile

The content hierarchy remains consistent while the layout adjusts to smaller screens.

---

## 🔐 Privacy

This website is designed as a static portfolio.

It does not require:

- User accounts
- Database storage
- Authentication
- Server-side processing
- Personal visitor data collection

External contact actions such as email and phone links are handled by the visitor's device.

---

## 🛠️ Customization

To personalize the portfolio, the primary areas to modify are:

### Personal Information

Edit the content inside:

```text
index.html
```

### Visual Design

Modify:

```text
style.css
```

### Interactions

Modify:

```text
script.js
```

### Resume

Replace:

```text
resume.pdf
```

with the updated resume while keeping the same filename.

### Hero Image

Replace:

```text
hero-image.jpeg
```

with another image while keeping the same filename, or update the image path in `index.html`.

---

## 🤝 Developers

<div align="center">

### Developed by

**Ravi Shankar Srivastwa**  
**Shrirang Vaje**

---

📧 **Contact:**  
**[dravisrivastwa1116@gmail.com](mailto:dravisrivastwa1116@gmail.com)**

</div>

---

## © Developer Watermark

> **© Ravi Shankar Srivastwa · Shrirang Vaje**  
> *Designed and developed by the project authors.*

This attribution is intentionally included as a developer watermark and should remain with the project unless explicitly agreed otherwise.

---

## 📜 License

If this repository is intended to be publicly distributed or reused, add an appropriate `LICENSE` file to define how the source code and assets may be used.

For example:

```text
LICENSE
```

> **Note:** A README does not itself establish an open-source license. Add a separate license file if you intend to grant reuse, modification, or redistribution rights.

---

## 💬 Contact

For questions, collaboration, feedback, or development inquiries:

**Ravi Shankar Srivastwa & Shrirang Vaje**

📧 **dravisrivastwa1116@gmail.com**

---

<div align="center">

### Built with care.

**Ravi Shankar Srivastwa · Shrirang Vaje**

</div>
