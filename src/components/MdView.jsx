import { marked } from 'marked';
import { colors, fonts, radius } from '../tokens';

// Use marked's default renderer (marked v11 changed the renderer signature,
// so a hand-rolled renderer is brittle). All styling is applied via a
// scoped <style> block targeting .md-body descendants.

marked.setOptions({ gfm: true, breaks: false });

function MdView({ content }) {
    const html = marked.parse(content || '');

    const scoped = `
      .md-body { font-family: ${fonts.serif}; color: ${colors.t0}; }

      .md-body h1 {
        font-family: ${fonts.serif};
        font-size: 38px;
        font-weight: 400;
        color: ${colors.t0};
        margin: 2.5rem 0 1.25rem;
        line-height: 1.25;
        letter-spacing: -0.005em;
      }
      .md-body h1:first-child { margin-top: 0; }

      .md-body h2 {
        font-family: ${fonts.sans};
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        color: ${colors.a1};
        margin: 3.5rem 0 1rem;
      }

      .md-body h3 {
        font-family: ${fonts.sans};
        font-size: 13px;
        font-weight: 500;
        color: ${colors.t0};
        margin: 2.5rem 0 0.75rem;
      }

      .md-body p {
        font-family: ${fonts.serif};
        font-size: 16px;
        font-weight: 300;
        line-height: 1.75;
        color: ${colors.t0};
        margin: 0 0 1.25rem;
      }

      .md-body strong {
        color: ${colors.a2};
        font-weight: 500;
      }

      .md-body em { font-style: italic; }

      .md-body a {
        color: ${colors.a1};
        text-decoration: underline;
        text-underline-offset: 3px;
        text-decoration-thickness: 0.5px;
      }
      .md-body a:hover { color: ${colors.a2}; }

      .md-body blockquote {
        border-left: 2px solid ${colors.p3};
        padding: 0.25rem 0 0.25rem 1.25rem;
        margin: 2rem 0;
        font-family: ${fonts.serif};
        font-size: 16px;
        font-style: italic;
        font-weight: 300;
        color: ${colors.t1};
        line-height: 1.7;
      }
      .md-body blockquote p { margin: 0; font-style: italic; color: ${colors.t1}; }

      .md-body ul, .md-body ol {
        margin: 1.25rem 0 1.5rem;
        padding-left: 1.5rem;
      }
      .md-body ul { list-style: none; padding-left: 0; }
      .md-body ul > li {
        font-family: ${fonts.serif};
        font-size: 16px;
        font-weight: 300;
        line-height: 1.75;
        color: ${colors.t0};
        margin: 0.4rem 0;
        padding-left: 1.4rem;
        position: relative;
      }
      .md-body ul > li::before {
        content: "—";
        position: absolute;
        left: 0;
        color: ${colors.a1};
      }
      .md-body ol > li {
        font-family: ${fonts.serif};
        font-size: 16px;
        font-weight: 300;
        line-height: 1.75;
        color: ${colors.t0};
        margin: 0.4rem 0;
      }
      .md-body li > p { margin: 0; }

      .md-body hr {
        border: 0;
        border-top: 0.5px solid ${colors.p3};
        margin: 3rem 0;
      }

      .md-body img {
        display: block;
        max-width: 100%;
        height: auto;
        margin: 2.5rem auto;
        border-radius: ${radius.small};
        box-shadow: 0 8px 32px rgba(30, 21, 13, 0.10);
      }

      .md-body code {
        font-family: ui-monospace, "SF Mono", Menlo, monospace;
        font-size: 13px;
        background: ${colors.p1};
        border: 0.5px solid ${colors.p2};
        padding: 0.1rem 0.35rem;
        border-radius: 4px;
        color: ${colors.a2};
      }
      .md-body pre {
        background: ${colors.p1};
        border: 0.5px solid ${colors.p2};
        border-radius: ${radius.small};
        padding: 1rem 1.1rem;
        margin: 1.5rem 0;
        overflow-x: auto;
        font-size: 13px;
        line-height: 1.6;
      }
      .md-body pre code {
        background: transparent;
        border: 0;
        padding: 0;
        color: ${colors.t0};
      }

      .md-body table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.75rem 0;
        font-family: ${fonts.sans};
        font-size: 14px;
      }
      .md-body th, .md-body td {
        text-align: left;
        padding: 0.6rem 0.8rem;
        border-bottom: 0.5px solid ${colors.p2};
      }
      .md-body th { color: ${colors.t2}; font-weight: 500; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; }
    `;

    return (
        <>
            <style>{scoped}</style>
            <div className="md-body" dangerouslySetInnerHTML={{ __html: html }} />
        </>
    );
}

export default MdView;
