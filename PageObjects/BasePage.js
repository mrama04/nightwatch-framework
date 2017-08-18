var BasePageCommands = {

    maximizeWindow: function(){
        this
            .waitForElementVisible('@body', 5000)
        this.api
            .windowMaximize()
        return this
    },

    navigateToLoginPage: function(browser) {
        this
            .waitForElementVisible('@loginPageLink', 2000)
            .click('@loginPageLink')

        return browser.page.LoginPage()
    },

}

module.exports = {
    url: 'http://demowebshop.tricentis.com',
    elements: {
        body: 'body',
        loginPageLink: 'a[href$=login]'
    },
    commands: [BasePageCommands]
}