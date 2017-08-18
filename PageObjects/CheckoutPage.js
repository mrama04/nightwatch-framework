var CheckoutPageCommands = {

    fillInBillingAddress: function () {
        return this
            .waitForElementVisible("select[name='billing_address_id']", 2000)
            .click('input[title=Continue]')
    },

    fillInShippingAddress: function(){
        this.api
            .waitForElementVisible("select[name='shipping_address_id']", 2000)
            .useXpath()
            .click("//div[@id='shipping-buttons-container']//input")
            .useCss()

        return this;
    },

    selectShippingMethod: function(){
        this.api
            .waitForElementVisible("input[id='shippingoption_0']", 2000)
            .click("input[id='shippingoption_0']")
            .useXpath()
            .click("//div[@id='shipping-method-buttons-container']//input")
            .useCss()
        return this;
    },

    selectPaymentMethod: function(){
        this.api
            .waitForElementVisible("input[id='paymentmethod_0']", 2000)
            .click("input[id='paymentmethod_0']")
            .useXpath()
            .click("//div[@id='payment-method-buttons-container']//input")
            .useCss()
        return this;
    },

    confirmPaymentInfo: function(){
        this.api
            .useXpath()
            .waitForElementVisible("//div[@id='payment-info-buttons-container']//input", 5000)
            .click("//div[@id='payment-info-buttons-container']//input")
            .useCss()
        return this;
    },

    confirmOrder: function(browser){
        this.api
            .useXpath()
            .waitForElementVisible("//div[@id='confirm-order-buttons-container']//input", 2000)
            .click("//div[@id='confirm-order-buttons-container']//input")
            .useCss()

        return browser.page.OrderConfirmationPage();
    }
}

module.exports = {
    elements: {
        body:       'body',
    },
    commands: [CheckoutPageCommands]
}