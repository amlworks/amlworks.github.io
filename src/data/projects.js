// Project metadata. Markdown bodies live in /src/content/projects/<id>.md
// and are auto-loaded via Vite's import.meta.glob in content.js.

export const projects = [
    {
        id: 'aya',
        title: 'AYA — AI for Small Businesses',
        description: 'Full-stack agentic platform that turns any Manhattan small business into an agent-enabled operation in one search. Next.js, FastAPI, Postgres, LangGraph.',
        tag: 'Full-Stack AI',
        stack: ['Next.js', 'FastAPI', 'Postgres', 'LangGraph'],
        year: 2026,
        featured: true,
        order: 1,
    },
    {
        id: 'vantage-ai',
        title: 'Vantage AI',
        description: 'End-to-end research copilot: React frontend, Node API, vector store, and streaming LLM pipeline behind a single search box.',
        tag: 'Full-Stack AI',
        stack: ['React', 'Node', 'pgvector', 'OpenAI'],
        year: 2025,
        featured: false,
        order: 2,
    },
    {
        id: 'memory-agent',
        title: 'Memory Agent',
        description: 'Long-running agent with persistent memory — Python service, Redis-backed state, and a thin web UI for inspection.',
        tag: 'Full-Stack AI',
        stack: ['Python', 'Redis', 'React'],
        year: 2025,
        featured: false,
        order: 3,
    },
    {
        id: 'symptocare',
        title: 'SymptoCare',
        description: 'Healthcare accessibility platform with disease search. Winner, Tech For Change 2024. Full stack: React + Flask + Postgres.',
        tag: 'Full-Stack',
        stack: ['React', 'Flask', 'Postgres'],
        year: 2024,
        featured: false,
        order: 4,
    },
    {
        id: 'ad-god',
        title: 'Ad God',
        description: 'Creative-ad generation tool. Next.js app, server actions, image pipeline, and a queue for long-running generations.',
        tag: 'Full-Stack',
        stack: ['Next.js', 'Server Actions', 'S3'],
        year: 2024,
        featured: false,
        order: 5,
    },
    {
        id: 'modded-nanogpt',
        title: 'Modified NanoGPT',
        description: 'Research fork exploring custom activation functions in language models. ReLU(x) · ReLU(y) on a performance-conscious training loop.',
        tag: 'Research',
        stack: ['PyTorch', 'CUDA'],
        year: 2024,
        featured: false,
        order: 6,
    },
    {
        id: 'lake-michigan',
        title: 'Lake Effect Forecasting',
        description: 'RNN/CNN workflow for lake-effect precipitation forecasting using satellite imagery and meteorological data.',
        tag: 'Research',
        stack: ['PyTorch', 'xarray'],
        year: 2024,
        featured: false,
        order: 7,
    },
    {
        id: 'image-captioning',
        title: 'Image Captioning',
        description: 'Multimodal experiment on COCO — encoder/decoder, training loop, and a small Flask demo for live inference.',
        tag: 'Research',
        stack: ['PyTorch', 'Flask'],
        year: 2024,
        featured: false,
        order: 8,
    },
    {
        id: 'meditation-app',
        title: 'Meditation Timer',
        description: 'A mindful React app for focused breathing sessions. Small, intentional, deployed.',
        tag: 'Web',
        stack: ['React'],
        year: 2024,
        featured: false,
        order: 9,
    },
    {
        id: 'schulte-grid',
        title: 'Schulte Grid',
        description: 'A minimalist browser exercise for attention training. One file, one purpose.',
        tag: 'Web',
        stack: ['Vanilla JS'],
        year: 2024,
        featured: false,
        order: 10,
    },
    {
        id: 'endless-runner',
        title: 'Endless Runner',
        description: 'Unity prototype with procedural generation, character animation, and a collectables system.',
        tag: 'Game',
        stack: ['Unity', 'C#'],
        year: 2024,
        featured: false,
        order: 11,
    },
];

export const getProjectById = (id) => projects.find(p => p.id === id);

export const getProjectsByTag = (tag) => {
    if (tag === 'All') return projects;
    return projects.filter(p => p.tag === tag);
};

export const getAllTags = () => ['All', ...new Set(projects.map(p => p.tag))];
