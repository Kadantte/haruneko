import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('IPC', {
    invoke: ipcRenderer.invoke,
    //once: ipcRenderer.once,
    on: ipcRenderer.on,
});