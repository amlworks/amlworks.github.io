# Endless Runner

A Unity-based game prototype featuring procedural level generation, character animation, and a collectables system. Built to explore game development and interactive systems design.

## The Concept

Endless runners are deceptively simple. The player moves forward automatically, obstacles appear, you jump or dodge. But beneath that simplicity is a surprisingly complex system of timing, difficulty curves, and player feedback.

I wanted to understand how these systems work by building one from scratch.

## Core Mechanics

**Procedural Generation**: Segments spawn ahead of the player and despawn behind them. Each segment can contain obstacles, platforms, or collectables. The system maintains a buffer of 3-4 segments to ensure smooth gameplay.

**Difficulty Scaling**: Speed increases gradually. Obstacle density increases. Gap sizes grow. The player should feel challenged but not overwhelmed.

**Character Control**: Simple input (jump, slide) but responsive feel. Animation states blend smoothly. Collision detection is forgiving enough to feel fair.

## Technical Implementation

Built in Unity with C# scripts for:
- Segment generation and pooling
- Player movement and animation
- Collision detection and scoring
- Camera follow system
- UI and game state management

The segment pooling system was particularly interesting. Instead of instantiating and destroying segments constantly (expensive), we maintain a pool of reusable segments. When a segment moves off-screen, it gets reset and repositioned ahead of the player.

## What Makes It Feel Good

**Juice**: Small details that make the game feel responsive:
- Screen shake on collision
- Particle effects on jumps and collectables
- Sound feedback for every action
- Smooth camera movement

**Feedback Loops**: The player always knows their score, their speed, and how far they've traveled. Visual cues telegraph upcoming obstacles.

**Fair Difficulty**: The game is hard, but deaths feel earned. You can always see what's coming and react in time.

## Challenges

**Performance**: Maintaining 60fps with procedural generation, particle effects, and physics. Required careful optimization of object pooling and draw calls.

**Feel**: Getting the jump arc right took dozens of iterations. Too floaty feels unresponsive. Too snappy feels twitchy. The final version uses a custom gravity curve.

**Difficulty Curve**: Too easy and players get bored. Too hard and they quit. Finding the right progression required extensive playtesting.

## What I Learned

**Game development is systems design.** Every mechanic affects every other mechanic. Changing jump height affects obstacle placement affects difficulty scaling affects player satisfaction.

**Polish matters more than features.** A simple game that feels great beats a complex game that feels mediocre. The last 20% of development time went into making everything feel responsive and satisfying.

**Iteration is everything.** The first version was terrible. The tenth version was okay. The thirtieth version was fun. You can't design fun on paper — you have to play it and iterate.

## Future Improvements

- Power-ups and special abilities
- Multiple character skins
- Leaderboard system
- More varied environments
- Boss segments with unique mechanics

## Tech Stack

- Unity 2021
- C# for gameplay scripts
- ShaderLab for custom shaders
- ProBuilder for level geometry
- TextMesh Pro for UI

> "A game is a series of interesting choices." — Sid Meier