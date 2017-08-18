// const seleniumServer = require('selenium-server')
const phantomjs = require('phantomjs-prebuilt')

require('nightwatch-cucumber')({
    cucumberArgs: ['--require', 'timeout.js', '--require', 'features/step_definitions', '--format', 'pretty', '--format', 'json:reports/cucumber.json', 'features']
})

module.exports = {
    src_folders: ["tests"],
    custom_assertions_path: '',
    page_objects_path: ["PageObjects"],
    live_output: false,
    disable_colors: false,
    selenium: {
        start_process: true,
        server_path: "./lib/selenium-server-standalone-3.5.0.jar",
        log_path: '',
        host: '127.0.0.1',
        port: 4444,
        cli_args:{
            'webdriver.chrome.driver': "./bin/chromedriver.exe",
            "webdriver.gecko.driver" : "./bin/geckodriver.exe"
        }
    },
    test_settings: {
        default: {
            launch_url: 'http://localhost:8087',
            selenium_port: 4444,
            selenium_host: '127.0.0.1',
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                "marionette": true,
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        }
    }
}