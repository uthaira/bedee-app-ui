# bedee-app-ui

Shared UI components for Bedee apps (React + MUI). Built with Rollup and documented with Storybook.

## Requirements

- Node.js (npm)
- Peer dependencies in the consuming app:

```bash
npm install @mui/material @mui/icons-material @mui/x-data-grid @mui/x-date-pickers react react-dom
```

## Install

```bash
npm install bedee-app-ui
```

## Local development

```bash
npm install
npm run dev          # Storybook on http://localhost:6006
```

| Script | Description |
| --- | --- |
| `npm run dev` / `npm run storybook` | Start Storybook |
| `npm run rollup` | Build the library to `dist/` |
| `npm test` | Run Jest tests |
| `npm run build` | Build static Storybook |

## Release

Always release from `main` after your feature branch is merged.

### Publish a new version

```bash
git checkout main
git pull origin main
npm run publish-package
```

This runs `publish.sh`, which:

1. Pulls latest `main`
2. Bumps the **patch** version in `package.json` (e.g. `0.1.104` → `0.1.105`)
3. Runs `npm install` and `npm run rollup`
4. Commits with message `Update to version X.Y.Z`
5. Runs `npm publish`
6. Pushes to `origin main`

You must be logged in to npm (`npm login` / `npm whoami`).

### Bump version only (no publish)

```bash
npm run bump-version
```

### Workflow checklist

1. Merge feature branch into `main`
2. Check out `main` and pull
3. Run `npm run publish-package`
4. Update the consuming app to the new version

Do **not** run bump/publish from a feature branch — commits land on the current branch, while `publish.sh` pushes local `main`.
