# Ma. Noriña G. Hatamosa — Portfolio

Built with TanStack Start, React, TypeScript and Tailwind CSS.

## Develop

```sh
npm install
npm run dev
```

## Content

Almost everything on the page lives in `src/config/profile.ts` (name, hero text, timeline,
projects, skills, certifications, contact details).

## Connecting the résumé later

1. Put the PDF in the `public/` folder, e.g. `public/resume.pdf`.
2. In `src/config/profile.ts`, set `resume.url` to `"/resume.pdf"`.

The "View résumé" and "Download résumé" buttons enable automatically.

## Search engines

The site is currently set to `noindex` (see `src/routes/__root.tsx` and `public/robots.txt`).
Remove both when you are ready for it to appear in search results.
