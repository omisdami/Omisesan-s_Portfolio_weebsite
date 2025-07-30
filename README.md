# 🌐 Omisesan’s Professional Portfolio Website

A sleek, responsive, and fast-loading personal portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

This site showcases projects, a downloadable resume, social links, and a contact form — designed to highlight skills and personality in a clean, developer-friendly UI.

---

## 🚀 Features

- 🎨 Clean, modern, and minimal UI
- 📱 Mobile-first responsive design
- 🔗 GitHub projects integration
- 📄 Downloadable resume
- 💼 LinkedIn and GitHub profile links
- 📧 Built-in contact form
- ⚡ Blazing-fast performance with Vite

---

## 🛠 Tech Stack

| Category      | Stack                          |
|---------------|--------------------------------|
| Frontend      | React 18, TypeScript           |
| Styling       | Tailwind CSS                   |
| Icons         | Lucide React                   |
| Build Tool    | Vite                           |
| Deployment    | Netlify / Vercel / GitHub Pages|

---

## 📦 Getting Started

1. **Clone the repository**  
   ```bash
   git clone https://github.com/omisdami/Omisesan-s_Portfolio_weebsite.git
   cd Omisesan-s_Portfolio_weebsite
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Start development server**  
   ```bash
   npm run dev
   ```

4. **View in browser**  
   Visit [http://localhost:5173](http://localhost:5173)

---

## 🧩 Customization

### ✏️ Personal Info
- Update intro in `src/components/Hero.tsx`
- Edit contact info in `src/components/Contact.tsx`

### 🧠 Resume
- Add your PDF to the `public` folder as `resume.pdf`
- Update content in `src/components/Resume.tsx`

### 💻 GitHub Projects
- Replace `'yourusername'` in `src/components/Projects.tsx` with your actual GitHub handle

### 🔗 Social Media
- Customize LinkedIn, GitHub, etc., in respective components (`Hero`, `Footer`, etc.)

---

## ☁️ Deployment Options

### 🔹 Netlify
```bash
npm run build
# Upload the /dist folder to Netlify
```

### 🔹 Vercel
- Connect your GitHub repo on [vercel.com](https://vercel.com)
- Auto-deployment is detected via Vite

### 🔹 GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add this to `package.json` scripts:
```json
"deploy": "gh-pages -d dist"
```

Then:
```bash
npm run build && npm run deploy
```

---

## 📄 License

MIT License — free to use, adapt, and share.  
**If you use this template, give credit or a ⭐ on GitHub!**
