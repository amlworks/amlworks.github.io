import { useState } from 'react';
import { colors, fonts, radius, transitions } from '../tokens';

function EduCard({ school, degree, years, story }) {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        backgroundColor: isHovered ? colors.p0 : colors.p1,
        border: `0.5px solid ${isHovered ? colors.p3 : colors.p2}`,
        borderRadius: radius.medium,
        padding: '1.5rem',
        transition: `all ${transitions.fast}`,
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
    };

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: '0.5rem',
        flexWrap: 'wrap',
        gap: '0.5rem',
    };

    const schoolStyle = {
        fontFamily: fonts.sans,
        fontSize: '15px',
        fontWeight: 500,
        color: colors.t0,
    };

    const yearsStyle = {
        fontFamily: fonts.sans,
        fontSize: '11px',
        fontWeight: 400,
        color: colors.t2,
    };

    const degreeStyle = {
        fontFamily: fonts.sans,
        fontSize: '10px',
        fontWeight: 500,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: colors.a1,
        marginBottom: '0.75rem',
    };

    const storyStyle = {
        fontFamily: fonts.serif,
        fontSize: '14px',
        fontWeight: 300,
        fontStyle: 'italic',
        lineHeight: 1.6,
        color: colors.t1,
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={headerStyle}>
                <div style={schoolStyle}>{school}</div>
                <div style={yearsStyle}>{years}</div>
            </div>
            <div style={degreeStyle}>{degree}</div>
            <div style={storyStyle}>{story}</div>
        </div>
    );
}

export default EduCard;

// Made with Bob
