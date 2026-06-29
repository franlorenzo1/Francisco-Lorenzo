## Why

The user wants to refine the visual style of the Hero section. Specifically, they want to remove the neon glow effect from the main title ("Francisco Lorenzo"), update their professional title to "Desarrollador Web Front-End", and add an engaging typewriter/typing animation to this subtitle to make the entrance dynamic.

## What Changes

- **Title Styling**: Remove the neon drop shadow (`drop-shadow-[0_0_12px_#f72585]`) from the "Francisco Lorenzo" text in `src/components/Hero.jsx`.
- **Subtitle Text**: Change the subtitle from "Tecnico Universitario en Programación" to "Desarrollador Web Front-End".
- **Typing Animation**: Add a custom typewriter CSS animation in `src/index.css` and apply it to the subtitle in `src/components/Hero.jsx`.

## Capabilities

### New Capabilities
- `hero-styling`: Styles, text content updates, and custom entrance animations within the Hero section.

### Modified Capabilities
<!-- None -->

## Impact

- `src/components/Hero.jsx`: To modify the title classes and update/animate the subtitle.
- `src/index.css`: To define the custom typewriter keyframes and class for the new subtitle.
