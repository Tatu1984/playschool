# Climb Kiddo — Project Update

**Last updated:** 2026-05-21
**Repo:** [Tatu1984/playschool](https://github.com/Tatu1984/playschool)
**Branches:** `main` (production-tracked by Vercel)

---

## ✅ Done

### Foundation & branding
- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript + Tailwind 4
- shadcn/ui primitives wired (Button, Card, Badge, Sheet, Dialog, Tabs, Carousel, Accordion, etc.)
- Reactbits-style animation kit: SplitText, BlurText, ShinyText, GradientText, Aurora, FloatingShapes, Squares (canvas), DotGrid, Marquee, TiltedCard, Counter, ClickSpark, Magnet, AnimatedList
- Brand system: Climb Kiddo logo + mascots in `public/brand/`, full color tokens (red, orange, blue, magenta, green, cream, navy), Fredoka + Nunito + Baloo fonts
- Hover-rotate logo animation; mobile-safe Logo (tagline hides below `sm`, CTA hides below `sm`)
- Production build green, deployed on Vercel

### Public website (11 pages live)
- `/` — Home (Hero, Pillars, Programs, Activities, Why Us, Testimonials, FAQ, Contact)
- `/about` — Story + Promise + Values + Pillars
- `/programs` — Toddlers · Nursery · JKG · SKG · Summer Camp tabs
- `/activities` — Marquee + **Bangiya Sangeet Parishad Certification banner** + grouped activity cards
  - For all ages: Dance · Art · Taekwondo · Self Defence · Gymnastics
  - Creative Arts · Music & Movement · Sports & Strength · Life Skills
- `/abacus` — 8-level abacus journey + benefits + stats
- `/teachers-training` — Primary Teachers Training certification (6 modules, 120 hrs, placement support)
- `/why-us` — Stats + 6 reasons + FAQ
- `/parents` — Testimonials carousel + FAQ + Contact CTA
- `/gallery` — Live, reads from Vercel Blob manifest, category filter chips, hover captions
- `/contact` — Two branches (Kathgola, Dhakuria), phone, WhatsApp, booking form
- Sticky navbar with 9 nav items (collapses to hamburger sheet below `xl`)
- Footer: 3×4 grid of links, branch addresses, socials, contact info

### Gallery Management System (GMS)
- `/gms/login` — admin password gate, HMAC-signed HttpOnly cookie session
- `/gms` — dashboard: total/photo/video counts, last upload, recent thumbnails, category breakdown
- `/gms/gallery` — full CRUD:
  - Drag-and-drop multi-file upload (50MB cap, images + videos)
  - Per-upload caption + category
  - Edit caption/category in modal
  - Delete with confirm
  - Category filter chips
- API routes: `POST /api/gms/login`, `POST /api/gms/logout`, `GET/POST /api/gms/gallery`, `PATCH/DELETE /api/gms/gallery/[id]`
- `src/proxy.ts` (Next.js 16 convention) protects `/gms/*` and `/api/gms/*`
- Manifest stored at `gallery/_manifest.json` on Vercel Blob — captions, categories, sort order, content type
- Public `/gallery` is the consumer

### Docs
- `docs/sow/sow.md` and `docs/sow/sow.docx` — Master Scope of Work

### Env vars required on Vercel
- `BLOB_READ_WRITE_TOKEN` — Vercel Blob (connected ✅)
- `ADMIN_PASSWORD` — GMS sign-in password (pending — needs to be set in Vercel env vars)

---

## 🚧 In progress / immediate next steps

- **Set `ADMIN_PASSWORD` on Vercel** for Production + Preview + Development, then redeploy so `/gms/login` becomes usable.
- **Clean up the duplicate Vercel project** that's pointing at this same repo (keep the one with the live domain, delete the other, re-verify Blob is on the surviving project).
- **First content drop** into GMS: real campus photos and videos to replace the empty state.

---

## 📋 Backlog

### Content the school needs to provide
- Real campus photos (Kathgola + Dhakuria) to replace mascot placeholders
- Founder/director message and photo
- Real teacher photos + short bios
- Real parent testimonials (with consent + photos/videos)
- Actual fee structure per program
- Branch addresses with maps (Kathgola, Dhakuria — full street address, pincode)
- Privacy Policy / Terms / Safeguarding policy copy
- Careers page copy and openings (if any)
- Real annual day / event photos for Events section (when built)

### Public site polish
- Embed Google Maps for both branches in `/contact`
- Social links wired (Instagram, Facebook, YouTube — currently `#` placeholders in footer)
- Blog section (`/blog`) — listing + post pages
- Events / Calendar page (`/events`) — RSVP, gallery per event
- Careers page (`/careers`)
- Privacy + Terms + Safeguarding pages
- 404 / not-found brand-themed page
- Open Graph + favicon refinements (currently using the JPEG logo as favicon)
- Sitemap.xml + robots.txt
- Lighthouse pass (target: LCP < 2.5s, accessibility 95+)

### Parent-facing features (per SoW, not yet built)
- **Auth system for parents** (email/password, JWT, NextAuth)
- **Parent dashboard** — child overview, attendance, meals, naps, mood, growth
- **Daily activity feed** — teacher uploads + parent timeline
- **Attendance** — check-in/out logs, pickup authorization, QR pickup
- **Notice board** — circulars, announcements, push notifications
- **Parent-teacher messaging** — secure chat, voice notes, video consult booking
- **Fee payments** — Razorpay, invoices, receipts, reminders
- **Progress reports** — milestone tracking, printable PDFs
- **Emergency & safety** — emergency contact, medical/allergy info, broadcasts

### Teacher-facing features
- Teacher dashboard
- Class roster + attendance marker
- Activity uploads (will eventually share to parent feed)
- Lesson planning
- Per-student reports

### Admin-facing features (beyond GMS)
- Branch management (multi-branch admin)
- Students database (enroll, transfer, archive)
- Staff database
- Admissions pipeline (inquiries → applications → seat allocation → enrollment)
- Fee management (structures, invoicing, late-fee automation)
- CMS for editing the public site without code
- Analytics (attendance, fees, engagement, retention)
- Audit log

### Child Learning Zone (later phase)
- Kids landing with mascot picker
- Adventure-map journey progression
- Age-segmented games (2–3, 3–4, 4–5, 5–6)
- Storytelling module (animated, narration, read-along)
- Drawing & creativity canvas
- Music & rhythm
- Rewards / badges system
- AR learning (future)

### Mobile app (separate codebase)
- React Native (Expo) — Parent app
- Push notifications via FCM/APNs
- Offline cache for last feed + games
- App Store + Play Store submissions

### Backend infrastructure (when we start parent/teacher features)
- Prisma 7 + PostgreSQL (Neon) — schema design per SoW §11
- Auth.js (NextAuth) + JWT
- Background jobs (BullMQ + Upstash Redis) for notification fanout, media processing
- Email (Resend), SMS (MSG91/Twilio), WhatsApp Cloud API
- Razorpay integration for fees
- Media pipeline (Mux for video, Sharp for thumbnails)
- Sentry for error tracking

### Ops / DevOps
- Domain setup → point to Vercel (climbkiddo.in or similar)
- Custom email (hello@climbkiddo.in)
- Cloudflare in front of Vercel (optional, for WAF/cache)
- GitHub Actions CI (typecheck + lint on PRs)
- Staging environment vs production
- Backup strategy for Vercel Blob + DB (when DB exists)

---

## Known small fixes / nice-to-haves

- Marquee in `Activities` section uses CSS animation only — fine, but TanStack/Embla could give pause-on-hover with momentum (low priority)
- `Magnet` cursor effect doesn't trigger on touch devices (expected, but verify no jank)
- Confirm logo's right edge is fully visible on iPhone SE-class widths (~320px)
- Add `loading="lazy"` already in place for `<img>`; consider `next/image` swap when real photos arrive for AVIF/WebP

---

## Quick links

- **Live:** see Vercel dashboard for the surviving project URL
- **GMS:** `/gms/login` (admin only)
- **Gallery:** `/gallery` (public)
- **SoW:** [`docs/sow/sow.md`](docs/sow/sow.md)

---

*This file is the running source of truth — update it as work ships.*
