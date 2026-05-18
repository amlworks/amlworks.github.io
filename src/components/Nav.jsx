import { Link, useLocation } from 'wouter';
import { colors, fonts, spacing } from '../tokens';

function Nav() {
    const [location] = useLocation();

    const navStyle = {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(250, 247, 242, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: `0.5px solid ${colors.p2}`,
    };

    const containerStyle = {
        maxWidth: spacing.maxWidth,
        margin: '0 auto',
        padding: '1.25rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const nameStyle = {
        fontFamily: fonts.serif,
        fontSize: '20px',
        fontWeight: 300,
        color: colors.t0,
        textDecoration: 'none',
    };

    const linksStyle = {
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
    };

    const mobileStyles = `
      @media (max-width: 768px) {
        nav > div {
          padding: 1rem !important;
        }
        .nav-links {
          gap: 1rem !important;
        }
        .nav-links a {
          font-size: 10px !important;
        }
      }
    `;

    const linkStyle = (isActive) => ({
        fontFamily: fonts.sans,
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: isActive ? colors.a1 : colors.t1,
        textDecoration: 'none',
        transition: 'color 0.2s ease',
    });

    return (
        <nav style={navStyle}>
            <div style={containerStyle}>
                <Link href="/" style={nameStyle}>
                    Amy
                </Link>
                <div style={linksStyle} className="nav-links">
                    <Link href="/" style={linkStyle(location === '/')}>
                        Work
                    </Link>
                    <Link href="/about" style={linkStyle(location === '/about')}>
                        About
                    </Link>
                    <Link href="/blog" style={linkStyle(location.startsWith('/blog'))}>
                        Blog
                    </Link>
                </div>
            </div>
            <style>{mobileStyles}</style>
        </nav>
    );
}

export default Nav;

// Made with Bob
