# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Existing codebase: a single `index.html` (vanilla HTML/CSS/JS, no framework, no build step) published as a PWA on GitHub Pages. A Capacitor wrap for iOS is a possible later step, so the app must stay plain web files.

## Users
The owner, training in the gym with an iPhone in one hand, between sets. A small circle of close people (partner, friends) will also use it. Spanish-speaking. Not a public product today; publishing later is undecided.

## Product Purpose
A personal workout log: pick today's routine, record sets (weight, reps, done), rest between sets, and see progress over time. Success is that the owner trains with it every session because it is fast and pleasant, and wants to keep using it.

## Positioning
It is not a generic tracker. It is built around the owner's own routines and exercises (with photos, cues and notes), in Spanish, with rest timing and progression, and body weight and measurements kept in the same app.

## Operating Context
Used standing in the gym, one-handed, often mid-workout, sometimes with sweaty hands. Data lives only on the device (localStorage key `gym2`); there is no backend and no account.

## Capabilities and Constraints
- Four sections today: Entrenar (today's routine, week plan, cardio), Calendario, Cuerpo (weight, measurements), Progreso.
- Sets with +/− steppers and a done check, automatic rest timer, plate calculator colours, records (PR), exercise photos, notes, custom routines, import of logged workouts.
- The previous Equipo (shared crew) tab was removed because it depended on Claude's artifact database. Sharing with close people is undecided: it may return later with a backend.
- All logic and stored data must keep working; only presentation, interaction and layout are free to change.
- Must work offline as an installed PWA on iOS Safari; keep the file set simple and static.

## Brand Commitments
None binding. The current dark iOS-style look with an orange accent is evidence only. The user explicitly allowed a free redesign.

## Evidence on Hand
Real exercise photos embedded in `index.html` (squat, bench press, Romanian deadlift, hip thrust and others). No logo, no testimonials, no usage data. Do not invent any.

## Product Principles
1. Speed in the gym beats everything: the next action is always reachable with one thumb.
2. Numbers are the content: weight, reps and progress must read at a glance.
3. Calm, serious tool: it should feel like equipment, not like an app template.
4. Own the data: everything works offline on the device.
5. Built for one person first, close people second.

## Accessibility & Inclusion
Large touch targets and high contrast for gym conditions (movement, sweat, bright or dim light). Respect reduced-motion preferences. Spanish copy throughout.
