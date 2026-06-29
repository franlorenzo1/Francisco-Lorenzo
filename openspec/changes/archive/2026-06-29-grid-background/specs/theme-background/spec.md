## ADDED Requirements

### Requirement: Grid background pattern display
The website SHALL render a subtle CSS-based grid pattern background covering the entire page layout. The grid lines MUST be styled with a semi-transparent overlay to ensure that it looks premium and does not degrade text readability.

#### Scenario: Verify grid background is displayed on page load
- **WHEN** the website is loaded in the browser
- **THEN** the background renders a grid pattern over the `--color-mViolet` theme color
- **AND** all page elements remain fully readable with sufficient contrast

### Requirement: Continuous page coverage
The grid pattern background SHALL span the entire width and height of the document, persisting seamlessly as the user scrolls through different sections.

#### Scenario: Verify grid background is continuous during scroll
- **WHEN** the user scrolls down to sections like "About", "Skills", and "Projects"
- **THEN** the grid pattern remains visible and continuous across the entire viewport and scrollable document height without clipping or gaps
