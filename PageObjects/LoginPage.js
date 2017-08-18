var LoginPageCommands = {

    enterUserName: function (username) {
        return this
            .waitForElementVisible('@email', 2000)
            .setValue('@email',username)
    },

    enterPassword: function (password) {
        return this
            .waitForElementVisible('@password', 2000)
            .setValue('@password',password)
    },

    submit: function () {
        return this
            .waitForElementVisible('@login', 2000)
            .click('@login')
    },

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