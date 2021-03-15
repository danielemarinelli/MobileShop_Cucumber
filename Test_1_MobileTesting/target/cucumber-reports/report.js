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
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "User agree to term conditions",
  "keyword": "And "
});
formatter.step({
  "name": "User navigate to own account",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on cart button",
  "keyword": "And "
});
formatter.step({
  "name": "User selects a product",
  "keyword": "And "
});
formatter.step({
  "name": "The product selected is in the cart",
  "keyword": "Then "
});
formatter.step({
  "name": "User closes the app",
  "keyword": "And "
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
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BTJT2H8\u0027, ip: \u0027192.168.1.250\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {databaseEnabled: false, desired: {platformName: android}, deviceApiLevel: 26, deviceManufacturer: Google, deviceModel: Android SDK built for x86, deviceName: emulator-5556, deviceScreenDensity: 440, deviceScreenSize: 1080x2220, deviceUDID: emulator-5556, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.75, platform: LINUX, platformName: Android, platformVersion: 8.0.0, statBarHeight: 66, takesScreenshot: true, viewportRect: {height: 2022, left: 0, top: 66, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: b1eeb58e-5124-4832-911a-598030c387fb\n*** Element info: {Using\u003dxpath, value\u003d/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View[3]/android.view.View/android.widget.EditText}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:247)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\r\n\tat pages.HomePage.verifyLogIn(HomePage.java:46)\r\n\tat steps.LogInSteps.user_inserts_username_and_password(LogInSteps.java:20)\r\n\tat ✽.User inserts chris@aphixsoftware.com and test(file:///C:/Users/marin/AutomationProjects/Automation/CucumberFramework/Test_1_MobileTesting/src/test/java/features/login.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LogInSteps.userClicksOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User agree to term conditions",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LogInSteps.userAgreeToTermConditions()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User navigate to own account",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LogInSteps.user_navigate_to_own_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on cart button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LogInSteps.userClicksOnCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects a product",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LogInSteps.userSelectsAProduct()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The product selected is in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LogInSteps.theProductSelectedIsInTheCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User closes the app",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LogInSteps.userClosesTheApp()"
});
formatter.result({
  "status": "skipped"
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
  "name": "User inserts dan@aphixsoftware.com and testexample",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LogInSteps.user_inserts_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BTJT2H8\u0027, ip: \u0027192.168.1.250\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {databaseEnabled: false, desired: {platformName: android}, deviceApiLevel: 26, deviceManufacturer: Google, deviceModel: Android SDK built for x86, deviceName: emulator-5556, deviceScreenDensity: 440, deviceScreenSize: 1080x2220, deviceUDID: emulator-5556, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.75, platform: LINUX, platformName: Android, platformVersion: 8.0.0, statBarHeight: 66, takesScreenshot: true, viewportRect: {height: 2022, left: 0, top: 66, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: bd1a946d-5e41-4165-af33-c097d515b829\n*** Element info: {Using\u003dxpath, value\u003d/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View[3]/android.view.View/android.widget.EditText}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:247)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\r\n\tat pages.HomePage.verifyLogIn(HomePage.java:46)\r\n\tat steps.LogInSteps.user_inserts_username_and_password(LogInSteps.java:20)\r\n\tat ✽.User inserts dan@aphixsoftware.com and testexample(file:///C:/Users/marin/AutomationProjects/Automation/CucumberFramework/Test_1_MobileTesting/src/test/java/features/login.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LogInSteps.userClicksOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User agree to term conditions",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LogInSteps.userAgreeToTermConditions()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User navigate to own account",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LogInSteps.user_navigate_to_own_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on cart button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LogInSteps.userClicksOnCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects a product",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LogInSteps.userSelectsAProduct()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The product selected is in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LogInSteps.theProductSelectedIsInTheCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User closes the app",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LogInSteps.userClosesTheApp()"
});
formatter.result({
  "status": "skipped"
});
});