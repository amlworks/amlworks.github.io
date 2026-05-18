# Quick Start

Get the portfolio running in 3 steps:

## 1. Install Dependencies

```bash
cd artistic_portfolio
npm install
```

## 2. Start Development Server

```bash
npm run dev
```

## 3. Open in Browser

Visit `http://localhost:3000`

---

## What You'll See

- **Home (/)**: Project grid with filtering by tag
- **About (/about)**: Your story, education, and principles
- **Blog (/blog)**: Blog post index
- **Projects (/projects/:id)**: Individual project case studies

## Next Steps

1. **Customize content**: Edit files in `src/content/`
2. **Add your projects**: Update `src/data/projects.js`
3. **Add images**: Place them in `public/images/`
4. **Adjust colors**: Edit `src/tokens.js`

See `SETUP.md` for detailed instructions.

## Build for Production

```bash
npm run build
```

Output will be in `dist/` folder, ready to deploy.