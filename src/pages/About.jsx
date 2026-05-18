import Hairline from '../components/Hairline';
import MdView from '../components/MdView';
import { getAboutMarkdown } from '../data/content';
import { colors, fonts, radius, spacing } from '../tokens';

function About() {
    const aboutContent = getAboutMarkdown();

    const containerStyle = {
        maxWidth: spacing.maxWidth,
        margin: '0 auto',
        padding: `${spacing.pagePadding} ${spacing.pagePadding} ${spacing.pageBottom}`,
    };

    const profileSectionStyle = {
        display: 'flex',
        gap: '2.5rem',
        alignItems: 'flex-start',
        marginBottom: '3rem',
        maxWidth: spacing.readingWidth,
        margin: '0 auto 3rem',
    };

    const imageStyle = {
        width: '160px',
        height: '160px',
        borderRadius: radius.medium,
        objectFit: 'cover',
        border: `0.5px solid ${colors.p2}`,
        flexShrink: 0,
    };

    const introStyle = {
        fontFamily: fonts.serif,
        fontSize: '17px',
        fontWeight: 300,
        lineHeight: 1.7,
        color: colors.t1,
        flex: 1,
    };

    const mobileStyles = `
      @media (max-width: 768px) {
        .profile-section { flex-direction: column; align-items: flex-start; }
        .profile-image { margin-bottom: 1.5rem; }
      }
    `;

    const storyStyle = {
        maxWidth: spacing.readingWidth,
        margin: '0 auto 4rem',
    };

    return (
        <div style={containerStyle}>
            <div style={profileSectionStyle} className="profile-section">
                <img
                    src={`${import.meta.env.BASE_URL}images/profile-pic-cartoon.png`}
                    alt="Profile"
                    style={imageStyle}
                    className="profile-image"
                />
                <p style={introStyle}>
                    Full-stack engineer who builds end-to-end — data models,
                    APIs, and the interfaces people actually use. Drawn to
                    systems where ML meets product.
                </p>
            </div>

            <Hairline />

            <div style={storyStyle}>
                {aboutContent
                    ? <MdView content={aboutContent} />
                    : <p style={{ fontFamily: fonts.serif, color: colors.t2 }}>Loading...</p>}
            </div>

            <style>{mobileStyles}</style>
        </div>
    );
}

export default About;
