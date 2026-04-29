import GithubHomePage from '../pageobjects/github.home.page.js';
import GithubSearchPage from '../pageobjects/github.search.page.js';

describe('GitHub Search', () => {
    it('[TS-04] Should search repositories by keyword act', async () => {
        await GithubHomePage.open();

        await GithubSearchPage.searchByText('act');

        await expect(browser).toHaveUrl(expect.stringContaining('q=act'));

        const repoLinks = await GithubSearchPage.repositoryLinks;

        await browser.waitUntil(
            async () => repoLinks.length > 0,
            {
                timeout: 10000,
                timeoutMsg: 'Repository links with act were not found'
            }
        );

        const firstHref = await repoLinks[0].getAttribute('href');

        await expect(firstHref).toContain('act');
    });
});