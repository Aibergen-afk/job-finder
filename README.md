# Job Finder — React SPA

A production-grade Single Page Application for managing job listings, built as a frontend capstone project.

## Features

- **Authentication** — Register / Login / Logout with localStorage persistence; protected routes redirect unauthenticated users
- **Full CRUD** — Create, Read, Update, and Delete job listings
- **Real-time search & filter** — Filter by title and category using `useMemo` for performance
- **API integration** — Service layer calling JSONPlaceholder REST API with loading, error, and empty states
- **Data persistence** — All jobs, auth state, and theme preference survive page reloads via localStorage
- **Dark / Light theme** — Toggle persisted across sessions
- **Statistics page** — Live counts by category, protected route

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React 19, JSX |
| Routing | React Router v7 (nested, dynamic, protected routes) |
| State | Context API + `useReducer` |
| Build | Vite |
| Styling | Plain CSS (responsive, dark theme) |

## Architecture

```
src/
├── components/       # Reusable UI (Header, JobCard, JobForm, …)
├── pages/            # Route-level components (JobsPage, EditJobPage, …)
├── context/          # Global state — AuthContext, JobsContext, ThemeContext
├── hooks/            # Custom hooks — useFetch, useLocalStorage
├── services/         # API abstraction — jobsService.js
└── utils/            # Pure helpers — formatSalary, generateId
```

## Custom Hooks

- **`useFetch(url)`** — Generic data fetching with loading/error states and AbortController cleanup
- **`useLocalStorage(key, initialValue)`** — Encapsulated read/write to localStorage with JSON serialization

## State Management

`JobsContext` uses `useReducer` with actions: `ADD_JOB`, `UPDATE_JOB`, `DELETE_JOB`, `SET_LOADING`.  
All context functions are wrapped in `useCallback` to prevent unnecessary re-renders.

## Getting Started

```bash
npm install
npm run dev
```

## Routes

| Path | Page | Protected |
|---|---|---|
| `/` | Home | No |
| `/jobs` | Job listing | No |
| `/jobs/:id` | Job detail | No |
| `/jobs/:id/edit` | Edit job | Yes |
| `/add` | Add job | Yes |
| `/stats` | Statistics | Yes |
| `/login` | Login / Register | No |
| `*` | 404 Not Found | No |

## Author

Aibek Beriskendirov — Frontend Development & React, Endterm Project
