import { colors, fonts } from '../tokens';

function Rule({ label }) {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        margin: '2rem 0',
    };

    const labelStyle = {
        fontFamily: fonts.sans,
        fontSize: '9px',
        fontWeight: 500,
        letterSpacing: '0.24em',
        textTransform: 'uppercase',
        color: colors.t2,
        whiteSpace: 'nowrap',
    };

    const lineStyle = {
        flex: 1,
        height: '0.5px',
        backgroundColor: colors.p3,
    };

    return (
        <div style={containerStyle}>
            <div style={labelStyle}>{label}</div>
            <div style={lineStyle} />
        </div>
    );
}

export default Rule;

// Made with Bob
