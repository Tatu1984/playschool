# Scope of Work — Play School Website & Mobile Application

**Project Name:** Play School Digital Learning & Engagement Ecosystem
**Document Type:** Master Scope of Work (SoW)
**Version:** 1.0
**Date:** 2026-05-20
**Prepared For:** Play School Management
**Prepared By:** Infiniti Tech Partners

---

## Table of Contents

1. Project Overview
2. Project Vision & Goals
3. Master Feature List
4. Technology Stack
5. Software Architecture
6. Data Flow
7. API Reference
8. Route Map (Frontend + Backend)
9. Folder Structure
10. User Roles & Permissions
11. Database Design Overview
12. Security & Compliance
13. Performance & Scalability
14. Accessibility & Localization
15. Third-Party Integrations
16. Deliverables
17. Project Phases & Timeline
18. Acceptance Criteria
19. Assumptions & Exclusions
20. Future Scope

---

## 1. Project Overview

The Play School Digital Ecosystem is a multi-surface platform designed for early-childhood education institutions. It consists of:

1. A premium, animated, responsive **Public Website**
2. A **Parent Mobile Application** (iOS + Android)
3. A **Child Interactive Learning Interface** (educational games + content)
4. A **School Administration Dashboard** (multi-branch, multi-role)
5. A **Teacher & Staff Management Panel**

The product is positioned as a **complete digital learning and engagement ecosystem for early childhood development** — not a traditional school portal. It blends Disney-style emotional warmth, modern EdTech usability, interactive gaming, and parent trust-building UX.

---

## 2. Project Vision & Goals

### 2.1 Vision

To deliver a warm, safe, interactive, playful, intelligent, educational, emotionally engaging, and visually immersive ecosystem for play schools — built to scale across branches, franchises, and geographies.

### 2.2 Strategic Goals

- Build a brand-differentiating digital identity for the play school
- Centralize parent communication, fee management, and child progress reporting
- Provide age-adaptive educational games and learning modules for children
- Enable multi-branch administration with rich analytics
- Architect the platform for AI personalization, AR learning, and online classes in future phases

### 2.3 Success Metrics

- 90%+ parent app adoption within 60 days of launch
- < 2.5s LCP on website, < 3s cold start on mobile app
- 95%+ uptime SLA
- Daily active engagement on child learning modules
- Reduction in manual fee/attendance/communication workload at branch level

---

## 3. Master Feature List

### 3.1 Brand & Design Direction

- Modern glassmorphism + soft UI with rounded edges
- Child-safe color palette: Sky Blue, Sunshine Yellow, Soft Orange, Mint Green, Lavender Purple, Coral Pink, Soft White
- Motion-driven engagement (Framer Motion + GSAP)
- 1–3 mascots used across onboarding, achievements, navigation, and games
- Seasonal theming (Christmas, Diwali, Halloween, Independence Day, Summer Camp, anniversary)

### 3.2 Public Website

- **Home:** Hero animation, mascot welcome, about, why-choose-us, methodology, virtual campus preview, activities showcase, testimonials, teachers, growth programs, admission CTA, events, safety standards, parent app showcase, games showcase, interactive FAQ, contact & map
- **About Us:** Vision/mission, founder message, philosophy, teaching approach, child psychology, emotional development, learn-through-play, interactive timeline, animated storytelling
- **Programs & Curriculum:** Toddlers, Nursery, Junior KG, Senior KG, Activity programs, Summer camps, Weekend workshops — each with outcomes, activities, skill development, interactive preview, visual timeline, parent expectations, milestones
- **Admissions:** Online inquiry, application, document uploads, fee structure, branch selection, seat availability, workflow tracking, visit scheduler, video counseling booking, lead nurturing automation
- **Interactive Campus Tour:** 360° classroom walkthrough, animated map, virtual guided tour, clickable hotspots, storytelling mode, teacher intro popups, facility highlights
- **Events & Activities:** Calendar, photo/video galleries, annual day, sports, art competitions, parent participation, festivals, RSVP
- **Parent Testimonials:** Video testimonials, ratings, parent stories, interactive sliders, progress experiences
- **Blog:** Parenting tips, child psychology, nutrition, learning methods, activity ideas, screen-time management; SEO, social sharing, AI recommendations, tagging, reading progress
- **Contact:** Smart form, WhatsApp, Google Maps, branch selector, callback requests, emergency contact, social media

### 3.3 Parent Mobile Application

- **Parent Dashboard:** Child overview, attendance summary, daily updates, homework, notifications, upcoming events, meal/sleep/activity/mood reports, growth tracking, fee reminders, performance snapshots
- **Daily Activity Feed:** Photo/video posts, teacher comments, learning updates, participation highlights, emotional notes, timestamps
- **Attendance:** Live status, check-in/check-out logs, pickup authorization, guardian tracking, real-time alerts, QR pickup
- **Notice Board:** Circulars, announcements, event notices, holidays, exam/activity updates, push notifications, rich media
- **Payments:** Online fees, auto reminders, installments, receipts, invoices, multiple gateways, UPI, subscription plans, financial history, late fee automation
- **Parent–Teacher Communication:** Secure messaging, voice notes, video consultation booking, feedback, scheduled meetings, activity/performance discussions
- **Child Progress Reports:** Development analytics, cognitive tracking, skill growth, activity participation, emotional indicators, interactive charts, milestones, printable reports
- **Emergency & Safety:** Emergency contact, live alerts, medical info, allergy tracking, emergency pickup, safety broadcasts

### 3.4 Child Learning & Gaming Ecosystem

Age-segmented, safe, reward-based, audio-assisted, parent-controlled.

- **Age 2–3:** Balloon pop, shape drag-drop, animal sound matching, color sorting, bubble interactions
- **Age 3–4:** Alphabet tracing, matching cards, counting games, musical learning, puzzle assembly
- **Age 4–5:** Word builder, interactive stories, math adventures, pattern recognition, story sequencing
- **Age 5–6:** Educational quests, mini science labs, creative drawing, music creation, world exploration

### 3.5 Gamification Engine

- Reward system: stars, badges, trophies, unlockable characters, daily streaks, skill badges, learning levels
- Learning journey map (adventure-style progression unlocking levels, worlds, mascots, sounds, mini-games)
- Audio interaction: voice-guided instructions, pronunciation support, musical feedback, narration, storytelling, multi-language

### 3.6 Interactive Learning Modules

