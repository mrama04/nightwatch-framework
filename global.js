var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
    openBrowser: false,
    reportsDirectory:'./reports',
    themeName: "compact"
});

module.exports = {
    reporter: reporter.fn
};