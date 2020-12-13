class SearchPage {
    get url() {
        return 'https://github.com/search?q=webdriverio';
    }

    get typeScript() {
        return $('//a[@class="filter-item" and contains(@href, "TypeScript")]');
    }

    clickTypeScript() {
        this.typeScript.click();
    }

    get firstRepo() {
        return $('a.v-align-middle');
    }

    clickFirstRepo() {
        this.firstRepo.click();
    }

    get repositories() {
        return $('ul.repo-list');
    }
}

module.exports = new SearchPage();