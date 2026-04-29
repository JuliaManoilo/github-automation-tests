class GithubSignUpPage {
    get createAccountTitle() {
        return $('//h1[normalize-space()="Create your free account"]');
    }

    get continueWithGoogleButton() {
        return $('//span[normalize-space()="Continue with Google"]');
    }

    get continueWithAppleButton() {
        return $('//span[normalize-space()="Continue with Apple"]');
    }

    get emailInput() {
        return $('#email');
    }

    get passwordInput() {
        return $('#password');
    }

    get usernameInput() {
        return $('#login');
    }

    get countryDropdown() {
        return $('#country-dropdown-panel-button');
    }

    get marketingCheckbox() {
        return $('//input[@id="user_signup[marketing_consent]"]');
    }

    get createAccountButton() {
        return $('button[data-target="signup-form.SignupButton"]');
    }

    async fillSignUpForm(email, password, username) {
        await this.emailInput.waitForDisplayed();
        await this.emailInput.setValue(email);

        await this.passwordInput.waitForDisplayed();
        await this.passwordInput.setValue(password);

        await this.usernameInput.waitForDisplayed();
        await this.usernameInput.setValue(username);
    }

    async selectMarketingCheckbox() {
        await this.marketingCheckbox.scrollIntoView();
        await this.marketingCheckbox.click();
    }

    async clickCreateAccount() {
        await this.createAccountButton.waitForClickable();
        await this.createAccountButton.click();
    }
}

export default new GithubSignUpPage();