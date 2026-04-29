class GithubNewsletterPage {
    get subscribeLink() {
        return $('//a[normalize-space()="Subscribe"]');
    }

    get newsletterTitle() {
        return $('//h1[normalize-space()="Get our developer newsletter"]');
    }

    get emailInput() {
        return $('#form-field-emailAddress');
    }

    get countryDropdown() {
        return $('#form-field-country');
    }

    get consentCheckbox() {
    return $('//label[contains(@for, "include_email")]');
    }

    get subscribeButton() {
        return $('//button[.//span[normalize-space()="Subscribe"]]');
    }

    get thanksTitle() {
        return $('//h1[normalize-space()="Thanks for subscribing"]');
    }

    async fillNewsletterForm(email) {
        await this.emailInput.waitForDisplayed();
        await this.emailInput.setValue(email);

        await this.countryDropdown.selectByAttribute('value', 'DM');

        const checkbox = await $('#include_email');
        await browser.execute((element) => {
        element.checked = true;
        element.dispatchEvent(new Event('change', { bubbles: true }));
        }, checkbox);
    }

    async clickSubscribeButton() {
        await this.subscribeButton.waitForClickable();
        await this.subscribeButton.click();
    }
}

export default new GithubNewsletterPage();