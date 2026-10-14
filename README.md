# Front-end / automation exercise

## Setup (start now, it runs while we talk - about 2-3 min)

Pick one.

**A. Your own machine** (Node 18.18+ required, check with `node -v`)

```
npm ci
npx playwright install chromium
npm test
```

**B. GitHub Codespaces** (no local setup, needs a GitHub account)

On the repo page: Code > Codespaces > Create codespace on main. Wait until the terminal
finishes installing, then run `npm test`.

Either way, you are ready when `npm test` shows `1 passed`. Tell us if it does not.

Useful commands: `npm run dev` (app on http://localhost:5199), `npm test`,
`npm run test:ui` (Playwright UI mode, local only),
`npx playwright show-report` (HTML report).

You may use any tools you normally use, including AI assistants. What we care about is that
you can explain and defend every line you hand in.

## The app

A small React app that shows a list of users. Each row has a Remove button, and an Add User
button at the bottom adds a user. User data comes from https://randomuser.me/api/ (each call
returns one user). The list starts with one user.

Code: `src/UserList.tsx`, `src/api.ts`. Tests: `tests/`.

## Part 1 - Find the bug + root cause (about 5 min)

QA reported a bug in this app. Before we share their report, take about 3 minutes to find it
yourself - run the app, read the code, whatever you prefer. Then point to the line that causes
it and explain *why* it happens.

## Part 2 - Fix + regression test (about 15 min)

1. Fix the bug with the smallest change you can justify.
2. Write a Playwright test in `tests/` that **fails on the original code and passes on your
   fix** - on every run.
3. Be ready to show us that it fails without your fix.

## Part 3 - Review an AI-generated PR (about 15 min)

After Part 2 we will send you a fix and a test an AI assistant produced for the same bug.
Review it as if it were a teammate's PR:

- What would you keep, what would you delete, and why?
- Does the test actually protect against this bug?
- Is there anything here that introduces a new problem?
