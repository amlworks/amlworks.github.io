# Memory Agent in Browser

A browser extension that knows your browsing history and helps you plan, review, and think. It's like having a research assistant that remembers everything you've read and can help you make connections.

## The Concept

We spend hours browsing the web every day, but most of that information disappears into the void. You read an article, close the tab, and three days later you can't remember where you saw that insight you wanted to reference.

Memory Agent solves this by creating a persistent, searchable memory of your browsing activity, then using AI to help you make sense of it all.

## How It Works

The extension runs quietly in the background, capturing:
- Pages you visit and how long you spend on them
- Text you highlight or copy
- Notes you take inline
- Bookmarks and saved items

Then it provides several ways to interact with this memory:

**Search**: Natural language queries across your entire history. "That article about distributed systems I read last week" actually works.

**Connections**: The agent identifies related content you've seen before. Reading about React? It surfaces that Vue comparison you bookmarked months ago.

**Planning**: Tell it what you're researching and it suggests relevant pages from your history, identifies gaps in your knowledge, and helps structure your learning path.

**Review**: Daily or weekly summaries of what you've been reading, with themes and patterns identified.

## Privacy First

All data stays local. The extension uses a local vector database for embeddings and only sends anonymized queries to the LLM. You can export or delete your data at any time.

This was non-negotiable. Browser history is deeply personal, and we weren't going to build something that required trusting a third party with it.

## Technical Implementation

Built as a Chrome extension using:
- Manifest V3 for modern extension APIs
- Local vector database for semantic search
- Python backend for AI processing (runs locally)
- IndexedDB for storage

The challenge was making it fast enough to feel instant while processing potentially thousands of pages. We solved this with incremental indexing and smart caching.

## What We Learned

**Context matters more than content.** Knowing what page you visited isn't as useful as knowing why you visited it, what you were researching at the time, and how it connects to other things you've read.

**Summarization is hard.** Early versions tried to summarize every page. This was slow and often missed the point. We switched to extracting key concepts and letting the LLM synthesize on demand.

**People want control.** We added granular privacy controls after beta testing. Some users wanted everything tracked, others only wanted specific domains. Both are valid.

## Use Cases

Researchers use it to maintain context across long projects. Students use it to review material before exams. Writers use it to find that perfect quote they remember reading somewhere.

The most common feedback: "I didn't realize how much I was forgetting until I had this."

## Future Directions

We're exploring:
- Cross-device sync (still privacy-preserving)
- Integration with note-taking apps
- Collaborative research features
- Better visualization of knowledge graphs

## Tech Stack

- Chrome Extension (Manifest V3)
- Python + FastAPI for backend
- Local LLM for processing
- Vector database for semantic search
- IndexedDB for browser storage

> "The best tools are the ones that make you smarter without making you think about the tool."