# Setup Guide

Complete guide to get the portfolio running locally.

## Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)
- A code editor (VS Code recommended)

## Installation Steps

### 1. Navigate to the project

```bash
cd artistic_portfolio
```

### 2. Install dependencies

```bash
npm install
```

This will install:
- React 18
- Wouter (routing)
- Marked (markdown parsing)
- Vite (build tool)

### 3. Start the development server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Project Structure

```
artistic_portfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Nav.jsx         # Navigation bar
│   │   ├── Tile.jsx        # Project tile component
│   │   ├── MdView.jsx      # Markdown renderer
│   │   ├── EduCard.jsx     # Education card
│   │   ├── Rule.jsx        # Section divider with label
│   │   └── Hairline.jsx    # Full-width divider
│   ├── pages/              # Route pages
│   │   ├── Home.jsx        # Project grid homepage
│   │   ├── About.jsx       # About page
│   │   ├── Project.jsx     # Individual project view
│   │   ├── Blog.jsx        # Blog index
│   │   └── BlogPost.jsx    # Individual blog post
│   ├── content/            # Markdown content
│   │   ├── projects/       # Project case studies
│   │   ├── blog/           # Blog posts
│   │   └── about.md        # About page content
│   ├── data/
│   │   └── projects.js     # Project metadata
│   ├── tokens.js           # Design tokens (colors, fonts, spacing)
│   ├── App.jsx             # Main app with routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/
│   └── images/             # Project images
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
└── README.md               # Documentation
```

## Adding Content

### Add a New Project

1. **Add metadata** to `src/data/projects.js`:

```javascript
{
  id: 'my-project',
  title: 'My Project',
  description: 'A brief description',
  tag: 'Web App',
  year: 2024,
  featured: false,
  order: 7,
}
```

2. **Create markdown file** at `src/content/projects/my-project.md`:

```markdown
# My Project

Project description and case study content here.

## The Problem

...

## The Solution

...
```

3. **Add images** to `public/images/` and reference them in markdown:

```markdown
![Screenshot of the app](./images/my-project-screenshot.png)
```

### Add a Blog Post

Create a file at `src/content/blog/my-post.md`:

```markdown
---
title: My Blog Post
date: 2024-03-20
excerpt: A brief summary of the post
---

# My Blog Post

Content here...
```

### Update About Page

Edit `src/content/about.md` with your story.

## Customization

### Colors

Edit `src/tokens.js` to change the color palette:

```javascript
export const colors = {
  p0: '#FAF7F2',   // base paper
  p1: '#F3EDE2',   // card surface
  // ... etc
};
```

### Typography

The portfolio uses two Google Fonts:
- Cormorant Garamond (serif)
- DM Sans (sans-serif)

To change fonts, update the Google Fonts link in `index.html` and the font family in `src/tokens.js`.

### Layout

Adjust spacing and layout in `src/tokens.js`:

```javascript
export const spacing = {
  maxWidth: '900px',
  readingWidth: '640px',
  pagePadding: '2rem',
  // ... etc
};
```

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Vite and deploy

### Netlify

1. Push your code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## Troubleshooting

### Port 3000 already in use

Change the port in `vite.config.js`:

```javascript
server: {
  port: 3001
}
```

### Markdown files not loading

Make sure file paths in `src/content/` match the IDs in `src/data/projects.js`.

### Images not showing

- Images should be in `public/images/`
- Reference them as `./images/filename.jpg` in markdown
- Use relative paths from the public directory

## Development Tips

### Hot Reload

Vite provides instant hot module replacement. Changes to components will reflect immediately without page refresh.

### Component Structure

Each component uses inline styles for portability. To add global styles, edit `src/index.css`.

### Markdown Rendering

The `MdView` component handles markdown rendering with custom styling. To modify markdown styles, edit `src/components/MdView.jsx`.

## Support

For issues or questions:
1. Check the README.md
2. Review the code comments
3. Refer to the original specification document

## License

MIT