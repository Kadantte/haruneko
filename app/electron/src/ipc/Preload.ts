import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('ipcRenderer', {
    invoke: ipcRenderer.invoke,
    //once: ipcRenderer.once,
    on: ipcRenderer.on,
});