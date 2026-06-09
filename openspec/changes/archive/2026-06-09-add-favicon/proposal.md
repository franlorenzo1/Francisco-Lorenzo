## Why

The portfolio website currently references `/vite.svg` in `index.html`, which is missing, resulting in a blank or broken favicon in the browser tab. Adding a dedicated, high-quality favicon is essential for professional branding and completeness of the portfolio.

## What Changes

- Link the favicon in `index.html` to the selected/optimized favicon file.
- Check and optimize the favicon assets (e.g. `favicon.png` or `favicon2.png` in `public/`), converting or resizing if necessary to ensure fast load times (currently `favicon.png` is very large: 3.7MB).
- Ensure the favicon loads correctly.

## Capabilities

### New Capabilities
- `favicon-branding`: Provide and configure a brand-aligned favicon for the website.

### Modified Capabilities
