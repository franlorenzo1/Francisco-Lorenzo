## Context

The current portfolio website points to `/vite.svg` as its favicon, but this file is missing. There are several large PNG images in the `public/` folder (`favicon.png` which is 3.7MB, and `favicon2.png` which is 802KB), but they are not linked and are far too large for a favicon.

## Goals / Non-Goals

**Goals:**
- Link a custom favicon in `index.html`.
- Use a highly optimized favicon image (under 50KB) to prevent slowing down the website loading time.
- Align the favicon style with the portfolio's cyberpunk neon/synthwave style (pink and cyan colors).

**Non-Goals:**
- Creating a multi-page favicon configuration (like webapp manifest, apple-touch-icon, etc.) unless requested. A standard single high-quality PNG favicon link is sufficient.

## Decisions

### Decision 1: Use an optimized 64x64 PNG favicon
- **Alternatives Considered**: 
  - Using the existing `public/favicon.png` (3.7MB) directly: Rejected due to performance reasons. 3.7MB for a favicon is a critical performance issue.
  - Using an SVG: Considered, but standard PNG is universally compatible and at 64x64 it will be less than 5KB, which is extremely lightweight.
- **Choice**: Generate or crop/resize a 64x64 or 32x32 PNG favicon featuring a neon 'F' or dev-themed branding element matching the site's dark neon style.

### Decision 2: Reference path in index.html
- **Choice**: Update `index.html` to point to `/favicon.png`.

## Risks / Trade-offs

- **Risk**: Favicon does not load or remains cached.
  - **Mitigation**: Clear browser cache or use a query parameter cache-buster (e.g. `/favicon.png?v=1`) during validation.
