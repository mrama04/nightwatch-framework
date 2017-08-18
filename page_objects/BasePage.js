module.exports = function (browser) {

    this.openWebShop= function () {
        browser
            .url('http://demowebshop.tricentis.com')
            .waitForElementVisible('body', 2000)
            .windowMaximize()
        return browser;
    };

    this.navigateToLoginPage = function () {
        browser
            .waitForElementVisible('a[href$=login]', 2000)
            .click('a[href$=login]')
        return browser;
    };

};
