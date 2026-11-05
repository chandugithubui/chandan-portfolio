# Hero Portrait Assets

This directory contains the three-face portrait composition images for the Hero section.

## Required Assets

### 1. portrait-front.png (or .jpg)
**Currently using:** `/assets/images/chandan-hero.jpg` as fallback
- Main frontal portrait in navy blazer
- This is the prominent foreground image
- Resolution: 800x800px minimum
- Format: PNG preferred (transparent background) or JPG
- Position: Center, foreground, full opacity

### 2. portrait-left.png (or .jpg)
**Status:** Missing - needs genuine left-facing side profile
- Left-facing side profile photograph
- Should face inward (towards center)
- Resolution: 800x800px minimum
- Format: PNG preferred or JPG
- Position: Left side, behind main portrait, 40% opacity, darker filter

### 3. portrait-right.png (or .jpg)
**Status:** Missing - needs genuine right-facing side profile
- Right-facing side profile photograph
- Should face inward (towards center)  
- Resolution: 800x800px minimum
- Format: PNG preferred or JPG
- Position: Right side, behind main portrait, 40% opacity, darker filter

## Fallback Behavior

If side profile images are not provided:
- The component will attempt to load from this directory
- On error, it falls back to the main frontal image with reduced opacity
- This creates a placeholder effect until genuine side profiles are added

## Photography Guidelines

For best results when capturing side profiles:
- Same lighting conditions as the frontal portrait
- Same background (or transparent)
- Same outfit (navy blazer preferred for consistency)
- Natural expression matching the frontal portrait
- Face should be turned approximately 90 degrees (true profile)
- Maintain professional composition

## Implementation Notes

The three-face portrait composition is implemented in:
- Component: `src/components/sections/Hero.jsx`
- CSS: `src/index.css` (search for "THREE-FACE CIRCULAR PORTRAIT")

Image loading priority:
1. Try loading from `/assets/images/hero/portrait-[left|right].png`
2. On error, apply opacity fallback to main frontal image
3. Component continues to function with graceful degradation
