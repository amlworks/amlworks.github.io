# Ad GOD

A developer platform that ingests ad and CRM data, normalizes it into a unified schema, persists it, and exposes performance metrics through both a REST API and a multi-agent natural-language interface.

## The Problem

Marketing teams work with data from dozens of platforms — Google Ads, Facebook, LinkedIn, Salesforce, HubSpot. Each has its own API, its own data model, its own quirks. Analyzing performance across platforms requires hours of manual data wrangling.

Developers building internal tools face the same problem repeatedly: ingest, normalize, store, expose. It's tedious infrastructure work that keeps you from building the actual features your team needs.

## The Solution

Ad GOD is a small, real-shape developer platform that handles the boring parts so you can focus on the interesting parts. Point it at your ad accounts and CRM, and it:

- Ingests data from multiple sources on a schedule
- Normalizes everything into a unified schema
- Stores it in a queryable database
- Exposes it through a clean REST API
- Provides a natural-language interface for non-technical users

## Architecture

The platform is built around a few core concepts:

**Connectors**: Pluggable modules for each data source. Each connector knows how to authenticate, fetch data, and map it to the unified schema.

**Schema**: A single data model that represents campaigns, ad groups, ads, and conversions across all platforms. Platform-specific fields are preserved in a metadata column.

**Storage**: PostgreSQL with time-series optimizations. Historical data is preserved, making trend analysis straightforward.

**API**: RESTful endpoints for querying data, with filtering, aggregation, and time-range support.

**Agent Interface**: Natural language queries powered by an LLM that generates SQL and formats results. "Show me our best-performing campaigns this month" just works.

## Technical Decisions

**TypeScript throughout.** Type safety matters when you're dealing with data from multiple sources. The compiler catches schema mismatches before they become runtime errors.

**Postgres over NoSQL.** Ad data is inherently relational. Campaigns have ad groups, ad groups have ads, ads have conversions. SQL is the right tool.

**Scheduled ingestion over webhooks.** Most ad platforms don't offer reliable webhooks. Scheduled polling is simpler and more reliable.

**Agent as interface, not intelligence.** The LLM doesn't analyze your data — it just translates natural language to SQL. The analysis happens in your code or your analyst's brain.

## What We Learned

**Normalization is harder than it looks.** Every platform has slightly different concepts. Facebook's "campaign" isn't quite the same as Google's "campaign." We spent significant time on the schema to make it work for both.

**Rate limits are real.** Ad platforms are aggressive about rate limiting. We added exponential backoff, request queuing, and smart caching to stay under limits.

**Developers want examples.** The API documentation includes working code samples for every endpoint in multiple languages. This was more valuable than we expected.

## Use Cases

Marketing teams use it to:
- Build custom dashboards without vendor lock-in
- Analyze performance across platforms
- Automate reporting
- Integrate ad data with other business systems

Developers use it to:
- Skip the boring infrastructure work
- Focus on building features
- Avoid dealing with multiple ad platform APIs
- Provide data access to non-technical team members

## Impact

Teams report saving 10+ hours per week on data wrangling. Developers can build new features in hours instead of days. Non-technical users can answer their own questions without waiting for engineering.

## Tech Stack

- TypeScript for type safety
- Node.js for the runtime
- PostgreSQL for storage
- Express for the API
- LLM for natural language interface
- Docker for deployment

> "The best infrastructure is the infrastructure you don't have to think about."