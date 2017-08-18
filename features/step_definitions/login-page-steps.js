const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

const login = client.page.LoginPage()

defineSupportCode(({Given, Then, When, And}) => {

    When(/^I Enter ([^"]*) and ([^"]*)$/, (email, password) => {
        return login
            .enterUserName(email)
            .enterPassword(password)
    })

    When(/^I click the Login button$/, () => {
        return login
            .submit()
    })

    Then (/^Login should not be succesful$/, () => {
        return login
            .waitForElementVisible('@loginErrorMessage', 10000)
            .assert.containsText('@loginErrorMessage', "Your email address or password was incorrect.")
    })

})