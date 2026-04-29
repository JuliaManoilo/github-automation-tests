import GithubHomePage from '../pageobjects/github.home.page.js';
import GithubNewsletterPage from '../pageobjects/github.newsletter.page.js';

describe('GitHub Newsletter', () => {
    it('[TS-03] Should subscribe to GitHub developer newsletter', async () => {
        await GithubHomePage.open();

        await GithubHomePage.scrollToSubscribe();
        await GithubHomePage.clickFooterSubscribe();

        await expect(browser).toHaveUrl(expect.stringContaining('github.com/newsletter'));

        await expect(GithubNewsletterPage.newsletterTitle).toBeDisplayed();
        await expect(GithubNewsletterPage.newsletterTitle)
            .toHaveText('Get our developer newsletter');

        await GithubNewsletterPage.fillNewsletterForm('exempl@123.com');

        await GithubNewsletterPage.clickSubscribeButton();

        await expect(GithubNewsletterPage.thanksTitle).toBeDisplayed();
        await expect(GithubNewsletterPage.thanksTitle)
            .toHaveText('Thanks for subscribing');
    });
});