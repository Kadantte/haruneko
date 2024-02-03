import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('IPC', {
    setTitle: (title) => ipcRenderer.send('set-title', title)
});