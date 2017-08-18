module.exports = {
    '@tags':['HeaderLinkTests'],
    'Login Page Landing test' : function (browser) {
        var basePage = browser.page.BasePage()

        var loginPage = basePage
            .navigate()
            .maximizeWindow()
            .navigateToLoginPage(browser)

        loginPage
            .assert.title("Login - Expert360")

        return browser.end();
    },

    'Services Page Landing test' : function (browser) {
        var basePage = browser.page.BasePage()

        var loginPage = basePage
            .navigate()
            .maximizeWindow()
            .navigateToServicesPage(browser)

        loginPage
            .assert.title("Consulting Services - Expert360")

        return browser.end();
    }
};