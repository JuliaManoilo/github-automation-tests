class GithubSearchPage {
    get searchButton() {
        return $('button[aria-label="Search or jump to…"]');
    }

    get openedSearchInput() {
        return $('#query-builder-test');
    }

    get repositoryLinks() {
        return $$('a[href*="/"][href*="act"]');
    }

    async searchByText(text) {
        await this.searchButton.waitForClickable();
        await this.searchButton.click();

        await this.openedSearchInput.waitForDisplayed();
        await this.openedSearchInput.setValue(text);

        await browser.keys('Enter');
    }
}

export default new GithubSearchPage();