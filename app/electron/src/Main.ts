import path from 'path';
import yargs from 'yargs';
import { app, BrowserWindow } from 'electron';
async function foo() {
    const _ = await import('./ipc/Preload');
}

/*
import { RPCServer } from './rpc/Server';
import { Contract } from './rpc/Contract';
import { IPC } from './ipc/InterProcessCommunication';
*/

export * from './ipc/Preload';

async function GetArgumentURL(): Promise<string | undefined> {
    try {
        const argv/*: Arguments*/ = await yargs(process.argv).argv;
        return argv.origin as string;
    } catch {
        return undefined;
    }
}

async function GetDefaultURL(): Promise<string | undefined> {
    try {
        return 'http://localhost:3000';
    } catch {
        return undefined;
    }
}

async function GetURL(): Promise<string> {
    return await GetArgumentURL() ?? await GetDefaultURL() ?? '';
}

function createWindow(url: string) {

    /*
    const ipc = new IPC();
    ipc.RPC = new RPCServer('/hakuneko', new Contract(ipc));
    */

    const win = new BrowserWindow({
        //icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
        width: 1280,
        height: 720,
        center: true,
        webPreferences: {
            // TODO: Bundle preload.ts
            preload: path.join('.', 'ipc', 'Preload.js'),
            //disableBlinkFeatures: 'AutomationControlled',
        },
    });

    /*
    // Test active push message to Renderer-process.
    win.webContents.on('did-finish-load', () => {
        win?.webContents.send('main-process-message', (new Date).toLocaleString())
    });
    */

    win.loadURL(url);
}

app.on('window-all-closed', () => {
    app.quit();
});

app.whenReady().then(GetURL).then(createWindow);