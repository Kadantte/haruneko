import { Tags } from '../Tags';
import icon from './PrismaHentai.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as Madara from './decorators/WordPressMadara';
import * as Common from './decorators/Common';

@Madara.MangaCSS(/^https?:\/\/prismahentai\.com\/manga\/[^/]+\/$/, 'div#mangazinho')
@Madara.MangasMultiPageAJAX()
@Madara.ChaptersSinglePageAJAXv2()
@Madara.PagesSinglePageCSS()
@Common.ImageAjax()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('prismahentai', 'Prisma Hentai', 'https://prismahentai.com', Tags.Media.Manga, Tags.Media.Manhwa, Tags.Language.Portuguese, Tags.Source.Scanlator, Tags.Rating.Pornographic);
    }

    public override get Icon() {
        return icon;
    }
}