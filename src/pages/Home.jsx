import { useState } from 'react';
import NeuralFlow from '../components/NeuralFlow';
import Rule from '../components/Rule';
import Tile from '../components/Tile';
import { getAllTags, getProjectsByTag } from '../data/projects';
import { colors, fonts, spacing } from '../tokens';

function Home() {
    const [activeFilter, setActiveFilter] = useState('All');
    const tags = getAllTags();
    const filteredProjects = getProjectsByTag(activeFilter);

    const containerStyle = {
        maxWidth: spacing.maxWidth,
        margin: '0 auto',
        padding: `${spacing.pagePadding} ${spacing.pagePadding} ${spacing.pageBottom}`,
    };

    const heroStyle = {
        marginBottom: '3rem',
    };

    const nameStyle = {
        fontFamily: fonts.serif,
        fontSize: '52px',
        fontWeight: 300,
        color: colors.t0,
        marginBottom: '0.5rem',
        lineHeight: 1.1,
    };

    const locationStyle = {
        fontFamily: fonts.sans,
        fontSize: '10px',
        fontWeight: 500,
        letterSpacing: '0.24em',
        textTransform: 'uppercase',
        color: colors.t2,
        marginBottom: '1.25rem',
    };

    const taglineStyle = {
        fontFamily: fonts.serif,
        fontSize: '16px',
        fontWeight: 300,
        lineHeight: 1.6,
        color: colors.t1,
        maxWidth: '620px',
    };

    const stackLineStyle = {
        fontFamily: fonts.sans,
        fontSize: '11px',
        fontWeight: 400,
        letterSpacing: '0.05em',
        color: colors.t2,
        marginTop: '1rem',
    };

    const filterRowStyle = {
        display: 'flex',
        gap: '0.6rem',
        marginBottom: '2rem',
        flexWrap: 'wrap',
    };

    const filterButtonStyle = (isActive) => ({
        fontFamily: fonts.sans,
        fontSize: '10px',
        fontWeight: 500,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: isActive ? colors.p0 : colors.t1,
        backgroundColor: isActive ? colors.a1 : 'transparent',
        border: `0.5px solid ${isActive ? colors.a1 : colors.p3}`,
        borderRadius: '999px',
        padding: '0.45rem 0.9rem',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
    });

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '14px',
    };

    const mobileGridStyle = `
      @media (max-width: 640px) {
        .project-grid { grid-template-columns: 1fr !important; }
      }
    `;

    return (
        <div style={containerStyle}>
            <div style={heroStyle}>
                <h1 style={nameStyle}></h1>
                <div style={locationStyle}>New York · Full-Stack Engineer · ML</div>
                <p style={taglineStyle}>
                    I build end-to-end products — from data models and APIs
                    to the pixels users touch. Comfortable across the stack,
                    with a soft spot for ML systems.
                </p>
                <div style={stackLineStyle}>
                    TypeScript · React / Next.js · Python · FastAPI · Postgres · PyTorch
                </div>
            </div>

            <NeuralFlow />

            <div style={{ height: '3rem' }} />

            <Rule label="Selected Work" />

            <div style={filterRowStyle}>
                {tags.map(tag => (
                    <button
                        key={tag}
                        style={filterButtonStyle(activeFilter === tag)}
                        onClick={() => setActiveFilter(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div style={gridStyle} className="project-grid">
                {filteredProjects.map(project => (
                    <Tile key={project.id} project={project} />
                ))}
            </div>

            <style>{mobileGridStyle}</style>
        </div>
    );
}

export default Home;
