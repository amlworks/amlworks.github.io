import { useEffect } from 'react';
import { useLocation } from 'wouter';

// GoatCounter integration.
// Set VITE_GOATCOUNTER_CODE in .env (or as a CI variable on GitLab) to enable.
// Skipped on localhost and in dev unless VITE_GOATCOUNTER_DEV is also "1".

const CODE = import.meta.env.VITE_GOATCOUNTER_CODE;
const TRACK_IN_DEV = import.meta.env.VITE_GOATCOUNTER_DEV === '1';

function loadScript() {
    return new Promise((resolve, reject) => {
        if (window.goatcounter && window.goatcounter.count) return resolve();
        window.goatcounter = window.goatcounter || {};
        window.goatcounter.no_onload = true; // we count manually on route changes
        const s = document.createElement('script');
        s.async = true;
        s.dataset.goatcounter = `https://${CODE}.goatcounter.com/count`;
        s.src = '//gc.zgo.at/count.js';
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
    });
}

function Analytics() {
    const [location] = useLocation();

    useEffect(() => {
        if (!CODE) return;
        const isLocal = ['localhost', '127.0.0.1', '0.0.0.0'].includes(window.location.hostname);
        if (isLocal && !TRACK_IN_DEV) return;

        let cancelled = false;
        loadScript()
            .then(() => {
                if (cancelled) return;
                window.goatcounter.count({
                    path: location || '/',
                    title: document.title,
                    event: false,
                });
            })
            .catch(() => { /* ignore — analytics must never break the page */ });

        return () => { cancelled = true; };
    }, [location]);

    return null;
}

export default Analytics;
