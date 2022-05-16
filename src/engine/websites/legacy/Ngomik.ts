// Auto-Generated export from HakuNeko Legacy
// See: https://gist.github.com/ronny1982/0c8d5d4f0bd9c1f1b21dbf9a2ffbfec9

//import { Tags } from '../../Tags';
import icon from './Ngomik.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('ngomik', `Ngomik`, 'https://ngomik.net' /*, Tags.Language.English, Tags ... */);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class Ngomik extends WordPressMangastream {

    constructor() {
        super();
        super.id = 'ngomik';
        super.label = 'Ngomik';
        this.tags = [ 'manga', 'indonesian' ];
        this.url = 'https://ngomik.net';
        this.path = '/manga/list-mode/';
    }

    async _initializeConnector() {
        // NOTE: Multiple domains may be protected by CloudFlare and needs to be unlocked ...
        const domains = [ this.url, 'https://cdn.ngomik.in', 'https://cdn2.ngomik.in' ];
        for(let domain of domains) {
            let uri = new URL(domain);
            let request = new Request(uri.href, this.requestOptions);
            await Engine.Request.fetchUI(request, '', 60000, true);
        }
    }
}
*/