$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of Login Page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button first time",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "Lokeshnp77@gmail.com",
        "F!rew0rk"
      ],
      "line": 15,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of Login Page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button first time",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters \"Lokeshnp77@gmail.com\" and \"F!rew0rk\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 24440301001,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 34295500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_login_button_first_time()"
});
formatter.result({
  "duration": 29442439500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lokeshnp77@gmail.com",
      "offset": 13
    },
    {
      "val": "F!rew0rk",
      "offset": 40
    }
  ],
  "location": "LoginStepDefinitions.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 3356567001,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 45703501,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_home_page()"
});
formatter.result({
  "duration": 7161787101,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 2249228301,
  "status": "passed"
});
});