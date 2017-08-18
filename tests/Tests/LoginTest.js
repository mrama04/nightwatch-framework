module.exports = {
    '@tags':['webShopLogin'],
    'Login test' : function (browser) {
        var basePage = browser.page.BasePage()

        var loginPage = basePage
            .navigate()
            .maximizeWindow()
            .navigateToLoginPage(browser)


        var userHomePage = loginPage
            .enterEmail()
            .enterPassword()
            .submit(browser)

        userHomePage
            .assert.containsText('@userInfo',"mramam@gmail.test")
            .logout()

        return browser.end();
    }
};