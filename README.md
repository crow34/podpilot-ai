# PodPilot AI

AI-powered podcast creation platform.

## What it does
PodPilot AI helps users generate podcast episodes automatically:
- AI writes scripts from topics
- AI converts scripts to voice audio
- Episodes can be published via RSS feed

## Tech stack
- Next.js 14 + TypeScript
- Tailwind CSS
- Supabase (auth + data)
- OpenRouter (LLM script generation)
- ElevenLabs (voice generation)
- Stripe (subscriptions)

## Project structure
- `src/app` – frontend pages + API routes
- `src/lib` – integrations (supabase/openrouter/elevenlabs/stripe/rss)

## Environment setup
Copy `.env.example` to `.env.local` and fill values:
- Supabase URL/keys
- OpenRouter API key
- ElevenLabs API key
- Stripe keys

## Run locally
```bash
npm install
npm run dev
```

## MVP checklist
- [x] Landing page + auth pages
- [x] Dashboard shell
- [x] Episode generation API route
- [x] RSS feed route
- [x] Stripe webhook route
- [ ] Production storage upload wiring
- [ ] End-to-end deployment verification

## Notes
This is the first project in Martin's execution plan.
