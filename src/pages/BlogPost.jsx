import { Link, useParams } from 'wouter';
import MdView from '../components/MdView';
import { getBlogPost } from '../data/content';
import { colors, fonts, spacing } from '../tokens';

function BlogPost() {
    const { slug } = useParams();
    const post = getBlogPost(slug);

    const containerStyle = {
        maxWidth: spacing.maxWidth,
        margin: '0 auto',
        padding: `${spacing.pagePadding} ${spacing.pagePadding} ${spacing.pageBottom}`,
    };

    const backLinkStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontFamily: fonts.sans,
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: colors.t1,
        textDecoration: 'none',
        marginBottom: '2rem',
    };

    const headerStyle = { marginBottom: '2rem' };
    const titleStyle = {
        fontFamily: fonts.serif,
        fontSize: '42px',
        fontWeight: 400,
        color: colors.t0,
        marginBottom: '0.5rem',
        lineHeight: 1.2,
    };
    const dateStyle = {
        fontFamily: fonts.sans,
        fontSize: '11px',
        color: colors.t2,
    };
    const ruleStyle = {
        width: '100%',
        height: '0.5px',
        backgroundColor: colors.p3,
        marginBottom: '3rem',
    };
    const contentStyle = {
        maxWidth: spacing.readingWidth,
        margin: '0 auto',
    };

    if (!post) {
        return (
            <div style={containerStyle}>
                <Link href="/blog" style={backLinkStyle}><span>←</span><span>Back to Blog</span></Link>
                <p style={{ fontFamily: fonts.serif, color: colors.t2 }}>Post not found.</p>
            </div>
        );
    }

    return (
        <div style={containerStyle}>
            <Link href="/blog" style={backLinkStyle}>
                <span>←</span><span>Back to Blog</span>
            </Link>
            <div style={headerStyle}>
                <h1 style={titleStyle}>{post.title}</h1>
                <div style={dateStyle}>{post.date}</div>
            </div>
            <div style={ruleStyle} />
            <div style={contentStyle}>
                <MdView content={post.body} />
            </div>
        </div>
    );
}

export default BlogPost;
