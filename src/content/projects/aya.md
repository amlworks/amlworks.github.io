# AYA — AI for Small Businesses

Built at NVIDIA Spark Hack NYC 2026, AYA turns any Manhattan small business into an agent-enabled operation in one search. Winner of the hackathon, running entirely on an Acer Veriton GN100 with the NVIDIA GB10 Grace Blackwell GPU.

## The Vision

Small businesses are the backbone of New York City, but they often lack the resources for sophisticated business intelligence tools. We wanted to change that — to give a bodega owner the same analytical capabilities as a Fortune 500 company.

## How It Works

Type a business name — Katz's Delicatessen, Joe's Pizza, any small business in Manhattan — and in seconds you get a comprehensive brief grounded in 385 NYC Open Data sources. DOH inspections, DCWP licenses, 311 complaints, film permits, competitor analysis, demographics — all pre-joined and ready to use.

Then a native OpenClaw agent reasons over that brief, never re-fetching data, never hallucinating facts. It can take action through 19 installed skills, schedule recurring tasks via cron, and communicate through multiple channels.

## The Technical Architecture

The system runs entirely locally on the GB10 GPU, using three Qwen 397B models in parallel for analysis. We built a custom bridge that indexes 385 CSV files across seven different key types (zip code, BBL, BIN, community district, census tract, address, borough).

When you select a business, the system:
- Enriches it with real-time Socrata API calls
- Matches it against local indexes in under a second
- Generates a comprehensive brief with citations
- Creates a dedicated OpenClaw agent workspace
- Auto-injects the brief into every conversation

## Three-Angle Analysis

One of the key features is parallel analysis. Click "Run all 3 angles" and the system fires three different analyst prompts across three GPU endpoints simultaneously:

- **Risk Analysis**: DOH violations, license expiries, compliance issues
- **Foot Traffic**: Film permits, events, neighborhood activity
- **Competitive Intelligence**: Same-cuisine competitors, comparative grades

Wall time stays around 6 seconds instead of 20 seconds sequential — a real 3× speedup that makes the tool feel responsive.

## The Data Layer

We indexed 385 Manhattan Open Data sources, creating a knowledge graph with 2,668 nodes and 5,344 edges. Every fact in the system is cited back to its source — no hallucinations, no invented data.

The coverage map shows data density across Manhattan's 44 zip codes, with over 59,000 indexed rows providing context for any business query.

## What Makes It Different

**No LLM calls for baseline facts.** Every DOH violation, 311 complaint count, and competitor grade is pre-joined from local CSVs or direct Socrata calls. The agent reasons over these facts — it never re-fetches them.

**Per-business agent workspaces.** Each business gets its own isolated OpenClaw workspace with auto-injected context. No prompt engineering, no custom session state.

**Fully local.** No cloud LLMs, no hosted APIs beyond the free NYC Open Data endpoints. Everything runs on the GB10.

## Impact

During the hackathon, we demonstrated the system with real Manhattan businesses. The judges were impressed by the speed, the citation accuracy, and the practical utility. Small business owners could finally access the kind of intelligence that was previously only available to large corporations.

## Tech Stack

- React + Vite for the frontend
- Python stdlib for the bridge (no dependencies)
- OpenClaw for agent orchestration
- Qwen 397B (3 instances) for analysis
- 385 NYC Open Data sources via Socrata
- Native vis-network for knowledge graph visualization

> "The best tools are the ones that disappear — you stop thinking about the technology and start thinking about the problem."