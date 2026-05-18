# Artistic Portfolio

A personal portfolio built with React, featuring a warm, papery aesthetic inspired by Japanese and Korean design sensibilities.

## Design Philosophy

The visual language is warm, unhurried, and thoughtful. It draws on East Asian design principles without using explicit cultural signage — the culture is in the spacing, tone, and typography.

### Color Palette

- **Paper tones**: `#FAF7F2` (base), `#F3EDE2` (cards), `#E9DFD0` (borders)
- **Warm browns**: `#9C7E5A` (accent), `#6B5240` (hover states)
- **Text**: `#1E150D` (primary), `#6B5240` (secondary), `#A8917A` (tertiary)
- **Moss green**: `#7A8C6A` (used sparingly), `#C8D4BE` (tag backgrounds)

### Typography

- **Cormorant Garamond** (300, 400, 500): Display headings, body copy, italic captions
- **DM Sans** (300, 400, 500): Labels, navigation, tags, UI chrome

## Project Structure

```
artistic_portfolio/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Nav.jsx
│   │   ├── Tile.jsx
│   │   ├── MdView.jsx
│   │   ├── EduCard.jsx
│   │   ├── Rule.jsx
│   │   └── Hairline.jsx
│   ├── pages/           # Route pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Project.jsx
│   │   ├── Blog.jsx
│   │   └── BlogPost.jsx
│   ├── content/         # Markdown content
│   │   ├── projects/
│   │   ├── blog/
│   │   └── about.md
│   ├── data/            # Project data
│   │   └── projects.js
│   ├── tokens.js        # Design tokens
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── images/          # Project images
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd artistic_portfolio
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000`

### Build

```bash
npm run build
```

## Adding Content

### New Project

1. Add project metadata to `src/data/projects.js`
2. Create markdown file in `src/content/projects/[project-id].md`
3. Add images to `public/images/`

### New Blog Post

1. Create markdown file in `src/content/blog/[slug].md`
2. Include front matter with title, date, and excerpt

### Markdown Image Syntax

- `![Caption](path/to/image.jpg)` - Standard centered image
- `![full:Caption](path/to/image.jpg)` - Full-width image, no caption
- `![half:Caption](path/to/image.jpg)` - Half-width centered image

## Design Principles

1. **Work with the grain** - Technology should feel natural
2. **Remove until it breaks** - Every element must earn its place
3. **Show the seams** - Transparency builds trust

## Tech Stack

- React 18
- Wouter (routing)
- Marked (markdown parsing)
- Vite (build tool)
- Inline styles (no CSS-in-JS libraries)

## License

MIT