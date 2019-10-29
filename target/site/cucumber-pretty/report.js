$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DarkSky.feature");
formatter.feature({
  "line": 2,
  "name": "DarkSky home",
  "description": "",
  "id": "darksky-home",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 4377675498,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 23,
  "name": "Verify invalid sign up error message",
  "description": "",
  "id": "darksky-home;verify-invalid-sign-up-error-message",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@signup-3"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I am on the Darksky register page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I verify error message \"Please fill out this field.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkSkySignUpSD.iAmOnTheDarkskyRegisterPage()"
});
formatter.result({
  "duration": 714359755,
  "error_message": "org.openqa.selenium.InvalidArgumentException: invalid argument\n  (Session info: chrome\u003d77.0.3865.120)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027MacBook-Pro-5.local\u0027, ip: \u0027192.168.1.248\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_222\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.120, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: /var/folders/k_/4tcykv3d6ss...}, goog:chromeOptions: {debuggerAddress: localhost:49973}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6cdb16a218fd5452b9a81e9224a5a7ab\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\n\tat framework.webPages.DarkskyRegisterPage.navigateToSignUpPage(DarkskyRegisterPage.java:19)\n\tat stepdefinition.DarkSkySignUpSD.iAmOnTheDarkskyRegisterPage(DarkSkySignUpSD.java:15)\n\tat ✽.Given I am on the Darksky register page(DarkSky.feature:24)\n",
  "status": "failed"
});
formatter.match({
  "location": "DarkSkySignUpSD.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Please fill out this field.",
      "offset": 24
    }
  ],
  "location": "DarkSkySignUpSD.iVerifyErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 680949300,
  "status": "passed"
});
});