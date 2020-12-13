const assert = require('assert');
const {Given} = require('cucumber');
const topicsPage = require('../pageobjects/topics.page.js');

Given(/^I am on the (topics|search) page$/,
        (page) => {
            if (page === 'topics') {
                assert(browser.getUrl().includes('/topics'));
                browser.pause(1000);
            } else if (page === 'search') {
                assert(browser.getUrl().includes('/search'));
                browser.pause(1000);
            }
        }
);


Given(/^go to (topics) page$/,
        (page) => {
            if (page === 'topics') {
                browser.url(topicsPage.url);
            }
        }
);