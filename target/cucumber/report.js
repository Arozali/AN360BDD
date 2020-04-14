$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/arozali/Desktop/AN360BDD/src/main/java/features/covid19.feature");
formatter.feature({
  "line": 1,
  "name": "covid19",
  "description": "",
  "id": "covid19",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "as a user i should be able to click covid19 information on AN360 website",
  "description": "",
  "id": "covid19;as-a-user-i-should-be-able-to-click-covid19-information-on-an360-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on AN360 website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on covid19 link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see popup \"SCHEDULED MAINTENANCE\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I close the display message",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "covid19;as-a-user-i-should-be-able-to-click-covid19-information-on-an360-website;",
  "rows": [
    {
      "cells": [
        "count"
      ],
      "line": 9,
      "id": "covid19;as-a-user-i-should-be-able-to-click-covid19-information-on-an360-website;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 10,
      "id": "covid19;as-a-user-i-should-be-able-to-click-covid19-information-on-an360-website;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 11,
      "id": "covid19;as-a-user-i-should-be-able-to-click-covid19-information-on-an360-website;;3"
    },
    {
      "cells": [
        "3"
      ],
      "line": 12,
      "id": "covid19;as-a-user-i-should-be-able-to-click-covid19-information-on-an360-website;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "as a user i should be able to click covid19 information on AN360 website",
  "description": "",
  "id": "covid19;as-a-user-i-should-be-able-to-click-covid19-information-on-an360-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on AN360 website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on covid19 link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see popup \"SCHEDULED MAINTENANCE\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I close the display message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "360",
      "offset": 10
    }
  ],
  "location": "Covid19StepDefinition.i_am_on_AN_website(int)"
});
formatter.result({
  "duration": 6887258673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19",
      "offset": 16
    }
  ],
  "location": "Covid19StepDefinition.i_click_on_covid_link(int)"
});
formatter.result({
  "duration": 1071651597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SCHEDULED MAINTENANCE",
      "offset": 20
    }
  ],
  "location": "Covid19StepDefinition.i_should_see_popup(String)"
});
formatter.result({
  "duration": 3147131073,
  "status": "passed"
});
formatter.match({
  "location": "Covid19StepDefinition.i_close_the_display_message()"
});
formatter.result({
  "duration": 269314677,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "as a user i should be able to click covid19 information on AN360 website",
  "description": "",
  "id": "covid19;as-a-user-i-should-be-able-to-click-covid19-information-on-an360-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on AN360 website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on covid19 link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see popup \"SCHEDULED MAINTENANCE\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I close the display message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "360",
      "offset": 10
    }
  ],
  "location": "Covid19StepDefinition.i_am_on_AN_website(int)"
});
formatter.result({
  "duration": 8588186077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19",
      "offset": 16
    }
  ],
  "location": "Covid19StepDefinition.i_click_on_covid_link(int)"
});
formatter.result({
  "duration": 3167476809,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Aroz-MacBook-Air.local\u0027, ip: \u00272604:2000:dd45:6400:0:0:0:4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/pw/wwz_f0892ng...}, goog:chromeOptions: {debuggerAddress: localhost:49422}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 40f4458092dc7454343fe533df40ab64\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat stepDefinitions.Covid19StepDefinition.i_click_on_covid_link(Covid19StepDefinition.java:33)\n\tat ✽.When I click on covid19 link(/Users/arozali/Desktop/AN360BDD/src/main/java/features/covid19.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "SCHEDULED MAINTENANCE",
      "offset": 20
    }
  ],
  "location": "Covid19StepDefinition.i_should_see_popup(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Covid19StepDefinition.i_close_the_display_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "as a user i should be able to click covid19 information on AN360 website",
  "description": "",
  "id": "covid19;as-a-user-i-should-be-able-to-click-covid19-information-on-an360-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on AN360 website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on covid19 link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see popup \"SCHEDULED MAINTENANCE\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I close the display message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "360",
      "offset": 10
    }
  ],
  "location": "Covid19StepDefinition.i_am_on_AN_website(int)"
});
formatter.result({
  "duration": 11796253295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19",
      "offset": 16
    }
  ],
  "location": "Covid19StepDefinition.i_click_on_covid_link(int)"
});
formatter.result({
  "duration": 276039538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SCHEDULED MAINTENANCE",
      "offset": 20
    }
  ],
  "location": "Covid19StepDefinition.i_should_see_popup(String)"
});
formatter.result({
  "duration": 3179412125,
  "status": "passed"
});
formatter.match({
  "location": "Covid19StepDefinition.i_close_the_display_message()"
});
formatter.result({
  "duration": 375077050,
  "status": "passed"
});
});