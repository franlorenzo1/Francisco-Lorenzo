## Context

The user wants to refine the visual hierarchy of the Hero section. By removing the neon glow from the name and introducing a clean, typewriter-animated subtitle, the Hero section will look sharper and have a modern interactive entrance.

## Goals / Non-Goals

**Goals:**
- Remove the neon pink drop shadow from "Francisco Lorenzo".
- Change the subtitle to "Desarrollador Web Front-End".
- Apply a typewriter entrance animation to the subtitle.
- Use monospaced typography (`font-mono`) on the subtitle to ensure exact animation widths (using `ch` units).

**Non-Goals:**
- Rewriting the styling of other page sections or changing other animations.

## Decisions

### 1. Dedicated Typewriter Animation Class
- **Choice**: Define a custom CSS class `.typewriter-frontend` in `src/index.css` with a matching `@keyframes` block set specifically to `27ch` and `steps(27)`.
- **Rationale**: Since the string "Desarrollador Web Front-End" has exactly 27 characters, a custom animation ensures the cursor stops exactly at the end of the text without trailing empty space.
- **Typography Integration**: The animated element will use the `font-mono` class. This guarantees that each character has the same width as a `ch` unit, preventing text clipping or overflow.

### 2. Title Shadow Removal
- **Choice**: Replace the classes on the title span to remove `drop-shadow-[0_0_12px_#f72585]`.
- **Rationale**: This directly matches the user's request to test removing the neon outline from the name.

## Risks / Trade-offs

- **Risk**: Typing animation not fitting on smaller screens (wrapping text breaks typewriter effect).
- **Mitigation**: Ensure the typewriter container is styled to prevent line breaks (`white-space: nowrap`) or hide overflow. If needed, the font size can scale down on mobile viewports.
