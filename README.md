# Tent Parts Generator

A lightweight web app for generating tent assembly parts lists for the volunteers of the Site Production crew at the Edmonton Folk Music Festival.

## Features

- Generate parts lists for multiple tent sizes
- Supports:
  - 10' x 10'
  - 10' x 20'
  - 20' x 30'
- Increment/decrement controls for fast quantity entry
- Dark mode toggle (with system preference detection and local storage persistence)
- Click-to-enlarge part images with descriptions
- Simple static frontend with no backend required
- Mobile-friendly responsive layout

## Purpose

This tool is designed to help event crews quickly calculate the parts needed for assembling tents at festivals, fairs, and outdoor events.

## Tech Stack

- HTML5
- Vanilla JavaScript
- CSS3

## Usage

The app is hosted on a VPS and accessed via browser on a smartphone in the field.

1. Navigate to the site URL on your phone
2. Enter the number of each tent size needed using the `+` / `-` buttons
3. Tap **Generate Parts List** to see a full breakdown of required parts
4. Tap any part image to view a larger version with a description
5. Tap **Reset** to clear all inputs and start over

## Deployment

The app is fully static — just serve the project directory from any web server (e.g. Nginx or Apache). No build step or dependencies required.

## Project Structure

```
├── index.html       # Main HTML file
├── styles.css       # Styling and dark mode theming
├── script.js        # Parts data and app logic
└── images/
    ├── efmf-logo.png
    ├── parts/       # Part thumbnail images
    └── tents/       # Tent thumbnail images
    
```

## Parts Data

Parts lists are defined in `script.js` and include components such as canopies, legs, corner joints, eve tubes, centre poles, cables, ground stakes, straight joiners, cross joints, and D-clips — with quantities automatically scaled based on the number of tents entered.
