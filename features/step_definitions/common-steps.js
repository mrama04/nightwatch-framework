const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

const homepage = client.page.BasePage()

defineSupportCode(({Given, Then, When, And}) => {

    Given(/^I open Expert360's home page$/, () => {
        return homepage
            .navigate()
            .maximizeWindow()
    })

    When (/^I navigate to ([^"]*) page$/, (pageName) => {
        if  (pageName == "login"){
            return homepage
                .navigateToLoginPage()
        }
        else if (pageName == "services")
        {
            return homepage
                .navigateToServicesPage()
        }
    })

    Then (/^The page title should be ([^"]*)$/, (title) => {
            return homepage
               .assert.title(title)
    })


})