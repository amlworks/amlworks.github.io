import { useEffect, useRef } from 'react';
import { colors, fonts } from '../tokens';

// Lightweight feed-forward network sketch: nodes per layer, edges between
// adjacent layers, and pulses that travel left → right at random intervals.
// Pure canvas, no deps.
function NeuralFlow({ height = 180 }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let width = canvas.parentElement.clientWidth;
        let h = height;
        const dpr = window.devicePixelRatio || 1;

        const setup = () => {
            width = canvas.parentElement.clientWidth;
            canvas.width = width * dpr;
            canvas.height = h * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${h}px`;
            ctx.scale(dpr, dpr);
        };
        setup();

        const layers = [4, 6, 6, 4, 2];
        const nodes = [];
        const padX = 40;
        const padY = 24;

        const rebuild = () => {
            nodes.length = 0;
            const usableW = width - padX * 2;
            const usableH = h - padY * 2;
            layers.forEach((count, li) => {
                const x = padX + (usableW * li) / (layers.length - 1);
                const col = [];
                for (let i = 0; i < count; i++) {
                    const y = padY + (usableH * (i + 0.5)) / count;
                    col.push({ x, y });
                }
                nodes.push(col);
            });
        };
        rebuild();

        const pulses = [];
        const spawnPulse = () => {
            // Start from a random input node, travel through random downstream nodes
            const path = [];
            let idx = Math.floor(Math.random() * nodes[0].length);
            path.push({ layer: 0, idx });
            for (let li = 1; li < nodes.length; li++) {
                idx = Math.floor(Math.random() * nodes[li].length);
                path.push({ layer: li, idx });
            }
            pulses.push({ path, seg: 0, t: 0, speed: 0.012 + Math.random() * 0.012 });
        };

        let raf;
        let last = 0;
        const onResize = () => { setup(); rebuild(); };
        window.addEventListener('resize', onResize);

        const hexToRgba = (hex, a) => {
            const v = hex.replace('#', '');
            const r = parseInt(v.substring(0, 2), 16);
            const g = parseInt(v.substring(2, 4), 16);
            const b = parseInt(v.substring(4, 6), 16);
            return `rgba(${r},${g},${b},${a})`;
        };

        const draw = (ts) => {
            const dt = ts - last;
            last = ts;
            ctx.clearRect(0, 0, width, h);

            // edges
            ctx.lineWidth = 0.6;
            ctx.strokeStyle = hexToRgba(colors.p3, 0.45);
            for (let li = 0; li < nodes.length - 1; li++) {
                for (const a of nodes[li]) {
                    for (const b of nodes[li + 1]) {
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }

            // nodes
            for (const layer of nodes) {
                for (const n of layer) {
                    ctx.beginPath();
                    ctx.fillStyle = hexToRgba(colors.a1, 0.85);
                    ctx.arc(n.x, n.y, 2.6, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            // pulses
            for (let i = pulses.length - 1; i >= 0; i--) {
                const p = pulses[i];
                const from = nodes[p.path[p.seg].layer][p.path[p.seg].idx];
                const to = nodes[p.path[p.seg + 1].layer][p.path[p.seg + 1].idx];
                const x = from.x + (to.x - from.x) * p.t;
                const y = from.y + (to.y - from.y) * p.t;

                // trail
                ctx.beginPath();
                ctx.strokeStyle = hexToRgba(colors.a1, 0.55);
                ctx.lineWidth = 1.1;
                ctx.moveTo(from.x, from.y);
                ctx.lineTo(x, y);
                ctx.stroke();

                // head
                ctx.beginPath();
                ctx.fillStyle = hexToRgba(colors.g1, 0.95);
                ctx.arc(x, y, 3.2, 0, Math.PI * 2);
                ctx.fill();

                p.t += p.speed;
                if (p.t >= 1) {
                    p.t = 0;
                    p.seg += 1;
                    if (p.seg >= p.path.length - 1) pulses.splice(i, 1);
                }
            }

            if (pulses.length < 4 && Math.random() < 0.04) spawnPulse();

            raf = requestAnimationFrame(draw);
        };

        // seed a couple immediately
        spawnPulse();
        spawnPulse();
        raf = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', onResize);
        };
    }, [height]);

    return (
        <div style={{
            width: '100%',
            border: `0.5px solid ${colors.p2}`,
            borderRadius: '16px',
            background: `linear-gradient(180deg, ${colors.p0} 0%, ${colors.p1} 100%)`,
            padding: '1rem 1rem 0.5rem',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <canvas ref={canvasRef} />
            <div style={{
                fontFamily: fonts.sans,
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: colors.t2,
                paddingTop: '0.5rem',
                textAlign: 'center',
            }}>
                Worldview
            </div>
        </div>
    );
}

export default NeuralFlow;
