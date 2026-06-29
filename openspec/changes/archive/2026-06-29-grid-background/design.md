## Context

The portfolio website currently uses a solid background color (`--color-mViolet` / `#1c0118`). Adding a responsive grid pattern background will give it a high-tech/cyberpunk aesthetic that aligns with the neon pink and cyan colors already used in the design.

## Goals / Non-Goals

**Goals:**
- Implement a subtle, premium CSS-based grid pattern background.
- Ensure the background is responsive and scales/repeats correctly.
- Add a radial vignette gradient overlay to fade the grid towards the screen edges.
- Maintain readable text and contrast across all pages.

**Non-Goals:**
- Creating custom SVG assets or using heavy images for the background.
- Adding interactive physics/animations to the grid lines (a static/parallax grid is sufficient).

## Decisions

### 1. CSS Background vs DOM Element Background
- **Choice**: Apply multiple CSS background images directly to the main layout wrapper or body.
- **Rationale**: Using multiple CSS backgrounds (`radial-gradient` and two `linear-gradients` for the grid lines) avoids cluttering the DOM with extra wrapper elements or absolute overlays. It is clean, performant, and easy to maintain.
- **Alternative considered**: Appending a fixed helper `div` with absolute positioning and pseudo-elements. While functional, it is less semantic than applying background styles directly.

### 2. Fixed Grid (Parallax) vs Scrolling Grid
- **Choice**: Use `background-attachment: fixed` for both the grid pattern and the radial vignette.
- **Rationale**: Keeping the background pattern fixed in the viewport while the page content scrolls over it creates a high-fidelity depth/parallax effect that feels extremely premium.

## Risks / Trade-offs

- **Risk**: Contrast issues if the grid is too bright.
  - **Mitigation**: Use very low opacity values (e.g., `rgba(76, 201, 240, 0.05)`) for the grid lines, and fade them almost completely near the viewport edges using a radial gradient.
