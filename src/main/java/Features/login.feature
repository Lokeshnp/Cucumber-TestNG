Feature: Free CRM Login Feature

  Scenario Outline: Free CRM Login Test Scenario

Given user is already is on Login Page
When title of Login Page is FreeCRM
Then user clicks on login button first time
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then Close the browser

Examples:
| username              | password |
| Lokeshnp77@gmail.com  | F!rew0rk |