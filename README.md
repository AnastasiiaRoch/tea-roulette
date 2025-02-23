# Tea Roulette Test Project

This is a Tea Roulette Test Project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). This repository contains a tea roulette functionality that helps select a responsible team member to make tea.

## Tech Stack

- React (Next.js)
- Typescript
- Tailwind CSS

Tests may also be included: 
- unit using [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro/) to cover the component`s logic
- Component and E2E tests using Cypress

## Folder Structure

- **app**: the default Next.js folder for routes (there is a specific App Router routes structure):
  - Each route is a separate folder with the page.jsx file inside;
  - It is possible to use one shared layout.jsx for all routes or use separate layout files for different sets of routes;
- **feature**: components and logic for the concrete feature;
- **lib**: common components (atoms/molecules/organisms), hooks, utils, common types, services and validation rules;
- **api**: APIs;

## Getting Started

#### Run the App

```bash
docker-compose build

docker-compose up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Run the App Without a Functional API

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run the production server:

```bash
npm run build
npm run start
```

Run linting:

```bash
npm run lint
```

## Note

**nisienai/tea-round-picker image doesn't work on MacOS which fails the app**