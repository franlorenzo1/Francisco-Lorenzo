# hero-styling Specification

## Purpose
TBD - created by archiving change hero-updates. Update Purpose after archive.
## Requirements
### Requirement: Remove neon border from Hero title
The main heading "Francisco Lorenzo" SHALL be styled without any neon border or glowing drop-shadow effect.

#### Scenario: Verify main title has no glow
- **WHEN** the Hero section loads
- **THEN** the main heading text "Francisco Lorenzo" is displayed clearly without the pink neon drop shadow

### Requirement: Subtitle content update
The professional subtitle text SHALL display "Desarrollador Web Front-End" instead of "Tecnico Universitario en Programación".

#### Scenario: Verify updated subtitle text
- **WHEN** the Hero section loads
- **THEN** the subtitle text displays "Desarrollador Web Front-End"

### Requirement: Subtitle typing animation
The subtitle text SHALL animate in a typewriter style upon page load. The width of the element MUST expand from 0 to the exact character count of the text (27 characters) with a blinking cursor at the end.

#### Scenario: Verify typewriter animation behavior
- **WHEN** the Hero page loads
- **THEN** the subtitle text animates character-by-character over a duration of 2 to 3 seconds
- **AND** a vertical blinking cursor is shown on the right side of the text

