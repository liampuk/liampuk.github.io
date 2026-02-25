// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

const levaStub = fileURLToPath(new URL('./src/lib/leva-stub.ts', import.meta.url));

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    devToolbar: {
        enabled: false
    },
    vite: {
        plugins: [
            tailwindcss(),
            {
                name: 'strip-leva',
                config(_, { mode }) {
                    if (mode === 'production') {
                        return { resolve: { alias: { leva: levaStub } } };
                    }
                },
            },
        ],
    },
});
