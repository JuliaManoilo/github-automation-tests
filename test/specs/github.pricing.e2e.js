import GithubHomePage from '../pageobjects/github.home.page.js';
import GithubPricingPage from '../pageobjects/github.pricing.page.js';

describe('GitHub Pricing', () => {
    it('[TS-05] Should open Pricing page and compare features section', async () => {
        await GithubHomePage.open();

        await GithubPricingPage.clickPricingLink();

        await expect(GithubPricingPage.pricingTitle).toBeDisplayed();
        await expect(GithubPricingPage.pricingTitle)
            .toHaveText('Try the Copilot-powered platform');

        await GithubPricingPage.clickCompareAllFeatures();

        await expect(browser).toHaveUrl(expect.stringContaining('#compare-features'));

        await expect(GithubPricingPage.compareFeaturesTitle).toBeDisplayed();
        await expect(GithubPricingPage.compareFeaturesTitle)
            .toHaveText('Compare features');
    });
});