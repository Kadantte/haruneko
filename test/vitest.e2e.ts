/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        watch: false,
        //pool: 'forks',
        environment: 'node',
        fileParallelism: false,
        globalSetup: './test/HaruNekoNW.ts',
        include: [ '**/*[_.]e2e.[jt]s' ],
        exclude: [ '**/engine/websites/**' ],
        reporters: [ 'default', 'junit' ],
        outputFile: {
            junit: './test/junit.xml',
        },
        testTimeout: 7500,
    },
});