- Storytelling (animated, read-along, choice-based, narration, moral stories, regional languages, AI voices)
- Drawing & Creativity (finger painting, coloring books, shape drawing, save artwork, stickers, rewards)
- Music & Rhythm (instruments, rhythm tapping, musical puzzles, rhymes, karaoke)
- AR Learning (future scope): AR animals, alphabets, planets, camera learning, gestures

### 3.7 Teacher Management

- Teacher dashboard (attendance, activity updates, report creation, homework assignment, communication, scheduling, performance analytics)
- Classroom activity uploads (image/video, tagging, parent sharing permissions, moderation)
- Lesson planning (curriculum, daily lessons, resources, scheduling, goal tracking)

### 3.8 Administration Dashboard

- Super Admin: multi-branch, role management, student/staff database, payments, analytics, inquiry tracking, admission pipeline, notification controls, app management
- Advanced analytics: attendance, fees, engagement, parent activity, game usage, learning progress, retention
- CMS: dynamic content, blog, homepage, banners, announcements, SEO, media library

### 3.9 AI & Smart Features (Future Ready)

- Personalized learning paths and recommendations
- Adaptive difficulty
- AI parent assistant (FAQs, parenting tips, child summaries, smart reminders)
- AI child analytics (behavior insights, engagement, trends)

### 3.10 Marketing & Growth

- SEO (local, structured data, blog, fast indexing, landing pages)
- Lead generation (funnels, retargeting, CRM, automated follow-ups, WhatsApp automation)
- Referral system (rewards, tracking, campaigns)

### 3.11 Engagement Systems

- Multi-channel notifications (push, email, SMS, WhatsApp, in-app)
- Seasonal experience theming

### 3.12 Media & Content System

- Secure image hosting, video compression, AI tagging, gallery management, story highlights, event albums

---

## 4. Technology Stack

### 4.1 Frontend (Website)

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, RSC) |
| Language | TypeScript 5 |
| UI Library | React 19 |
| Styling | Tailwind CSS 4, CSS Modules |
| Component Library | shadcn/ui |
| Animation | Framer Motion, GSAP, Lottie |
| 3D / Interactive | Three.js / React Three Fiber |
| State | Zustand |
| Data Fetching | TanStack Query, Axios |
| Forms | React Hook Form + Zod |
| Icons | Lucide, custom SVG mascots |

### 4.2 Mobile App (Parent + Child)

| Layer | Technology |
|---|---|
| Framework | React Native (Expo SDK 53) |
| Navigation | Expo Router / React Navigation |
| State | Zustand + TanStack Query |
| Animation | Reanimated 3, Moti, Lottie, Skia |
| Audio | expo-av |
| Camera/QR | expo-camera, expo-barcode-scanner |
| Push | Expo Notifications + FCM/APNs |
| Storage | MMKV, SecureStore |

### 4.3 Backend

| Layer | Technology |
|---|---|
| Runtime | Node.js 22 LTS |
| API Layer | Next.js Route Handlers (App Router) |
| ORM | Prisma 7 |
| Database | PostgreSQL (NeonDB) |
| Cache / Queue | Redis (Upstash) + BullMQ |
| Realtime | WebSocket (Pusher / Ably) |
| Auth | NextAuth.js (Auth.js) + JWT |
| Validation | Zod |
| File Storage | Cloudflare R2 / AWS S3 |
| Media Processing | Sharp, FFmpeg, Mux (video) |
| Email | Resend |
| SMS | Twilio / MSG91 |
| WhatsApp | WhatsApp Cloud API |
| Payments | Razorpay, Stripe |

### 4.4 DevOps & Infra

| Layer | Technology |
|---|---|
| Hosting (web) | Vercel |
| Hosting (mobile build) | EAS Build |
| CDN | Cloudflare |
| Monitoring | Sentry, Vercel Analytics |
| Logs | Logflare / Better Stack |
| CI/CD | GitHub Actions |
| Secrets | Doppler / Vercel env |

---

## 5. Software Architecture

### 5.1 High-Level Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│                          CLIENT SURFACES                             │
│  Public Web (Next.js)   Parent App (RN)   Admin/Teacher Web (Next)   │
└─────────────┬──────────────────┬──────────────────────┬──────────────┘
              │                  │                      │
              ▼                  ▼                      ▼
┌──────────────────────────────────────────────────────────────────────┐
│                     EDGE / CDN (Cloudflare)                          │
└─────────────────────────────────┬────────────────────────────────────┘
                                  │
                                  ▼
┌──────────────────────────────────────────────────────────────────────┐
│             Next.js App Router — API Route Handlers                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                │
│  │ Auth Layer   │  │ Validation   │  │ Rate Limit   │                │
│  └──────────────┘  └──────────────┘  └──────────────┘                │
│                                                                      │
│  ┌──────────────────── Service Layer (business logic) ─────────────┐ │
│  │  AuthService  StudentService  AttendanceService  FeeService     │ │
│  │  ActivityService  GameService  MessagingService  NoticeService  │ │
│  │  ProgressService  AdmissionService  CMSService                  │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  ┌──────────────────── Repository Layer (Prisma) ─────────────────┐  │
│  │  UserRepo  StudentRepo  AttendanceRepo  FeeRepo  ActivityRepo  │  │
│  └────────────────────────────────────────────────────────────────┘  │
└─────────────┬─────────────────────────┬──────────────────┬───────────┘
              │                         │                  │
              ▼                         ▼                  ▼
       PostgreSQL (Neon)         Redis (Upstash)    Object Storage (R2)
              │                         │                  │
              ▼                         ▼                  ▼
     ┌──────────────┐         ┌──────────────┐    ┌──────────────┐
     │ Background   │         │  Pub/Sub +   │    │ Media Pipeline│
     │ Workers      │         │  Realtime    │    │ (Mux/FFmpeg)  │
     └──────────────┘         └──────────────┘    └──────────────┘
              │
              ▼
   ┌────────────────────────────────────────────────────┐
   │ External: Razorpay, Twilio, WhatsApp, Resend, FCM  │
   └────────────────────────────────────────────────────┘
