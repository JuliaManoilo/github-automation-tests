import GithubHomePage from '../pageobjects/github.home.page.js';
import GithubSignUpPage from '../pageobjects/github.signup.page.js';

describe('GitHub Sign Up', () => {
    it('[TC-01] Should open GitHub sign up page and fill registration form', async () => {
        await GithubHomePage.open();

        await GithubHomePage.clickSignUp();

        await expect(GithubSignUpPage.createAccountTitle).toBeDisplayed();
        await expect(GithubSignUpPage.createAccountTitle).toHaveText('Create your free account');

        await expect(GithubSignUpPage.continueWithGoogleButton).toBeDisplayed();
        await expect(GithubSignUpPage.continueWithGoogleButton).toBeClickable();

        await expect(GithubSignUpPage.continueWithAppleButton).toBeDisplayed();
        await expect(GithubSignUpPage.continueWithAppleButton).toBeClickable();

        await GithubSignUpPage.fillSignUpForm(
            'exampl123@.com',
            'superpassword1#',
            'SuperUserName581'
        );

        await expect(GithubSignUpPage.countryDropdown).toBeDisplayed();
        await expect(GithubSignUpPage.countryDropdown).toBeDisplayed();

        await GithubSignUpPage.selectMarketingCheckbox();

        await expect(GithubSignUpPage.createAccountButton).toBeDisplayed();
        await expect(GithubSignUpPage.createAccountButton).toBeClickable();

        await GithubSignUpPage.clickCreateAccount();
    });
});