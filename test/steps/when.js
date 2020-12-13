const {When} = require('cucumber');
const navbarPage = require('../pageobjects/navbar.page.js');
const searchPage = require('../pageobjects/search.page.js');

When(/^I click on the (search) input$/,
        (element) => {
            if (element === 'search') {
                navbarPage.clickSearch();
            }
        }
);

When(/^I push (enter)$/,
        (button) => {
            if (button === 'enter') {
                browser.keys("\uE007");
            }
        }
);

When(/^I click on the (typescript) filter$/,
        (filterArgument) => {
            if (filterArgument === 'typescript') {
               searchPage.clickTypeScript();
            }
            browser.pause(2000);
        }
);

When(/^I click on the (1) typescript repository$/,
        (value) => {
            if (value === '1') {
               searchPage.clickFirstRepo();
            }
        }
);