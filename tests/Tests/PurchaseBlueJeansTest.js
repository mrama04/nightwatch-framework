module.exports = {
    '@tags':['webShopProductPurchase'],
    'Purchase Blue Jeans Test' : function (browser) {

        var basePage = browser.page.BasePage()

        var loginPage = basePage
            .navigate()
            .maximizeWindow()
            .navigateToLoginPage(browser)


        var userHomePage = loginPage
            .enterEmail()
            .enterPassword()
            .submit(browser)

        var productPage = userHomePage.navigateProductPage(browser, "Apparel & Shoes")

        var shoppingCartPage = productPage
            .selectBlueJeans()
            .addProductToCart()
            .navigateToShoppingCartPage(browser)

        var checkoutPage = shoppingCartPage
            .AcceptTermsConditions()
            .checkout(browser)

        var orderConfirmationPage = checkoutPage
            .fillInBillingAddress()
            .fillInShippingAddress()
            .selectShippingMethod()
            .selectPaymentMethod()
            .confirmPaymentInfo()
            .confirmOrder(browser)

        userHomePage = orderConfirmationPage
            .waitForElementVisible('@confirmationMessage', 5000)
            .assert.containsText('@confirmationMessage',"Your order has been successfully processed!")
            .navigateToHomePage(browser)


        userHomePage.logout()

        return browser.end();
    }
};