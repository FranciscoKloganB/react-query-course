# Issue Tracker Webapp

## Project

This project is an app for tracking issues. The backend is fully mocked with [MSW](https://mswjs.io) - the project is building the UI and data fetching using [React Query](https://react-query.tanstack.com)

My final implementation can be found at **https://rqissuetracker.netlify.app/**

## Info

This is the repository was originally forked from **[ui.dev](https://ui.dev)** "React Query" course project. However, it decoupled itself from it, since the very first lesson project lesson.

In particular this repository slightly changes the tooling:

- `TypeScript` instead of `JavaScript`
- `Tailwind` instead of pure `CSS`
  - Revamped UI and UX
  - Better responsiveness and accessibility
  - Most styles were built by me, e.g.: few taken from `Tailwind UI` or similar OSS TW component libs.
  - `Styled-Components`
- Code-quality devtools:
  - Eslint
  - Prettier
  - Husky (pre-commit, pre-push)
  - Typechecking on build

The original course can be found at **[https://ui.dev/checkout/react-query?from=tanstack]** and the originally final app at **[https://react-query-issue-tracker.ui.dev]**
