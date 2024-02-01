import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        ssr: true,
        outDir: 'build',
        emptyOutDir: false,
        /*
        lib: {
            entry: resolve(__dirname, 'src', 'App.ts'),
            name: 'hakuneko-app-nw',
            formats: [ 'es' ]
        },*/
        rollupOptions: {
            input: resolve(__dirname, 'src', 'App.ts')
        },
    },
});