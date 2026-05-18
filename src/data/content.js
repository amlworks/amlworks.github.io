// Auto-load all markdown under /src/content/{projects,blog}/*.md as raw strings.
// Drop a .md file in either folder — it ships in the build.

const projectFiles = import.meta.glob('../content/projects/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
});

const blogFiles = import.meta.glob('../content/blog/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
});

const aboutFile = import.meta.glob('../content/about.md', {
    eager: true,
    query: '?raw',
    import: 'default',
});

const slugFromPath = (p) => p.split('/').pop().replace(/\.md$/, '');

export const getProjectMarkdown = (id) => {
    const entry = Object.entries(projectFiles).find(([path]) => slugFromPath(path) === id);
    return entry ? entry[1] : '';
};

export const getAboutMarkdown = () => {
    const first = Object.values(aboutFile)[0];
    return first || '';
};

const parseFrontMatter = (text) => {
    const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return { meta: {}, body: text };
    const meta = {};
    match[1].split('\n').forEach(line => {
        const [key, ...rest] = line.split(':');
        if (key && rest.length) meta[key.trim()] = rest.join(':').trim();
    });
    return { meta, body: match[2] };
};

export const getAllBlogPosts = () => {
    const posts = Object.entries(blogFiles).map(([path, raw]) => {
        const slug = slugFromPath(path);
        const { meta, body } = parseFrontMatter(raw);
        return {
            slug,
            title: meta.title || slug,
            date: meta.date || '',
            excerpt: meta.excerpt || '',
            body,
        };
    });
    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getBlogPost = (slug) => getAllBlogPosts().find(p => p.slug === slug);
