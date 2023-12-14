import { Tags } from '../Tags';
import icon from './MangaWT.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as Madara from './decorators/WordPressMadara';
import * as Common from './decorators/Common';

@Madara.MangaCSS(/^{origin}\/manga\/[^/]+\/$/)
@Madara.MangasMultiPageAJAX()
@Madara.ChaptersSinglePageAJAXv2()
@Madara.PagesSinglePageCSS()
@Common.ImageAjax()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('mangawt', 'MangaWT', 'https://mangawt.com', Tags.Media.Manhua, Tags.Media.Manhwa, Tags.Language.Turkish);
    }

    public override get Icon() {
        return icon;
    }
}