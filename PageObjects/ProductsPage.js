var ProductsPageCommands = {

    selectBlueJeans: function () {
        this.api
            .useXpath()
            .waitForElementVisible("//div[@class='picture']/a[contains(@href, 'jeans')]", 5000)
            .click("//div[@class='picture']//a[contains(@href, 'jeans')]")
            .useCss()
        return this;
    },

    addProductToCart: function () {
        return this
            .waitForElementVisible('@addtocart', 2000)
            .click('@addtocart')
    },

    navigateToShoppingCartPage: function (browser) {
        this.api
            .useXpath()
            .waitForElementVisible("//div[@class='header-links']//a[contains(@href, 'cart')]", 2000)
            .click("//div[@class='header-links']//a[contains(@href, 'cart')]")
            .useCss()
        return browser.page.ShoppingCartPage();
    },
}

module.exports = {
    elements: {
        body:       'body',
        addtocart:  'input[id=add-to-cart-button-36]',
    },
    commands: [ProductsPageCommands]
}