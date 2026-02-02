# Logo Integration Plan

## Overview
Add your picture logo to the Chronic Haven website without breaking the existing functionality.

## Current State
- Logo area in [`src/components/Nav.tsx`](src/components/Nav.tsx:22) currently uses an SVG icon + text "Chronic Haven"
- Public folder at `public/` is where static assets should be placed

## Proposed Changes

### Step 1: Copy Logo to Project
Copy your logo image file to the `public/` folder. Recommended naming:
- `public/logo.png` (for PNG)
- `public/logo.svg` (for SVG)
- `public/logo.jpg` (for JPG)

### Step 2: Update Nav Component
Modify [`src/components/Nav.tsx`](src/components/Nav.tsx:22) to use the Image component:
- Replace the SVG icon with Next.js `<Image>` component
- Keep the text "Chronic Haven" or remove if desired
- Ensure proper sizing (recommended: ~40x40px or ~50px height)
- Add `alt` text for accessibility

### Step 3: Test the Site
Verify:
- Logo displays correctly on desktop and mobile
- Navigation links still work
- No console errors
- Responsive layout maintained

## Logo Requirements
- Recommended dimensions: 40-50px height (width will scale proportionally)
- Supported formats: PNG, JPG, SVG, WebP
- For best quality on purple theme, use a transparent background

## Backup Plan
The current SVG logo code will be preserved in comments so it can be easily restored if needed.
