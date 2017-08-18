module.exports = {
  '@tags':['webShopLogin'],
  'Login test' : function (browser) {
    browser
        .page.BasePage().openWebShop()
        .page.BasePage().navigateToLoginPage()
        .page.LoginPage().setEmail("mramam@gmail.test")
        .page.LoginPage().setPassword("test123")
        .page.LoginPage().clicklogin()

        .page.UserHomePage().assert.containsText('@userInfo',"mramam@gmail.test")
        .logout()

        return browser.end();
  }
};