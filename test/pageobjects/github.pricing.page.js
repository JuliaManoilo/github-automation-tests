class GithubPricingPage {
    get pricingLink() {
        return $('//span[normalize-space()="Pricing"]');
    }

    get pricingTitle() {
        return $('//h1[normalize-space()="Try the Copilot-powered platform"]');
    }

    get compareAllFeaturesLink() {
        return $('//a[contains(@href, "#compare-features")]');
    }

    get compareFeaturesTitle() {
        return $('//h1[normalize-space()="Compare features"]');
    }

    async clickPricingLink() {
        await this.pricingLink.waitForDisplayed();
        await this.pricingLink.click();
    }

    async clickCompareAllFeatures() {
        await this.compareAllFeaturesLink.scrollIntoView();
        await this.compareAllFeaturesLink.waitForClickable();
        await this.compareAllFeaturesLink.click();
    }
}

export default new GithubPricingPage();