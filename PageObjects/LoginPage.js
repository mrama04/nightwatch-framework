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

        return this
    }
}

module.exports = {
    url: '',
    elements: {
        body:       'body',
        title:      'title',
        email:      'input[name=email]',
        password:   'input[name=password]',
        login:      'button[type=submit]',
        loginErrorMessage: {
            selector: '//div[@class="js-feedback-container"]//p',
            locateStrategy: 'xpath'
        }
    },
    commands: [LoginPageCommands]
}