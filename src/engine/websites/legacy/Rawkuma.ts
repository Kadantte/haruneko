// Auto-Generated export from HakuNeko Legacy
// See: https://gist.github.com/ronny1982/0c8d5d4f0bd9c1f1b21dbf9a2ffbfec9

//import { Tags } from '../../Tags';
import icon from './Rawkuma.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('rawkuma', `Rawkuma`, 'https://rawkuma.com' /*, Tags.Language.English, Tags ... */);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class Rawkuma extends WordPressMangastream {

    constructor() {
        super();
        super.id = 'rawkuma';
        super.label = 'Rawkuma';
        this.tags = [ 'manga', 'raw', 'japanese' ];
        this.url = 'https://rawkuma.com';
        this.path = '/manga/list-mode/';
    }
}
*/