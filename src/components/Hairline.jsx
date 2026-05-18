import { colors, fonts } from '../tokens';

function Hairline({ text }) {
    if (!text) {
        return (
            <div style={{
                width: '100%',
                height: '0.5px',
                backgroundColor: colors.p3,
                margin: '3rem 0',
            }} />
        );
    }

    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '0.5px',
        backgroundColor: colors.p3,
        margin: '3rem 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const textStyle = {
        position: 'absolute',
        fontFamily: fonts.serif,
        fontSize: '14px',
        fontStyle: 'italic',
        fontWeight: 300,
        color: colors.t2,
        backgroundColor: colors.p0,
        padding: '0 1.5rem',
    };

    return (
        <div style={containerStyle}>
            <span style={textStyle}>{text}</span>
        </div>
    );
}

export default Hairline;

// Made with Bob
