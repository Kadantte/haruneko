import { Tags } from '../Tags';
import icon from './BentoManga.webp';
import { Chapter, DecoratableMangaScraper, Manga, type MangaPlugin } from '../providers/MangaPlugin';
import { FetchHTML, FetchJSON } from '../platform/FetchProvider';
import * as Common from './decorators/Common';

type APIMangas = {
    datas: string;
}

const pageScript = `
    new Promise((resolve, reject) => {
        const intervalID = setInterval(checkforselector, 500);
        let elapsed = 0;

        function checkforselector()
        {
            elapsed += 500;
            if (elapsed > 120000) reject();

            const element = document.querySelector('div#content');
            if (!element) return;

            clearInterval(intervalID);
            const id = element.dataset.chapterId;
            fetch( window.location.origin+'/api/?id='+id+'&type=chapter')
                .then(response => response.json())
                .then(data => {
                    const pages = data.page_array.map(page => new URL(data.baseImagesUrl+page, window.location.origin).href);
                    resolve(pages);
            });
        }
    });
`;

@Common.MangaCSS(/^{origin}\/manga\/[^/]+/, 'div.component-manga-title_main h1')
@Common.PagesSinglePageJS(pageScript, 500) //doesnt work because of Cloudflare
@Common.ImageAjax()

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('bentomanga', `BentoManga`, 'https://bentomanga.com', Tags.Language.French, Tags.Media.Manga, Tags.Media.Manhua, Tags.Media.Manhwa, Tags.Source.Aggregator);
    }

    public override get Icon() {
        return icon;
    }

    public override async FetchMangas(provider: MangaPlugin): Promise<Manga[]> {
        const mangaList: Manga[] = [];
        const url = new URL('/manga_list', this.URI);

        for (let page = 0, run = true; run; page++) {

            if (page > 0) url.searchParams.set('limit', page.toString());
            url.searchParams.set('cb', Date.now().toString());
            const request = new Request(url.href, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    Referrer: this.URI.origin
                }
            });
            const { datas } = await FetchJSON<APIMangas>(request);
            const dom = new DOMParser().parseFromString(datas, 'text/html');
            const mangas = [...dom.querySelectorAll<HTMLAnchorElement>('div.manga_header a')].map(manga => new Manga(this, provider, manga.pathname, manga.text.trim()));
            mangas.length > 0 ? mangaList.push(...mangas) : run = false;
        }
        return mangaList.distinct();
    }

    public override async FetchChapters(manga: Manga): Promise<Chapter[]> {
        const chapterList: Chapter[] = [];
        const url = new URL(`${manga.Identifier}/chapters`, this.URI);

        for (let page = 0, run = true; run; page++) {

            if (page > 0) url.searchParams.set('limit', page.toString());
            url.searchParams.set('cb', Date.now().toString());
            const request = new Request(url.href, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    Referrer: this.URI.origin
                }
            });
            const dom = await FetchHTML(request);
            const chapters = [...dom.querySelectorAll<HTMLAnchorElement>('div.component-chapter-title a')].map(chapter => new Chapter(this, manga, chapter.pathname, chapter.text.trim()));
            chapters.length > 0 ? chapterList.push(...chapters) : run = false;
        }

        return chapterList.distinct();
    }

}
