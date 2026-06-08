# React State Management Comparison: Context API vs. Zustand vs. Redux Toolkit

This repository contains three separate, runnable implementations of a shopping cart application to benchmark and compare modern React state management solutions.

## Live Demo
- **Context Version**: ```https://context-version.vercel.app/```
- **Redux Version**: ```https://redux-version.vercel.app/```
- **Zustand Version** ```https://zustand-version.vercel.app/```
  
## Architecture

- **Context Version**: Implements both Naive (single provider) and Optimized (split provider) patterns.
- **Zustand Version**: Uses a minimalist, hook-based store with precise selectors.
- **Redux Version**: Follows official Redux Toolkit best practices with `createSlice` and `configureStore`.

## Key Features
- **Render Tracking**: Every component displays its render count in real-time.
- **Premium Design**: Modern UI with Lucide icons and responsive layout.
- **Benchmarking**: Detailed comparison of bundle size and render efficiency.

## Getting Started

### Prerequisites
- Node.js (v18+)
- Docker (optional)

### Running Locally
Navigate to any version directory and run:
```bash
npm install
npm run dev
```

### Running with Docker
```bash
docker-compose up --build
```
The Redux version will be available at `http://localhost:8080`.

## Profiling
To analyze the performance and re-render behavior:
1.  Install the **React Developer Tools** extension.
2.  Open the application in your browser.
3.  Open DevTools (`F12`) and go to the **Profiler** tab.
4.  In Settings, enable **"Record why each component rendered"**.
5.  Click **Record**, interact with the app (e.g., click "Add to Cart" multiple times), and then click **Stop**.
6.  The resulting flame graph will show you exactly which components rendered and why.

## Results
See [RESULTS.md](./RESULTS.md) for a detailed comparison and decision guide.

## Bundle Analysis
To generate your own real-time bundle analysis reports, run:

```bash
# For Zustand Version
cd zustand-version
npx -y vite-bundle-visualizer

# For Redux Version
cd redux-version
npx -y vite-bundle-visualizer
```
This will open a browser window with a treemap of your bundle. You can then take a screenshot of that and replace the files in the `bundle-analysis/` directory.
