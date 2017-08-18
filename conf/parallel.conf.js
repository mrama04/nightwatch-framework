nightwatch_config = {
  src_folders : [ "tests/single" ],
  page_objects_path: "page_objects",

  selenium : {
    "start_process" : false,
    "host" : "hub-cloud.browserstack.com",
    "port" : 80
  },

  common_capabilities: {
    'build': 'nightwatch-browserstack',
    //Please provide brwoser stack credentials(username & key) for below configuration parameters
    'browserstack.user': process.env.BROWSERSTACK_USERNAME || '<browsertack_user>',
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || '<browsertack_key>',
    'browserstack.debug': true
  },

  test_settings: {
    default: {},
    chrome: {
      desiredCapabilities: {
        browser: "chrome"
      }
    },
    firefox: {
      desiredCapabilities: {
        browser: "firefox"
      }
    },
    safari: {
      desiredCapabilities: {
        browser: "safari"
      }
    },
    ie: {
      desiredCapabilities: {
        browser: "internet explorer"
      }
    }
  }
};

// Code to support common capabilites
for(var i in nightwatch_config.test_settings){
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
  config['desiredCapabilities'] = config['desiredCapabilities'] || {};
  for(var j in nightwatch_config.common_capabilities){
    config['desiredCapabilities'][j] = config['desiredCapabilities'][j] || nightwatch_config.common_capabilities[j];
  }
}

module.exports = nightwatch_config;
