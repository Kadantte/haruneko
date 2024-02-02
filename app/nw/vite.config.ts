import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import pkg from './package.json' assert { type: 'json' };

export default defineConfig({
    build: {
        ssr: true,
        outDir: 'build',
        emptyOutDir: false,
        target: 'esnext',
        lib: {
            entry: resolve(__dirname, 'src', 'App.ts'),
            name: 'hakuneko-app-nw',
            //formats: [ 'cjs' ]
        },
        rollupOptions: {
            //input: resolve(__dirname, 'src', 'App.ts'),
            external: [
                ...Object.keys(pkg.dependencies), // don't bundle dependencies
                /^node:.*/, // don't bundle built-in Node.js modules (use protocol imports!)
            ],
        },
    },
});