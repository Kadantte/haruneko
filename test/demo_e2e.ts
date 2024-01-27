import { describe, it } from 'vitest';

describe('DEMO', () => {
    it('AppNW', async () => {
        //await instance.reset();
        await new Promise(resolve => setTimeout(resolve, 7500));
        console.log('PAGE:', global.PAGE.url());
        await new Promise(resolve => setTimeout(resolve, 1000));
    });
}, { timeout: 25_000 });