$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/login.feature");
formatter.feature({
  "name": "PocketShop Mobile App - LogIn",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@MobileTesting"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Log into PocketShop Mobile App",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User opens pocketshop app",
  "keyword": "Given "
});
formatter.step({
  "name": "User inserts \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User navigate to own account",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "chris@aphixsoftware.com",
        "test"
      ]
    },
    {
      "cells": [
        "dan@aphixsoftware.com",
        "testexample"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Log into PocketShop Mobile App",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@MobileTesting"
    }
  ]
});
formatter.step({
  "name": "User opens pocketshop app",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LogInSteps.user_opens_pocketshop_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inserts chris@aphixsoftware.com and test",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LogInSteps.user_inserts_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate to own account",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LogInSteps.user_navigate_to_own_account()"
});
