class GithubHomePage {
    get signUpButton() {
        return $('a.HeaderMenu-link--sign-up');
    }

    get homeBannerTitle() {
        return $('//h2[normalize-space()="Millions of developers and businesses call GitHub home"]');
    }

    get tryCopilotButton() {
        return $('//a[.//span[normalize-space()="Try GitHub Copilot"]]');
    }

    get footerSubscribeLink() {
    return $('//a[normalize-space()="Subscribe" and contains(@href, "/newsletter")]');
    }

    async scrollToSubscribe() {
        await this.footerSubscribeLink.scrollIntoView();
    }

    async clickFooterSubscribe() {
        await this.footerSubscribeLink.waitForClickable();
        await this.footerSubscribeLink.click();
    }

    async open() {
        await browser.url('https://github.com/');
    }

    async clickSignUp() {
        await this.signUpButton.waitForDisplayed();
        await this.signUpButton.click();
    }

    async scrollToBanner() {
        await this.homeBannerTitle.scrollIntoView();
    }
}

export default new GithubHomePage();