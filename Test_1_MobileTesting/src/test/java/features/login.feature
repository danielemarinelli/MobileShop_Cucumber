@MobileTesting
Feature: PocketShop Mobile App - LogIn

  Scenario Outline: Log into PocketShop Mobile App
    Given User opens pocketshop app
    When  User inserts <username> and <password>
    And   User clicks on login button
    And   User agree to term conditions
    Then  User navigate to own account
    And   User clicks on cart button
    And   User selects a product
    Then  The product selected is in the cart
    And   User closes the app

      Examples:
      |username|password|
      |chris@aphixsoftware.com|test|
      |dan@aphixsoftware.com|testexample|
