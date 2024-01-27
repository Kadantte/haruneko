/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        watch: false,
        environment: 'node',
        passWithNoTests: true,
        include: [ 'src/**/*[_.](test|spec).[jt]s(x)?' ],
        reporters: [ 'default', 'junit' ],
        outputFile: {
            junit: './junit.xml',
        },
    },
});