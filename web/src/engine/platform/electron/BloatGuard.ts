import type { IBloatGuard } from '../BloatGuard';

export default class implements IBloatGuard {

    constructor(private readonly patterns: Array<string>) {}

    Initialize(): void {
        console.debug('Platform::Electron::BloatGuard::Initialize()');
        //throw new Error('Method not implemented.');
    }
}