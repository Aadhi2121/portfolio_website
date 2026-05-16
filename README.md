# Aadhi Valasu Arun — Portfolio Website

A clean, warm, and professional personal portfolio built for GitHub Pages.

## 📁 File Structure

```
portfolio/
├── index.html              ← Main webpage
├── README.md               ← This file
├── assets/
│   ├── css/
│   │   └── style.css       ← All styles
│   ├── js/
│   │   └── main.js         ← Interactions & animations
│   └── images/
│       ├── profile.jpg     ← Hero section photo  ← ADD YOUR PHOTO HERE
│       ├── about.jpg       ← About section photo ← ADD YOUR PHOTO HERE
│       └── (other images)
└── assets/
    └── resume.pdf          ← Your resume PDF     ← ADD YOUR RESUME HERE
```

---

## 🖼️ Adding Your Photos

1. Place your **profile photo** (hero section) at:
   `assets/images/profile.jpg`
   - Recommended: portrait orientation, at least 400×500px

2. Place your **about section photo** at:
   `assets/images/about.jpg`
   - Can be the same or a different casual photo

> If photos are missing, a stylish placeholder with your initials "AVA" will appear automatically.

---

## 📄 Adding Your Resume

Place your resume PDF at:
`assets/resume.pdf`

The "Resume ↗" button in the navbar will open it in a new tab.

---

## 🚀 Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `aadhi-portfolio` or `<yourusername>.github.io`)
2. Push all files in this folder to the `main` branch
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch, root folder `/`
5. Click **Save**
6. Your site will be live at `https://<yourusername>.github.io/<repo-name>/`

---

## ✏️ Customising Content

All content is in `index.html`. Search for sections:
- `<!-- HERO -->` — Name, tagline
- `<!-- ABOUT -->` — Bio, skills
- `<!-- EXPERIENCE -->` — Work history
- `<!-- PROJECTS -->` — Project cards (add GitHub links)
- `<!-- EDUCATION -->` — Degrees, certifications
- `<!-- CONTACT -->` — Email, phone, socials

Update GitHub project links by replacing `href="#"` inside `.project-card__links`.

---

## 🎨 Customising Colors

Edit CSS variables at the top of `assets/css/style.css`:

```css
:root {
  --cream:      #faf7f2;   /* Page background */
  --sage:       #7a9e8e;   /* Primary accent (green) */
  --accent:     #c8856a;   /* Warm accent (terracotta) */
  --ink:        #2c2a26;   /* Main text */
  /* ... */
}
```

---

Built with ♥ — plain HTML, CSS & JS. No frameworks, no build tools.
