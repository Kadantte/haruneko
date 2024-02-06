import path from 'path';
import yargs from 'yargs';
import { app, BrowserWindow } from 'electron';
import { IPC } from './ipc/InterProcessCommunication';
import { RPCServer } from '../../nw/src/rpc/Server';
import { Contract } from '../../nw/src/rpc/Contract';

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

    const win = new BrowserWindow({
        //icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
        width: 1280,
        height: 720,
        center: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            // TODO: Bundle preload.ts
            preload: path.join('.', 'ipc', 'Preload.js'),
            //disableBlinkFeatures: 'AutomationControlled',
        },
    });

    const ipc = new IPC(win);
    ipc.RPC = new RPCServer('/hakuneko', new Contract(ipc));

    //win.webContents.userAgent = 'Mozilla/5.0';
    win.loadURL(url, { userAgent: 'Mozilla/5.0' });
}

app.on('window-all-closed', () => {
    app.quit();
});

app.whenReady().then(GetURL).then(createWindow);