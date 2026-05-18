import { useState } from 'react';
import { Link } from 'wouter';
import { colors, fonts, radius, transitions } from '../tokens';

function Tile({ project }) {
    const [hover, setHover] = useState(false);

    const card = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: colors.p0,
        border: `0.5px solid ${hover ? colors.a1 : colors.p2}`,
        borderRadius: radius.medium,
        padding: '1.5rem',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: `all ${transitions.fast}`,
        transform: hover ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hover ? '0 8px 24px rgba(30, 21, 13, 0.06)' : 'none',
    };

    const topRow = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: '1rem',
    };

    const num = {
        fontFamily: fonts.sans,
        fontSize: '10px',
        fontWeight: 500,
        letterSpacing: '0.2em',
        color: colors.t2,
    };

    const year = {
        fontFamily: fonts.sans,
        fontSize: '10px',
        fontWeight: 400,
        color: colors.t2,
    };

    const title = {
        fontFamily: fonts.sans,
        fontSize: '16px',
        fontWeight: 500,
        color: hover ? colors.a1 : colors.t0,
        marginBottom: '0.5rem',
        transition: `color ${transitions.fast}`,
    };

    const desc = {
        fontFamily: fonts.serif,
        fontSize: '14px',
        fontWeight: 300,
        lineHeight: 1.65,
        color: colors.t1,
        marginBottom: '1.25rem',
        flex: 1,
    };

    const stackRow = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.4rem',
        marginTop: 'auto',
    };

    const chip = {
        fontFamily: fonts.sans,
        fontSize: '9px',
        fontWeight: 500,
        letterSpacing: '0.08em',
        color: colors.a2,
        backgroundColor: colors.p1,
        border: `0.5px solid ${colors.p2}`,
        padding: '0.25rem 0.55rem',
        borderRadius: '999px',
    };

    return (
        <Link
            href={`/projects/${project.id}`}
            style={card}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div style={topRow}>
                <span style={num}>{String(project.order).padStart(2, '0')} · {project.tag}</span>
                <span style={year}>{project.year}</span>
            </div>
            <div style={title}>{project.title}</div>
            <div style={desc}>{project.description}</div>
            {project.stack && (
                <div style={stackRow}>
                    {project.stack.map(s => <span key={s} style={chip}>{s}</span>)}
                </div>
            )}
        </Link>
    );
}

export default Tile;