```

### 5.2 Architectural Principles

- **Layered architecture:** Route → Validator → Service → Repository → DB
- **Single source of truth** for shared types in `src/shared/types`
- **Stateless API** with JWT; session refresh through HTTP-only cookies for web
- **Event-driven** background jobs (notifications, media processing, reports) via BullMQ
- **Multi-tenant ready:** Branch-scoped data with row-level filtering
- **Role-based access control (RBAC)** enforced in middleware and service layer

---

## 6. Data Flow

### 6.1 Parent Login → Dashboard Flow

```
Parent App ──(credentials)──▶ /api/auth/login
   ▲                                │
   │                                ▼
   │                          Validator (Zod)
   │                                │
   │                                ▼
   │                          AuthService.login()
   │                                │
   │                                ▼
   │                          UserRepository.findByEmail()
   │                                │
   │                                ▼
   │                          bcrypt.compare()
   │                                │
   │                                ▼
   │                          JWT sign (access + refresh)
   │                                │
   │ ◀──(tokens + profile)──────────┘
   │
   ├─▶ Stores in SecureStore
   ├─▶ TanStack Query bootstraps dashboard
   │     GET /api/students/me/dashboard
   │     GET /api/attendance/today
   │     GET /api/activity-feed?limit=20
   │     GET /api/notices/unread
   │     GET /api/fees/summary
   ▼
Renders Parent Dashboard
```

### 6.2 Teacher Uploads Daily Activity → Parent Sees Update

```
Teacher Panel
   │
   ├─▶ Selects class → uploads photo/video + caption + tags students
   │
   ▼
POST /api/activities
   │
   ▼
Validator → ActivityService.create()
   │
   ├─▶ MediaService: upload to R2 + generate thumbnails (Sharp/FFmpeg)
   ├─▶ ActivityRepository.create()
   ├─▶ Enqueue BullMQ job: "notify-parents"
   │
   ▼
Worker → NotificationService.fanout()
   ├─▶ FCM push to tagged parents' devices
   ├─▶ In-app feed entries written
   └─▶ Optional WhatsApp/SMS based on prefs
   ▼
Parent app receives push → opens app → activity in feed
```

### 6.3 Fee Payment Flow

```
Parent App → /payments → Razorpay Checkout
   │
   ▼
POST /api/fees/create-order
   ├─▶ FeeService computes due amount + late fee
   ├─▶ Razorpay order created
   ▼
Parent completes payment in Razorpay SDK
   │
   ▼
Razorpay webhook → POST /api/webhooks/razorpay
   ├─▶ Signature verified
   ├─▶ FeeService.markPaid()
   ├─▶ Receipt + invoice generated (PDF)
   ├─▶ Notification fanout
   ▼
Parent sees "Paid" status + receipt download
```

### 6.4 Child Game Session Flow

```
Child opens game → GameService.startSession()
   │
   ▼
POST /api/games/sessions
   │
   ▼
Game runs locally (offline-capable) → events buffered
   │
   ▼
On completion → POST /api/games/sessions/:id/complete
   ├─▶ ProgressService updates stars/badges/streaks
   ├─▶ AnalyticsService logs engagement
   ├─▶ Achievements unlocked → push to parent
   ▼
