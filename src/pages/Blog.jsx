import { useState } from 'react';
import { Link } from 'wouter';
import Rule from '../components/Rule';
import { getAllBlogPosts } from '../data/content';
import { colors, fonts, spacing, transitions } from '../tokens';

function Blog() {
    const posts = getAllBlogPosts();

    const containerStyle = {
        maxWidth: spacing.maxWidth,
        margin: '0 auto',
        padding: `${spacing.pagePadding} ${spacing.pagePadding} ${spacing.pageBottom}`,
    };

    const titleStyle = {
        fontFamily: fonts.serif,
        fontSize: '42px',
        fontWeight: 400,
        color: colors.t0,
        marginBottom: '0.75rem',
    };

    const subtitleStyle = {
        fontFamily: fonts.serif,
        fontSize: '15px',
        fontStyle: 'italic',
        fontWeight: 300,
        color: colors.t1,
        marginBottom: '2.5rem',
    };

    const noteStyle = {
        fontFamily: fonts.sans,
        fontSize: '11px',
        color: colors.t2,
        marginBottom: '2rem',
        lineHeight: 1.6,
    };

    const listStyle = {
        maxWidth: spacing.readingWidth,
        margin: '0 auto',
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Writing</h1>
            <p style={subtitleStyle}>
                Occasional thoughts on building, learning, and the craft; or just something interesting to doc.
            </p>

            <Rule label="Posts" />

            <div style={listStyle}>
                {posts.length === 0 ? (
                    <p style={{ fontFamily: fonts.serif, color: colors.t2 }}>
                        No posts yet. Drop a <code>.md</code> file into <code>src/content/blog/</code> and it appears here.
                    </p>
                ) : (
                    posts.map(post => <BlogPostItem key={post.slug} post={post} />)
                )}
                <p style={noteStyle}>
                    {/* small hint kept off the visible page on purpose */}
                </p>
            </div>
        </div>
    );
}

function BlogPostItem({ post }) {
    const [isHovered, setIsHovered] = useState(false);

    const itemStyle = {
        display: 'block',
        textDecoration: 'none',
        padding: '1.5rem 0',
        borderBottom: `0.5px solid ${colors.p2}`,
        transition: `all ${transitions.fast}`,
        transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
    };

    const titleStyle = {
        fontFamily: fonts.sans,
        fontSize: '15px',
        fontWeight: 500,
        color: isHovered ? colors.a1 : colors.t0,
        marginBottom: '0.4rem',
        transition: `color ${transitions.fast}`,
    };

    const dateStyle = {
        fontFamily: fonts.sans,
        fontSize: '11px',
        fontWeight: 400,
        color: colors.t2,
        marginBottom: '0.5rem',
    };

    const excerptStyle = {
        fontFamily: fonts.serif,
        fontSize: '14px',
        fontStyle: 'italic',
        fontWeight: 300,
        lineHeight: 1.6,
        color: colors.t1,
    };

    return (
        <Link
            href={`/blog/${post.slug}`}
            style={itemStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={titleStyle}>{post.title}</div>
            <div style={dateStyle}>{post.date}</div>
            {post.excerpt && <div style={excerptStyle}>{post.excerpt}</div>}
        </Link>
    );
}

export default Blog;
