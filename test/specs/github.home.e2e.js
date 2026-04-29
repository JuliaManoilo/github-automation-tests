import GithubHomePage from '../pageobjects/github.home.page.js';

describe('GitHub Home Page', () => {
    it('[TS-02] Should check banner text and Try GitHub Copilot button', async () => {

        await GithubHomePage.open();

        await GithubHomePage.scrollToBanner();

        await expect(GithubHomePage.homeBannerTitle).toBeDisplayed();
        await expect(GithubHomePage.homeBannerTitle)
            .toHaveText('Millions of developers and businesses call GitHub home');

        await expect(GithubHomePage.tryCopilotButton).toExist();
        await expect(GithubHomePage.tryCopilotButton)
            .toHaveAttribute('href', expect.stringContaining('/github-copilot/pro'));
        
    });
});