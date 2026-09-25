# Vanessa Pacheco — Frontend & Full-Stack Developer Portfolio

A responsive, high-performance personal portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**, tailored for GitHub Pages deployment.

## 🚀 Live Demo & Links
- **GitHub**: [https://github.com/vanpacheco](https://github.com/vanpacheco)
- **LinkedIn**: [https://www.linkedin.com/in/vanpacheco08/](https://www.linkedin.com/in/vanpacheco08/)
- **Featured Live Project (TruBuildCG)**: [https://trubuildcg.com](https://trubuildcg.com/)

---

## 🛠 Tech Stack
- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Bundler & Dev Server**: Vite 6
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (Static Hosting)

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
The static production bundle is generated inside the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 GitHub Pages Deployment Instructions

This project is pre-configured for seamless automated deployment to GitHub Pages via GitHub Actions.

### Step 1: Push Code to GitHub
1. Initialize/commit the project:
   ```bash
   git add .
   git commit -m "feat: complete Vanessa Pacheco portfolio matching design"
   ```
2. Link to your GitHub repository and push to the `main` branch:
   ```bash
   git remote add origin https://github.com/vanpacheco/vpacheco.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages in Repository Settings
1. On GitHub, navigate to your repository **Settings** → **Pages** (in the left sidebar).
2. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**.
3. Every time you push changes to `main`, the included workflow in `.github/workflows/deploy.yml` will automatically build the site and deploy it to GitHub Pages.

---

## 📄 License
MIT © Vanessa Pacheco
