
# Synapso Modern Starter (Vite + React + TS + Tailwind)

**What you get**
- Vite + React 18 + TypeScript
- TailwindCSS (dark-ready), modern glass/gradient look
- React Router (multi-page: Home + Waitlist)
- Sensible lint/format (ESLint + Prettier)
- Production build with source maps

## Run it
```bash
npm install
npm run dev
# build
npm run build && npm run preview
```

## Branding (logo, header, footer)
- **Logo**: replace `public/logo.svg` (kept outside the bundle for easy swapping).
- **Header**: edit the brand text in `src/routes/App.tsx` and links in `Header.tsx`.
- **Footer**: tweak links/label inside `src/routes/App.tsx` or extend `Footer.tsx`.
- **Colors**: adjust Tailwind theme in `tailwind.config.ts` (e.g. `colors.brand`) and background in `src/styles.css` (`:root --bg`).

## Waitlist page
- Open `src/routes/Waitlist.tsx`, replace the commented `fetch` with your backend endpoint (e.g., `/api/waitlist` or Formspree/Basin).
- Status handling and accessible live region are built in.

## Add more pages
- Create a new route in `src/routes/YourPage.tsx`.
- Add `{ path: 'your-page', element: <YourPage/> }` to `createBrowserRouter` in `src/main.tsx`.
- Add a nav link in `Header.tsx`.

## Deploy
- **Netlify/Vercel**: set build command `npm run build`, output `dist/`.
- **Static hosting**: `npm run build` then upload `dist/`. For React Router, enable SPA fallback (e.g., `_redirects` with `/* /index.html 200` for Netlify).

## Optional: shadcn/ui (prepped)
If you want a component library later:
1) `npx shadcn@latest init`
2) `npx shadcn@latest add button card input`
Tailwind is already configured; components will slot right in.
