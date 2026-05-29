# Your Portfolio — Setup Guide

A full-stack developer portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.
Minimal Adham-style hero, Ram-style depth below — dark accents, custom cursor, smooth scroll animations.

---

## 🚀 Run it locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`. Build for production with `npm run build`.

---

## 📂 Where to edit what

You only need to touch **one file** for most changes: `src/data/content.js`.

That file contains your name, role, bio, stats, skills, experience, projects,
services, testimonials, brands, and socials. Update it and the entire site
reflects your info.

Everything else is in `src/components/` — only touch those if you want to change
layout or design.

---

## ✅ Content checklist — what to send / prepare

Drop these in `public/` and update the paths in `src/data/content.js`:

### 1. Your photo
- `public/avatar-placeholder.jpg` → replace with your headshot
- **Recommended:** 800×1000px, portrait orientation, simple background
- The site applies a grayscale filter that lifts on hover (looks editorial)

### 2. Project screenshots (4 total)
- `public/project-1-placeholder.jpg` → first project hero/screenshot
- `public/project-2-placeholder.jpg` → second project
- `public/project-3-placeholder.jpg` → third project
- `public/project-4-placeholder.jpg` → fourth project
- **Recommended:** 1200×900px (4:3 ratio), real screenshots of your live work

### 3. Testimonial avatars (2)
- `public/testimonial-1-placeholder.jpg`
- `public/testimonial-2-placeholder.jpg`
- **Recommended:** 200×200px square, headshots

### 4. Text content to gather
- [ ] Your real name, location, email
- [ ] Tagline (one sentence about what you do)
- [ ] Bio paragraph (2–3 sentences)
- [ ] 3 stats (projects shipped, years coding, happy clients, etc.)
- [ ] Skills list (already populated — edit as needed)
- [ ] Work experience (company, role, period, description)
- [ ] 4 project case studies (title, description, tags, live URL, code URL)
- [ ] 2 client testimonials (quote, name, role)
- [ ] List of brands/clients you've worked with
- [ ] Social links (GitHub, LinkedIn, Twitter, etc.)

### 5. Optional
- [ ] Resume PDF → drop in `public/resume.pdf` and link from `personal.resumeUrl`
- [ ] Custom OG image for social sharing → `public/og-image.jpg` (1200×630px)

---

## 🎨 Customizing the look

### Change the accent color
In `tailwind.config.js`, the `accent` color is `#ff5722` (orange). Common alternatives:
- Electric green: `#00ff88`
- Hot pink: `#ff2d92`
- Sky: `#0ea5e9`
- Purple: `#a855f7`

### Change fonts
In `index.html`, swap the Google Fonts link. The site uses three fonts:
- **Fraunces** (display, characterful serif) — try Tobias, Editorial New, PP Editorial
- **Geist** (body, modern sans) — try Inter, Space Grotesk, Satoshi
- **JetBrains Mono** (mono, for labels) — try IBM Plex Mono, Fira Code

Then update `fontFamily` in `tailwind.config.js`.

### Switch to light theme
The site is mostly light (bone background) with dark accents. To go full dark,
swap `bg-bone` → `bg-ink` and `text-ink` → `text-bone` in `App.jsx` and section
backgrounds.

---

## 📚 Where to learn the animation patterns used here

Everything below is what powers this site. Bookmark these.

### Framer Motion (the workhorse)
The animations in `src/components/Motion.jsx` use:
- `motion.div` with `initial`, `whileInView`, `transition` — fade-up reveals
- `staggerChildren` in variants — sequenced reveals (used in Services, Stats)
- `useScroll` + `useTransform` — parallax in Hero, navbar shrink
- `whileHover` — interactive scale/rotate (Project cards, Service icons)

**Resources, in priority order:**
1. **motion.dev/docs** — official docs, very clean
2. **YouTube: Olivier Larose** — he rebuilds award-winning sites in Framer Motion. *The* channel for this.
3. **YouTube: Sam Selikoff** — deeper dives into the "why"
4. **codrops.com** — design ideas with code (filter by "Motion" or "Scroll")

### CSS animations (no JS)
The grain texture, marquee strip, and pulse dot use pure CSS keyframes in
`tailwind.config.js` and `src/index.css`.

**Resources:**
- **joshwcomeau.com/animation** — best writer on web animation
- **animations.dev** — interactive course by Emil Kowalski

### Going further (GSAP / 3D)
When Framer Motion isn't enough (complex scroll timelines, horizontal scroll, pinned sections):
- **gsap.com/resources** — official GSAP + ScrollTrigger docs (free now)
- **threejs-journey.com** — Bruno Simon's course if you want to add 3D

---

## 🚢 Deploy

Easiest: push to GitHub, then import to **Vercel** (zero config). Or use Netlify.

```bash
git init && git add . && git commit -m "init"
# then push to GitHub and connect at vercel.com
```

---

## File map

```
src/
├── App.jsx                 # composes all sections
├── main.jsx                # React entry
├── index.css               # Tailwind + base styles
├── data/
│   └── content.js          # ← EDIT THIS for all content
└── components/
    ├── Motion.jsx          # animation primitives (FadeUp, Stagger, etc.)
    ├── Cursor.jsx          # custom cursor (desktop only)
    ├── Nav.jsx             # sticky top nav
    ├── Hero.jsx            # opening section
    ├── Marquee.jsx         # scrolling text strip
    ├── About.jsx           # photo + stats + skills
    ├── Experience.jsx      # timeline of jobs/freelance
    ├── Work.jsx            # project grid
    ├── Services.jsx        # freelance offerings
    ├── Testimonials.jsx    # quotes + brand strip
    └── Contact.jsx         # big email CTA + footer
```

Happy shipping. ✦
