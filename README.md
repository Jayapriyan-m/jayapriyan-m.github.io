# Jayapriyan M — Portfolio

A fast, static React + Vite portfolio. All content is in one file: `src/data/portfolio.js`.

**Tech:** React 18, Vite 5, Lucide React icons, plain CSS (design tokens as CSS variables). No backend.

## 1. Run locally
Requires [Node.js 18+](https://nodejs.org).
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # preview the build
```

## 2. Folder structure
```
public/            static files served as-is
  images/profile.jpg           your portrait
  images/projects/             optional project images
  resume.pdf, favicon.svg, robots.txt
src/
  data/portfolio.js            ALL editable content
  components/                  Navbar, Hero, Content (About, Experience,
                               Achievements, Education + Leadership, Certifications),
                               Projects, Skills, Contact (+ Footer), Social, SectionHeading
  styles/global.css            design tokens (colors, fonts) + base styles
  styles/components.css        component styles
index.html                     title, meta tags, Open Graph, structured data
.github/workflows/deploy.yml   GitHub Pages deployment
```

## 3. Edit your content
Open `src/data/portfolio.js`:
- Name, title, intro, location, photo path, resume path → `site`
- Email, phone, LinkedIn, GitHub, HackerRank → `links`
- Experience, skills, achievements, education, leadership, certifications → their own arrays

## 4. Profile photo
Your photo is already at `public/images/profile.jpg`. To change it, overwrite that file (keep the name) or put a new image in `public/images/` and change `site.photo`. Portrait 4:5 or taller works best. If the image is missing, a "JP" placeholder appears.

## 5. Projects
Edit the `projects` array in `portfolio.js`. Each project has `title`, `year`, `categories`, `tags`, `summary`, optional `github`, `live`, `badge`, and `image`. The Parental Control project has no GitHub link yet: add `github: 'https://…'` when you have it. If a project image file is missing, the card shows an abstract illustration instead. To use real screenshots, drop files named as in `image` into `public/images/projects/`. To add a project, copy an entry and pick `art` from `ml`, `music`, `shield`, `shop`. Filters come from `projectFilters`.

## 6. Resume PDF
Replace `public/resume.pdf` with your latest PDF (keep the file name). The one included is the CV you uploaded.

## 7. Colors and fonts
Edit the variables at the top of `src/styles/global.css` (`--accent`, `--bg`, `--f-display`, …). Fonts load from Google Fonts in `index.html`.

## 8. SEO
In `index.html`, replace `https://your-portfolio-url.example/` (canonical, `og:url`, `og:image`) with your real URL after deploying.

## 9. Deploy to Render (free static site)
1. Push this project to a GitHub repository.
2. Render → **New → Static Site** → connect the repo.
3. Build Command: `npm install && npm run build`
4. Publish Directory: `dist`
5. Create the site. No rewrite rules are needed (single page).

## 10. Deploy to GitHub Pages
The Vite `base` is `'./'` (relative), so the same build works at `username.github.io/repo-name/`.
1. Push to GitHub on the `main` branch.
2. Repository → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes automatically.

## 11. Notes
- Project illustrations are abstract graphics, not real app screenshots.
- There is no contact form, because a static site has no backend. Contact uses mailto, tel and a copy-email button.
- The Anthropic certification has no verification link; add one to `featuredCert` if you get it.
