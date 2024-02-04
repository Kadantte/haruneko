import type { IAppWindow } from '../AppWindow';

export default class implements IAppWindow {

    constructor(private readonly splashURL: string, private readonly useSplash: boolean) {
        //
    }

    public async ShowSplash(): Promise<void> {
        console.debug('Platform::Electron::AppWindow::ShowSplash()');
        //throw new Error('Method not implemented.');
    }

    public async HideSplash(): Promise<void> {
        console.debug('Platform::Electron::AppWindow::HideSplash()');
        //throw new Error('Method not implemented.');
    }

    public get HasControls() {
        return false;
    }

    public Minimize(): void {
        console.debug('Platform::Electron::AppWindow::Minimize()');
        throw new Error('Method not implemented.');
    }

    public Maximize(): void {
        console.debug('Platform::Electron::AppWindow::Maximize()');
        throw new Error('Method not implemented.');
    }

    public Restore(): void {
        console.debug('Platform::Electron::AppWindow::Restore()');
        throw new Error('Method not implemented.');
    }

    public Close(): void {
        console.debug('Platform::Electron::AppWindow::Close()');
        throw new Error('Method not implemented.');
    }
}