Adaptive difficulty recomputed for next session
```

---

## 7. API Reference

All endpoints are JSON, JWT-authenticated (except `/auth/*`, `/public/*`, `/webhooks/*`), rate-limited, validated via Zod, and follow `/api/v1/...` versioning.

### 7.1 Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Parent self-register (invite code) |
| POST | `/api/auth/login` | Email + password login |
| POST | `/api/auth/refresh` | Refresh access token |
| POST | `/api/auth/logout` | Revoke refresh token |
| POST | `/api/auth/forgot-password` | Initiate reset email |
| POST | `/api/auth/reset-password` | Reset with token |
| POST | `/api/auth/verify-otp` | Verify phone OTP |
| GET | `/api/auth/me` | Current user profile |

### 7.2 Users & Roles

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/users` | List users (admin) |
| GET | `/api/users/:id` | User detail |
| POST | `/api/users` | Create user (admin) |
| PATCH | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Soft-delete user |
| GET | `/api/roles` | Role list |
| POST | `/api/roles/assign` | Assign role to user |

### 7.3 Branches

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/branches` | List branches |
| POST | `/api/branches` | Create branch |
| PATCH | `/api/branches/:id` | Update branch |

### 7.4 Students

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/students` | List students (branch-scoped) |
| GET | `/api/students/:id` | Student detail |
| POST | `/api/students` | Enroll student |
| PATCH | `/api/students/:id` | Update student |
| GET | `/api/students/:id/dashboard` | Parent dashboard payload |
| GET | `/api/students/:id/progress` | Progress report |
| GET | `/api/students/:id/milestones` | Milestone log |

### 7.5 Admissions

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/admissions/inquiry` | Public inquiry submission |
| POST | `/api/admissions/applications` | Create application |
| GET | `/api/admissions/applications` | List (admin) |
| PATCH | `/api/admissions/applications/:id` | Update stage |
| POST | `/api/admissions/applications/:id/documents` | Upload docs |
| GET | `/api/admissions/seats` | Seat availability |
| POST | `/api/admissions/visit-bookings` | Schedule school visit |
| POST | `/api/admissions/counseling` | Book video counseling |

### 7.6 Attendance

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/attendance/check-in` | Teacher/QR check-in |
| POST | `/api/attendance/check-out` | Check-out + pickup person |
| GET | `/api/attendance/today` | Today's status |
| GET | `/api/attendance/student/:id` | Per-student history |
| GET | `/api/attendance/class/:id` | Per-class roster |
| POST | `/api/attendance/pickup-authorization` | Authorize pickup |

### 7.7 Activity Feed

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/activities` | Feed (filtered) |
| POST | `/api/activities` | Teacher creates post |
| PATCH | `/api/activities/:id` | Edit |
| DELETE | `/api/activities/:id` | Remove |
| POST | `/api/activities/:id/comments` | Comment |
| POST | `/api/activities/:id/reactions` | React |

### 7.8 Notices

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/notices` | List notices |
| POST | `/api/notices` | Create notice (admin/teacher) |
| GET | `/api/notices/:id` | Detail |
| PATCH | `/api/notices/:id` | Update |
| POST | `/api/notices/:id/read` | Mark read |

### 7.9 Messaging

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/conversations` | Threads |
| POST | `/api/conversations` | Start thread |
| GET | `/api/conversations/:id/messages` | Messages |
| POST | `/api/conversations/:id/messages` | Send (text/voice/file) |
| POST | `/api/conversations/:id/typing` | Typing indicator |
| POST | `/api/meetings` | Book video consult |

### 7.10 Fees & Payments

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/fees/summary` | Outstanding + upcoming |
| GET | `/api/fees/invoices` | Invoice list |
| GET | `/api/fees/invoices/:id` | Detail + PDF |
| POST | `/api/fees/create-order` | Create payment order |
| POST | `/api/fees/installments` | Set plan |
| GET | `/api/fees/receipts/:id` | Receipt PDF |
| POST | `/api/webhooks/razorpay` | Razorpay webhook |
| POST | `/api/webhooks/stripe` | Stripe webhook |

### 7.11 Events & Calendar

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/events` | List events |
| POST | `/api/events` | Create event |
| POST | `/api/events/:id/rsvp` | RSVP |
| GET | `/api/events/:id/gallery` | Photo/video gallery |

### 7.12 Curriculum & Programs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/programs` | Program list (toddlers/nursery/JKG/SKG) |
| GET | `/api/programs/:slug` | Program detail |
| GET | `/api/curriculum/:programId` | Curriculum timeline |
| GET | `/api/lessons` | Lesson list (teacher) |
| POST | `/api/lessons` | Create lesson plan |
| PATCH | `/api/lessons/:id` | Update lesson |

### 7.13 Child Learning & Games

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/games` | Game catalog (by age) |
| GET | `/api/games/:slug` | Game detail + manifest |
| POST | `/api/games/sessions` | Start session |
| POST | `/api/games/sessions/:id/complete` | Submit results |
| GET | `/api/progress/:studentId` | Learning progress |
| GET | `/api/achievements/:studentId` | Achievements + badges |
| GET | `/api/journey/:studentId` | Adventure-map state |
| GET | `/api/stories` | Storytelling content |
| GET | `/api/stories/:id` | Story detail + audio |

### 7.14 Emergency & Safety

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/emergency/contact` | Trigger contact request |
| GET | `/api/emergency/broadcasts` | Safety broadcasts |
| GET | `/api/medical/:studentId` | Medical/allergy info |
| PATCH | `/api/medical/:studentId` | Update |

### 7.15 CMS (Admin)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/cms/pages` | List pages |
| PATCH | `/api/cms/pages/:slug` | Edit dynamic page |
| GET | `/api/cms/blog` | Blog posts |
| POST | `/api/cms/blog` | Create post |
| GET | `/api/cms/banners` | Banners |
| GET | `/api/cms/media` | Media library |

### 7.16 Analytics

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/analytics/attendance` | Attendance trends |
| GET | `/api/analytics/fees` | Fee collection |
| GET | `/api/analytics/engagement` | App engagement |
| GET | `/api/analytics/games` | Game usage |
| GET | `/api/analytics/learning` | Learning progress |
| GET | `/api/analytics/retention` | Retention cohorts |

### 7.17 Notifications

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/notifications` | List for current user |
| POST | `/api/notifications/read` | Mark read |
| POST | `/api/notifications/devices` | Register device token |
| POST | `/api/notifications/preferences` | Update channels |

### 7.18 Public/Marketing

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/public/contact` | Contact form |
| POST | `/api/public/callback` | Callback request |
| POST | `/api/public/newsletter` | Newsletter signup |
| GET | `/api/public/testimonials` | Testimonials |
| POST | `/api/public/referrals` | Referral capture |

---

## 8. Route Map

### 8.1 Public Website Routes

| Route | Page |
|---|---|
| `/` | Home (hero, mascot, showcases) |
| `/about` | About Us |
| `/programs` | Programs index |
| `/programs/[slug]` | Program detail (toddlers, nursery, JKG, SKG, summer-camp) |
| `/admissions` | Admissions landing |
| `/admissions/apply` | Application form |
| `/admissions/visit` | Book visit |
| `/admissions/seats` | Seat availability |
| `/campus-tour` | Interactive 360° tour |
| `/events` | Events list |
| `/events/[slug]` | Event detail |
| `/gallery` | Photo/video gallery |
| `/testimonials` | Testimonials |
| `/blog` | Blog index |
| `/blog/[slug]` | Blog post |
| `/contact` | Contact + map |
| `/careers` | Careers |

### 8.2 Auth Routes

| Route | Page |
|---|---|
| `/login` | Login |
| `/register` | Register (invite code) |
| `/forgot-password` | Reset |
| `/verify-otp` | OTP verification |

### 8.3 Parent Portal Routes (Web Mirror of Mobile App)

| Route | Page |
|---|---|
| `/parent` | Dashboard |
| `/parent/feed` | Activity feed |
| `/parent/attendance` | Attendance |
| `/parent/notices` | Notice board |
| `/parent/messages` | Messages |
| `/parent/payments` | Fees |
| `/parent/payments/invoices` | Invoices |
| `/parent/reports` | Progress reports |
| `/parent/events` | Events |
| `/parent/emergency` | Emergency contacts |
| `/parent/profile` | Profile |
| `/parent/settings` | Settings |

### 8.4 Child Learning Zone Routes

| Route | Page |
|---|---|
| `/kids` | Kids home (mascot picker) |
| `/kids/journey` | Adventure map |
| `/kids/games` | Games catalog |
| `/kids/games/[slug]` | Game player |
| `/kids/stories` | Storytelling |
| `/kids/stories/[id]` | Story player |
| `/kids/draw` | Drawing & creativity |
| `/kids/music` | Music & rhythm |
| `/kids/rewards` | Badges & trophies |

### 8.5 Teacher Panel Routes

| Route | Page |
|---|---|
| `/teacher` | Dashboard |
| `/teacher/classes` | Class list |
| `/teacher/classes/[id]` | Class detail |
| `/teacher/attendance` | Attendance marker |
| `/teacher/activities` | Activity uploads |
| `/teacher/lessons` | Lesson planner |
| `/teacher/messages` | Messages |
| `/teacher/reports` | Student reports |

### 8.6 Admin Dashboard Routes

| Route | Page |
|---|---|
| `/admin` | Overview |
| `/admin/branches` | Branches |
| `/admin/students` | Students |
| `/admin/staff` | Staff |
| `/admin/admissions` | Admissions pipeline |
| `/admin/fees` | Fee management |
| `/admin/notices` | Notice management |
| `/admin/events` | Events |
| `/admin/cms` | CMS |
| `/admin/cms/blog` | Blog editor |
| `/admin/cms/media` | Media library |
| `/admin/analytics` | Analytics |
| `/admin/roles` | Roles & permissions |
| `/admin/settings` | Settings |
| `/admin/audit` | Audit logs |

### 8.7 Mobile App (Parent) Screens

| Screen | Description |
|---|---|
| `Splash` | Branded splash + mascot |
| `Onboarding` | First-time intro slides |
| `Login` | Email/phone login |
| `Dashboard` | Child overview |
| `Feed` | Daily activity feed |
| `Attendance` | Attendance & pickup |
| `Notices` | Notice board |
| `Messages` | Chat |
| `Payments` | Fees |
| `Reports` | Progress |
| `Profile` | Parent profile |
| `Settings` | Settings + notifications |
| `KidsZone` | Child learning entry |

---

## 9. Folder Structure

```
playschool/
│
├── src/
│   ├── app/                          # Next.js App Router (Frontend)
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   ├── forgot-password/
│   │   │   │   └── page.tsx
│   │   │   ├── verify-otp/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── (marketing)/
│   │   │   ├── about/page.tsx
│   │   │   ├── programs/page.tsx
│   │   │   ├── programs/[slug]/page.tsx
│   │   │   ├── admissions/page.tsx
│   │   │   ├── admissions/apply/page.tsx
│   │   │   ├── admissions/visit/page.tsx
│   │   │   ├── campus-tour/page.tsx
│   │   │   ├── events/page.tsx
│   │   │   ├── events/[slug]/page.tsx
│   │   │   ├── gallery/page.tsx
│   │   │   ├── testimonials/page.tsx
│   │   │   ├── blog/page.tsx
│   │   │   ├── blog/[slug]/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   ├── careers/page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── (parent)/
│   │   │   ├── parent/page.tsx
│   │   │   ├── parent/feed/page.tsx
│   │   │   ├── parent/attendance/page.tsx
│   │   │   ├── parent/notices/page.tsx
│   │   │   ├── parent/messages/page.tsx
│   │   │   ├── parent/payments/page.tsx
│   │   │   ├── parent/payments/invoices/page.tsx
│   │   │   ├── parent/reports/page.tsx
│   │   │   ├── parent/events/page.tsx
│   │   │   ├── parent/emergency/page.tsx
│   │   │   ├── parent/profile/page.tsx
│   │   │   ├── parent/settings/page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── (kids)/
│   │   │   ├── kids/page.tsx
│   │   │   ├── kids/journey/page.tsx
│   │   │   ├── kids/games/page.tsx
│   │   │   ├── kids/games/[slug]/page.tsx
│   │   │   ├── kids/stories/page.tsx
│   │   │   ├── kids/stories/[id]/page.tsx
│   │   │   ├── kids/draw/page.tsx
│   │   │   ├── kids/music/page.tsx
│   │   │   ├── kids/rewards/page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── (teacher)/
│   │   │   ├── teacher/page.tsx
│   │   │   ├── teacher/classes/page.tsx
│   │   │   ├── teacher/classes/[id]/page.tsx
│   │   │   ├── teacher/attendance/page.tsx
│   │   │   ├── teacher/activities/page.tsx
│   │   │   ├── teacher/lessons/page.tsx
│   │   │   ├── teacher/messages/page.tsx
│   │   │   ├── teacher/reports/page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── (admin)/
│   │   │   ├── admin/page.tsx
│   │   │   ├── admin/branches/page.tsx
│   │   │   ├── admin/students/page.tsx
│   │   │   ├── admin/staff/page.tsx
│   │   │   ├── admin/admissions/page.tsx
│   │   │   ├── admin/fees/page.tsx
│   │   │   ├── admin/notices/page.tsx
│   │   │   ├── admin/events/page.tsx
│   │   │   ├── admin/cms/page.tsx
│   │   │   ├── admin/cms/blog/page.tsx
│   │   │   ├── admin/cms/media/page.tsx
│   │   │   ├── admin/analytics/page.tsx
│   │   │   ├── admin/roles/page.tsx
│   │   │   ├── admin/settings/page.tsx
│   │   │   ├── admin/audit/page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── layout.tsx
│   │   ├── page.tsx                  # Public home
│   │   └── globals.css
│   │
│   ├── backend/                      # Backend Layer (API Logic)
│   │   ├── api/                      # API Routes (Next.js handlers)
│   │   │   ├── auth/
│   │   │   │   ├── login/route.ts
│   │   │   │   ├── register/route.ts
│   │   │   │   ├── refresh/route.ts
│   │   │   │   ├── logout/route.ts
│   │   │   │   ├── forgot-password/route.ts
│   │   │   │   ├── reset-password/route.ts
│   │   │   │   ├── verify-otp/route.ts
│   │   │   │   └── me/route.ts
│   │   │   ├── users/route.ts
│   │   │   ├── users/[id]/route.ts
│   │   │   ├── roles/route.ts
│   │   │   ├── branches/route.ts
│   │   │   ├── students/route.ts
│   │   │   ├── students/[id]/route.ts
│   │   │   ├── students/[id]/dashboard/route.ts
│   │   │   ├── students/[id]/progress/route.ts
│   │   │   ├── admissions/
│   │   │   │   ├── inquiry/route.ts
│   │   │   │   ├── applications/route.ts
│   │   │   │   ├── applications/[id]/route.ts
│   │   │   │   ├── seats/route.ts
│   │   │   │   ├── visit-bookings/route.ts
│   │   │   │   └── counseling/route.ts
│   │   │   ├── attendance/
│   │   │   │   ├── check-in/route.ts
│   │   │   │   ├── check-out/route.ts
│   │   │   │   ├── today/route.ts
│   │   │   │   └── pickup-authorization/route.ts
│   │   │   ├── activities/route.ts
│   │   │   ├── activities/[id]/route.ts
│   │   │   ├── notices/route.ts
│   │   │   ├── conversations/route.ts
│   │   │   ├── conversations/[id]/messages/route.ts
│   │   │   ├── meetings/route.ts
│   │   │   ├── fees/
│   │   │   │   ├── summary/route.ts
│   │   │   │   ├── invoices/route.ts
│   │   │   │   ├── create-order/route.ts
│   │   │   │   ├── installments/route.ts
│   │   │   │   └── receipts/[id]/route.ts
│   │   │   ├── events/route.ts
│   │   │   ├── events/[id]/rsvp/route.ts
│   │   │   ├── programs/route.ts
│   │   │   ├── curriculum/[programId]/route.ts
│   │   │   ├── lessons/route.ts
│   │   │   ├── games/route.ts
│   │   │   ├── games/sessions/route.ts
│   │   │   ├── games/sessions/[id]/complete/route.ts
│   │   │   ├── stories/route.ts
│   │   │   ├── progress/[studentId]/route.ts
│   │   │   ├── achievements/[studentId]/route.ts
│   │   │   ├── journey/[studentId]/route.ts
│   │   │   ├── emergency/contact/route.ts
│   │   │   ├── medical/[studentId]/route.ts
│   │   │   ├── cms/pages/route.ts
│   │   │   ├── cms/blog/route.ts
│   │   │   ├── cms/banners/route.ts
│   │   │   ├── cms/media/route.ts
│   │   │   ├── analytics/
│   │   │   │   ├── attendance/route.ts
│   │   │   │   ├── fees/route.ts
│   │   │   │   ├── engagement/route.ts
│   │   │   │   ├── games/route.ts
│   │   │   │   ├── learning/route.ts
│   │   │   │   └── retention/route.ts
│   │   │   ├── notifications/route.ts
│   │   │   ├── notifications/devices/route.ts
│   │   │   ├── webhooks/razorpay/route.ts
│   │   │   ├── webhooks/stripe/route.ts
│   │   │   ├── public/
│   │   │   │   ├── contact/route.ts
│   │   │   │   ├── callback/route.ts
│   │   │   │   ├── newsletter/route.ts
│   │   │   │   ├── testimonials/route.ts
│   │   │   │   └── referrals/route.ts
│   │   │   └── middleware.ts
│   │   │
│   │   ├── services/                 # Business Logic Layer
│   │   │   ├── auth.service.ts
│   │   │   ├── user.service.ts
│   │   │   ├── branch.service.ts
│   │   │   ├── student.service.ts
│   │   │   ├── admission.service.ts
│   │   │   ├── attendance.service.ts
│   │   │   ├── activity.service.ts
│   │   │   ├── notice.service.ts
│   │   │   ├── messaging.service.ts
│   │   │   ├── fee.service.ts
│   │   │   ├── payment.service.ts
│   │   │   ├── event.service.ts
│   │   │   ├── curriculum.service.ts
│   │   │   ├── lesson.service.ts
│   │   │   ├── game.service.ts
│   │   │   ├── progress.service.ts
│   │   │   ├── achievement.service.ts
│   │   │   ├── story.service.ts
│   │   │   ├── emergency.service.ts
│   │   │   ├── cms.service.ts
│   │   │   ├── analytics.service.ts
│   │   │   ├── notification.service.ts
│   │   │   ├── media.service.ts
│   │   │   └── email.service.ts
│   │   │
│   │   ├── repositories/             # Data Access Layer
│   │   │   ├── auth.repository.ts
│   │   │   ├── user.repository.ts
│   │   │   ├── branch.repository.ts
│   │   │   ├── student.repository.ts
│   │   │   ├── admission.repository.ts
│   │   │   ├── attendance.repository.ts
│   │   │   ├── activity.repository.ts
│   │   │   ├── notice.repository.ts
│   │   │   ├── message.repository.ts
│   │   │   ├── fee.repository.ts
│   │   │   ├── event.repository.ts
│   │   │   ├── lesson.repository.ts
│   │   │   ├── game.repository.ts
│   │   │   ├── progress.repository.ts
│   │   │   ├── story.repository.ts
│   │   │   ├── cms.repository.ts
│   │   │   └── notification.repository.ts
│   │   │
│   │   ├── database/                 # Database Configuration
│   │   │   ├── prisma/
│   │   │   │   ├── schema.prisma
│   │   │   │   └── migrations/
│   │   │   ├── client.ts
│   │   │   └── seed.ts
│   │   │
│   │   ├── validators/               # Request Validation (Zod)
│   │   │   ├── auth.validator.ts
│   │   │   ├── user.validator.ts
│   │   │   ├── student.validator.ts
│   │   │   ├── admission.validator.ts
│   │   │   ├── attendance.validator.ts
│   │   │   ├── activity.validator.ts
│   │   │   ├── notice.validator.ts
│   │   │   ├── message.validator.ts
│   │   │   ├── fee.validator.ts
│   │   │   ├── event.validator.ts
│   │   │   ├── lesson.validator.ts
│   │   │   ├── game.validator.ts
│   │   │   └── cms.validator.ts
│   │   │
│   │   ├── jobs/                     # Background Workers (BullMQ)
│   │   │   ├── notification.job.ts
│   │   │   ├── media-processing.job.ts
│   │   │   ├── report-generation.job.ts
│   │   │   ├── fee-reminder.job.ts
│   │   │   └── analytics-rollup.job.ts
│   │   │
│   │   └── utils/                    # Backend Utilities
│   │       ├── jwt.util.ts
│   │       ├── hash.util.ts
│   │       ├── rate-limit.util.ts
│   │       ├── rbac.util.ts
│   │       ├── pdf.util.ts
│   │       ├── webhook.util.ts
│   │       └── error-handler.util.ts
│   │
│   ├── frontend/                     # Frontend-Specific Logic
│   │   ├── components/               # React Components
│   │   │   ├── ui/                   # Reusable UI (shadcn)
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Sheet.tsx
│   │   │   │   ├── Toast.tsx
│   │   │   │   └── Skeleton.tsx
│   │   │   ├── animation/            # Motion primitives
│   │   │   │   ├── FloatingMascot.tsx
│   │   │   │   ├── ParallaxScene.tsx
│   │   │   │   ├── ConfettiBurst.tsx
│   │   │   │   ├── BalloonPop.tsx
│   │   │   │   └── PageTransition.tsx
│   │   │   ├── mascot/               # Mascot system
│   │   │   │   ├── MascotGuide.tsx
│   │   │   │   ├── MascotReactor.tsx
│   │   │   │   └── mascot.config.ts
│   │   │   ├── features/             # Feature-Specific Components
│   │   │   │   ├── auth/
│   │   │   │   │   ├── LoginForm.tsx
│   │   │   │   │   └── RegisterForm.tsx
│   │   │   │   ├── marketing/
│   │   │   │   │   ├── HeroScene.tsx
│   │   │   │   │   ├── ProgramShowcase.tsx
│   │   │   │   │   ├── TestimonialSlider.tsx
│   │   │   │   │   └── CampusTour360.tsx
│   │   │   │   ├── parent/
│   │   │   │   │   ├── DashboardSummary.tsx
│   │   │   │   │   ├── ActivityFeed.tsx
│   │   │   │   │   ├── AttendanceCard.tsx
│   │   │   │   │   ├── FeeWidget.tsx
│   │   │   │   │   └── ProgressChart.tsx
│   │   │   │   ├── kids/
│   │   │   │   │   ├── JourneyMap.tsx
│   │   │   │   │   ├── GameTile.tsx
│   │   │   │   │   ├── StoryPlayer.tsx
│   │   │   │   │   ├── DrawingCanvas.tsx
│   │   │   │   │   ├── MusicStudio.tsx
│   │   │   │   │   └── RewardLocker.tsx
│   │   │   │   ├── teacher/
│   │   │   │   │   ├── ClassRoster.tsx
│   │   │   │   │   ├── ActivityUploader.tsx
│   │   │   │   │   └── LessonPlanner.tsx
│   │   │   │   └── admin/
│   │   │   │       ├── BranchSwitcher.tsx
│   │   │   │       ├── AdmissionPipeline.tsx
│   │   │   │       ├── AnalyticsBoard.tsx
│   │   │   │       └── CMSEditor.tsx
│   │   │   └── layout/               # Layout Components
│   │   │       ├── Header.tsx
│   │   │       ├── Sidebar.tsx
│   │   │       ├── Footer.tsx
│   │   │       └── MobileTabBar.tsx
│   │   │
│   │   ├── hooks/                    # Custom React Hooks
│   │   │   ├── useAuth.ts
│   │   │   ├── useUser.ts
│   │   │   ├── useStudent.ts
│   │   │   ├── useAttendance.ts
│   │   │   ├── useFeed.ts
│   │   │   ├── useFees.ts
│   │   │   ├── useProgress.ts
│   │   │   ├── useGames.ts
│   │   │   ├── useNotifications.ts
│   │   │   └── useMascot.ts
│   │   │
│   │   ├── store/                    # State Management (Zustand)
│   │   │   ├── authStore.ts
│   │   │   ├── userStore.ts
│   │   │   ├── appStore.ts
│   │   │   ├── kidsStore.ts
│   │   │   └── notificationStore.ts
│   │   │
│   │   ├── api/                      # Frontend API Client Layer
│   │   │   ├── client.ts             # Axios instance & interceptors
│   │   │   ├── endpoints/
│   │   │   │   ├── auth.api.ts
│   │   │   │   ├── users.api.ts
│   │   │   │   ├── students.api.ts
│   │   │   │   ├── admissions.api.ts
│   │   │   │   ├── attendance.api.ts
│   │   │   │   ├── activities.api.ts
│   │   │   │   ├── notices.api.ts
│   │   │   │   ├── messaging.api.ts
│   │   │   │   ├── fees.api.ts
│   │   │   │   ├── events.api.ts
│   │   │   │   ├── games.api.ts
│   │   │   │   ├── progress.api.ts
│   │   │   │   ├── cms.api.ts
│   │   │   │   └── analytics.api.ts
│   │   │   └── types/                # API Request/Response types
│   │   │       ├── auth.types.ts
│   │   │       ├── user.types.ts
│   │   │       ├── student.types.ts
│   │   │       ├── attendance.types.ts
│   │   │       ├── activity.types.ts
│   │   │       ├── fee.types.ts
│   │   │       ├── game.types.ts
│   │   │       └── common.types.ts
│   │   │
│   │   └── utils/                    # Frontend Utilities
│   │       ├── formatters.ts
│   │       ├── validators.ts
│   │       ├── constants.ts
│   │       ├── audio.ts
│   │       └── animation.ts
│   │
│   ├── shared/                       # Shared Between Frontend & Backend
│   │   ├── types/
│   │   │   ├── user.types.ts
│   │   │   ├── student.types.ts
│   │   │   ├── attendance.types.ts
│   │   │   ├── activity.types.ts
│   │   │   ├── fee.types.ts
│   │   │   ├── notice.types.ts
│   │   │   ├── event.types.ts
│   │   │   ├── game.types.ts
│   │   │   ├── progress.types.ts
│   │   │   └── common.types.ts
│   │   ├── constants/
│   │   │   ├── routes.ts
│   │   │   ├── roles.ts
│   │   │   ├── permissions.ts
│   │   │   ├── age-groups.ts
│   │   │   └── errors.ts
│   │   └── utils/
│   │       ├── common.util.ts
│   │       └── date.util.ts
│   │
│   └── config/                       # Configuration Files
│       ├── env.ts                    # Environment validation (Zod)
│       ├── api.config.ts
│       ├── app.config.ts
│       └── theme.config.ts
│
├── mobile/                           # React Native (Expo) App
│   ├── app/                          # Expo Router routes
│   ├── components/
│   ├── hooks/
│   ├── store/
│   ├── api/
│   ├── assets/
│   └── app.json
│
├── public/                           # Static Assets
│   ├── images/
│   ├── icons/
│   ├── mascots/
│   ├── lottie/
│   └── audio/
│
├── tests/                            # Test Files
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── docs/
│   └── sow/
│       └── sow.md
│
├── .env.local
├── .env.development
├── .env.production
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── package.json
└── README.md
```

---

## 10. User Roles & Permissions

| Role | Capabilities |
|---|---|
| Super Admin | Full system access, multi-branch, roles, analytics, CMS, billing |
| Branch Admin | Manage branch staff/students/fees/events, branch-scoped analytics |
| Teacher | Class roster, attendance, activity uploads, messaging, lesson plans, reports |
| Parent | View child data, payments, messages, notices, activity feed, emergency |
| Student/Child | Sandboxed games, stories, drawing, music, rewards (no PII inputs) |
| Finance Team | Fee structure, invoices, receipts, refunds, finance analytics |
| Counselor | Admissions inquiries, applications, visit bookings, counseling calls |
| Support Team | View-only access to issues, parent profiles, app logs (read-only PII) |

RBAC is enforced via middleware that decodes JWT → loads role + branch context → checks permission matrix before reaching the service layer.

---

## 11. Database Design Overview

Core entities (Prisma models):

- `User`, `Role`, `Permission`, `UserRole`
- `Branch`, `Classroom`, `AgeGroup`, `Program`, `Curriculum`, `Lesson`
- `Student`, `Guardian`, `StudentGuardian`, `MedicalProfile`
- `Admission`, `Inquiry`, `VisitBooking`, `CounselingBooking`
- `Attendance`, `PickupAuthorization`, `EmergencyContact`
- `Activity`, `ActivityMedia`, `ActivityComment`, `ActivityReaction`
- `Notice`, `NoticeRead`
- `Conversation`, `Message`, `MessageAttachment`, `Meeting`
- `FeeStructure`, `Invoice`, `InvoiceLine`, `Payment`, `Receipt`, `Installment`
- `Event`, `EventRSVP`, `EventMedia`
- `Game`, `GameSession`, `GameEvent`, `Achievement`, `Badge`, `JourneyState`
- `Story`, `StoryProgress`
- `BlogPost`, `Banner`, `Page`, `MediaAsset`
- `Notification`, `DeviceToken`, `NotificationPreference`
- `AuditLog`, `Session`

Indexes target high-traffic queries: branch + date ranges (attendance, fees), parent → child lookups, activity feed pagination, game leaderboards.

---

## 12. Security & Compliance

- HTTPS + HSTS everywhere; Cloudflare WAF
- JWT (access 15 min, refresh 30 days, rotating); HTTP-only cookies on web
- Bcrypt password hashing (cost 12); pepper from env
- Zod validation at every API boundary
- Rate limiting (Upstash) per IP + per user
- RBAC + branch scoping in service layer
- Audit logs for sensitive actions (admin, fee, role changes, exports)
- Encrypted media URLs (signed, short-TTL)
- COPPA/GDPR-inspired protections: parental consent, child PII minimization, no third-party trackers in kids zone
- Device management + session revocation
- Secrets via Doppler/Vercel env; no secrets in repo
- Penetration testing before go-live

---

## 13. Performance & Scalability

- LCP target < 2.5s, TTI < 3.5s on 4G
- ISR for marketing pages, RSC for data-heavy parent pages
- Image optimization via `next/image` + Cloudflare Polish
- Video via Mux (adaptive bitrate)
- Redis caching for feeds, dashboards, summaries
- Database indexing + connection pooling (PgBouncer / Neon pooler)
- BullMQ workers for fanout, media, reports
- Multi-region edge deployment (Vercel) + read replicas (future)
- Mobile: offline cache for games, lessons, last feed snapshot

---

## 14. Accessibility & Localization

- WCAG 2.1 AA target
- Large touch targets (min 44×44) on kids surfaces
- Voice assistance and narration in kids zone
- Dyslexia-friendly font option
- High-contrast theme
- Multi-language: English, Hindi, regional (configurable per branch); i18n via `next-intl`

---

## 15. Third-Party Integrations

| Category | Provider |
|---|---|
| Payments | Razorpay (primary), Stripe (secondary) |
| Email | Resend |
| SMS | MSG91 / Twilio |
| WhatsApp | WhatsApp Cloud API |
| Push | FCM + APNs (via Expo) |
| Video Consult | Daily.co / Jitsi |
| Maps | Google Maps |
| Storage | Cloudflare R2 |
| Video Hosting | Mux |
| Analytics | PostHog + Vercel Analytics |
| Error Tracking | Sentry |
| CRM (optional) | HubSpot / Zoho |

---

## 16. Deliverables

1. Production-ready public website (Next.js)
2. Parent mobile application (iOS + Android, Expo EAS builds + store submissions)
3. Child learning zone (web + mobile)
4. Teacher panel (web)
5. Admin dashboard (web)
6. API backend (Next.js route handlers + Prisma + Postgres)
7. CMS (admin-managed)
8. CI/CD pipeline (GitHub Actions → Vercel + EAS)
9. Source code repository with branching strategy
10. Documentation: README, API docs (OpenAPI), runbooks
11. Training session for school admins and teachers
12. Post-launch support window (30/60/90 days configurable)

---

## 17. Project Phases & Timeline

| Phase | Duration | Highlights |
|---|---|---|
| Phase 0 — Discovery & Design | 2 weeks | Brand workshop, design system, mascot creation, wireframes |
| Phase 1 — Core Backend & Auth | 3 weeks | Schema, auth, RBAC, branches, students |
| Phase 2 — Public Website | 3 weeks | Marketing site, admissions, blog, campus tour |
| Phase 3 — Parent Portal (Web + Mobile) | 4 weeks | Dashboard, feed, attendance, notices, messaging |
| Phase 4 — Fees & Payments | 2 weeks | Razorpay, invoicing, receipts, reminders |
| Phase 5 — Teacher & Admin Panels | 3 weeks | Activity uploads, lessons, admissions pipeline, CMS |
| Phase 6 — Child Learning Zone | 4 weeks | Games (4 age tiers), stories, drawing, music, rewards, journey map |
| Phase 7 — Analytics, Notifications, Hardening | 2 weeks | Analytics, push/email/SMS/WhatsApp, security review |
| Phase 8 — QA, UAT, Launch | 2 weeks | E2E tests, store submissions, training, go-live |

**Total: ~25 weeks (≈6 months)** with parallelizable streams.

---

## 18. Acceptance Criteria

- All features in §3 demonstrable in staging with seeded data
- All API endpoints return correct responses with Zod-validated payloads
- Auth + RBAC enforced; no privilege escalation possible in pen test
- Mobile builds pass App Store + Play Store review
- Performance budgets met (LCP, TTI, bundle size)
- Accessibility audit (axe + manual) shows no critical issues
- Payment flow tested end-to-end including webhook reconciliation
- Training sessions completed for admin + teacher cohorts

---

## 19. Assumptions & Exclusions

### Assumptions

- School provides brand assets, mascot direction, and content (photos, videos, copy, testimonials)
- Razorpay/Stripe accounts and WhatsApp Cloud API approval provided by client
- Domain, SSL, and store developer accounts (Apple + Google) procured by client
- Branch list and role hierarchy defined upfront

### Exclusions (Out of Scope for v1)

- AR learning modules (planned in future phase)
- Live online classes (planned in future phase)
- IoT/biometric attendance hardware integration
- Facial recognition pickup
- Smart classroom device integrations
- Merchandise e-commerce
- Custom-shot video production for campus tour

---

## 20. Future Scope

- AI Personalization Engine (adaptive paths, recommendations)
- AI Parent Assistant (chat + summaries)
- AI Child Analytics (behavior, engagement, trend insights)
- Live online classes with breakout rooms
- AR learning (animals, alphabets, planets)
- Smart classroom device sync
- Subscription-based premium learning content
- Marketplace for third-party educational content
- White-label franchise edition

---

**End of Scope of Work — Play School Digital Ecosystem v1.0**
