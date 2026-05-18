import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Relative base so the build works under any GitLab Pages subpath.
export default defineConfig({
    plugins: [react()],
    base: './',
    server: { port: 3000 },
});
