var BasePageCommands = {

    maximizeWindow: function(){
        this
          .waitForElementVisible('@body', 5000)

        return this.api
            .windowMaximize()
    },

    navigateToServicesPage: function() {
        return this
            .waitForElementVisible('@servicesPageLink', 1000)
            .click('@servicesPageLink')
    },

    navigateToLoginPage: function() {
        return this
            .waitForElementVisible('@loginPageLink', 1000)
            .click('@loginPageLink')
    },

}

module.exports = {
    url: 'http://expert360.com/',
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
