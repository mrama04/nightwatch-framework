var LoginPageCommands = {

    enterEmail : function () {
        return this
            .waitForElementVisible('@email', 2000)
            .setValue('@email','mramam@gmail.test')
    },

    enterPassword: function () {
        return this
            .waitForElementVisible('@password', 2000)
            .setValue('@password','test123')
    },

    submit: function (browser) {
        this
            .waitForElementVisible('@login', 2000)
            .click('@login')

        return browser.page.UserHomePage()
    }
}

module.exports = {
    url: 'http://demowebshop.tricentis.com',
    elements: {
        body:       'body',
        email:      '#Email',
        password:   '#Password',
        login:      'input.button-1.login-button'
    },
    commands: [LoginPageCommands]
}