# React State Management Comparison: Context API vs. Zustand vs. Redux Toolkit

This repository contains three separate, runnable implementations of a shopping cart application to benchmark and compare modern React state management solutions.

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

## Results
See [RESULTS.md](./RESULTS.md) for a detailed comparison and decision guide.
