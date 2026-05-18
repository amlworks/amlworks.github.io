# Meditation Timer

A small React app for mindful breathing sessions. Simple, intentional, and deployed to GitHub Pages.

## The Idea

Most meditation apps are bloated. They have subscriptions, social features, gamification, analytics. They're trying to be everything to everyone.

I wanted the opposite: a single-purpose tool that does one thing well. Start a timer, breathe, finish. Nothing more.

## What It Does

- Set a duration (5, 10, 15, or 20 minutes)
- Start the session
- Visual breathing guide (expanding/contracting circle)
- Gentle chime when finished
- That's it

No accounts, no tracking, no notifications. Just a tool that helps you sit and breathe.

## Design Philosophy

**Minimal Interface**: The entire app fits on one screen. No navigation, no menus, no settings buried three levels deep.

**Calm Aesthetics**: Soft colors, smooth animations, no harsh transitions. The design should support the practice, not distract from it.

**Instant Access**: No loading screens, no splash pages. Open the URL and you're ready to start.

## Technical Decisions

**React**: Overkill for something this simple? Maybe. But it made state management clean and the component structure obvious.

**No Backend**: Everything runs client-side. No server, no database, no API calls. This keeps it fast and private.

**GitHub Pages**: Free hosting, automatic deploys from the main branch. Push code, wait 30 seconds, it's live.

## The Breathing Animation

The core of the app is a CSS animation that expands and contracts a circle. The timing follows a 4-7-8 pattern:
- Breathe in for 4 seconds (circle expands)
- Hold for 7 seconds (circle stays large)
- Breathe out for 8 seconds (circle contracts)

This pattern is based on pranayama breathing techniques. The longer exhale activates the parasympathetic nervous system, promoting relaxation.

## What I Learned

**Constraints breed creativity.** Limiting myself to a single screen forced me to think carefully about what was essential. Every element had to earn its place.

**Deployment matters.** A project isn't finished until someone can use it. Setting up GitHub Pages took 10 minutes and made the app accessible to anyone.

**Small projects are satisfying.** Not everything needs to be a months-long effort. Sometimes the best projects are the ones you can finish in a weekend.

## Usage

I use this myself almost daily. It's become part of my morning routine. The simplicity is the feature — there's nothing to configure, nothing to optimize, nothing to think about. Just breathe.

## Tech Stack

- React 18
- CSS animations
- GitHub Pages
- No dependencies beyond React itself

## Future (Maybe)

I've resisted adding features. Every addition would make it less focused. But if I were to add anything:
- Custom durations
- Different breathing patterns
- Dark mode
- Ambient sounds (optional)

The key word is "optional." The default experience should stay simple.

> "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away." — Antoine de Saint-Exupéry