module.exports = function (browser) {

    this.setEmail = function(email) {
        browser
            .waitForElementVisible('#Email', 2000)
            .setValue('#Email',email)
        return browser;
    };

    this.setPassword = function(password) {
        browser
            .waitForElementVisible('#Password', 2000)
            .setValue('#Password',password)
        return browser;
    };

    this.clicklogin = function () {
        browser
            .waitForElementVisible('input.button-1.login-button', 2000)
            .click('input.button-1.login-button')
        return browser;
    };

};