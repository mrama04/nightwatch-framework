var OrderConfirmationPageCommands = {

    navigateToHomePage: function(browser) {
        this
            .waitForElementVisible('@continue', 2000)
            .click('@continue')

        return browser.page.UserHomePage();

    },
}

module.exports = {
    elements: {
        body: 'body',
        confirmationMessage: '.order-completed .title',
        continue:   'input[value=Continue]'
    },
    commands: [OrderConfirmationPageCommands]
}