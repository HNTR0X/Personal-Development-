# Personal-Development-
# Apex — Personal Intelligence Dashboard

A premium AI-powered productivity and personal development platform built with Next.js 14, Tailwind CSS, and the Anthropic API.

## Modules

| Module | Features |
|--------|----------|
| **Daily Planner** | Add tasks with priority & duration, AI-generated optimized schedule |
| **Habit Tracker** | 7-day grid, streak tracking, AI consistency insights |
| **Reflective Journal** | Mood logging, freeform entries, AI-generated reflection summaries |
| **Learning Hub** | Books, podcasts, articles with AI-extracted key learnings |

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom design tokens
- **AI:** Anthropic Claude Sonnet (via `@anthropic-ai/sdk`)
- **Persistence:** localStorage
- **Deployment:** Vercel

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add your API key
cp .env.local.example .env.local
# Edit .env.local and set ANTHROPIC_API_KEY

# 3. Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (first time)
vercel

# Set environment variable
vercel env add ANTHROPIC_API_KEY
```

Or connect the GitHub repo in Vercel dashboard and add `ANTHROPIC_API_KEY` in Project Settings → Environment Variables.

## Project Structure

```
apex-nextjs/
├── app/
│   ├── api/
│   │   ├── journal/route.ts    # AI journal summary endpoint
│   │   └── learning/route.ts   # AI learning key learnings endpoint
│   ├── globals.css             # Grain overlay, custom components
│   ├── layout.tsx              # Font loading, metadata
│   └── page.tsx                # Dashboard root
├── components/
│   ├── Sidebar.tsx
│   ├── Topbar.tsx
│   ├── StatsRow.tsx
│   ├── PlannerModule.tsx
│   ├── HabitModule.tsx
│   ├── JournalModule.tsx
│   ├── LearningModule.tsx
│   ├── Modal.tsx
│   └── Toast.tsx
├── lib/
│   └── state.ts                # Shared types & default data
├── tailwind.config.js
├── vercel.json
└── package.json
```

## Design System

**Palette:** Deep charcoal (#0e0e0f) + warm amber/gold (#d4a853) accent  
**Typography:** Playfair Display (display) · JetBrains Mono (data) · DM Sans (body)  
**Motion:** Subtle fade-up on load, gold pulse on AI indicators  
**Texture:** Grain overlay via SVG filter for depth
