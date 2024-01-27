import os from 'os';
import path from 'path';
import fs from 'fs-extra';
import { exec, spawn, ChildProcess } from 'child_process';
import * as puppeteer from 'puppeteer-core';
import { UserConfig } from 'vitest';

const uriApp = new URL('http://localhost:5000/');

async function CreateTempUserDirectory() {
    const tempUserDir = path.resolve(os.tmpdir(), 'hakuneko-test', 'userdata_' + Date.now().toString(32));
    await fs.mkdir(tempUserDir, { recursive: true });
    return tempUserDir;
}

function LaunchWeb() {
    const viteExe = path.resolve('node_modules', '.bin', process.platform === 'win32' ? 'vite.cmd' : 'vite');
    return spawn(viteExe, [ 'preview', '--port=5000', '--strictPort' ], { cwd: path.resolve('web'), stdio: [ 'pipe', process.stdout, process.stderr ] });
}

async function CloseSplashScreen(target: puppeteer.Target) {
    const page = await target.page();
    let url = page?.url();
    while(!url?.startsWith('http')) {
        await new Promise(resolve => setTimeout(resolve, 250));
        url = page?.url();
    }
    if(url && /splash.html/i.test(url)) {
        await page?.close();
    }
}

async function LaunchAppNW(uri: URL, tempUserDir: string) {
    const nwApp = path.resolve('app', 'nw', 'build');
    const nwExe = path.resolve('node_modules', '.bin', process.platform === 'win32' ? 'nw.cmd' : 'nw');
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        ignoreDefaultArgs: true,
        executablePath: nwExe,
        args: [ nwApp, '--disable-blink-features=AutomationControlled', `--origin=${uri.href}` ],
        userDataDir: tempUserDir,
    });
    browser.on('targetcreated', CloseSplashScreen);

    const start = Date.now();
    while(Date.now() - start < 7500) {
        const pages = await browser.pages();
        const page = pages.find(p => p.url() === uri.href);
        if(page) {
            console.log(new Date().toISOString(), '⮕', `Using Page '${page.url()}' from page list:`, pages.map(p => p.url()));
            return { browser, page };
        } else {
            console.log(new Date().toISOString(), '⮕', `Waiting for Page '${uri.href}' in page list:`, pages.map(p => p.url()));
        }
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    throw new Error(`Could not find the web-application '${uri.href}' within the given timeout!`);
}

/**
 * Puppeteer TestBed for HaruNeko based on NW
 */
class HaruNekoNW {

    #server: ChildProcess;
    public get server(): ChildProcess {
        return this.#server;
    }

    #browser: puppeteer.Browser;
    public get browser(): puppeteer.Browser {
        return this.#browser;
    }

    #page: puppeteer.Page;
    public get page(): puppeteer.Page {
        return this.#page;
    }

    #tempdir: string;

    public async setup(config: UserConfig) {
        console.log('< TESTBED SETUP >', config);
        if(!uriApp.origin.includes('localhost:5000')) {
            throw new Error(`Invalid startup URL '${uriApp.origin}', make sure the application was build for production mode!`);
        }
        this.#tempdir = await CreateTempUserDirectory();
        this.#server = LaunchWeb();
        try {
            const { browser, page } = await LaunchAppNW(uriApp, global.TEMPDIR);
            this.#browser = browser;
            this.#page = page;
            global.PAGE = page;
        } catch(error) {
            this.#server.kill('SIGINT') || global.SERVER.kill('SIGTERM') || global.SERVER.kill('SIGKILL');
            throw error;
        }
    }

    public async teardown() {
        console.log('< TESTBED TEARDOWN >');
        const pages = await this.browser.pages();
        for(const page of pages) await page.close();
        await this.#browser.close();
        switch (process.platform) {
            case 'win32':
                await new Promise(resolve => exec(`taskkill /pid ${this.#server.pid} /T /F`, resolve));
                break;
            default:
                const signals: NodeJS.Signals[] = [ 'SIGINT', 'SIGTERM', 'SIGKILL' ];
                for(let index = 0; index < signals.length && !this.#server.killed && this.#server.exitCode === null; index++) {
                    this.#server.kill(signals[index]);
                }
                break;
        }
        if(!this.#server.killed && this.#server.exitCode === null) {
            console.warn('Failed to stop process:', this.#server.spawnfile, this.#server.exitCode, this.#server.killed);
        }
        await fs.rm(this.#tempdir, { recursive: true });
    }

    public async reset() {
        console.log('< TESTBED RESET >');
        await this.#page.reload();
        await this.#page.waitForSelector('body div#app main#hakunekoapp', { timeout: 7500 });
    }
}

const instance = new HaruNekoNW();
export const setup = instance.setup.bind(instance);
export const teardown = instance.teardown.bind(instance);

/*
export default <Environment>{
    name: 'HaruNeko @ NW',
    transformMode: 'web',
    async setup() {
        await instance.reset();
        return {
            async teardown() {
                //
            }
        }
    }
}
*/

/*
interface MyFixtures {
    readonly browser: puppeteer.Browser;
    readonly page: puppeteer.Page;
    reset(): Promise<void>;
}

export const e2e = test.extend<MyFixtures>({
    todos: [],
    archive: []
});
*/