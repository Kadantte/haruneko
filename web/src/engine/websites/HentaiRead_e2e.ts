import { TestFixture } from '../../../test/WebsitesFixture';

const config = {
    plugin: {
        id: 'hentairead',
        title: 'HentaiRead'
    },
    container: {
        url: 'https://hentairead.com/hentai/meccha-kimochi-yokattassho/',
        id: '/hentai/meccha-kimochi-yokattassho/',
        title: 'Meccha Kimochi Yokattassho?'
    },
    child: {
        id: '/hentai/meccha-kimochi-yokattassho/english/',
        title: 'Meccha Kimochi Yokattassho?'
    },
    entry: {
        index: 0,
        size: 177_123,
        type: 'image/jpeg'
    }
};

const fixture = new TestFixture(config);
describe(fixture.Name, () => fixture.AssertWebsite());