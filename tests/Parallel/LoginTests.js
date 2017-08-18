module.exports = {
    '@tags':['LoginTests'],
    'Login Failed Test' : function (browser) {
        var basePage = browser.page.BasePage()

        var loginPage = basePage
            .navigate()
            .maximizeWindow()
            .navigateToLoginPage(browser)

        loginPage
            .assert.title("Login - Expert360")
            .enterEmail()
            .enterPassword()
            .submit()
            .waitForElementVisible('@loginErrorMessage',10000)
            .getText('@loginErrorMessage',function(result) {
                this.assert.equal(result.value, "Your email address or password was incorrect.");
            })
         return browser.end();
    },

};