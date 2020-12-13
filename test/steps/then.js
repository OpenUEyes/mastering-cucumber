const assert = require('assert');
const {Then} = require('cucumber');
const navbarPage = require('../pageobjects/navbar.page.js');
const searchPage = require('../pageobjects/search.page.js');

Then(/^I type text to (search) input$/,
        (element) => {
            if (element === 'search') {
                navbarPage.search = 'webdriverio';
            }
        }
);

Then(/^should forward to (search|repository) page$/,
        (element) => {
            if (element === 'search') {
                assert(browser.getUrl().includes('/search'));
                browser.pause(1000);
            } else if (element === 'repository') {
                assert(browser.getUrl().includes('/webdriverio'));
                browser.pause(1000);
            }
        }
);

Then(/^(typescript) repositories should be displayed$/,
        (element) => {
            if (element === 'typescript') {
                console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'+searchPage.repositories.isDisplayed());
                searchPage.repositories.isDisplayed();
            } 
        }
);