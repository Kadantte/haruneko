/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        watch: false,
        environment: 'node',
        fileParallelism: false,
        include: [ '**/engine/websites/*[_.]e2e.[jt]s' ],
        reporters: [ 'default', 'junit' ],
        outputFile: {
            junit: './test/junit.xml',
        },
        /*
        globalSetup: '../../test/PuppeteerSetup.ts',
        globalTeardown: '../../test/PuppeteerTeardown.ts',
        testEnvironment: '../../test/PuppeteerEnvironment.ts',
        */
    },
});