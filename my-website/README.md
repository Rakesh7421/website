# Hybrid Static/Dynamic Site

This is a hybrid website that works as a static site by default but can utilize a backend if available.

## Features

- **Static Fallback**: Always accessible even without backend.
- **Dynamic Enhancement**: Uses backend data when available.
- **Automated Deployment**: Deploys to GitHub Pages via GitHub Actions.

## Structure

- `index.html`: Main page
- `css/style.css`: Styles
- `js/main.js`: Client-side logic for fetching data
- `api/fetchData.js`: Optional backend utility
- `.github/workflows/deploy.yml`: Deployment workflow

## How It Works

The JavaScript in `main.js` attempts to fetch data from `/api/data.json`. If successful, it displays backend data; otherwise, it falls back to static content.

## Deployment

Push to the main branch to trigger automatic deployment to GitHub Pages.

## Backend Integration

For backend, use serverless functions (e.g., Netlify Functions, Vercel Serverless) to serve `/api/data.json`.