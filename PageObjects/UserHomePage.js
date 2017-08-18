var HomePageCommands = {

    navigateProductPage: function (browser, productType) {
        if(productType=="Apparel & Shoes")
        {
            this.api
                .useXpath()
                .waitForElementVisible("//ul[@class='list']//a[contains(@href, 'shoes')]", 2000)
                .click("//ul[@class='list']//a[contains(@href, 'shoes')]")
                .useCss()
            return browser.page.ProductsPage();
        }
    },

    logout: function(){
        return this
            .waitForElementVisible('@logoutLink', 2000)
            .click('@logoutLink')

    },

}

module.exports = {
    elements: {
        body:       'body',
        logoutLink:      'a[href$=logout]',
        userInfo: '.header-links .account'
    },
    commands: [HomePageCommands]
}