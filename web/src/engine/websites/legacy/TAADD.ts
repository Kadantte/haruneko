import { Tags } from '../../Tags';
import icon from './TAADD.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';
import * as TAADD from '../decorators/TAADD';
import * as Common from '../decorators/Common';

@Common.MangaCSS(/^https?:\/\/www\.taadd\.com\/book\/\S+\.html$/, TAADD.queryMangaTitleFromURI, TAADD.MangaLabelExtractor)
@Common.MangasMultiPageCSS(TAADD.mangaPath, TAADD.queryMangas)
@TAADD.ChaptersSinglePageCSS()
@TAADD.PagesMultiPageCSS()
@Common.ImageAjax()

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('taadd', `TAADD`, 'https://www.taadd.com', Tags.Language.English, Tags.Media.Manga, Tags.Media.Manhua, Tags.Media.Manhwa, Tags.Source.Aggregator);
    }
    public override get Icon() {
        return icon;
    }
}