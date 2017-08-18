var BasePageCommands = {

    maximizeWindow: function(){
        this
            .waitForElementVisible('@body', 5000)
        this.api
            .windowMaximize()
        return this
    },

    navigateToLoginPage: function(browser) {
        this
            .waitForElementVisible('@loginPageLink', 2000)
            .click('@loginPageLink')

        return browser.page.LoginPage()
    },

    navigateToServicesPage: function(browser) {
        this
            .waitForElementVisible('@servicesPageLink',2000)
            .click('@servicesPageLink')
        return this
    }

}

module.exports = {
    url: 'https://expert360.com/',
    elements: {
        body: 'body',
        title: 'title',
        servicesPageLink: 'a[href$=services]',
        howWeWorkPageLink: 'a[href$=how-it-works]',
        caseStudiesPageLink: 'a[text()=Case studies]',
        forExpertsPageLink: 'a[href=For Experts]',
        blogPageLink: 'a[href=Blog]',
        postAProjectPageLink: 'a[href=Services]',
        loginPageLink: 'a[href$=login]',
        signUpPageLink: 'a[href$=onboarding]'
    },
    commands: [BasePageCommands]
}