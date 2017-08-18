var UserHomePageCommands = {
    logout: function()
    {
        return this
            .waitForElementVisible('a[href$=logout]', 2000)
            .click('a[href$=logout]')
    }
}

module.exports = {
    elements: {
        body: 'body',
        userInfo: {
            selector: '.header-links .account',
            locateStrategy: 'css selector'
        },
    },
    commands: [UserHomePageCommands]
}
