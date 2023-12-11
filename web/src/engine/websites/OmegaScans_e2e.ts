﻿import { TestFixture } from '../../../test/WebsitesFixture';

const ComicConfig = {
    plugin: {
        id: 'omegascans',
        title: 'OmegaScans'
    },
    container: {
        url: 'https://omegascans.org/series/trapped-in-the-academys-eroge',
        id: 'trapped-in-the-academys-eroge',
        title: `Trapped in the Academy's Eroge`
    },
    child: {
        id: 'chapter-76',
        title: 'Chapter 76'
    },
    entry: {
        index: 1,
        size: 1_577_008,
        type: 'image/jpeg'
    }
};

const ComicFixture = new TestFixture(ComicConfig);
describe(ComicFixture.Name, () => ComicFixture.AssertWebsite());

const NovelConfig = {
    plugin: {
        id: 'omegascans',
        title: 'OmegaScans'
    },
    container: {
        url: 'https://omegascans.org/series/the-scion-of-the-labyrinth-city',
        id: 'the-scion-of-the-labyrinth-city',
        title: 'The Scion of the Labyrinth City'
    },
    child: {
        id: 'chapter-28',
        title: 'Chapter 28'
    },
    entry: {
        index: 0,
        size: 892_312,
        type: 'image/png'
    }
};

const NovelFixture = new TestFixture(NovelConfig);
describe(NovelFixture.Name, () => NovelFixture.AssertWebsite());