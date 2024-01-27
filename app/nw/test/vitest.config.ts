/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        environment: 'node',
        passWithNoTests: true,
        include: [ '**/*[_.](test|spec).[jt]s(x)?' ],
        reporters: [ 'default', 'junit' ],
        outputFile: {
            junit: './test/junit.xml',
        },
    },
});