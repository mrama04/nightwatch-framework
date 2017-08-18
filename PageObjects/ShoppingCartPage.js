var ShoppingPageCommands = {

    AcceptTermsConditions: function () {
        return this
            .waitForElementVisible('@termsofservice', 2000)
            .click("@termsofservice")
    },

    checkout: function(browser){
        this
            .waitForElementVisible('@checkout', 2000)
            .click('@checkout')
        return browser.page.CheckoutPage();
    }

}

module.exports = {
    elements: {
        body:           'body',
        termsofservice: '#termsofservice',
        checkout:       'button[name=checkout]'
    },
    commands: [ShoppingPageCommands]
}