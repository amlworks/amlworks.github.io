import { Link, useParams } from 'wouter';
import MdView from '../components/MdView';
import { getProjectMarkdown } from '../data/content';
import { getProjectById } from '../data/projects';
import { colors, fonts, spacing } from '../tokens';

function Project() {
    const { id } = useParams();
    const project = getProjectById(id);
    const content = getProjectMarkdown(id);

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
        marginBottom: '3rem',
    };

    const titleStyle = {
        fontFamily: fonts.serif,
        fontSize: '48px',
        fontWeight: 300,
        color: colors.t0,
        marginBottom: '1rem',
        lineHeight: 1.25,
    };

    const metaStyle = {
        display: 'flex',
        gap: '0.6rem',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: '2.5rem',
    };

    const tagStyle = {
        fontFamily: fonts.sans,
        fontSize: '10px',
        fontWeight: 500,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: colors.a1,
        backgroundColor: colors.p1,
        border: `0.5px solid ${colors.p2}`,
        padding: '0.35rem 0.75rem',
        borderRadius: '999px',
    };

    const yearStyle = {
        fontFamily: fonts.sans,
        fontSize: '11px',
        color: colors.t2,
        marginLeft: '0.25rem',
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

    if (!project) {
        return (
            <div style={containerStyle}>
                <Link href="/" style={backLinkStyle}><span>←</span><span>Back</span></Link>
                <p>Project not found.</p>
            </div>
        );
    }

    return (
        <div style={containerStyle}>
            <Link href="/" style={backLinkStyle}>
                <span>←</span><span>Back to Work</span>
            </Link>

            <h1 style={titleStyle}>{project.title}</h1>
            <div style={metaStyle}>
                <span style={tagStyle}>{project.tag}</span>
                {project.stack && project.stack.map(s => (
                    <span key={s} style={tagStyle}>{s}</span>
                ))}
                <span style={yearStyle}>{project.year}</span>
            </div>

            <div style={ruleStyle} />

            <div style={contentStyle}>
                {content
                    ? <MdView content={content} />
                    : <p style={{ fontFamily: fonts.serif, color: colors.t2 }}>No write-up yet.</p>}
            </div>
        </div>
    );
}

export default Project;
