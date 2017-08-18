nightwatch_config = {
  src_folders : [ "tests/suite" ],
  page_objects_path: "page_objects",

  selenium : {
    "start_process" : false,
    "host" : "hub-cloud.browserstack.com",
    "port" : 80
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        'build': 'nightwatch-browserstack',
        //Please provide brwoser stack credentials(username & key) for below configuration parameters
        'browserstack.user': process.env.BROWSERSTACK_USERNAME || '<browsertack_user>',
        'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || '<browsertack_key>',
        'browserstack.debug': true,
        'browser': 'chrome'
      }
    }
  },

  "test_workers": {
    "enabled": true,
    "workers": 10
  }   
};

// Code to copy seleniumhost/port into test settings
for(var i in nightwatch_config.test_settings){
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
}

module.exports = nightwatch_config;
