# Schulte Grid

A minimalist browser exercise for attention training. One HTML file, one purpose, zero dependencies.

## What It Is

A Schulte grid is a table of randomly arranged numbers (typically 1-25) used to improve visual perception, attention span, and reading speed. The exercise: find and click the numbers in order as quickly as possible.

This is that exercise, implemented as a single self-contained HTML file.

## Why Build This

I was reading about attention training techniques and came across Schulte grids. Most implementations I found were either:
- Bloated web apps with ads and tracking
- Mobile apps requiring downloads
- PDFs you had to print

I wanted something I could open in a browser and use immediately. So I built it.

## Design Constraints

**One file.** Everything — HTML, CSS, JavaScript — in a single file. No build process, no dependencies, no server. Just open it and it works.

**Fast.** The grid should regenerate instantly. No loading states, no animations that slow you down. The bottleneck should be your attention, not the code.

**Minimal.** No styling beyond what's necessary for function. No colors, no gradients, no fancy fonts. Just a grid and numbers.

## How It Works

```javascript
// Generate random positions for numbers 1-25
const numbers = shuffle([1,2,3,...,25]);

// Render grid
numbers.forEach(num => {
  const cell = document.createElement('div');
  cell.textContent = num;
  cell.onclick = () => handleClick(num);
  grid.appendChild(cell);
});

// Track current target
let target = 1;
function handleClick(num) {
  if (num === target) {
    target++;
    // highlight cell, check if complete
  }
}
```

That's essentially it. The entire implementation is ~100 lines.

## The Practice

I use this most mornings. Five rounds, trying to beat my previous time. It's a quick way to wake up the brain and practice focused attention.

The exercise forces you to:
- Scan the entire grid quickly
- Filter out irrelevant numbers
- Maintain focus despite distractions
- Build a mental map of number locations

## What I Learned

**Simplicity is a feature.** The one-file constraint forced me to think carefully about what was essential. Every line of code had to justify its existence.

**Distribution matters.** A single HTML file can be shared via email, hosted on any server, or run locally. No installation, no setup, no friction.

**Small tools are useful.** Not every project needs to be a platform or a framework. Sometimes the best tool is the one that does exactly one thing well.

## Variations

The basic grid is 5×5 with numbers 1-25. Variations include:
- Larger grids (7×7, 10×10) for increased difficulty
- Letters instead of numbers
- Colored cells where you must match both number and color
- Reverse order (25 down to 1)

I kept the implementation simple, but these variations could be added with minimal code.

## Performance Notes

The grid regenerates in <1ms on modern browsers. The shuffle algorithm is Fisher-Yates, which is O(n) and unbiased. Cell clicks are handled with event delegation for efficiency.

None of this matters for a 5×5 grid, but it's good practice to think about performance even in small projects.

## Tech Stack

- HTML
- CSS (inline)
- Vanilla JavaScript
- No frameworks
- No dependencies
- No build process

## The Philosophy

This project embodies a philosophy: not everything needs to be complex. Sometimes the best solution is the simplest one that works.

A single HTML file is:
- Easy to understand
- Easy to modify
- Easy to share
- Easy to maintain
- Impossible to break with dependency updates

> "Simplicity is the ultimate sophistication." — Leonardo da Vinci