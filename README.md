# Finito Landing Page

The landing page for [Finito](https://finito.sh/).

## Setup

```bash
npm install
```

### Environment variables

Copy `.env.example` to `.env.local` and set your values:

```
VITE_LOOPS_FORM_ID=cm0zp1b3d02g6lqxu7lipl01x
VITE_LOOPS_DOMAIN=app.loops.so
VITE_LOOPS_USER_GROUP=Finito Waitlist
```

Note: We use the Loops newsletter-form endpoint from the client, sending `email` and a `userGroup` (e.g., “Finito Waitlist”). If you later need to enforce mailing list membership, add a server-side endpoint using the Loops SDK and set the `mailingLists` object there.

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```
