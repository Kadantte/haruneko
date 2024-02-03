import type { IAppWindow } from '../AppWindow';

export default class implements IAppWindow {

    constructor(private readonly splashURL: string, private readonly useSplash: boolean) {
        //
    }

    ShowSplash(): Promise<void> {
        throw new Error('Method not implemented.');
    }

    HideSplash(): Promise<void> {
        throw new Error('Method not implemented.');
    }

    HasControls: boolean;

    Minimize(): void {
        throw new Error('Method not implemented.');
    }

    Maximize(): void {
        throw new Error('Method not implemented.');
    }

    Restore(): void {
        throw new Error('Method not implemented.');
    }

    Close(): void {
        throw new Error('Method not implemented.');
    }
}